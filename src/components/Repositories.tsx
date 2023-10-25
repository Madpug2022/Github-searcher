import RepositoryCard from "./RepositoryCard";
import { useEffect, useState } from 'react'

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

    useEffect(() => {
        const filteredItems = repositories?.filter(item => item.name.includes(filter));
        if (filteredItems) {
            setFiltered(filteredItems)
        }

    }, [filter])
    return (<>
        {filteredRepositories.length === 0 ? <section
            className="p-3 w-[90%] mt-3 mb-3 h-[75vh] flex flex-col gap-2 overflow-auto">
            {repositories?.map((repository) => (
                <RepositoryCard key={repository.id} name={repository.name} description={repository.description} url={repository.url} />
            ))}
        </section>
            :
            <section
                className="p-3 w-[90%] mt-3 mb-3 h-[75vh] flex flex-col gap-2 overflow-auto">
                {filteredRepositories?.map((repository) => (
                    <RepositoryCard key={repository.id} name={repository.name} description={repository.description} url={repository.url} />
                ))}
            </section>}
    </>
    )
}

export default Repositories
