// import {Register} from "./Register.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        // fetch user entered details
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("rememberMe").checked;
        
        // console.log(email);
        // console.log(password);
        // console.log(rememberMe);

        const formData = {email, password};

        try {
            const response = await axios.post('https://turiyaclubiiitb-api.onrender.com/api/login', formData);
            console.log('Response from server:', response.data);

        } catch (error) {
            console.error('Error posting data:', error);
        }

        // verify if the user details is correct.
        // if correct route it to landing page
        routeChange('/');
    }


    return (

        <div className="login-body">
            <section className="login-section">

                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" id="email" required />
                        <label for="email">Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required />
                        <label for="password">Password</label>
                    </div>
                    <div className="forget" >
                        <label for=""><input type="checkbox" id="rememberMe"/>Remember Me</label>
                        {/* <a href="#">Forget Password</a> */}
                    </div>
                    <button className="login-button">Log in</button>
                    <div class="register">
                        <p>Don't have an account? <a href='register'>Register</a></p>
                    </div>
                </form>
            </section>
        </div>

    );
}