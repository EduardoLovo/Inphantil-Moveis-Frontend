import React, { useEffect, useState } from 'react';
import './Desenhos.css';
import { NuvemSVG } from '../../components/Desenhos/Nuvem';

export const Desenhos = () => {
    const [selectedColor, setSelectedColor] = useState('#ccc'); // Cor selecionada no input
    const [appliedColor, setAppliedColor] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor2, setAppliedColor2] = useState('#ccc'); // Cor aplicada no SVG
    const [codigoCor, setCodigoCor] = useState(''); // Cor aplicada no SVG
    const [codigoCor2, setCodigoCor2] = useState(''); // Cor aplicada no SVG

    // Ao clicar na imagem, a cor do input é aplicada ao SVG
    const handleSVGClick = (e) => {
        const cor = e.target.id;
        console.log(e.target.id);
        console.log(selectedColor);

        if (cor === 'cor1') {
            setAppliedColor(selectedColor);
        } else {
            setAppliedColor2(selectedColor);
        }
    };

    const listaDeCores = [
        { codigo: 'am1', hex: '#ffd653' },
        {
            codigo: 'am14',
            hex: '#f4e0ad',
        },
        {
            codigo: 'am19',
            hex: '#eedc9c',
        },
        {
            codigo: 'am21',
            hex: '#e6d3a6',
        },
        {
            codigo: 'am24',
            hex: '#e7e0d1',
        },
        {
            codigo: 'az1',
            hex: '#3b3d4b',
        },
        {
            codigo: 'az3',
            hex: '#586c8a',
        },
        {
            codigo: 'az5',
            hex: '#415997',
        },
        {
            codigo: 'az6',
            hex: '#718db1',
        },
        {
            codigo: 'az10',
            hex: '#9ebdd0',
        },
        {
            codigo: 'az11',
            hex: '#c4ced6',
        },
        {
            codigo: 'b3',
            hex: '#a49d90',
        },
        {
            codigo: 'b6',
            hex: '#c4bcad',
        },
        {
            codigo: 'b8',
            hex: '#dad6cb',
        },
        {
            codigo: 'b10',
            hex: '#e1d7c6',
        },
        {
            codigo: 'b19',
            hex: '#baaa95',
        },
        {
            codigo: 'bc1',
            hex: '#ffffff',
        },
        {
            codigo: 'bc6',
            hex: '#e9e9e7',
        },
        {
            codigo: 'cz1',
            hex: '#505557',
        },
        {
            codigo: 'cz3',
            hex: '#999a98',
        },
        {
            codigo: 'cz6',
            hex: '#b4b7ba',
        },
        {
            codigo: 'cz25n',
            hex: '#c7c8ca',
        },
        {
            codigo: 'cz26n',
            hex: '#c8cacb',
        },
        {
            codigo: 'l2',
            hex: '#795999',
        },
        {
            codigo: 'l3',
            hex: '#bca0cc',
        },
        {
            codigo: 'l5',
            hex: '#c4aed0',
        },
        {
            codigo: 'l11',
            hex: '#d4c7d9',
        },
        {
            codigo: 'lj1',
            hex: '#d26a3e',
        },
        {
            codigo: 'lj3',
            hex: '#f6ad99',
        },
        {
            codigo: 'lj7',
            hex: '#ebc594',
        },
        {
            codigo: 'lj11',
            hex: '#de948f',
        },
        {
            codigo: 'lj21',
            hex: '#f8bf9a',
        },
        {
            codigo: 'm3',
            hex: '#bc9d6e',
        },
        {
            codigo: 'r1',
            hex: '#ce567e',
        },
        {
            codigo: 'r12',
            hex: '#e0c7d2',
        },
        {
            codigo: 'r16',
            hex: '#d4a299',
        },
        {
            codigo: 'r17',
            hex: '#cda7a0',
        },
        {
            codigo: 'r22',
            hex: '#efc5be',
        },
        {
            codigo: 'r24',
            hex: '#e7b7cf',
        },
        {
            codigo: 'r25',
            hex: '#ce9694',
        },
        {
            codigo: 'r32',
            hex: '#decdbf',
        },
        {
            codigo: 'r33',
            hex: '#ead2c6',
        },
        {
            codigo: 'rb1',
            hex: '#e1b8b9',
        },
        {
            codigo: 'rb2',
            hex: '#e9c8ca',
        },
        {
            codigo: 'rb4',
            hex: '#eed7d9',
        },
        {
            codigo: 't1',
            hex: '#94dbe0',
        },
        {
            codigo: 't2',
            hex: '#00adad',
        },
        {
            codigo: 't12',
            hex: '#dbb6d9',
        },
        {
            codigo: 'vd1',
            hex: '#817d6a',
        },
        {
            codigo: 'vd6n',
            hex: '#808a73',
        },
        {
            codigo: 'vd7n',
            hex: '#829e86',
        },
        {
            codigo: 'vd16',
            hex: '#a7ceb9',
        },
        {
            codigo: 'vd21',
            hex: '#a3bca6',
        },
        {
            codigo: 'vd22',
            hex: '#a3ac9b',
        },
        {
            codigo: 'vd23',
            hex: '#a8decc',
        },
        {
            codigo: 'vd25',
            hex: '#bfcab4',
        },
        {
            codigo: 'vd36',
            hex: '#a8d0bd',
        },
        {
            codigo: 'vd39',
            hex: '#bdd5bc',
        },
        {
            codigo: 'vm1',
            hex: '#7a393e',
        },
        {
            codigo: 'vm3',
            hex: '#863339',
        },
        {
            codigo: 'vm5',
            hex: '#cc333d',
        },
    ];

    useEffect(() => {
        setCodigoCor(listaDeCores.find((cor) => cor.hex === appliedColor));
        setCodigoCor2(listaDeCores.find((cor) => cor.hex === appliedColor2));
    }, [appliedColor, appliedColor2]);

    return (
        <div>
            <h1>Escolha uma cor e clique na imagem para aplicar</h1>
            <div className="botoesCoresDesenho">
                {listaDeCores.map((cor, index) => (
                    <button
                        type="button"
                        value={cor.hex}
                        onClick={(e) => {
                            setSelectedColor(e.target.value);
                        }}
                        className={
                            selectedColor === cor.hex ? 'selected' : cor.codigo
                        }
                    >
                        {cor.codigo.toUpperCase()}
                    </button>
                ))}
            </div>
            <NuvemSVG
                color={appliedColor}
                color2={appliedColor2}
                onClick={handleSVGClick}
            />
            <div className='resultadoNomeDasCores'>
                <p>
                    {codigoCor?.codigo?.toUpperCase()} -{' '}
                    {codigoCor2?.codigo?.toUpperCase()} -{' '}
                    {codigoCor2?.codigo?.toUpperCase()} -{' '}
                    {codigoCor?.codigo?.toUpperCase()}
                </p>
            </div>
        </div>
    );
};
