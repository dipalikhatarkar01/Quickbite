import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Sign Up")

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async () => {

        try {

            const url = currState === "Login"
  ? "http://localhost:4000/api/user/login"
  : "http://localhost:4000/api/user/register"
            const response = await axios.post(url, data)

            if (response.data.success) {

                // token save karo
                localStorage.setItem("token", response.data.token)

                // popup close karo
                setShowLogin(false)

            } else {
                alert(response.data.message)
            }

        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    }

    return (
        <div className='login-popup'>
            <div className="login-popup-container">

                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>

                <div className="login-popup-inputs">

                    {currState === "Sign Up" &&
                        <input
                            type="text"
                            placeholder='Your name'
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                        />
                    }

                    <input
                        type="email"
                        placeholder='Your email'
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />

                </div>

                <button type="button" onClick={handleSubmit}>
                    {currState === "Login" ? "Login" : "Create account"}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>

                {currState === "Login"
                    ? <p>Create a new account?
                        <span onClick={() => setCurrState("Sign Up")}> Click here</span>
                      </p>
                    : <p>Already have an account?
                        <span onClick={() => setCurrState("Login")}> Login here</span>
                      </p>
                }

            </div>
        </div>
    )
}

export default LoginPopup