import { ITitle } from "../../../interface/ITitle.interface";

const style = `font-heading text-[6rem] font-bold`;

export const Title: React.FC<ITitle> = ({className, text}:ITitle) => {
    return <h1 className={`
        ${className}
        ${style}
        `}>
            {text}
        </h1>

}
