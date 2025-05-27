import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"

export function Login() {
    
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();



    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    const autenticar = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', {
            email: loginForm.email, 
            password: loginForm.password
        }).then((response) => {
            localStorage.setItem("miToken", response.data.token);
            navigate('/torneos')
        })
        .catch(() => {
            toast("Error en las credenciales");
        });
    } 
    return <>
        <div classNameName="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div classNameName="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Iniciar Sesion</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={autenticar}>
            <div>
                <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div className="mt-2">
                <input onInput={handleInput} type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label 
                for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
                </div>
                <div className="mt-2">
                <input type="password" onInput={handleInput} name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            </form>
        </div>
              <ToastContainer />
        </div>
    </>
}