import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../config/supabase"
import { useNavigate } from "react-router-dom"

function Update() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await supabase
                .from('users')
                .select()
                .eq('id', id)
                .single()

            if (data) {
                setAvatar(data.avatar)
                setEmail(data.email)
                setName(data.name)
            }
        }

        fetchUsers()

    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault()

        const { data } = await supabase
            .from('users')
            .update([
                { name: name, email: email, avatar: avatar },
            ])
            .eq('id', id)
            .select()

        if (data) {
            navigate('/')
        }


    }

    return (


        <div className="container my-5">
            <div className="row">
                <div className="col-sm-8 col-11 mx-auto p-4 bg-dark text-white rounded">
                    <form onSubmit={handleUpdate}>
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
                        <button type="submit" className="btn btn-primary">Save</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update