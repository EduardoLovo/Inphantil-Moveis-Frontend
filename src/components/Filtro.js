import React, { useEffect, useState } from 'react';
import { CardApliques } from './Apliques/CardApliques/CardApliques';

export const Filtro = (props) => {
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

    console.log(filtrado);

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
                <div className="container">
                    {filtrado.map((aplique, index) => (
                        <div className="col " key={index}>
                            <CardApliques aplique={aplique} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
