import Carousel from "../components/carousel"
import BigLink from "../components/biglink"
import getImages from "../helper/getImages"

export default function Flashcards() {
    const imgs = getImages("flash", 6)
    return (
        <>
            <div className="container-xl center">
                <h1>Flashcards</h1>
                <p>A flashcards web app built with react. Featuring multiple choice questions, stats, saving and loading flashcards, a minimal, responsive design and more.</p>
                <BigLink href="https://j-wll.github.io/flashcards-pages/" text="Try it here" />
                <BigLink href="https://github.com/J-Wll/flashcards" text="GitHub Repo" />
                <Carousel imgs={imgs} arrowColour="white" />
            </div>
        </>
    )
}