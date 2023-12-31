
import { useNavigate } from 'react-router-dom';



export const Register = () => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();


        // send OTP and route to OTP Verification page
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // send these details to an api
        // that api will generate an OTP
        // and will sned it to user on that email
        
        
        
        routeChange('/verifyOTP');
    }


    return (
        <div className="login-body">
            <section className="login-section">

                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" id="email" required />
                        <label for="email">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required />
                        <label for="password">Password</label>
                    </div>
             
                    <button className="login-button">Send OTP</button>
                 
                </form>
            </section>
        </div>

    );
}