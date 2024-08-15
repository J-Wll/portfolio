// import flashcards from "./assets/flashcards.webp"
// import flashcards from "./assets/flashcards.webp"

import flashcardsImg from "../assets/flashcards-s.webp"
import towerImg from "../assets/tower-s.webp"

export default function Home() {
  return (
    <>

      <section className="introduction container-xl">
        <h1 className="my-4">Developer Portfolio</h1>
        <p className="">Graduate software developer seeking an opportunity to break into the industry. I am in
          the Manchester area and am looking to grow
          as part of a team and to continue to learn and improve my skills. I have experience throughout the
          stack and open to a variety of roles. Outside of my bachelors degree I
          have completed supplemental programming bootcamps, certifications and more.</p>
        <p>I graduated with a first from UCEN Manchester. (Degree Validated by Manchester Metropolitan
          University)</p>
      </section>

      {/* <!-- Section of project banner images and captions, fitting either one or two per row depending on resolution --> */}
      <section className="project-banners container-fluid my-3 pt-3 p-0 px-md-5 px-1 text-center">
        <h2>Featured projects:</h2>
        <p>(Click for more information)</p>
        <section className="row-1 row text-center">
          <figure className="banner-block col my-3">
            <a href="/flashcards"><img className="img-banner" src={flashcardsImg}
              alt="Banner image for Flashcards program"></img></a>
            <figcaption className=""><a href="" className="link-body-emphasis">Flashcards (React)</a></figcaption>
          </figure>

          <figure className="banner-block col my-3">
            <a href=""><img className="img-banner" src={towerImg}
              alt="Banner image for tower defence project"></img></a>
            <figcaption className=""><a href="" className="link-body-emphasis">Tower Defence (Java)</a></figcaption>
          </figure>

        </section>
        <section className="row-2 row text-center">
          <figure className="banner-block col my-3">
            <a href=""><img className="img-banner" src="./img/p3.webp" alt="Banner image for project 3"></img></a>
            <figcaption className=""><a href="" className="link-body-emphasis">CRM software (Node, Express,
              Mongodb)</a></figcaption>
          </figure>

          <figure className="banner-block col my-3">
            <a href=""><img className="img-banner" src="./img/p4.webp" alt="Banner image for project 4"></img></a>
            <figcaption className=""><a href="" className="link-body-emphasis">Developer companion (React,
              Electron)</a></figcaption>
          </figure>

        </section>
        <a href="https://github.com/J-Wll" className="link-body-emphasis">
          <h2>GitHub</h2>
        </a>
      </section>

      <section className="my-4 container-xl">
        {/* <h2 className="mb-1">About me</h2> */}

        <h4 className="my-1 mt-4">Education:</h4>
        <ul>
          <li>First class BSc Hons Software Development from UCEN Manchester (Top-up)</li>
          <li>Distinction HND in computing from the University of Bolton</li>
          <li>2 short programming bootcamps, one focusing on python and one more general</li>
          <li>A variety of further education from websites such as freeCodeCamp, Coursera and Brilliant</li>
          <a href="https://www.linkedin.com/in/joe-westwell/" className="link-body-emphasis">See more on my LinkedIn</a>
        </ul>

        <h4 className="my-1 mt-4">Skills:</h4>
        <ul>
          <li>Front end web development technologies: React, Javascript, HTML, CSS </li>
          <li>Experience with the back end including Node.js, Express and MongoDB</li>
          <li>Systems programming with Java and C++</li>
          <li>Teamwork and organisation practiced through team projects in University and on the bootcamps
          </li>
          <li>A drive for self learning demonstrated by extra-curricular studies</li>
        </ul>

        <a href="/contact" className="link-body-emphasis">Get in touch</a>
      </section>

    </>
  )
}

