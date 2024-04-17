import HomePage from "./pages/home/home"
import { BrowserRouter,  Routes, Route} from "react-router-dom"
import Header from "./component/header/header"

function App() {
    return <BrowserRouter>
    <Routes>
        <Route path="/home" Component={HomePage}/>
    </Routes>
    <Routes>
        <Route path="/search" Component={Header}/>
    </Routes>
    </BrowserRouter> 
    // <HomePage/>
}

export default App
