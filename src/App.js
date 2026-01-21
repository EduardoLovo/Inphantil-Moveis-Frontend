import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import MenuPrincipal from './components/MenuPrincipal/MenuPrincipal';
import { ApliquesCreate } from './pages/Apliques/ApliquesCreate';
import { ApliquesCatalogo } from './pages/Apliques/ApliquesCatalogo';
import { SinteticoCatalogo } from './pages/Sinteticos/SinteticosCatalogo';
import { SinteticoCreate } from './pages/Sinteticos/SinteticoCreate';
import { TecidosParaLencolCatalogo } from './pages/Tecidos/TecidosCatalogo';
import { TecidoParaLencolCreate } from './pages/Tecidos/TecidoCreate';
import { LencolProntaEntregaCatalogo } from './pages/LencolProntaEntrega/LencolProntaEntregaCatalogo';
import { LencolProntaEntregaCreate } from './pages/LencolProntaEntrega/LencolProntaEntregaCreate';
import Cama3D from './pages/Camas3D/Camas3D';
import { CalculadoraNova } from './pages/Calculadoras/CalculadoraNova';
import { Calculadora6040 } from './pages/Calculadoras/Calculadora6040';
import { PantoneCatalogo } from './pages/Pantone/PantoneCatalogo';
import { ApliquesParaCortar } from './pages/Apliques/ApliquesParaCortar/ApliquesParaCortar';
import { ApliquesParaComprar } from './pages/Apliques/ApliquesParaComprar/ApliquesparaComprar';
import { ApliquesParaCabana } from './pages/Apliques/ApliquesParaCabana/ApliquesParaCabana';
import { PantoneCreate } from './pages/Pantone/PantoneCreate';
import { ComposicaoTecidoComAplique } from './pages/Composicao/ComposicaoTecidoComAplique';
import { ToastContainer } from 'react-toastify';
import { ComposicaoDeSintetico } from './pages/Composicao/ComposicaoDeSintetico';
import { Desenhos } from './pages/Desenhos/Desenhos';
import { SinteticoParaTapetes } from './pages/SinteticosParaTapetes/SinteticoParaTapetes';

function App() {
    return (
        <div>
            <MenuPrincipal />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="containerApp">
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route path="/" element={<Home />} />
                    {/* Rotas Apliques */}
                    <Route
                        path="/catalogo-de-apliques"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ApliquesCatalogo />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/apliques-para-comprar"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ApliquesParaComprar />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/catalogo-de-apliques-para-cabana"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ApliquesParaCabana />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/adicionar-novo-aplique"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ApliquesCreate />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/apliques-para-cortar"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ApliquesParaCortar />
                            </PrivateRoute>
                        }
                    />
                    {/* Rotas Sinteticos */}
                    <Route
                        path="/catalogo-de-sinteticos"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <SinteticoCatalogo />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/catalogo-de-sinteticos-para-tapetes"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <SinteticoParaTapetes />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/adicionar-novo-sintetico"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <SinteticoCreate />
                            </PrivateRoute>
                        }
                    />
                    {/* Rotas Tecidos */}
                    <Route
                        path="/catalogo-de-tecidos-para-lencol"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <TecidosParaLencolCatalogo />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/adicionar-novo-tecido-para-lencol"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <TecidoParaLencolCreate />
                            </PrivateRoute>
                        }
                    />
                    {/* Rotas Lençois */}
                    <Route
                        path="/catalogo-de-lencol-pronta-entrega"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <LencolProntaEntregaCatalogo />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/adicionar-novo-lencol-pronta-entrega"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <LencolProntaEntregaCreate />
                            </PrivateRoute>
                        }
                    />
                    {/* Rotas Pantone */}
                    <Route
                        path="/catalogo-pantone"
                        element={<PantoneCatalogo />}
                    />
                    <Route
                        path="/adicionar-novo-pantone"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <PantoneCreate />
                            </PrivateRoute>
                        }
                    />
                    {/* Rotas Composições */}
                    <Route
                        path="/composicao-tecido-com-aplique"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ComposicaoTecidoComAplique />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/composicao-de-sinteticos"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ComposicaoDeSintetico />
                            </PrivateRoute>
                        }
                    />
                    {/* Rota Cama 3D */}
                    <Route path="/camas-3D" element={<Cama3D />} />
                    {/* Rotas calculadoras */}
                    <Route
                        path="/calculadora-nova"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <CalculadoraNova />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/calculadora-6040"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <Calculadora6040 />
                            </PrivateRoute>
                        }
                    />
                    {/* Rotas desenhos */}
                    <Route
                        path="/desenhos"
                        element={
                            <PrivateRoute redirectTo="/login">
                                <Desenhos />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
