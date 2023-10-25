import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchData from '../api/fetchData';
import { FiGithub } from "react-icons/fi";
import FilterBar from '../components/FilterBar';
import Repositories from '../components/Repositories';

interface User {
    login: string;
    name: string;
    avatarUrl: string;
    url: string;
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
    repositories: {
        nodes: Repository[];
    };
}

interface Repository {
    id: string;
    name: string;
    description: string | null;
    url: string;
}


const ResultPage = () => {
    const [searchResults, setSearchResults] = useState<User | null>(null);
    const [filter, setFilter] = useState<string>('');
    const location = useLocation();
    const searchQuery: string = location.state.name;

    const query = `query {
        user(login: "${searchQuery}") {
          login
          name
          avatarUrl
          url
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories(first: 20) {
            nodes {
                id
              name
              description
              url
            }
          }
        }
      }`

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await fetchData(query)
            setSearchResults(data.data.user)
        }
        fetchUserData();
    }, [])

    return (
        <section className='grid grid-cols-4 p-4 gap-4 h-[100%] w-[100%] bg-gray-800 back"' style={{ backgroundImage: 'url(../../src/assets/background2.jpg)' }}>
            <div
                className='col-span-1 flex flex-col items-center mt-5'>
                <img src={searchResults?.avatarUrl} alt='User Logo'
                    className='xl:w-[250px] md:w-1/2 w-1/2 rounded-full m-1 border-4 border-slate-900' />
                <p
                    className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] '
                >{searchResults?.login}</p>
                <p
                    className='text-[#f1f1f1] font-medium lg:text-[18px] sm:text-[14px] xs:text-[10px] text-[12px] lg:leading-[30px]'
                >{searchResults?.name}</p>

                <div
                    className='flex flex-row gap-2 mt-4'>
                    <p
                        className='text-[#dfd9ff] text-[16px] font-bold'
                    >{searchResults?.followers.totalCount}<span className='text-[#ffff] text-[14px] font-medium'> Followers</span>
                    </p>
                    <p
                        className='text-[#dfd9ff] text-[16px] font-bold'
                    >{searchResults?.following.totalCount}<span className='text-[#ffff] text-[14px] font-medium'> Following</span>
                    </p>
                </div>
                <a
                    href={searchResults?.url}
                    target='_blank'
                    className='flex flex-row gap-2 mt-10 align-center justify-center items-center text-[#ffff] text-[16px] font-bold h-[34px] border-2 p-4 bg-black hover:bg-gray-700 transition-all duration-500 rounded-md'>
                    <span>Github Profile</span> <FiGithub />
                </a>


            </div>
            <div
                className='col-span-3 p-3 '>
                <FilterBar setFilter={setFilter} />
                <Repositories filter={filter} repositories={searchResults?.repositories.nodes} />
            </div>
        </section>
    )
}

export default ResultPage
