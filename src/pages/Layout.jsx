import { Outlet } from "react-router-dom";
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout() {
    return (
        <>
            <div className="container-fluid px-md-5 px-lg-8 py-3 px-2">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>

        </>
    )
}