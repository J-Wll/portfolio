import Carousel from "../components/carousel"
import BigLink from "../components/biglink"
import image from "../assets/image.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"


export default function Flashcards() {
    const imgs = [image, image2, image3]
    return (
        <>
            <div className="container-xl">
                <h1>Flashcards</h1>
                <p>A flashcards web app built with react. Featuring multiple choice questions, stats, saving and loading flashcards, a minimal, responsive design and more.</p>
                <Carousel imgs={imgs} arrowColour = "white"/>
                <BigLink href="https://j-wll.github.io/flashcards-pages/" text="Try it here" />
                <BigLink href="https://github.com/J-Wll/flashcards" text="GitHub Repo" />
            </div>
        </>
    )
}