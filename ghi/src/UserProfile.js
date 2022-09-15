import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuthContext } from './useToken.js'
import jwt_decode from "jwt-decode"

function UserProfile() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [data, setData] = useState({});
    // const [activityies, setActivities] = useState([])
    const { token } = useAuthContext();

    function setStates() {
        setUserName(data.username)
        setEmail(data.email)
        setFirstName(data.first_name)
        setLastName(data.last_name)
    }

    useEffect(() => {
      const url = "http://localhost:8080/api/accounts/"
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          if (response.ok) {
            let decode = jwt_decode(token)
              if (decode) {
                const searchParam = decode.user.username
                for (let user of json.accounts) {
                  if (user.username === searchParam) {
                    setData(user)
                    }
                }
              }
          }
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }, [token]);

    useEffect(() => {

      setStates();

    }, [data])

    return (
        <>
          <div class="col d-flex justify-content-center">
            <div className="card w-50 text-center row mt-3">
              <div className="card-header">
                <h4>Welcome Back {firstName} {lastName}!</h4>
              </div>
              <div className="card-body">
              <div className="text-center">
                <div className="m-3">
                  <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo" width="500" height="auto" />
                </div>
              </div>
                <Link to="/activities/" className="btn btn-primary">
                  Find Next Activity
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="card card w-25 col-sm m-3">
                <div className="m-3">
                  <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} className="rounded mx-auto d-block img-thumbnail" alt="logo" width="250" height="100" />
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">User Name: {userName}</li>
                  <li className="list-group-item">Name: {firstName} {lastName}</li>
                  <li className="list-group-item">Email: {email}</li>
                </ul>
              </div>
              <div className="card w-25 overflow-scroll col-sm m-3">
                <ul>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                </ul>
              </div>
            </div>
          </div>
        </>
  )
}

export default UserProfile