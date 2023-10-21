import react, {useState} from "react";
 
export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2>login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input value = {email} onChange={(e) => setEmail(e.target.value)} email = "Email" id = "email" placeholder="email"/>
        <label htmlFor="Password">Password</label>
        <input value = {password} onChange={(e) => setPassword(e.target.value)} password = "Password" id = "password" placeholder="password"/>
        <button type="submit">Log in</button>
        </form>
        <button className="link-bin" onClick={() => props.onFormSwitch('register')}>Don't have an account? register</button>
        </div>
    )
}