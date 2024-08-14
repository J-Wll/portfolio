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
                    <a href="" className="navbar-brand mr-sm-4 p-0">Joe Westwell</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="mx-lg-4 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-lg-4 m-1 "><a className="nav-link active" href="">Home</a></li>
                            <li className="nav-item dropdown mx-lg-4 m-1"><a className="nav-link dropdown-toggle" role="button"
                                data-bs-toggle="dropdown" aria-label="Projects submenu" aria-expanded="false"
                                href="">Projects</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="">MazeGen</a></li>
                                    <li><a className="dropdown-item" href="">Flashcards</a></li>
                                    <li><a className="dropdown-item" href="">CRM</a></li>
                                    <li><a className="dropdown-item" href="">Project 4</a></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li><a className="dropdown-item" href="https://github.com/J-Wll">More on Github</a></li>
                                </ul>
                            </li>

                            <li className="nav-item mx-lg-4 m-1"><a className="nav-link" href="">CV & Contact</a></li>
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