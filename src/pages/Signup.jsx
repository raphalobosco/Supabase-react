import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../config/supabase";

function Signup() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
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

        const { data } = await supabase.auth.signUp({

            email: formData.email,
            password: formData.password,
            options: {
                data: {

                    name: formData.name,
                }
            }
        })

        if (data) {
            navigate('/')
        }
    }



    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-8 col-11 mx-auto p-4 bg-dark text-white rounded">
                    <form onSubmit={handleSubmit} >
                        <input className="form-control mb-3"
                            onChange={handleChange}
                            name="name"
                            type="text"
                            placeholder="Name" />

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


                        <button type="submit" className="btn btn-primary">Register</button>
                        <p className="mt-3 mb-0">Already have an account <Link to="/">login here</Link></p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
