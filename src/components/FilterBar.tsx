import { useState } from 'react'
//Filter input for the repository section.
interface PropType {
    setFilter?: (filter: string) => void
    variant?: 'black' | 'white'
}
const FilterBar = (props: PropType) => {
    const { setFilter, variant } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter!(e.target.value)
    }

    const [focus, setFocus] = useState<boolean>(false)
    return (
        <div
            className={`${focus ? 'bg-slate-700' : 'bg-slate-200'} transition-all duration-300 flex flex-row w-[90%] align-center justify-center items-center h-9 rounded`}

        >
            <input type="text" placeholder="Filter repositories"
                style={
                    { backgroundColor: variant || 'white' }
                }
                className="w-[98%] h-6 p-1 rounded border-none text-black"
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
                onChange={handleChange}
            />
        </div>
    )
}

export default FilterBar
