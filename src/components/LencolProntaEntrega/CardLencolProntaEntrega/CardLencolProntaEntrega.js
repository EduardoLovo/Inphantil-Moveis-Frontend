import React, { useState } from 'react';
import { ModalLencolProntaEntrega } from '../ModalLencolProntaEntrega/ModalLencolProntaEntrega';
import './CardLencolProntaEntrega.css';

export const CardLencolProntaEntrega = (props) => {
    const lencol = props.lencol;

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
                className="contentCard-lencol-prontaentrega"
                onClick={openModal}
            >
                <img src={lencol.imagem} alt="Imagem do lençol" />
                <p>{lencol.codigo}</p>
                <p>{lencol.cor}</p>
            </div>

            {isModalOpen && (
                <ModalLencolProntaEntrega
                    lencol={lencol}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};
