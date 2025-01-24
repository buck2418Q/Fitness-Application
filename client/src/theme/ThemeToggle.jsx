import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Icon } from "@iconify/react";


const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="flex items-center justify-center w-fit">
                <div
                    className={`relative w-[56px] h-7 pl-1 flex items-center rounded-full cursor-pointer transition-all duration-300 ${theme === "dark" ? "bg-gray-50" : "bg-gray-200"
                        }`}
                    onClick={toggleTheme}
                >
                    <div
                        className={`absolute bg-background text-light  p-[2px] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex justify-center items-center ${theme === "dark" ? "translate-x-6 " : "translate-x-0 "
                            }`}
                    >
                        {theme === 'dark' &&
                            < Icon
                                className="w-7 h-5"
                                icon="ph:moon"
                            />
                        }
                        {theme === 'light' &&
                            <Icon
                                className="w-7 h-5"
                                icon="ph:sun"
                            />}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ThemeToggle;
