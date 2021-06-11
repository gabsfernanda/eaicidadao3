import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Cadastro from '../pages/cadastro';
import Feed from '../pages/feed';
import Login from '../pages/login';
import Perfil from '../pages/perfil';
import Post from '../pages/post';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/post" component={Post} />
    </BrowserRouter>
);

export default Routes;