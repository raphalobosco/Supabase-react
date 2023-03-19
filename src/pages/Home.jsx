import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import supabase from "../config/supabase";
import { Link } from "react-router-dom";



function Home({ token }) {


  const [peopleList, setPeopleList] = useState()
  const [userLogin, setUserLogin] = useState()

  const fetchUSer = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUserLogin(user.email)
  }

  fetchUSer()

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await supabase
        .from('people')
        .select()
        .order('created_at', { ascending: false })

      if (data) {

        setPeopleList(data)
      }
    }

    fetchPeople()
  }, [])


  async function handleLogout() {
    sessionStorage.removeItem('token')
    let { error } = await supabase.auth.signOut()
    window.location.reload(false);
  }



  return (
    <div className="container my-3">

      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Users</h1>
          <div>
            {token ? (
              <div className="d-flex gap-3 align-items-center">
                <h3>Welcome back, {token.user.user_metadata.name}</h3>

                <div>
                  <Link to="/adduser"><button className="btn btn-success me-2">Add User</button></Link>
                  <button className="btn btn-outline-secondary" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (<Link to='/login'><button className="btn btn-primary">Login</button></Link>

            )}
          </div>

        </div>
        <hr />
        <div className="col-12">
          {peopleList && (
            <div>
              {peopleList.map((person) => {
                return (
                  <UserCard key={person.id} person={person} />
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


