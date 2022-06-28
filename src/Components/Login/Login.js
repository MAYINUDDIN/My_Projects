
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Components/icon/logo.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [emails, setEmails] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (googleUser) {
        navigate('/ekok');
    }

    if (user) {
        navigate('/ekok');
    }

    const handleSignIn = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);

    }




    return (
        <div>
            <div className="row justify-content-center">


                <div className="col-md-4 p-5">
                    <h3 className='mt-5 text-sm lg:text-lg text-success font-bold drop-shadow mb-3'>WELCOME TO FAREAST BUSINESS <span >DASHBOARD</span> </h3>

                    <div class="shadow p-3 mb-5 bg-body rounded">

                        <div className='flex justify-center'>
                            <img className=' w-24  lg:w-28 shadow rounded-full p-2' src={logo} alt="" />

                        </div>


                        <form onSubmit={handleSignIn}>
                            <div class="form-group d-flex mt-5 m-3 justify-center">
                                <input type="text" name="email" onChange={(e) => setEmails(e.target.value)} class="form-control rounded rounded-left input input-bordered w-80" placeholder="Username" required />
                            </div>

                            <div class="form-group d-flex mt-3 m-3 justify-center rounded">
                                <input type="password" name="password" class="form-control rounded-left input input-bordered rounded w-80" placeholder="Password" required />
                            </div>
                            <div class="form-group d-md-flex mt-3 ">
                                <div class="w-50">
                                    {/* <label class="checkbox-wrap checkbox-primary">
                                        You are not Registred?
                                    </label> */}
                                </div>
                                <div class="w-50 text-md-right">
                                    {/* <CustomLink class='bg-white text-primary' to={'/register'}>
                                        Create Account
                                    </CustomLink > */}

                                    {/* <button className='bg-transparent border-0 text-primary' onClick={async () => {
                                        await sendPasswordResetEmail(emails);
                                        toast("Wow so sent email!");
                                    }}> Forgot Password</button>
                                    <ToastContainer /> */}

                                </div>
                            </div>
                            <p className='text-danger'>{error?.message}</p>
                            {
                                loading && <p className='text-success'>Loading...</p>
                            }

                            {/* <div class="form-group mt-3 mb-3">
                                <button type="submit" name="submit" class="form-control btn btn-success text-white font-bold w-96 rounded submit px-3">Login</button>
                            </div> */}
                            <div class="form-group d-flex mt-2 m-3 mb-3 justify-center ">
                                <button type="submit" name="submit" className='w-64  btn btn-success text-white font-bold lg:w-80 px-12 rounded '>LOGIN</button>
                            </div>


                        </form>



                    </div>
                </div>
            </div>

        </div >
    );
};

export default Login;