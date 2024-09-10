import github from "../assets/github-mark.png"
import linkedin from "../assets/LinkedIn_icon.svg"

export default function Footer() {
    return (
        <footer className="container-xl text-center my-5">
            {/* <!-- Icons in a responsive centered format --> */}
            <section className="row border-top border-bottom border-secondary py-2">
                <a className="col" href="https://github.com/J-Wll"><img
                    className="w-15 d-inline-block m-3 border border-white rounded-circle border-2"
                    src={github} alt="Github logo linking to my profile"></img></a>
                <a className="col" href="https://www.linkedin.com/in/joe-westwell/"><img className="w-15 d-inline-block m-3"
                    src={linkedin} alt="LinkedIn logo linking to my profile"></img></a>
                <p className="subtle">Website built with React and Bootstrap</p>
            </section>
        </footer>
    )
}