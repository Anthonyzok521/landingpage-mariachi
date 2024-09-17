import { IImage } from "../../../interface/IImage.interface";

const style = `
    size-10
`;

export const Img: React.FC<IImage> = ({ url, alt }: IImage) => {

    return <img className={style}
        src={url}
        alt={alt}
    />
}
