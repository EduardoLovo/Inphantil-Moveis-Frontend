import React, { useState } from 'react';
import './CardApliques.css';
import Modal from '../ModalAplique/ModalAplique';

export const CardApliques = (props) => {
    const aplique = props.aplique;

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
                <img src={aplique.imagem} />
                <p>{aplique.codigo}</p>
            </div>

            {isModalOpen && <Modal aplique={aplique} onClose={closeModal} />}
        </div>
    );
};
