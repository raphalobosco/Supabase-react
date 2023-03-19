import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Delete from './pages/Delete';
import Signup from './pages/Signup';
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function App() {

    const [token, setToken] = useState(false)

    if (token) {
        sessionStorage.setItem('token', JSON.stringify(token))
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            let data = JSON.parse(sessionStorage.getItem('token'))
            setToken(data)
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login setToken={setToken} />} />
                <Route path='/signup' element={<Signup />} />
                {token ? <>
                    <Route path='/home' element={<Home token={token} />} />
                    <Route path='/adduser' element={<AddUser token={token} />} />
                    <Route path='/:id' element={<Update />} />
                    <Route path='/delete/:id' element={<Delete />} />
                </> : ""}
            </Routes>
        </BrowserRouter>
    )
}

export default App