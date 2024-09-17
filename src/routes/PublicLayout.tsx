import { Outlet } from "react-router-dom";
//Components
import { Main } from "../ui/Main/Main";
import { Header } from "../ui/Header/Header";
import { Footer } from "../ui/Footer/Footer";

//Layout for Public View
const PublicLayout = () => {
    return <>
        <Header />
        <Main children={<Outlet />} />
        <Footer />
    </>;
};

export default PublicLayout;
