import { IContainer } from "../../../interface/IContainer.interface"

export const Box: React.FC<IContainer> = ({className, children }: IContainer) => {
    return <div className={`w-full h-full pt-20 flex justify-start items-center ${className}`}>
        {children}
    </div>
}
