import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Delete from './pages/Delete';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/adduser' element={<AddUser />} />
                <Route path='/:id' element={<Update />} />
                <Route path='/delete/:id' element={<Delete />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App