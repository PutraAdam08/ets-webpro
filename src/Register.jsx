import react, {useState} from "react";
 
export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Fname] = useState('');
    const [Lname] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2>register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input value = {email} onChange={(e) => setEmail(e.target.value)} email = "email" id = "email" placeholder="email"/>
        <label htmlFor="First Name">First name</label>
        <input value = {Fname} Fname = "Fname" id= "Fname" placeholder="First Name"/>
        <label htmlFor="Last Name">Last name</label>
        <input value = {Lname} Lname = "Lname" id= "Lname" placeholder="Last Name"/>
        <label htmlFor="Password">Password</label>
        <input value = {password} onChange={(e) => setPassword(e.target.value)} password = "Password" id = "password" placeholder="password"/>
        <button type="submit">Log in</button>
        </form>
        <button className="link-bin" onClick={() => props.onFormSwitch('login')}>Already have an account? login</button>
        </div>
    )
}