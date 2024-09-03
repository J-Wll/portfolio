import BigLink from "../components/biglink"
export default function DevComp() {
    return (
        <>
            <div className="container-xl">
                <h1>Developer Companion</h1>
                <p>An organisational tool intended for developers. An electron app built with react. Featuring a fully customisable interface with drag and drop resizeable modules.</p>
                <BigLink href="https://github.com/J-Wll/dev-companion/releases/download/v0.5.2/DevCompanion-Windows-0.5.2-Setup.exe" text="Download for Windows (64 bit) (See GitHub for compilation instructions on other platforms)" />
                <BigLink href="https://github.com/J-Wll/dev-companion" text="GitHub Repo" />
            </div>
        </>
    )
}