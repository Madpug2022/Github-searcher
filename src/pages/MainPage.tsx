import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import logo from '../assets/logo.svg'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [name, setName] = useState('')
    const formRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setName(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/${name}`, { state: { name } })

    }

    return (
        <section className='relative flex flex-col items-center justify-evenly h-[100%] w-[100%] bg-gray-800 back"'>
            <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] flex flex-row items-center text-center'>GitHub Explorer <FiGithub className='ml-3 ' /></h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}

                className='flex-[0.75] bg-black-100 p-8 rounded-2xl w-[65vw]'
            >
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col w-[100%]'>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>What Github user are you looking for?</span>
                        <input
                            type='text'
                            value={name}
                            onChange={handleChange}
                            placeholder="GitHub User Name"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <button
                        type='submit'
                        className='m-auto mt-3 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >Search</button>

                </form>
            </motion.div>
            <a className='m-0 p-0' href='https://github.com/Madpug2022' target='_blank'>
                <img src={logo} alt='logo'
                    className='h-[44px] absolute z-1 left-1 bottom-0 cursor-pointer' />
            </a>
        </section>
    )
}

export default MainPage
