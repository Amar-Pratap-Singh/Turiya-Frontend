
import { useNavigate } from "react-router-dom";

export const VerifyOTP = () => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // verify if the entered OTP is correct or not

        // once verified, route the user to landingpage

        routeChange('/');
    }


    return (
        <div className="login-body">
            <section className="login-section">

                <form onSubmit={handleSubmit}>
                    <h1>Enter OTP</h1>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required />
                        <label for="">OTP</label>
                    </div>
                   
                    <button className="login-button">Verify</button>
                   
                </form>
            </section>
        </div>

    );
}