import React from 'react';
import './MenuPrincipal.css';
import { JwtHandler } from '../../services/jwt_handler/jwt_handler';
import LogoutButton from '../Logout/Logout';
import { Link } from 'react-router-dom';

const MenuPrincipal = () => {
    const isLogged = JwtHandler.isJwtValid();

    return (
        <div className="sidebar">
            <div>
                <img src="/images/logo.png" alt="logo" />
            </div>
            <ul className="menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/adicionar-novo-aplique">Novo Aplique</Link>
                </li>
                <li>
                    <Link to="/adicionar-novo-sintetico">Novo Sintetico</Link>
                </li>
                <li>
                    <Link to="/adicionar-novo-tecido-para-lencol">
                        Novo Tecido
                    </Link>
                </li>
                <li>
                    <Link to="/adicionar-novo-lencol-pronta-entrega">
                        Novo Lençol
                    </Link>
                </li>

                <li>
                    <Link to="/catalogo-de-apliques">Catálogo de Apliques</Link>
                </li>
                <li>
                    <Link to="/catalogo-de-sinteticos">
                        Catálogo de Materiais
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo-de-tecidos-para-lencol">
                        Catálogo de Tecidos
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo-de-lencol-pronta-entrega">
                        Catálogo de Lençois
                    </Link>
                </li>
                <li>
                    <Link to="/">Catálogo Pantone</Link>
                </li>
            </ul>
            <div>{isLogged && <LogoutButton />}</div>
        </div>
    );
};

export default MenuPrincipal;
