import { Link } from "react-router-dom"


function UserCard({ user }) {
    return (
        <div className="d-flex align-items-center p-3 border rounded-3 shadow-sm mb-3 justify-content-between" key={user.id}>
            <div className="me-3 d-flex">
                <img className="img-fluid rounded" src={user.avatar} style={{ maxHeight: '90px' }} />
                <div className="ms-3">
                    <h3>{user.name} {user.surname} </h3>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="align-self-start d-flex gap-3">
                <Link to={'/' + user.id}> <p className="text-primary align-self-start">Edit</p></Link>
                <Link to={'/delete/' + user.id}> <p className="text-danger align-self-start">Delete</p></Link>
            </div>
        </div>
    )
}

export default UserCard