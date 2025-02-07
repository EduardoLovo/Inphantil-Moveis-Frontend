import React, { useState } from 'react';
import { ModalSinteticos } from '../ModalSinteticos/ModalSinteticos';

export const CardSinteticos = (props) => {
    const sintetico = props.sintetico;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="contentCard" onClick={openModal}>
                <img src={sintetico.imagem} alt="Imagem do sintetico" />
                <p>{sintetico.codigo}</p>
            </div>

            {isModalOpen && (
                <ModalSinteticos sintetico={sintetico} onClose={closeModal} />
            )}
        </div>
    );
};
