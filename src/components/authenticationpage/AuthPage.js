import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';


export const AuthPage = () => {

    const { type } = useParams();

    return (
        <div>
            <div className='container py-3'>
                <Link
                    to="/"
                >
                    <div className="logo">

                    </div>
                </Link>
            </div>

            <div className='container d-flex justify-content-center align-items-center'>
                { type === 'login' ? <LoginForm /> : <RegisterForm /> }
            </div>

        </div>
    )
}
