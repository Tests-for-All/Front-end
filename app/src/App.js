import HomePage from "./pages/home/home"
import { BrowserRouter,  Routes, Route} from "react-router-dom"
import Header from "./component/header/header"
import TestsPage from "./pages/home/tests"

function App() {
    return <BrowserRouter>
    <Routes>
        <Route path="/home" Component={HomePage}/>
    </Routes>
    <Routes>
        <Route path="/search" Component={TestsPage}/>
    </Routes>
    </BrowserRouter> 
    // <HomePage/>
}

export default App
