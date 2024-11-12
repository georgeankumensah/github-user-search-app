import SearchBar from "../SearchBar";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <div className="pt-[31px] md:pt-[140px] flex flex-col gap-y-[36px] md:max-w-[573px] lg:max-w-[730px] mx-auto">
      <div className="flex items-center justify-between h-[38px]">
        <h1 className="text-header1 text-[#222731] font-[700] ">devfinder</h1>
        <ThemeToggle />
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
