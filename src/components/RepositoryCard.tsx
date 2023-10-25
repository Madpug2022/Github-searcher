import { FaSquareGithub } from "react-icons/fa6";

interface PropType {
    name: string;
    description: string | null;
    url: string;
}
const RepositoryCard = (props: PropType) => {

    const { name, description, url } = props;

    return (
        <div data-testid="repository-card"
            className="border-2 border-slate-100 text-black bg-[#f1f1f184] backdrop-opacity-10 backdrop-invert bg-white/30 rounded h-[100px] flex flex-row p-1">

            <div className="ml-5 ">
                <h2 data-testid={name}
                    className="text-[white] font-semibold drop-shadow-md font-medium lg:text-[25px] sm:text-[18px] xs:text-[14px] text-[16px] lg:leading-[35px]"
                >{name}</h2>
                {description ? <p data-testid="repository-description"
                    className="text-[#adadc9] drop-shadow-md font-medium lg:text-[16px] sm:text-[12px] xs:text-[10px] text-[14px] lg:leading-[20px] m-1"
                >{description.slice(0, 20)}</p>
                    :
                    <p data-testid="no-description"
                        className="text-[#adadc9] drop-shadow-sm font-medium lg:text-[16px] sm:text-[18px] xs:text-[14px] text-[16px] lg:leading-[20px]">No description was provided</p>}
            </div>
            <div className="ml-auto mt-auto mb-auto">
                <a href={url} target="_blank" title="Go to the repository" data-testid="repository-link"
                    className="lg:text-[40px] sm:text-[18px] xs:text-[14px] text-[16px] hover:text-[#fff] transition-all duration-300">
                    <FaSquareGithub />
                </a>
            </div>

        </div>
    )
}

export default RepositoryCard
