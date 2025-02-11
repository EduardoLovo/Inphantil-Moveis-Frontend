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

function App() {
    return (
        <div className="containerApp">
            <MenuPrincipal />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <PrivateRoute redirectTo="/login">
                            <Home />
                        </PrivateRoute>
                    }
                />
                {/* Rotas Apliques */}
                <Route
                    path="/catalogo-de-apliques"
                    element={<ApliquesCatalogo />}
                />
                <Route
                    path="/adicionar-novo-aplique"
                    element={
                        <PrivateRoute redirectTo="/login">
                            <ApliquesCreate />
                        </PrivateRoute>
                    }
                />
                {/* Rotas Sinteticos */}
                <Route
                    path="/catalogo-de-sinteticos"
                    element={<SinteticoCatalogo />}
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
                    element={<TecidosParaLencolCatalogo />}
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
                    element={<LencolProntaEntregaCatalogo />}
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
                <Route path="/catalogo-pantone" element={<PantoneCatalogo />} />
                {/* <Route
                    path="/adicionar-novo-lencol-pronta-entrega"
                    element={
                        <PrivateRoute redirectTo="/login">
                            <LencolProntaEntregaCreate />
                        </PrivateRoute>
                    }
                /> */}
                {/* Rota Cama 3D */}
                <Route path="/camas-3D" element={<Cama3D />} />
                {/* Rotas calculadoras */}
                <Route path="/calculadora-nova" element={<CalculadoraNova />} />
                <Route path="/calculadora-6040" element={<Calculadora6040 />} />
            </Routes>
        </div>
    );
}

export default App;
