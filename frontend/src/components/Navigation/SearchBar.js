
// { keyword, setKeyword }
const SearchBar = () => {
    return (
        <input
            id="search-bar"
            key="search-bar"
            value=''
            placeholder={"find the extreme"}
            // onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar