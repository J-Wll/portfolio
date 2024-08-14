import "./assets/app.css"

// import flashcards from "./assets/flashcards.webp"
// import flashcards from "./assets/flashcards.webp"

import Header from "./components/header"
import Footer from "./components/footer"
import Mainpage from "./components/mainpage"

let page = <Mainpage />

function App() {
  return (
    <div className="container-fluid px-md-5 px-lg-8 py-3 px-2">

      <Header />

      {page}

      <Footer />
    </div>
  )
}

export default App
