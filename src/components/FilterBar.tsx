import { useState } from 'react'

interface PropType {
    setFilter: (filter: string) => void
}
const FilterBar = (props: PropType) => {
    const { setFilter } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    const [focus, setFocus] = useState<boolean>(false)
    return (
        <div
            className={`${focus ? 'bg-slate-700' : 'bg-slate-200'} transition-all duration-300 flex flex-row w-[90%] align-center justify-center items-center h-9 rounded`}
        >
            <input type="text" placeholder="Filter repositories"
                className="w-[98%] h-6 p-1 rounded border-none text-black"
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
                onChange={handleChange}
            />
        </div>
    )
}

export default FilterBar
