import Carousel from "../components/carousel"
import BigLink from "../components/biglink"
import getImages from "../helper/getImages"

export default function DevComp() {
    const imgs = getImages("devcomp", 4)
    return (
        <>
            <div className="container-xl center">
                <h1>Developer Companion</h1>
                <p>An organisational tool for developers to stay organised. An electron app built with react. Featuring a fully customisable interface with drag and drop resizeable modules.</p>
                <BigLink href="https://github.com/J-Wll/dev-companion/releases/download/v0.5.2/DevCompanion-Windows-0.5.2-Setup.exe" text="Download for Windows (64 bit) (See GitHub for compilation instructions on other platforms)" extraClasses="no-margin" /> <BigLink href="https://www.virustotal.com/gui/file/c86776d2a02e4496f209daf6707518e74b03223fe8fc1f7d1133531490ed6359/detection" text="(VirusTotal)" />
                <BigLink href="https://github.com/J-Wll/dev-companion" text="GitHub Repo" />
                <Carousel imgs={imgs} />
                <p>Features:</p>
                <ul className="center">
                    <li>Todo-list</li>
                    <li>Kanban board</li>
                    <li>Reflective journal</li>
                    <li>Notes</li>
                    <li>Resources list</li>
                    <li>Timers (Regular and Pomodoro)</li>
                </ul>
                <p>This project is intended to create an all in one place for individual developers to be more efficient during a project. Allowing them to track progress, create notes and manage time.</p>
                <p>The dynamic save/load system on both modules and workspaces allows for multiple projects to be tracked. </p>

            </div>
        </>
    )
}