import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../config/supabase"
import { useNavigate } from "react-router-dom"
import AddUser from "./AddUser"

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

    const handleDelete = async (e) => {
        e.preventDefault()

        const { data } = await supabase
            .from('users')
            .delete()
            .eq('id', id)

        navigate('/')


    }

    const handleBack = async (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-8 col-11 mx-auto p-4">

                    <div className="alert alert-warning">
                        Are you sure you want to delete {name} from the list?
                    </div>

                    <div className="d-flex align-items-center p-3 border rounded-3 shadow-sm mb-3 justify-content-between" key={id}>
                        <div className="me-3 d-flex">
                            <img className="img-fluid rounded" src={avatar} style={{ maxHeight: '90px' }} />
                            <div className="ms-3">
                                <h3>{name}</h3>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>


                    <button onClick={handleDelete} className="btn btn-danger me-3">Delete user</button>
                    <button onClick={handleBack} className="btn btn-primary">Cancel</button>


                </div>
            </div>
        </div>
    )
}

export default Update