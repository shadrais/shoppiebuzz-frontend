import React from "react";
import './Login_register.css';
// import fb from '../../assets/fb.jpg';
// import google from '../../assets/gp.jpg';
import useForm from '../Form/useform'
import validate from '../Form/validateInfo'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';



const Register = () =>
{
    document.getElementById("login").style.left= "-400px";
    document.getElementById("register").style.left= "50px";
    document.getElementById("btn").style.left= "110px";
}
const login = () =>
{
    document.getElementById("login").style.left= "50px";
    document.getElementById("register").style.left= "450px";
    document.getElementById("btn").style.left= "0";
}





const Loginregister = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    )

    

    return (
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                    <div id="btn">
                    </div>
                    <button type="button" className="toggle-btn" onClick={login}>Login</button>
                    <button type="button" className="toggle-btn" onClick={Register}>Register</button>

                </div>
                {/* <div className="social-icons">
                    <img  alt = '' src={fb} />
                    <img  alt = '' src={google} />

                </div> */}
                <form id="login" className="input-group">
                    <i className="fa fa-user" />
                    <input type="text" 
                    name ='email'
                    className="input-field" 
                    placeholder="Name" required />

                    <i className="fa fa-key" aria-hidden="true" />

                    <input type="password" 
                    className="input-field" 
                    name='password'
                    placeholder="Enter Password" required />

                    <input type="checkbox" 
                    className="checkbox" />
                    <span>Remember Password</span>
                    <button type="submit " className="submit-btn">LOGIN</button>
                </form>

                <form id="register" className="input-group" onSubmit={handleSubmit}>

                    <input type="text" 
                    className="input-field"
                    name ='username'
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Name" required 
                    />
                     {errors.username && <p>{errors.username}</p>}
                   

                    <input type="email" 
                    className="input-field" 
                    name ='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email ID" required />
                    {errors.email && <p>{errors.email}</p>}

                    <input type="password" 
                    className="input-field" 
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password" required />
                    {errors.password && <p>{errors.password}</p>}

                    <input type="password" 
                    className="input-field" 
                    name='password2'
                    value={values.password2}
                    onChange={handleChange}
                    placeholder="Confirm Password" required />
                    {errors.password2 && <p>{errors.password2}</p>}

                    <input type="checkbox"  
                    className="checkbox" />

                    <span>I agree to the terms and conditions</span>
                    <button type="submit " className="submit-btn">REGISTER</button>
                </form>


            </div> 

        </div>
        )
};

export default Loginregister;