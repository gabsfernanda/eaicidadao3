import React from 'react'

import Container from '../../components/container'
import Header from '../../components/header'

import './cadastro.css'

// const Cadastro = () => (<h1>Cadastro</h1>)

const Cadastro = () =>(
    <>
    <Header />
    <Container>
        <form>
            <div className="form--input">
                <input name="nome" type="nome" placeholder="Nome"></input>
            </div>
            <div className="form--input">
                <input name="user" type="user" placeholder="Usuário"></input>
            </div>
            <div className="form--input">
                <input name="email" type="email" placeholder="E-mail"></input>
            </div>
            <div className="form--input">
                <input name="senha" type="password" placeholder="Senha"></input>
            </div>
            <button>
                Cadastrar
            </button>
        </form>    
    </Container>
    </>
)

export default Cadastro