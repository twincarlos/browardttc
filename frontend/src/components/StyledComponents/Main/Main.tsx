import './Main.css';

export default function Main({children}: {children: React.ReactNode}) {
    return (
        <main className="p-3 bra m-3">
            {children}
        </main>
    )
}