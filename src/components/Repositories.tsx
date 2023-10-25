import RepositoryCard from "./RepositoryCard";
import { useEffect, useState, useCallback } from 'react'

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
    const handleResize = useCallback(() => {
        if (window.innerWidth <= 768) {
            setSectionHeight('30vh');
        } else {
            setSectionHeight('75vh');
        }
    }, []);
    useEffect(() => {
        const filteredItems = repositories?.filter(item => item.name.includes(filter));
        if (filteredItems) {
            setFiltered(filteredItems)
        }

    }, [filter])
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);
    return (<>
        {filteredRepositories.length === 0 ? <section
            className="p-3 w-[90%] mt-3 mb-3 xl:h-[75vh] xs:h-1 flex flex-col gap-2 overflow-auto">
            {repositories?.map((repository) => (
                <RepositoryCard key={repository.id} name={repository.name} description={repository.description} url={repository.url} />
            ))}
        </section>
            :
            <section
                className={`p-3 w-[90%] mt-3 mb-3 h-[${sectionHeight}]  flex flex-col gap-2 overflow-auto`}>
                {filteredRepositories?.map((repository) => (
                    <RepositoryCard key={repository.id} name={repository.name} description={repository.description} url={repository.url} />
                ))}
            </section>}
    </>
    )
}

export default Repositories
