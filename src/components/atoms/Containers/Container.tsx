import { IContainer } from "../../../interface/IContainer.interface"

export const Container: React.FC<IContainer> = ({ children }: IContainer) => {
    return <main className="grid min-h-dvh">
        {children}
    </main>
}
