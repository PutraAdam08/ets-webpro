
import react, {useState} from "react";
 
export const Registration = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Fname, setFName] = useState('');
    const [Lname, setLName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input value = {email} onChange={(e) => setEmail(e.target.value)} email = "Email" id = "email" placeholder="email"/>
        <label htmlFor="First name">First name</label>
        <input value = {Fname} Fname = "First name" id = "Fname" placeholder="first name"/>
        <label htmlFor="Last name">Last name</label>
        <input value = {Lname} Lname = "Last name" id = "Lname" placeholder="last name"/>
        <label htmlFor="Password">Password</label>
        <input value = {password} onChange={(e) => setPassword(e.target.value)} password = "Password" id = "password" placeholder="password"/>
        </form>
        </>
    )
}