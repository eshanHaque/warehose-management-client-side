import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Register/Register.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const  name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='reg-form'>
            <h2>Register Here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Name...'/>
                <input type="email" name="email" id="" placeholder='Your email'/>
                <input type="password" name="password" id="" placeholder='your password'/>
                <input type="submit" value="" />
            </form>
            <p>Already a member<Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none'>Log In now</Link></p>
        </div>
    );
};

export default Register;