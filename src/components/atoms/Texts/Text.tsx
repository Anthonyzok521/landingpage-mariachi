import { ITitle } from "../../../interface/ITitle.interface";

const style = `font-body`;

export const Text: React.FC<ITitle> = ({className, text}:ITitle) => {
    return <p className={`
        ${className}
        ${style}
        `}>
            {text}
        </p>

}
