interface PropType {
    filter: string;
    repositories: Repository[] | undefined;
}
interface Repository {
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
            Repositories
        </section>
    )
}

export default Repositories
