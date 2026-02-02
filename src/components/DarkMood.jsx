import { useState } from 'react'
import { IoMdMoon } from 'react-icons/io';
import { LuSun } from 'react-icons/lu';

const DarkMood = () => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark');
    };
    return (
        <div>
            <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded text-2xl border border-gray-400 dark:border-[#3F3F46]
                ${theme === 'dark' ? 'dark:bg-[#262626] dark:text-[#FCD34D]' : 'bg-transparent'}`}
            >
                {theme === 'dark' ? <IoMdMoon /> : <LuSun />}
            </button>
        </div >
    )
}

export default DarkMood