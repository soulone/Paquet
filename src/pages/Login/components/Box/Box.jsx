import React, { userState, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import '../Box/Box.css';

import Logo from '../../../../commons/Logo/Logo';
import Input from '../../../../commons/Input/Input';
import ButtonPrimary from '../../../../commons/Button-Primary/Button-Primary';
import LinkOnly from '../Link/Link'
import LinkText from '../Link-Text/Link-Text'


const Box = () => {

    // [DECLARATIONS]    
    const [user, setUser] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);



    const open = true;


    const [errors, setErrors] = useState({
        usernameError: false,
        passwordError: false
    })

    //[READ THE STATE]
    function handleChange(name, value) {
        if (name === 'nickname') {
            setUser(value);
        } else {
            setPassword(value);
        }

        console.log('nickname :', user)
        console.log('password :', password)
    }

    function showErrors() {
        setHasErrors(true);
        setErrors({ usernameError: true, passwordError: true })
    }

    function stopIsLoading() {
        setIsLoading(false);
        showErrors();
    }


    // [VERIFY AND SAVE IN LOCAL STORAGE]
    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'admin' && param.password === 'admin') {
                const { user, password } = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                console.log(account);
                localStorage.setItem('account', account);
                setIsLogin(true);
                setTimeout(() => setIsLogin(true), 2000)
            } else {
                setIsLogin(false);
                setTimeout(() => stopIsLoading(), 2000)
            }
        } else {
            setIsLogin(false);
            setTimeout(() => stopIsLoading(), 2000)
        }
    }

    //[SEND USER PASS INTO ACCOUNT]
    function handleSubmit() {
        let account = { user, password };
        if (account) {
            console.log('account :', account)
        }
        ifMatch(account);
    }

    //CLEAR MESSAGES

    function clearErrorModal() {
        setHasErrors(false);
        setErrors({ usernameError: false, passwordError: false })
    }

    let params = 
        errors.usernameError === false &&
        errors.passwordError === false
    ;

    return (

        <>

            { isLogin && <Redirect to='/dashboard' />}

            <div className="box">
                <Logo />
                <div>
                    <h2>Login to Ship Manager</h2>
                    <p>Your favorite tracker for your packages.</p>
                </div>
                <div>
                    <Input
                        attribute={{
                            id: 'nickname',
                            name: 'nickname',
                            type: 'text',
                            placeholder: 'Enter your nickname',
                        }}
                        handleChange={handleChange}
                    />

                    <Input
                        attribute={{
                            id: 'password',
                            name: 'password',
                            type: 'password',
                            placeholder: 'Enter your password',
                        }}
                        handleChange={handleChange}
                    />

                </div>
                <div>
                    <ButtonPrimary
                        attribute={{
                            id: 'btn-login',
                            name: 'btn-login',
                            type: 'submit',
                        }}
                        event={handleSubmit}
                        btnText="Login"
                    />
                    <LinkOnly
                        linkText="Forgot/Reset my password or nickname?"
                    />
                </div>

                <LinkText
                    label="Are you a new user ?,"
                    linkText="Create a new account"
                />
            </div>
        </>
    )
};

export default Box;