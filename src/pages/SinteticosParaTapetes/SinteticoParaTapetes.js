import React from 'react';
import { ListaDeSinteticosPataTapetes } from '../../components/Sinteticos/ListaDeSinteticos/ListaDeSinteticosParaTapetes';

export const SinteticoParaTapetes = () => {
    return (
        <div>
            <div className="avisoCatalogoSintetico">
                <h3>***MUITO IMPORTANTE***</h3>
                <p className="">
                    O tom das cores pode alterar de aparelho para aparelho.
                </p>
                <p className="">
                    Utilize o brilho da tela no máximo para visualizar o tom
                    mais próximo possível do real.
                </p>
            </div>

            <div>
                <ListaDeSinteticosPataTapetes />
            </div>
        </div>
    );
};
