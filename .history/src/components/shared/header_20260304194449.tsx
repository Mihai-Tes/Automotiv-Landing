export default function Header() {
    return (
        <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-white border-b">
            <nav>
                <ul className="flex justify-between items-center">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}