import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import useThemeStore from "./store/useThemeStore";

function App() {
  const { loadTheme } = useThemeStore();

  useEffect(() => loadTheme(), [loadTheme]);

  return (
    <div
      className={`container bg-[#F6F8FF] dark:bg-[#141D2F] w-full h-screen `}
    >
      <Header />
      <UserCard />
    </div>
  );
}

export default App;
