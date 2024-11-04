import Form from "./Components/Form";
import { useTheme } from './Contexts/ThemeContext';
import ReactSwitch from "react-switch";

function App() {

  const { theme, toggleTheme } = useTheme();

  //here we create two variables with the tailwind the classes for each theme
  //Since there should be a lot of classes we should only touch the color classes
  const bgThemeLight = "bg-purple-50";
  const bgThemeDark = "bg-purple-900";

  // Use a ternary operator to apply the correct theme classes
  const themeClasses = theme === "light" ? bgThemeLight : bgThemeDark;

  return (
    <div className={`${themeClasses} flex flex-col items-center justify-center h-screen id="light`}>
      <Form />
      {/* <button className="mt-[15px] bg-black text-white rounded-3xl px-3" onClick={toggleTheme}>Toggle Theme</button> */}
      <div className="mt-[15px]">
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
    </div>
  );
}

export default App;
