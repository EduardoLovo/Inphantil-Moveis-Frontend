import React, { useEffect, useRef, useState } from 'react';
import './MenuPrincipal.css';
import { JwtHandler } from '../../services/jwt_handler/jwt_handler';
import LogoutButton from '../Logout/Logout';
import { Link } from 'react-router-dom';

const MenuPrincipal = () => {
    const isLogged = JwtHandler.isJwtValid();
    const [menuAberto, setMenuAberto] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 481);
    const menuRef = useRef(null); // Referência ao menu

    const userRaw = localStorage.getItem('user');
    const user = userRaw ? JSON.parse(userRaw) : null;

    const tipo = user?.tipo || 'desconhecido';

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    // Fecha o menu se clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuAberto(false);
            }
        };

        if (menuAberto) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuAberto]);

    // Fecha o menu ao redimensionar a tela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
            if (window.innerWidth >= 700) {
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
                <div className="content-menu-toggle">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            )}
            {!isLogged && (
                <div
                    ref={menuRef}
                    className={`sidebar ${menuAberto ? 'open' : ''}`}
                >
                    <div>
                        <Link onClick={toggleMenu} to="/">
                            <img src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <ul className="menu">
                        <p className="titulo-no-menu">Camas em 3D:</p>
                        <li>
                            <Link onClick={toggleMenu} to="/camas-3D">
                                Camas 3D
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Composições:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/composicao-tecido-com-aplique"
                            >
                                Composição de Lençois
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/composicao-de-sinteticos"
                            >
                                Composição de Materiais
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Catálogos:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-apliques"
                            >
                                Catálogo de Apliques
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-apliques-para-cabana"
                            >
                                Catálogo de Apliques para Cabana
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-sinteticos"
                            >
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
                            <Link onClick={toggleMenu} to="/catalogo-pantone">
                                Catálogo Pantone
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Sites:</p>
                        <li>
                            <a
                                href="https://www.inphantil.com.br/informacoes/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Informações
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.inphantil.com.br/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Inphantil Site
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/inphantil/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://api.whatsapp.com/send?phone=5561982388828"
                                rel="noreferrer"
                                target="_blank"
                            >
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                    <div>{isLogged && <LogoutButton />}</div>
                </div>
            )}
            {isLogged && tipo === 'vendas' && (
                <div
                    ref={menuRef}
                    className={`sidebar ${menuAberto ? 'open' : ''}`}
                >
                    <div>
                        <Link onClick={toggleMenu} to="/">
                            <img src="/images/logo.png" alt="logo" />
                        </Link>{' '}
                    </div>
                    <ul className="menu">
                        <p className="titulo-no-menu">Camas em 3D:</p>
                        <li>
                            <Link onClick={toggleMenu} to="/camas-3D">
                                Camas 3D
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Composições:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/composicao-tecido-com-aplique"
                            >
                                Composição de Lençois
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/composicao-de-sinteticos"
                            >
                                Composição de Materiais
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/desenhos">
                                Desenhos
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Catálogos:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-apliques"
                            >
                                Catálogo de Apliques
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-apliques-para-cabana"
                            >
                                Catálogo de Apliques para Cabana
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-sinteticos"
                            >
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
                            <Link onClick={toggleMenu} to="/catalogo-pantone">
                                Catálogo Pantone
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Calculadoras:</p>

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
            )}
            {isLogged && tipo === 'adm' && (
                <div
                    ref={menuRef}
                    className={`sidebar ${menuAberto ? 'open' : ''}`}
                >
                    <div>
                        <Link onClick={toggleMenu} to="/">
                            <img src="/images/logo.png" alt="logo" />
                        </Link>{' '}
                    </div>
                    <ul className="menu">
                        <p className="titulo-no-menu">Adm:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/apliques-para-comprar"
                            >
                                Apliques para Comprar
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/apliques-para-cortar"
                            >
                                Apliques para Cortar
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Camas em 3D:</p>
                        <li>
                            <Link onClick={toggleMenu} to="/camas-3D">
                                Camas 3D
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Composições:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/composicao-tecido-com-aplique"
                            >
                                Composição de Lençois
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/composicao-de-sinteticos"
                            >
                                Composição de Materiais
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/desenhos">
                                Desenhos
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Catálogos:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-apliques"
                            >
                                Catálogo de Apliques
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-apliques-para-cabana"
                            >
                                Catálogo de Apliques para Cabana
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/catalogo-de-sinteticos"
                            >
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
                            <Link onClick={toggleMenu} to="/catalogo-pantone">
                                Catálogo Pantone
                            </Link>
                        </li>
                        <p className="titulo-no-menu">Calculadoras:</p>

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
                        <p className="titulo-no-menu">Adicionar Novo:</p>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                to="/adicionar-novo-aplique"
                            >
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
                            <Link
                                onClick={toggleMenu}
                                to="/adicionar-novo-pantone"
                            >
                                Novo Pantone
                            </Link>
                        </li>
                    </ul>
                    <div>{isLogged && <LogoutButton />}</div>
                </div>
            )}
        </>
    );
};

export default MenuPrincipal;
