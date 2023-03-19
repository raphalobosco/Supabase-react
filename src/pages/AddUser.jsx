import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabase";

function AddUser({ token }) {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { data } = await supabase
            .from('people')
            .insert([
                { name: name, email: email, avatar: avatar },
            ])
            .select()

        if (data) {
            navigate('/')
        }


    }

    const returnHome = () => {
        useEffect(() => {
            navigate('/home')
        }, [])
    }


    return (


        <div className="container my-5">
            {token ? (
                <div className="row">
                    <div className="col-sm-8 col-11 mx-auto p-4 bg-dark text-white rounded">
                        <form onSubmit={handleSubmit}>
                            <input className="form-control mb-3"
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                value={name}
                                type="text"
                                placeholder="Name" />

                            <input className="form-control mb-3"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                value={email}
                                type="text"
                                placeholder="Email" />

                            <input className="form-control mb-3"
                                onChange={(e) => setAvatar(e.target.value)}
                                id="avatar"
                                value={avatar}
                                type="text"
                                placeholder="avatar" />


                            <button type="submit" className="btn btn-primary">Add user</button>

                        </form>
                    </div>
                </div>
            ) : returnHome()}
        </div>
    )
}

export default AddUser
