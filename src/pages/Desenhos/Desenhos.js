import React, { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './Desenhos.css';
import { NuvemSVG } from '../../components/Desenhos/NuvemSVG';
import { MontanhaSVG } from '../../components/Desenhos/MontanhaSVG';
import { toast } from 'react-toastify';
import { EncaixeSVG } from '../../components/Desenhos/EncaixeSVG';
import { CamaSVG } from '../../components/Desenhos/CamaSvg';
import { PicoSVG } from '../../components/Desenhos/PicoSVG';
import { NuvemUmaParedeSVG } from '../../components/Desenhos/NuvemUmaParedeSVG';
import { MontanhaUmaParedeSVG } from '../../components/Desenhos/MontanhaUmaParedeSVG';
import { PoltronaSVG } from '../../components/Desenhos/PoltronaSVG';
import { OndaSVG } from '../../components/Desenhos/OndaSVG';
import { TapeteSvg } from '../../components/Desenhos/TapeteSvg';

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
        hex: '#bfc6c9',
    },
    {
        codigo: 'cz26n',
        hex: '#cbcbcb',
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
        codigo: 'lj2',
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
        hex: '#BDD6D9',
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

export const Desenhos = () => {
    const [selectedColor, setSelectedColor] = useState('#ccc'); // Cor selecionada no input
    const [appliedColor, setAppliedColor] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor2, setAppliedColor2] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor3, setAppliedColor3] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor4, setAppliedColor4] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor5, setAppliedColor5] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor6, setAppliedColor6] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor7, setAppliedColor7] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor8, setAppliedColor8] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor9, setAppliedColor9] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor10, setAppliedColor10] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor11, setAppliedColor11] = useState('#ccc'); // Cor aplicada no SVG
    const [appliedColor12, setAppliedColor12] = useState('#ccc');
    const [appliedColor13, setAppliedColor13] = useState('#ccc');
    const [appliedColor14, setAppliedColor14] = useState('#ccc');
    const [appliedColor15, setAppliedColor15] = useState('#ccc');
    const [appliedColor16, setAppliedColor16] = useState('#ccc');
    const [appliedColor17, setAppliedColor17] = useState('#ccc');
    const [codigoCor, setCodigoCor] = useState(''); // Cor aplicada no SVG
    const [codigoCor2, setCodigoCor2] = useState(''); // Cor aplicada no SVG
    const [codigoCor3, setCodigoCor3] = useState(''); // Cor aplicada no SVG
    const [codigoCor4, setCodigoCor4] = useState(''); // Cor aplicada no SVG
    const [codigoCor5, setCodigoCor5] = useState(''); // Cor aplicada no SVG
    const [codigoCor6, setCodigoCor6] = useState(''); // Cor aplicada no SVG
    const [codigoCor7, setCodigoCor7] = useState(''); // Cor aplicada no SVG
    const [codigoCor8, setCodigoCor8] = useState(''); // Cor aplicada no SVG
    const [codigoCor9, setCodigoCor9] = useState(''); // Cor aplicada no SVG
    const [codigoCor10, setCodigoCor10] = useState(''); // Cor aplicada no SVG
    const [codigoCor11, setCodigoCor11] = useState(''); // Cor aplicada no SVG
    const [codigoCor12, setCodigoCor12] = useState(''); //
    const [codigoCor13, setCodigoCor13] = useState(''); // Cor aplicada no SVG
    const [codigoCor14, setCodigoCor14] = useState(''); // Cor aplicada no SVG
    const [codigoCor15, setCodigoCor15] = useState(''); // Cor aplicada no SVG
    const [codigoCor16, setCodigoCor16] = useState(''); // Cor aplicada no SVG
    const [codigoCor17, setCodigoCor17] = useState(''); // Cor aplicada no SVG
    const [tipoDoDesenho, setTipoDoDesenho] = useState(''); // Cor aplicada no SVG

    // Ao clicar na imagem, a cor do input é aplicada ao SVG
    const handleSVGClick = (e) => {
        const cor = e.target.id;

        if (cor === 'cor1') {
            setAppliedColor(selectedColor);
        } else if (cor === 'cor2') {
            setAppliedColor2(selectedColor);
        } else if (cor === 'cor3') {
            setAppliedColor3(selectedColor);
        } else if (cor === 'cor4') {
            setAppliedColor4(selectedColor);
        } else if (cor === 'cor5') {
            setAppliedColor5(selectedColor);
        } else if (cor === 'cor6') {
            setAppliedColor6(selectedColor);
        } else if (cor === 'cor7') {
            setAppliedColor7(selectedColor);
        } else if (cor === 'cor8') {
            setAppliedColor8(selectedColor);
        } else if (cor === 'cor9') {
            setAppliedColor9(selectedColor);
        } else if (cor === 'cor10') {
            setAppliedColor10(selectedColor);
        } else if (cor === 'cor11') {
            setAppliedColor11(selectedColor);
        } else if (cor === 'cor12') {
            setAppliedColor12(selectedColor);
        } else if (cor === 'cor13') {
            setAppliedColor13(selectedColor);
        } else if (cor === 'cor14') {
            setAppliedColor14(selectedColor);
        } else if (cor === 'cor15') {
            setAppliedColor15(selectedColor);
        } else if (cor === 'cor16') {
            setAppliedColor16(selectedColor);
        } else if (cor === 'cor17') {
            setAppliedColor17(selectedColor);
        }
    };

    useEffect(() => {
        setCodigoCor(listaDeCores.find((cor) => cor.hex === appliedColor));
        setCodigoCor2(listaDeCores.find((cor) => cor.hex === appliedColor2));
        setCodigoCor3(listaDeCores.find((cor) => cor.hex === appliedColor3));
        setCodigoCor4(listaDeCores.find((cor) => cor.hex === appliedColor4));
        setCodigoCor5(listaDeCores.find((cor) => cor.hex === appliedColor5));
        setCodigoCor6(listaDeCores.find((cor) => cor.hex === appliedColor6));
        setCodigoCor7(listaDeCores.find((cor) => cor.hex === appliedColor7));
        setCodigoCor8(listaDeCores.find((cor) => cor.hex === appliedColor8));
        setCodigoCor9(listaDeCores.find((cor) => cor.hex === appliedColor9));
        setCodigoCor10(listaDeCores.find((cor) => cor.hex === appliedColor10));
        setCodigoCor11(listaDeCores.find((cor) => cor.hex === appliedColor11));
        setCodigoCor12(listaDeCores.find((cor) => cor.hex === appliedColor12));
        setCodigoCor13(listaDeCores.find((cor) => cor.hex === appliedColor13));
        setCodigoCor14(listaDeCores.find((cor) => cor.hex === appliedColor14));
        setCodigoCor15(listaDeCores.find((cor) => cor.hex === appliedColor15));
        setCodigoCor16(listaDeCores.find((cor) => cor.hex === appliedColor16));
        setCodigoCor17(listaDeCores.find((cor) => cor.hex === appliedColor17));
    }, [
        appliedColor,
        appliedColor2,
        appliedColor3,
        appliedColor4,
        appliedColor5,
        appliedColor6,
        appliedColor7,
        appliedColor8,
        appliedColor9,
        appliedColor10,
        appliedColor11,
        appliedColor12,
        appliedColor13,
        appliedColor14,
        appliedColor15,
        appliedColor16,
        appliedColor17,
    ]);

    const divRef = useRef(null);

    const copiarPrint = async () => {
        const el = divRef.current;
        if (!el) return;

        const canvas = await html2canvas(el);
        canvas.toBlob(async (blob) => {
            if (blob) {
                try {
                    await navigator.clipboard.write([
                        new ClipboardItem({ 'image/png': blob }),
                    ]);
                    toast.success('Imagem copiada!');
                } catch (err) {
                    console.error('Erro ao copiar:', err);
                }
            }
        });
    };

    return (
        <div className="contentDesenhos">
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
            <div ref={divRef}>
                <div>
                    {tipoDoDesenho === '' ? (
                        ''
                    ) : tipoDoDesenho === 'onda' ? (
                        <OndaSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            onClick={handleSVGClick}
                            lado="direito"
                        />
                    ) : tipoDoDesenho === 'onda-lado-esquerdo' ? (
                        <OndaSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            onClick={handleSVGClick}
                            lado="esquerdo"
                        />
                    ) : tipoDoDesenho === 'nuvem' ? (
                        <NuvemSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            onClick={handleSVGClick}
                            lado="direito"
                        />
                    ) : tipoDoDesenho === 'nuvem-lado-esquerdo' ? (
                        <NuvemSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            onClick={handleSVGClick}
                            lado="esquerdo"
                        />
                    ) : tipoDoDesenho === 'nuvemUmaParede' ? (
                        <NuvemUmaParedeSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            onClick={handleSVGClick}
                        />
                    ) : tipoDoDesenho === 'montanha' ? (
                        <MontanhaSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            color3={appliedColor3}
                            onClick={handleSVGClick}
                            lado="direito"
                        />
                    ) : tipoDoDesenho === 'montanha-lado-esquerdo' ? (
                        <MontanhaSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            color3={appliedColor3}
                            onClick={handleSVGClick}
                            lado="esquerdo"
                        />
                    ) : tipoDoDesenho === 'montanhaUmaParede' ? (
                        <MontanhaUmaParedeSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            color3={appliedColor3}
                            onClick={handleSVGClick}
                        />
                    ) : tipoDoDesenho === 'encaixe' ? (
                        <EncaixeSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            onClick={handleSVGClick}
                        />
                    ) : tipoDoDesenho === 'cama' ? (
                        <CamaSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            onClick={handleSVGClick}
                        />
                    ) : tipoDoDesenho === 'pico' ? (
                        <PicoSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            color3={appliedColor3}
                            onClick={handleSVGClick}
                            lado="direito"
                        />
                    ) : tipoDoDesenho === 'pico-lado-esquerdo' ? (
                        <PicoSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            color3={appliedColor3}
                            onClick={handleSVGClick}
                            lado="esquerdo"
                        />
                    ) : tipoDoDesenho === 'poltrona' ? (
                        <PoltronaSVG
                            color={appliedColor}
                            color2={appliedColor2}
                            color3={appliedColor3}
                            onClick={handleSVGClick}
                        />
                    ) : tipoDoDesenho === 'tapete' ? (
                        <TapeteSvg
                            color={appliedColor}
                            color2={appliedColor2}
                            color3={appliedColor3}
                            color4={appliedColor4}
                            color5={appliedColor5}
                            color6={appliedColor6}
                            color7={appliedColor7}
                            color8={appliedColor8}
                            color9={appliedColor9}
                            color10={appliedColor10}
                            color11={appliedColor11}
                            color12={appliedColor12}
                            color13={appliedColor13}
                            color14={appliedColor14}
                            color15={appliedColor15}
                            color16={appliedColor16}
                            color17={appliedColor17}
                            onClick={handleSVGClick}
                        />
                    ) : (
                        ''
                    )}
                </div>
                <div className="resultadoNomeDasCores">
                    {tipoDoDesenho === 'onda' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()}{' '}
                        </p>
                    ) : tipoDoDesenho === 'onda-lado-esquerdo' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()}{' '}
                        </p>
                    ) : tipoDoDesenho === 'nuvem' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'nuvem-lado-esquerdo' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'nuvemUmaParede' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'montanha' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor3?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'montanha-lado-esquerdo' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor3?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'montanhaUmaParede' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor3?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'encaixe' ? (
                        <p>
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'cama' ? (
                        <p>
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'pico' ? (
                        <p>
                            {codigoCor3?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'pico-lado-esquerdo' ? (
                        <p>
                            {codigoCor3?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor?.codigo?.toUpperCase()}
                        </p>
                    ) : tipoDoDesenho === 'tapete' ? (
                        <p className="resultado-tapete">
                            {codigoCor?.codigo?.toUpperCase()} -{' '}
                            {codigoCor2?.codigo?.toUpperCase()} -{' '}
                            {codigoCor3?.codigo?.toUpperCase()} -{' '}
                            {codigoCor4?.codigo?.toUpperCase()} -{' '}
                            {codigoCor5?.codigo?.toUpperCase()} -{' '}
                            {codigoCor6?.codigo?.toUpperCase()} -{' '}
                            {codigoCor7?.codigo?.toUpperCase()} -{' '}
                            {codigoCor8?.codigo?.toUpperCase()} -{' '}
                            {codigoCor9?.codigo?.toUpperCase()} -{' '}
                            {codigoCor10?.codigo?.toUpperCase()} -{' '}
                            {codigoCor11?.codigo?.toUpperCase()} -{' '}
                            {codigoCor12?.codigo?.toUpperCase()} -{' '}
                            {codigoCor13?.codigo?.toUpperCase()} -{' '}
                            {codigoCor14?.codigo?.toUpperCase()} -{' '}
                            {codigoCor15?.codigo?.toUpperCase()} -{' '}
                            {codigoCor16?.codigo?.toUpperCase()} -{' '}
                            {codigoCor17?.codigo?.toUpperCase()}
                        </p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <button className="btnPrint" onClick={copiarPrint}>
                📸 Tirar print e copiar
            </button>
            <div className="opcoesRadio">
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="onda"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'onda'}
                    />
                    Onda (Lado direito)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="onda-lado-esquerdo"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'onda-lado-esquerdo'}
                    />
                    Onda (Lado esquerdo)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="nuvem"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'nuvem'}
                    />
                    Nuvem (Lado direito)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="nuvem-lado-esquerdo"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'nuvem-lado-esquerdo'}
                    />
                    Nuvem (Lado esquerdo)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="nuvemUmaParede"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'nuvemUmaParede'}
                    />
                    Nuvem (Uma Parede)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="montanha"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'montanha'}
                    />
                    Montanha (Lado direito)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="montanha-lado-esquerdo"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'montanha-lado-esquerdo'}
                    />
                    Montanha (Lado esquerdo)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="montanhaUmaParede"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'montanhaUmaParede'}
                    />
                    Montanha (Uma Parede)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="encaixe"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'encaixe'}
                    />
                    Encaixe
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="pico"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'pico'}
                    />
                    Pico (Lado direito)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="pico-lado-esquerdo"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'pico-lado-esquerdo'}
                    />
                    Pico (Lado esquerdo)
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="cama"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'cama'}
                    />
                    Cama
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="poltrona"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'poltrona'}
                    />
                    Poltrona
                </label>
                <label>
                    <input
                        type="radio"
                        name="desenho"
                        value="tapete"
                        onChange={(e) => setTipoDoDesenho(e.target.value)}
                        checked={tipoDoDesenho === 'tapete'}
                    />
                    Tapete
                </label>
            </div>
        </div>
    );
};
