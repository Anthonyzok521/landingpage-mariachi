import { Link } from "react-router-dom";
import { ILinks } from "../../../interface/ILinks.interface";

export const LinkButton: React.FC<ILinks> = ({ className, children, href }: ILinks) => {
    return <Link className={`${className} list-none p-5 hover:bg-orange-400`} to={href} >
            {children}
        </Link >
}
