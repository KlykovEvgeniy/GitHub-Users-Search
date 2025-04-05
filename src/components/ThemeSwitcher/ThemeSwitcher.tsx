import { ReactComponent as MoonIcon } from "assets/icon-moon.svg";
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from "react";
import './ThemeSwitcher.styled.scss'

export const ThemeSwitcher = function () {
    const [isDark, setDark] = useState(true);
    const text = isDark ? 'Dark' : 'Light';
    const Icon = isDark ? MoonIcon : SunIcon;

    
    
    useEffect(() => {
        if (!isDark) {
            document.body.setAttribute('theme', 'dark')
        } else {
            document.body.setAttribute('theme', 'light')
        }
    }, [isDark])

    const handleSwitcherClick = () => {
        setDark(prev => !prev)
    }

    return (
        <button onClick={handleSwitcherClick} type="button" className="switcher">
            <span>{text}</span>
            <Icon className="img"/>
        </button>
    )
}