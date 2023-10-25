import RepositoryCard from "./RepositoryCard";

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
    console.log(filter, repositories);
    return (
        <section
            className="p-3 w-[90%] mt-3 mb-3 h-[75vh] flex flex-col gap-2 overflow-auto">
            {repositories?.map((repository) => (
                <RepositoryCard key={repository.id} name={repository.name} description={repository.description} url={repository.url} />
            ))}
        </section>
    )
}

export default Repositories
