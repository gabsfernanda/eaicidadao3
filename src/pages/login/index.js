import React from 'react'
import Container from '../../components/container'
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import './login.css'

import FacebookIcon from '@material-ui/icons/Facebook';
import { IoLogoGoogle } from "react-icons/io5";

// const Login = () => <h1>Login</h1>
const Login = () => (
    <>
        <Header />
        <Container>
            <div className="componentes-login">
                <button className="botao">
                    <FacebookIcon />    Login pelo Facebook
                </button>
                <button className="botao">
                    <IoLogoGoogle />    Login pelo Google
                </button>

                <form>
                    <div className="form--input">
                        <input name="email" type="email" placeholder="E-mail"></input>
                    </div>
                    <div className="form--input">
                        <input name="senha" type="password" placeholder="Senha"></input>
                    </div>
                    <button className="botao">
                        Entrar
                    </button>
                    <div className="form--input">
                        Não tem conta?
                        <Link className="button-cadastro" to="/cadastro">
                            Cadastre-se
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    </>
)

export default Login;