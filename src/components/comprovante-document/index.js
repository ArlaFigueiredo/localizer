import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const TodoComponent = {
    width: "800px",
    margin: "30px auto",
    minHeight: "200px",
    boxSizing: "border-box"
}



const PDF = (props) => {

    const fileContratoName = "Comprovante da reserva " + props.reservaId + ".pdf";

    const dataDeEmissaoDoContrato = new Date();

    return (
        <div className="WordSection1" ref={ref}>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span
                    style={{ fontFamily: '"Calibri",sans-serif', textTransform: "uppercase" }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "center" }}
                align="center"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    COMPROVANTE DE LOCACAO DE VE�CULO
                </span>
            </p>
            <p className="MsoNormal" style={{ marginBottom: "6.0pt" }}>
                <b>
                    <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
                </b>
            </p>
            <p className="MsoNormal" style={{ marginBottom: "6.0pt" }}>
                <b>
                    <u>
                        <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                            <span style={{ textDecoration: "none" }}>&nbsp;</span>
                        </span>
                    </u>
                </b>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Pelo presente documento atesta-se a loca��o da seguinte esp�cie:
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Cliente: <b>{props.clientID}</b>,
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Ve�culo: <b>{props.veiculo}</b>,
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Data de �nicio: <b>{props.dataInicio}</b>,
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Data de finaliza��o: <b>{props.dataFim}</b>,
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Valor Total: <b>{props.valorReserva}</b>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    O presente documento tem por objeto a comprova��o da loca��o em Salvador
                    dia 20 de Maio de 2020.
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
            </p>
            <table
                className="MsoNormalTable"
                style={{
                    width: "154.0pt",
                    marginLeft: "5.4pt",
                    borderCollapse: "collapse"
                }}
                width={205}
                cellSpacing={0}
                cellPadding={0}
                border={0}
            >
                <tbody>
                    <tr style={{ height: "9.3pt" }}>
                        <td
                            style={{
                                width: "77.9pt",
                                padding: "0cm 5.4pt 0cm 5.4pt",
                                height: "9.3pt"
                            }}
                            width={104}
                            valign="top"
                        >
                            <p className="MsoNormal">
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
                            </p>
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "76.1pt",
                                padding: "0cm 5.4pt 0cm 5.4pt",
                                height: "9.3pt"
                            }}
                            width={101}
                            valign="top"
                        >
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                    ______________________________
                                </span>
                            </p>
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center" }}
                                align="center"
                            >
                                <b>
                                    <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                        LOCALIZER LOCADORA DE VEÍCULOS
                                    </span>
                                </b>
                            </p>
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                  
                                </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <b>
                    <u>
                        <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                            <span style={{ textDecoration: "none" }}>&nbsp;</span>
                        </span>
                    </u>
                </b>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "right" }}
                align="right"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "right" }}
                align="right"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "right" }}
                align="right"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <u>
                    <span
                        style={{
                            fontFamily: '"Calibri",sans-serif',
                            textTransform: "uppercase"
                        }}
                    >
                        <span style={{ textDecoration: "none" }}>&nbsp;</span>
                    </span>
                </u>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span
                    style={{ fontFamily: '"Calibri",sans-serif', textTransform: "uppercase" }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "justify" }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span>
            </p>

            <Pdf targetRef={ref} filename={fileContratoName}>
                {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Emitir Comprovante</button>}
            </Pdf>
        </div>

        
    );
}

export default PDF;

