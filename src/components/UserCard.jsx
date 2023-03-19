import { Link } from "react-router-dom"


function UserCard({ person }) {
    return (
        <div className="d-flex align-items-center p-3 border rounded-3 shadow-sm mb-3 justify-content-between" key={person.id}>
            <div className="me-3 d-flex">
                <img className="img-fluid rounded" src={person.avatar} style={{ maxHeight: '90px' }} />
                <div className="ms-3">
                    <h3>{person.name} {person.surname} </h3>
                    <p>{person.email}</p>
                </div>
            </div>
            <div className="align-self-start d-flex gap-3">
                <Link to={'/' + person.id}> <p className="text-primary align-self-start">Edit</p></Link>
                <Link to={'/delete/' + person.id}> <p className="text-danger align-self-start">Delete</p></Link>
            </div>
        </div>
    )
}

export default UserCard