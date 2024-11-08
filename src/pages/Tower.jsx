import BigLink from "../components/biglink"
import Carousel from "../components/carousel"
import getImages from "../helper/getImages"

export default function Tower() {
    const imgs = getImages("tower", 6)
    return (
        <div className="container-xl center">
            <h1>Tower Defence Game</h1>
            <p>A tower defence game with different towers, levels and power-ups. Built in Java using JavaFX</p>
            <BigLink href="https://github.com/J-Wll/tower-defence-javafx/releases/download/v1/tower-defence-javafx8-1.0-SNAPSHOT-shaded.jar" text="Download the Jar here. (Shaded Jar, Java 8)" extraClasses="no-margin" /> <BigLink href="https://www.virustotal.com/gui/file/5e62d7f1d1667705626fbfe9588389f1e402b09dfd0b23640dd4ac1827db79ef/detection" text="(VirusTotal)" />
            <BigLink href="https://github.com/J-Wll/tower-defence-javafx" text="GitHub Repo" />
            <Carousel imgs={imgs} arrowColour="white" />
            <p>This project was based on <a href="https://www.youtube.com/watch?v=Euiqdd09n68&list=PLB85864F4E46196A9">this tutorial.</a> Significant modifications were made including the addition of design patterns, JavaFX over AWT and content inclusions such as varying tower and monster types. </p>
            <p>The Builder, Observer and Singleton design patterns are used for tower creation, events/powerups and code structuring respectively. </p>
        </div>
    )
}