import React, { useState } from 'react';
import './CardApliques.css';
import Modal from '../ModalAplique/ModalAplique';

export const CardApliques = (props) => {
    const aplique = props.aplique;
    const tipo = props.tipo;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div
                className={` contentCard ${
                    tipo === 'adm' && aplique.estoque === true
                        ? 'sombra-verde'
                        : tipo === 'adm' &&
                          aplique.estoque === false &&
                          'sombra-vermelha'
                }`}
                onClick={openModal}
            >
                <img src={aplique.imagem} alt="Imagem do aplique" />
                <p>{aplique.codigo}</p>
            </div>

            {isModalOpen && <Modal aplique={aplique} onClose={closeModal} />}
        </div>
    );
};
