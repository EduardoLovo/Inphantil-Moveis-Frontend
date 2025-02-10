import React, { useState } from 'react';
import ModalTecidoParaLencois from '../ModalTecidoParaLencol/ModalTecidoParaLencol';

export const CardTecidoParaLencol = (props) => {
    const tecidoParaLencol = props.tecidoParaLencol;

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
                <img src={tecidoParaLencol.imagem} alt="Imagem do tecido" />
                <p>{tecidoParaLencol.codigo}</p>
            </div>

            {isModalOpen && (
                <ModalTecidoParaLencois
                    tecidoParaLencol={tecidoParaLencol}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};
