import Icons from "../../assets";
import useThemeStore from "../../store/useThemeStore";

const ThemeToggle = () => {
  const {toggleTheme,darkMode} = useThemeStore()
  return (
    <button onClick={toggleTheme} className="flex items-center gap-x-[16px] ">
      <span className="text-[#4B6A9B] text-header4 font-[700] dark:text-white">{darkMode ? "Light" : "Dark"}</span>

      <img
        src={darkMode ? Icons.sun : Icons.moon}
        alt="color scheme icon"
        className="h-[20px] aspect-square"
      />
    </button>
  );
};

export default ThemeToggle;
