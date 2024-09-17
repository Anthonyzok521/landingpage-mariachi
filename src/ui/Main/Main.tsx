import { Container } from "../../components/atoms/Containers/Container";
import { IMain } from "../../interface/Main.interface";

//Container main
export const Main: React.FC<IMain> = ({className, children}:IMain) => {
  return (
    <Container className={`${className}`}>
        {children}
    </Container>
);
};
