import React from 'react'

import Container from '../../components/container'
import Header from '../../components/header'

import { Link } from 'react-router-dom'

import './login.css'

// const Login = () => <h1>Login</h1>
const Login = () => (
    <>
        <Header />
        <Container>
            <form>
                <div className="form--input">
                    <input name="email" type="email" placeholder="E-mail"></input>
                </div>
                <div className="form--input">
                    <input name="senha" type="password" placeholder="Senha"></input>
                </div>
                <button>
                    Entrar
                </button>
                <div className="footerLogin">
                    Não tem conta?
                    <Link className="button-cadastro" to="/cadastro">
                        Cadastre-se
                    </Link>
                </div>
            </form>
        </Container>
    </>
)

export default Login;