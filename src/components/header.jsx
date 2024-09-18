import { Link } from "react-router-dom"
import lightdark from "../assets/lightdark.png"

export default function Header() {
    function lightDarkFunc() {
        // Toggles between dark and lightmode using the bootstrap attribute 
        let htmlRoot = document.getElementById("htmlRoot");
        if (htmlRoot.getAttribute("data-bs-theme") === "dark") {
            htmlRoot.setAttribute("data-bs-theme", "light");
            console.log("Changed to light mode");
        }
        else {
            htmlRoot.setAttribute("data-bs-theme", "dark");
            console.log("Changed to dark mode");
        }
    }

    return (
        <header className="border-top border-bottom border-secondary py-2 my-3 container-xl">
            {/* <!-- Collapsable bootstrap navbar with dropdowns, see: https://getbootstrap.com/docs/5.3/components/navbar/--> */}
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand mr-sm-4 p-0">Joe Westwell</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="mx-lg-4 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-lg-4 m-1 "><Link className="nav-link active" to="/">Home</Link></li>
                            <li className="nav-item dropdown mx-lg-4 m-1"><a className="nav-link dropdown-toggle" role="button"
                                data-bs-toggle="dropdown" aria-label="Projects submenu" aria-expanded="false"
                                href="">Projects</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/cerom">Cerom CRM</Link></li>
                                    <li><Link className="dropdown-item" to="/devcomp">Developer Companion</Link></li>
                                    <li><Link className="dropdown-item" to="/flashcards" >Flashcards</Link></li>
                                    <li><Link className="dropdown-item" to="/tower">Tower Defence</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li><a className="dropdown-item" href="https://github.com/J-Wll">More on GitHub</a></li>
                                </ul>
                            </li>

                            <li className="nav-item mx-lg-4 m-1"><Link className="nav-link" to="/contact">CV & Contact</Link></li>
                            <li className="nav-item mx-lg-4 m-1 "><button id="dark-mode-toggle"
                                className="align-middle border border-white rounded-circle border-2 mx-2"
                                title="Dark mode toggle button" onClick={lightDarkFunc} style={{ backgroundImage: `url(${lightdark})` }}></button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}