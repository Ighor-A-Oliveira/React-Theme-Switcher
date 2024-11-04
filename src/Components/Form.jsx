import { useTheme } from '../Contexts/ThemeContext';

function Form() {

  const { theme } = useTheme();

  //const lightThemeClasses = "bg-white text-black";
  //const darkThemeClasses = "bg-gray-800 text-white";

   const divThemeLight = 'bg-purple-50';
   const divThemeDark = 'bg-purple-900';
   // Use a ternary operator to apply the correct theme classes
  const divTheme = theme === "light" ? divThemeLight : divThemeDark;

   const formThemeLight = 'bg-purple-50';
   const formThemeDarek = 'bg-purple-900';
   const formTheme = theme === "light" ? formThemeLight : formThemeDarek;

   const buttonThemeLight = 'bg-purple-500';
   const buttonThemeDarek = 'bg-purple-800';
   const buttonTheme = theme === "light" ? buttonThemeLight : buttonThemeDarek;

  

  

  return (
    <div className={`${divTheme} flex flex-col items-center justify-center w-[400px] shadow-2xl rounded-3xl`}>
      <p className="text-2xl font-bold mb-[80px] mt-[50px]">
        Sign in
      </p>
      <form className={`${formTheme} flex flex-col mb-[50px]`}>
        <input className="w-[300px] rounded-3xl px-3 mb-[25px] py-[5px] text-center" type="text" placeholder="Username" />
        <input className="w-[300px] rounded-3xl px-3 mb-[15px] py-[5px] text-center" type="password" placeholder="Password" />
        <a className={`${buttonTheme} w-[100px] mx-auto text-center rounded-3xl text-white py-[5px] mb-[15px]`}>
          Sign in
        </a>
        <p className="text-purple-400 mx-auto">
          <a href="#">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;