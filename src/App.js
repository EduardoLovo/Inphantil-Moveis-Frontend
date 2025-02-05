import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import { ApliquesCreate } from './pages/ApliquesCreate';
import MenuPrincipal from './components/MenuPrincipal/MenuPrincipal';

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
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
