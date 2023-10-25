import RepositoryCard from "./RepositoryCard";
import { useEffect, useState, useCallback } from 'react'
//Display for repositories in the result page
interface PropType {
    filter: string;
    repositories: Repository[] | undefined;
}
interface Repository {
    id: string
    name: string;
    description: string | null;
    url: string;
}

const Repositories = (props: PropType) => {
    const { filter, repositories } = props;
    const [filteredRepositories, setFiltered] = useState<Repository[]>([])
    const [sectionHeight, setSectionHeight] = useState<string>('75vh');
    //Resize function for responsivee devices, talwindcss was not working properly
    const handleResize = useCallback(() => {
        if (window.innerWidth <= 768) {
            setSectionHeight('30vh');
        } else {
            setSectionHeight('75vh');
        }
    }, []);
    //Filter updates every change filter changes
    useEffect(() => {
        const filteredItems = repositories?.filter(item => item.name.includes(filter));
        if (filteredItems) {
            setFiltered(filteredItems)
        }
    }, [filter])

    //Changes resize variable when the witdh of the display changes
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);
    return (<>
        {filteredRepositories.length === 0 ? <section
            className={`p-3 w-[90%]  h-[${sectionHeight}]  flex flex-col gap-2 overflow-auto`}>
            {repositories?.map((repository) => (
                <RepositoryCard key={repository.id} name={repository.name} description={repository.description} url={repository.url} />
            ))}
        </section>
            :
            <section
                className={`p-3 w-[90%]  h-[${sectionHeight}]  flex flex-col gap-2 overflow-auto`}>
                {filteredRepositories?.map((repository) => (
                    <RepositoryCard key={repository.id} name={repository.name} description={repository.description} url={repository.url} />
                ))}
            </section>}
    </>
    )
}

export default Repositories
