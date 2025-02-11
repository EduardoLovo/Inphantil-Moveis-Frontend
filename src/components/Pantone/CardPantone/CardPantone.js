import React, { useState } from 'react';
// import './CardApliques.css';
import Modal from '../ModalPantone/ModalPantone';

export const CardPantone = (props) => {
    const pantone = props.pantone;

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
                <img src={pantone.imagem} alt="Imagem do pantone" />
                <p>{pantone.codigo}</p>
            </div>

            {isModalOpen && <Modal pantone={pantone} onClose={closeModal} />}
        </div>
    );
};
