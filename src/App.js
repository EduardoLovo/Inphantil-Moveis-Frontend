import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import MenuPrincipal from './components/MenuPrincipal/MenuPrincipal';
import { ApliquesCreate } from './pages/Apliques/ApliquesCreate';
import { ApliquesCatalogo } from './pages/Apliques/ApliquesCatalogo';

function App() {
    return (
        <div className="containerApp">
            <MenuPrincipal />

            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute redirectTo="/login">
                            <Home />
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
                <Route path="/login" element={<Login />} />
                <Route
                    path="/catalogo-de-apliques"
                    element={<ApliquesCatalogo />}
                />
            </Routes>
        </div>
    );
}

export default App;
