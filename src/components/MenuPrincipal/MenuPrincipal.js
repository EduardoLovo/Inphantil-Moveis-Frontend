import React from 'react';
import './MenuPrincipal.css';
import { JwtHandler } from '../../services/jwt_handler/jwt_handler';
import LogoutButton from '../Logout/Logout';

const MenuPrincipal = () => {
    const isLogged = JwtHandler.isJwtValid();

    return (
        <div className="sidebar">
            <div>
                <p>Imagem</p>
            </div>
            <ul className="menu">
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/adicionar-novo-aplique">Novo Aplique</a>
                </li>
                <li>
                    <a href="/adicionar-novo-sintetico">Novo Sintetico</a>
                </li>

                <li>
                    <a href="/catalogo-de-apliques">Catalogo de Apliques</a>
                </li>
                <li>
                    <a href="/catalogo-de-sinteticos">Catalogo de Materiais</a>
                </li>
                <li>
                    <a href="/">Catalogo de Lençois</a>
                </li>
                <li>
                    <a href="/">Catalogo Pantone</a>
                </li>
            </ul>
            <div>{isLogged && <LogoutButton />}</div>
        </div>
    );
};

export default MenuPrincipal;
