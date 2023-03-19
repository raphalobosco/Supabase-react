import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabase";

function Login({ setToken }) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    console.log(formData)

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    function handleChange(e) {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { data } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password

        })

        if (data) {
            console.log(data)
            setToken(data.session)
            navigate('/home')
        }
    }



    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-8 col-11 mx-auto p-4 bg-dark text-white rounded">
                    <form onSubmit={handleSubmit} >

                        <input className="form-control mb-3"
                            onChange={handleChange}
                            name="email"
                            type="text"
                            placeholder="Email" />

                        <input className="form-control mb-3"
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="Password" />


                        <button type="submit" className="btn btn-primary">Login</button>
                        <p className="mt-3 mb-0">don't have a login? <Link to="/signup">Register here</Link></p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
