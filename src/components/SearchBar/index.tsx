import Icons from "../../assets";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full rounded-[15px] bg-white h-[60px] p-[7px] md:p-[10px] gap-x-[7px] md:gap-x-[23px]  ">
      <img
        src={Icons.search}
        alt="search icon"
        className="aspect-square w-[20px] md:w-[24px] md:ml-[25px]"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search GitHub username…"
        className="placeholder:text-header4 md:placeholder:text-[18px]  w-full placeholder:text-[#4B6A9B] outline-none placeholder:line-clamp-1  "
      />
      <button className="w-[84px] h-[46px] aspect-auto text-header4 md:text-header3  rounded-[10px] text-white bg-[#0079FF] md:w-[106px] md:h-[50px]">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
