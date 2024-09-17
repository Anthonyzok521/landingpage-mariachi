import { Logo } from "../../components/molecules/Logo/Logo"

export const Header: React.FC = () => {
    return <header className="w-full h-24 fixed bg-transparent flex justify-between items-center p-10">

        <Logo/>

        <nav className="w-80">
            <ul className="w-full flex gap-10 flex-row-reverse">
                <li>
                    <a href="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="">
                        Home
                    </a>
                </li>
            </ul>
        </nav>
    </header>
}
