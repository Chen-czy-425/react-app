import { useState } from "react";
const Search = (props) => {
    const [keyword, setKeyword] = useState('');
    const inputChange = (e) => {
        setKeyword(e.target.value);
        const keyword = e.target.value.trim();
        // console.log(keyword);
        props.onSearch(keyword);
    }


    return (
        <>
            <div className="flex items-center justify-center  py-[15px] fixed left-0 right-0 z-10 bg-[#fff]">
                <input 
                    type="text" 
                    onChange={inputChange}
                    placeholder="请输入关键字" 
                    className="text-[15px] w-[70%]  mr-[15px]" />
                {/* <button className="text-[15px] w-[15%]" onClick={clickSearch}>搜索</button> */}
            </div>
        </>
    )
}

export default Search;