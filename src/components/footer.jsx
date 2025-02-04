

const BASE_PATH = import.meta.env.VITE_BASE_PATH || "";

export default function Footer() {
    return (
        <footer className="container-xl text-center my-5">
            {/* <!-- Icons in a responsive centered format --> */}
            <section className="row border-top border-bottom border-secondary py-2">
                <a className="col" href="https://github.com/J-Wll">
                    <img
                        className="w-15 d-inline-block m-3 border border-white rounded-circle border-2"
                        src={`${BASE_PATH}github-mark.png`}
                        alt="Github logo linking to my profile"
                    />
                </a>
                <a className="col" href="mailto:westwellWork@gmail.com">
                    <img
                        className="w-15 d-inline-block m-3"
                        src={`${BASE_PATH}email.webp`}
                        alt="Icon indicating email. Link to westwellWork@gmail.com"
                    />
                </a>
                <a className="col" href={`${BASE_PATH}CV - Website Version - Joe Westwell - 20_01_2025.pdf`}>
                    <img
                        className="w-15 d-inline-block m-3"
                        src={`${BASE_PATH}cv.webp`}
                        alt="Icon indicating CV. Downloads PDF CV."
                    />
                </a>
                <a className="col" href="https://www.linkedin.com/in/joe-westwell/" download>
                    <img
                        className="w-15 d-inline-block m-3"
                        src={`${BASE_PATH}LinkedIn_icon.svg`}
                        alt="LinkedIn logo linking to my profile"
                    />
                </a>
            </section>
            <p className="mt-4 subtle">Website built with React and Bootstrap. <a href="https://github.com/J-Wll/portfolio">Repo</a></p>

        </footer>

    )
}