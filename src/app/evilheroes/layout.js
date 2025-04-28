import Navigation from "@/components/Navigation";
import { allianceRoutes } from "@/data/routes";

const Layout = ({children}) => {
    return (
        <>
        <div>
            Subtitle for Evil Heroes
            <Navigation links={allianceRoutes}/>
            {children}
        </div>
        </>
    )
}

export default Layout;