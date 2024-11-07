import BigLink from "../components/biglink"
import Carousel from "../components/carousel"
import getImages from "../helper/getImages"

export default function Cerom() {
    const imgs = getImages("cerom", 11)
    return (
        <div className="container-xl center">
            <h1>CeRoM CRM software</h1>
            <p>A customer relationship management program with full CRUD management, product, employees and customer views. Built with Node.js, Pug, Express and MongoDB</p>
            <BigLink href="https://github.com/J-Wll/CeRoM" text="GitHub Repo" />
            <Carousel imgs={imgs} />
            <p>Employee accounts can be created by admins, employees can then manage products and customers according to their assigned permission roles.</p>
            <p>Focus was applied to secure the program, including login and permission authentication on each route. Passwords are managed using Bcrypt to hash, salt and check passwords.</p>
            <p>Data is stored in MongoDB and either atlas or compass needs to be used to use the software, read the README for more setup information.</p>
        </div>
    )
}