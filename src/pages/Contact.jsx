
import BigLink from "../components/biglink"
export default function Contact() {
    return (
        <div className="container-xl">
            <h1>Contact</h1>
            <p className="my-4">I'm currently seeking employment and am open to a range of software development work. I hope the projects here and on my GitHub demonstrate knowledge and skill with a variety of languages and types of programming.</p>
            <p className="mb-4">Please contact me via Email or LinkedIn, I look forward to hearing from you.</p>
            <BigLink href="mailto:westwellWork@gmail.com" text="Email: westwellWork@gmail.com" />
            <BigLink href="https://www.linkedin.com/in/joe-westwell/" text="My LinkedIn" />
            <BigLink href="https://github.com/J-Wll" text="My GitHub" />
            {/* TODO UPDATE TO FINAL CV */}
            <BigLink href="https://raw.githubusercontent.com/J-Wll/portfolio/refs/heads/main/src/assets/cv.webp?token=GHSAT0AAAAAACUV5SPK25HAQASID45ETKV4ZYRLBNA" text="My CV" />
        </div>

    )

}