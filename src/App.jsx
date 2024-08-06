import "./assets/app.css"
import flashcards from "./assets/flashcards.webp"
// import flashcards from "./assets/flashcards.webp"
// import flashcards from "./assets/flashcards.webp"
// import flashcards from "./assets/flashcards.webp"
import lightdark from "./assets/lightdark.png"
import github from "./assets/github-mark.png"
import linkedin from "./assets/LinkedIn_icon.svg"


function App() {
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

  function Header() {
    return (
      <header class="border-top border-bottom border-secondary py-2 my-3">
        {/* <!-- Collapsable bootstrap navbar with dropdowns, see: https://getbootstrap.com/docs/5.3/components/navbar/--> */}
        <nav class="navbar navbar-expand-md">
          <div class="container-fluid">
            <a href="" class="navbar-brand mr-sm-4 p-0">Joe Westwell</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="mx-lg-4 collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item mx-lg-4 m-1 "><a class="nav-link active" href="">Home</a></li>
                <li class="nav-item dropdown mx-lg-4 m-1"><a class="nav-link dropdown-toggle" role="button"
                  data-bs-toggle="dropdown" aria-label="Projects submenu" aria-expanded="false"
                  href="">Projects</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="">MazeGen</a></li>
                    <li><a class="dropdown-item" href="">Flashcards</a></li>
                    <li><a class="dropdown-item" href="">CRM</a></li>
                    <li><a class="dropdown-item" href="">Project 4</a></li>
                    <li>
                      <hr class="dropdown-divider"></hr>
                    </li>
                    <li><a class="dropdown-item" href="https://github.com/J-Wll">More on Github</a></li>
                  </ul>
                </li>

                <li class="nav-item mx-lg-4 m-1"><a class="nav-link" href="">CV & Contact</a></li>
                <li class="nav-item mx-lg-4 m-1 "><button id="dark-mode-toggle"
                  class="align-middle border border-white rounded-circle border-2"
                  title="Dark mode toggle button" onClick={lightDarkFunc} style={{ backgroundImage: `url(${lightdark})` }}></button></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  function Footer() {
    return (
      <footer class="container-fluid text-center my-5">
        {/* <!-- Icons in a responsive centered format --> */}
        <section class="row border-top border-bottom border-secondary py-2">
          <a class="col" href="https://github.com/J-Wll"><img
            class="w-15 d-inline-block m-3 border border-white rounded-circle border-2"
            src={github} alt="Github logo linking to my profile"></img></a>
          <a class="col" href="https://www.linkedin.com/in/joe-westwell/"><img class="w-15 d-inline-block m-3"
            src={linkedin} alt="LinkedIn logo linking to my profile"></img></a>
          <p>Website built with React and Bootstrap</p>
        </section>
      </footer>
    )
  }
  return (
    <div class="container-fluid px-md-5 px-lg-8 py-3 px-2">

      <Header />

      <main>
        <section class="introduction">
          <h1 class="mt-3">Developer Portfolio</h1>
          <p class="my-1">Graduate software developer seeking an opportunity to break into the industry. I am in
            the Manchester area and am looking to grow
            as part of a team and to continue to learn and improve my skills. I have experience throughout the
            stack and open to a variety of roles. Outside of my bachelors degree I
            have completed supplemental programming bootcamps, certifications and more.</p>
          <br></br>
          <p>I graduated with a first from UCEN Manchester. (Degree Validated by Manchester Metropolitan
            University)</p>
        </section>

        {/* <!-- Section of project banner images and captions, fitting either one or two per row depending on resolution --> */}
        <section class="project-banners container-fluid my-3 pt-3 p-0 px-md-5 px-1 text-center">
          <h2>Featured projects:</h2>
          <p>(Click for more information)</p>
          <section class="row-1 row text-center">
            <figure class="banner-block col my-3">
              <a href="/flashcards"><img class="img-banner" src={flashcards}
                alt="Banner image for Flashcards program"></img></a>
              <figcaption class=""><a href="" class="link-body-emphasis">Flashcards (React)</a></figcaption>
            </figure>
            <figure class="banner-block col my-3">
              <a href=""><img class="img-banner" src="./img/p2.webp"
                alt="Banner image for tower defence project"></img></a>
              <figcaption class=""><a href="" class="link-body-emphasis">Tower Defence (Java)</a></figcaption>
            </figure>
          </section>
          <section class="row-2 row text-center">
            <figure class="banner-block col my-3">
              <a href=""><img class="img-banner" src="./img/p3.webp" alt="Banner image for project 3"></img></a>
              <figcaption class=""><a href="" class="link-body-emphasis">CRM software (Node, Express,
                Mongodb)</a></figcaption>
            </figure>
            <figure class="banner-block col my-3">
              <a href=""><img class="img-banner" src="./img/p4.webp" alt="Banner image for project 4"></img></a>
              <figcaption class=""><a href="" class="link-body-emphasis">Developer companion (React,
                Electron)</a></figcaption>
            </figure>
          </section>
          <a href="https://github.com/J-Wll">
            <h2>GitHub</h2>
          </a>
        </section>

        <section class="my-4">
          <h2 class="mb-1">About me</h2>

          <h4 class="my-1 mt-4">Education:</h4>
          <ul>
            <li>First class BSc Hons Software Development from UCEN Manchester (Top-up)</li>
            <li>Distinction HND in computing from the University of Bolton</li>
            <li>2 short programming bootcamps, one focusing on python and one more general</li>
            <li>A variety of further education from websites such as freeCodeCamp, Coursera and Brilliant</li>
            <li><a href="https://www.linkedin.com/in/joe-westwell/">See more on my LinkedIn</a></li>
          </ul>

          <h4 class="my-1 mt-4">Skills:</h4>
          <ul>
            <li>Front end web development technologies: React, Javascript, HTML, CSS </li>
            <li>Experience with the back end including Node.js, Express and MongoDB</li>
            <li>Systems programming with Java and C++</li>
            <li>Teamwork and organisation practiced through team projects in University and on the bootcamps
            </li>
            <li>A drive for self learning demonstrated by extra-curricular studies</li>
          </ul>

          <a href="/contact" class="link-body-emphasis">Get in touch</a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
