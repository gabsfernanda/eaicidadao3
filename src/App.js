import React from 'react';

// const App = () => <h1>Minha aplicação</h1>
import Container from './components/container'
import Footer from './components/footer'
import Header from './components/header'
import Routes from './components/Route.js'

const App = () => (
    <>
        <Header />
        <Container>
            <Routes />
        </Container>
        <Footer />
    </>
)

export default App;
