import React, { useEffect, useState } from 'react';
import { CardApliques } from './Apliques/CardApliques/CardApliques';

export const Filtro = (props) => {
    // const isLogged = JwtHandler.isJwtValid();
    const userRaw = localStorage.getItem('user');
    const user = userRaw ? JSON.parse(userRaw) : null;

    const tipo = user?.tipo || 'desconhecido';

    const apliques = props.apliques;
    const texto = props.texto;

    console.log(apliques);

    const [filtrado, setFiltrado] = useState([]);

    useEffect(() => {
        const results = apliques.filter((resp) =>
            resp.codigo.toLowerCase().includes(texto.toLowerCase())
        );
        setFiltrado(results);

        // eslint-disable-next-line
    }, [texto]);

    function compare(a, b) {
        if (a.codigo < b.codigo) return -1;
        if (a.codigo > b.coodigo) return 1;
        return 0;
    }

    filtrado.sort(compare);

    return (
        <div>
            {texto === '' ? (
                ''
            ) : (
                <div className="contentListaDeApliques">
                    {filtrado.map((aplique, index) => (
                        <div className="" key={index}>
                            {tipo !== 'adm' &&
                            aplique.estoque === false &&
                            aplique.quantidade === 0 ? (
                                ''
                            ) : (
                                <CardApliques aplique={aplique} tipo={tipo} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
