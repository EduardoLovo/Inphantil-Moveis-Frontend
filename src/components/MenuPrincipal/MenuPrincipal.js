import React, { useEffect, useState } from 'react';
import './MenuPrincipal.css';
import { JwtHandler } from '../../services/jwt_handler/jwt_handler';
import LogoutButton from '../Logout/Logout';
import { Link } from 'react-router-dom';

const MenuPrincipal = () => {
    const isLogged = JwtHandler.isJwtValid();

    const [menuAberto, setMenuAberto] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 481);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 481);
            if (window.innerWidth >= 481) {
                setMenuAberto(false); // Fecha o menu automaticamente se a tela aumentar
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Botão Hambúrguer */}
            {isMobile && (
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            )}
            <div className={`sidebar ${menuAberto ? 'open' : ''}`}>
                <div>
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <ul className="menu">
                    <li>
                        <Link onClick={toggleMenu} to="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/adicionar-novo-aplique">
                            Novo Aplique
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            to="/adicionar-novo-sintetico"
                        >
                            Novo Sintetico
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            to="/adicionar-novo-tecido-para-lencol"
                        >
                            Novo Tecido
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            to="/adicionar-novo-lencol-pronta-entrega"
                        >
                            Novo Lençol
                        </Link>
                    </li>

                    <li>
                        <Link onClick={toggleMenu} to="/catalogo-de-apliques">
                            Catálogo de Apliques
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/catalogo-de-sinteticos">
                            Catálogo de Materiais
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            to="/catalogo-de-tecidos-para-lencol"
                        >
                            Catálogo de Tecidos
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            to="/catalogo-de-lencol-pronta-entrega"
                        >
                            Catálogo de Lençois
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/">
                            Catálogo Pantone
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/camas-3D">
                            Camas 3D
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/calculadora-nova">
                            Calculadora Nova
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} to="/calculadora-6040">
                            Calculadora 6040
                        </Link>
                    </li>
                </ul>
                <div>{isLogged && <LogoutButton />}</div>
            </div>
        </>
    );
};

export default MenuPrincipal;
