import { IContainer } from "../../../interface/IContainer.interface"

export const NavBar: React.FC<IContainer> = ({className, children }: IContainer) => {
    return <nav className={`w-full h-full pt-20 flex justify-start items-center ${className}`}>
        {children}
    </nav>
}
