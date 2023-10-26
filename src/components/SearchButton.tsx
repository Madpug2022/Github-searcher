interface PropType {
    variant?: 'default' | 'black' | 'white'
}
const SearchButton = (props: PropType) => {
    const { variant } = props;
    let color
    switch (variant) {
        case 'default':
            color = 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white'
            break;
        case 'black':
            color = 'bg-slate-700 text-white'
            break;
        case 'white':
            color = 'bg-slate-200 text-black'
            break;
        default:
            color = 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white'
            break;
    }

    return (
        <button
            type='submit'
            className={`m-auto mt-3 text-white ${color} py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary`}
        >Search</button>
    )
}

export default SearchButton
