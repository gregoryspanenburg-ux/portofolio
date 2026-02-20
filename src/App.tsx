import {Background} from "./components/Background";
import {Navigation} from "@/components/nav/Navigation.tsx";
import {Route, Routes} from "react-router";
import {HomePage} from "@/pages/HomePage.tsx";
import {NavElement} from "@/components/nav/NavElement.tsx";
import {useState} from "react";
import {ProjectsPage} from "@/pages/ProjectsPage.tsx";
import {Footer} from "./components/footer/Footer";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AboutMePage} from "@/pages/AboutMePage.tsx";


const queryClient = new QueryClient();

declare global {
    interface Window {
        __TANSTACK_QUERY_CLIENT__:
            import("@tanstack/query-core").QueryClient;
    }
}

export function App() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <QueryClientProvider client={queryClient}>
            <Navigation
                isCollapsed={isCollapsed}
                setIsCollapssed={setIsCollapsed}
            >
                <NavElement title="Home" isCollapsed={isCollapsed} setIsCollapsedFalse={() => setIsCollapsed(false)}
                            navigateTo={"/"}/>
                <NavElement title="About me" isCollapsed={isCollapsed} setIsCollapsedFalse={() => setIsCollapsed(false)}
                            navigateTo={"/about"}/>
                <NavElement title="Projects" isCollapsed={isCollapsed} setIsCollapsedFalse={() => setIsCollapsed(false)}
                            navigateTo={"/projects"}/>
            </Navigation>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutMePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
            </Routes>
            <Footer/>
            <Background/>
        </QueryClientProvider>
    )
}
