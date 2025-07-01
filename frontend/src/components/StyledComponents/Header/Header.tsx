import './Header.css';

export default function Header({title}: {title: string}) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}