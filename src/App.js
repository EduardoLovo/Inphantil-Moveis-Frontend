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
            </Routes>
        </div>
    );
}

export default App;
