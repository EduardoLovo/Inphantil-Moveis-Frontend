import React, { useState } from 'react';
import './MenuPrincipal.css';
import { JwtHandler } from '../../services/jwt_handler/jwt_handler';
import LogoutButton from '../Logout/Logout';

const MenuPrincipal = () => {
    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);
    // const isLogged = JwtHandler.isJwtValid

    return (
        <div className="sidebar">
            <ul className="menu">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/adicionar-novo-aplique">Novo aplique</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/contato">Contato</a>
                </li>
            </ul>
            <div>{isLogged && <LogoutButton />}</div>
        </div>
    );
};

export default MenuPrincipal;
