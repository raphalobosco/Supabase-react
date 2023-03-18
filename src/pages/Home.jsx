import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import supabase from "../config/supabase";
import AddUser from "./AddUser";
import { Link } from "react-router-dom";


function Home() {

  const [usersList, setUsersList] = useState()

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase
        .from('users')
        .select()

      // if (error) {
      //   setFetchError('Deu merda')
      //   setUsersList(null)
      //   console.log(error)
      // }
      if (data) {
        setUsersList(data)
        // setFetchError(null)
      }
    }

    fetchUsers()

  }, [usersList])

  return (
    <div className="container my-3">

      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Users</h1>
          <Link to="/adduser">
            <button className="btn btn-success">Add User</button>
          </Link>
        </div>
        <hr />
        <div className="col-12">
          {usersList && (
            <div>
              {usersList.map((user) => {
                return (
                  <UserCard key={user.id} user={user} />
                )
              })}
            </div>
          )}
        </div>
      </div>



    </div >
  )
}

export default Home;


