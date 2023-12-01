import React from 'react';
import {useEffect,useRef,useState} from 'react';
import {Inertia} from '@inertiajs/inertia';
import Main from "@/Layouts/Main.jsx";
import LoginLayout from "@/Layouts/LoginLayout.jsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/login', {
            email,
            password,
        });
    };

    return (
        <div>

        </div>


    );
};

export default Login;
