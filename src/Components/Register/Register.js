import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Components/icon/logo.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        Error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });


    if (user) {
        navigate('/ekok');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const email = event.target.email.value+"@gmail.com";
        const password = event.target.password.value;
        const conf_pass = event.target.confirm_password.value;

        if (password < 5) {

            setError('Password no longer than 5 character')
            return;
        }
        else if (password !== conf_pass) {
            setError('Password did not matched')
            return;
        }


        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-4 p-5">
                    <div class="shadow p-3 mb-5 bg-body rounded">


                        <div className='flex justify-center'>
                            <img className=' w-24  lg:w-28 shadow rounded-full p-2' src={logo} alt="" />

                        </div>

                        <h3 class="text-center mb-3"></h3>
                        <form onSubmit={handleCreateUser}>
                            <div class="form-group">
                                <input type="text" name="email" class="form-control rounded-left" placeholder="Email" required />
                            </div>
                            <div class="form-group d-flex mt-3">
                                <input type="password" name="password" class="form-control rounded-left" placeholder="Password" required />
                            </div>

                            <div class="form-group d-flex mt-3">
                                <input type="password" name="confirm_password" class="form-control rounded-left" placeholder="Confirm Password" required />
                            </div>
                            <div class="form-group d-md-flex mt-3 ">
                                <div class="w-50">
                                    <label class="checkbox-wrap checkbox-primary">
                                        If You Registred
                                    </label>
                                </div>

                                <div class="w-50 text-md-right">
                                    <CustomLink class='bg-white text-primary' to={'/'}>
                                        Login
                                    </CustomLink >
                                </div>

                            </div>

                            <p className='mt-3 text-danger'>{error}</p>
                            <div class="form-group mt-3 mb-3">
                                <button type="submit" name="submit" class="form-control btn btn-success text-white rounded submit px-3">Sign Up</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;