import github from "../assets/github-mark.png"
import linkedin from "../assets/LinkedIn_icon.svg"
import email from "../assets/email.webp"
import cv from "../assets/cv.webp"

export default function Footer() {
    return (
        <footer className="container-xl text-center my-5">
            {/* <!-- Icons in a responsive centered format --> */}
            <section className="row border-top border-bottom border-secondary py-2">
                <a className="col" href="https://github.com/J-Wll"><img
                    className="w-15 d-inline-block m-3 border border-white rounded-circle border-2"
                    src={github} alt="Github logo linking to my profile"></img></a>
                <a className="col" href="mailto:westwellWork@gmail.com"><img className="w-15 d-inline-block m-3"
                    src={email} alt="Icon indicating email. Link to westwellWork@gmail.com"></img></a>
                <a className="col" href="../assets/cv.webp"><img className="w-15 d-inline-block m-3"
                    src={cv} alt="Icon indicating CV. Downloads PDF CV."></img></a>
                <a className="col" href="https://www.linkedin.com/in/joe-westwell/" download><img className="w-15 d-inline-block m-3"
                    src={linkedin} alt="LinkedIn logo linking to my profile"></img></a>
            </section>
            <p className="mt-4 subtle">Website built with React and Bootstrap. <a href="https://github.com/J-Wll/portfolio">Repo</a></p>

        </footer>

    )
}