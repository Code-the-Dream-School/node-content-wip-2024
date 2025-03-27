import React from 'react'
import './signup.css'

const Signup = () => {
    return(
        <div className="signup-form">
            <h2>Sign Up</h2>
            <form>
                
                <div>
                    <label htmlFor='username' required>Username</label>    
                    <input type='text' placeholder= 'Choose a unique username'/>

                </div>    
                <div>
                    <label htmlFor='email' required>Email</label>
                    <input type='email' placeholder='Enter email'/>
                </div>
                <div>
                    <label htmlFor='password' required></label>
                    <input type='password' placeholder='8+ chars, number and symbol'/>
                </div>
                <button>Sign up</button>
            </form>




        </div>


    )
}

export default Signup