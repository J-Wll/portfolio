
import BigLink from "../components/biglink"
export default function Contact() {
    return (
        <div className="container-xl">

            <h1>Please contact me via Email or LinkedIn.</h1>
            <h3>Email me at <a href="mailto:westwellWork@gmail.com">westwellWork@gmail.com</a></h3>
            <BigLink text = "My LinkedIn"/>
            <BigLink text = "My GitHub"/>
            <BigLink text = "My CV"/>
        </div>

    )

}