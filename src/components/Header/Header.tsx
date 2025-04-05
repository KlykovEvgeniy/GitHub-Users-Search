import './Header.styled.scss';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

export const Header = function () {
    return (
        <header className="header">
            <h1 className='logo'>devfinder</h1>
            <ThemeSwitcher />
        </header>
    )
}