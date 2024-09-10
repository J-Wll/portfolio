import BigLink from "../components/biglink"
export default function Tower() {
    return (
        <div className="container-xl">
            <h1>Tower Defence Game</h1>
            <p>A tower defence game with different towers, levels and power-ups. Built in Java using JavaFX</p>
            <BigLink href="https://github.com/J-Wll/tower-defence-javafx/releases/download/v1/tower-defence-javafx8-1.0-SNAPSHOT-shaded.jar" text="Download the Jar here. (Shaded Jar, Java 8)" />
            <BigLink href="https://github.com/J-Wll/tower-defence-javafx" text="GitHub Repo" />
            <p>This project was based on <a href="https://www.youtube.com/watch?v=Euiqdd09n68&list=PLB85864F4E46196A9">this tutorial.</a> Significant modifications were made including the addition of design patterns, JavaFX over AWT and content inclusions such as varying tower and monster types. </p>
            <p>The Builder, Observer and Singleton design patterns are used for tower creation, events/powerups and code structuring respectively. </p>
        </div>
    )
}