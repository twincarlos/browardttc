import './Header.css';
import SettingsIcon from '../Icons/SettingsIcon';

export default function Header({title}: {title: string}) {
    return (
        <header className="ta-c">
            <h1>{title}</h1>
            <button className="header-button">
                <SettingsIcon />
            </button>
        </header>
    )
}