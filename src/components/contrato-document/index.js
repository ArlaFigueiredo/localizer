import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
    
    function handleGerarPdf(){
        
    }

    const dataDeEmissaoDoContrato = new Date();
    
    return (
        <div className="WordSection1">
            <p
                className="MsoNormal"
                style={{
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    msoPagination: "none"
                }}
            >
                <span
                    style={{
                        fontFamily: '"Calibri",sans-serif',
                        textTransform: "uppercase",
                        msoBidiFontWeight: "bold"
                    }}
                >
                    <p>&nbsp;</p>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginBottom: "6.0pt",
                    textAlign: "center",
                    msoPagination: "none"
                }}
                align="center"
            >
                <a name="_Hlk529971712">
                    <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                        CONTRATO PARTICULAR DE PRESTAÇÃO DE SERVIÇOS DE SUPORTE{" "}
                    </span>
                </a>
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    SISTEMAS E SERVIÇOS ONLINE, QUE FAZEM ENTRE SI{" "}
                    <a name="_Hlk529971515">LOCALIZER LOCADORA DE VEÍCULOS</a> E {props.clienteID}
                    <span style={{ textTransform: "uppercase", msoBidiFontWeight: "bold" }}>
                        <p />
                    </span>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", msoPagination: "none" }}
            >
                <b style={{ msoBidiFontWeight: "normal" }}>
                    <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                        <p>&nbsp;</p>
                    </span>
                </b>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", msoPagination: "none" }}
            >
                <b style={{ msoBidiFontWeight: "normal" }}>
                    <u>
                        <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                            <p>
                                <span style={{ textDecoration: "none" }}>&nbsp;</span>
                            </p>
                        </span>
                    </u>
                </b>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", msoPagination: "none" }}
            >
                <b style={{ msoBidiFontWeight: "normal" }}>
                    <u>
                        <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                            QUALIFICAÇÃO DAS PARTES:
                            <p />
                        </span>
                    </u>
                </b>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    msoPagination: "none"
                }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Pelo presente instrumento particular de um lado,{" "}
                    <b>LOCALIZER LOCADORA DE VEÍCULOS</b>
                    <span style={{ msoBidiFontWeight: "bold" }}>
                        ,{" "}
                    </span>
                    inscrito no cadastro nacional de Pessoas JurÍdicas, CNPJ, do MinistÉrio da
                    Fazenda sob <span style={{ msoBidiFontWeight: "bold" }}>número </span>
                    33.512.827/0001-33, a partir de agora denominada simplesmente{" "}
                    <b style={{ msoBidiFontWeight: "normal" }}>
                        <u>CONTRATADA</u>
                    </b>
                    <span style={{ msoBidiFontWeight: "bold" }}>, de</span> outro lado a{" "}
                    <b>{props.clienteID}</b>
                    <span style={{ msoBidiFontWeight: "bold" }}>
                        , CLIENTE_ENDEREÇO
                    </span>
                    , inscrita no cadastro nacional de Pessoas Físicas sob{" "}
                    <span style={{ msoBidiFontWeight: "bold" }}>número </span>CLIENTE_CPF, a
                    partir de agora denominada simplesmente{" "}
                    <b>
                        <u>CONTRATANTE</u>
                    </b>
                    <span style={{ msoBidiFontWeight: "bold" }}>, </span>têm entre si justo e
                    contratado o presente{" "}
                    <b style={{ msoBidiFontWeight: "normal" }}>
                        CONTRATO PARTICULAR DE LOCAÇÃO DE VEÍCULOS
                    </b>
                    , mediante as cláusulas e condições a seguir:
                    <b style={{ msoBidiFontWeight: "normal" }}>
                        <u>
                            <p />
                        </u>
                    </b>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    msoPagination: "none"
                }}
            >
                <b style={{ msoBidiFontWeight: "normal" }}>
                    <u>
                        <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                            CLÁUSULA PRIMEIRA DO OBJETO:
                        </span>
                    </u>
                </b>
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    <b style={{ msoBidiFontWeight: "normal" }}>
                        <u>
                            <p />
                        </u>
                    </b>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginBottom: "6.0pt",
                    textAlign: "justify",
                    msoPagination: "none"
                }}
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    O presente instrumento tem por objeto a locação do veículo {props.veiculo} pela {" "}
                    <b style={{ msoBidiFontWeight: "normal" }}>CONTRATADA</b>
                    acima qualificada, para seu uso privado.
                    <span style={{ msoBidiFontWeight: "bold" }}>.</span>
                    <b style={{ msoBidiFontWeight: "normal" }}>
                        <u>
                            <p />
                        </u>
                    </b>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "right", msoPagination: "none" }}
                align="right"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    Salvador, {dataDeEmissaoDoContrato.getDate()}/<span className="GramE">{dataDeEmissaoDoContrato.getMonth() + 1}</span>/{dataDeEmissaoDoContrato.getFullYear()}.
                    <p />
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "right", msoPagination: "none" }}
                align="right"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    <p>&nbsp;</p>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "right", msoPagination: "none" }}
                align="right"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    <p>&nbsp;</p>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginBottom: "6.0pt", textAlign: "right", msoPagination: "none" }}
                align="right"
            >
                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                    <p>&nbsp;</p>
                </span>
            </p>
            <table
                className="MsoNormalTable"
                style={{
                    width: "501.9pt",
                    marginLeft: "5.4pt",
                    borderCollapse: "collapse",
                    msoYftiTbllook: 1184,
                    msoPaddingAlt: "0cm 5.4pt 0cm 5.4pt"
                }}
                width={669}
                cellSpacing={0}
                cellPadding={0}
                border={0}
            >
                <tbody>
                    <tr
                        style={{
                            msoYftiIrow: 0,
                            msoYftiFirstrow: "yes",
                            msoYftiLastrow: "yes",
                            height: "auto"
                        }}
                    >
                        <td
                            style={{
                                width: "253.9pt",
                                padding: "0cm 5.4pt 0cm 5.4pt",
                                height: "auto"
                            }}
                            width={339}
                            valign="top"
                        >
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center", msoPagination: "none" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                    _____________________________________
                                    <p />
                                </span>
                            </p>
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center", msoPagination: "none" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                    {props.clienteID}
                                    <br />
                                    CLIENTE_NOME
                                    <p />
                                </span>
                            </p>
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center", msoPagination: "none" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                    CONTRATADA
                                    <p />
                                </span>
                            </p>
                            
                        </td>
                        <td
                            style={{
                                width: "248.0pt",
                                padding: "0cm 5.4pt 0cm 5.4pt",
                                height: "auto"
                            }}
                            width={331}
                            valign="top"
                        >
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center", msoPagination: "none" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                    ______________________________
                                    <p />
                                </span>
                            </p>
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center", msoPagination: "none" }}
                                align="center"
                            >
                                <b>
                                    <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                        LOCALIZER LOCADORA DE VÉICULOS
                                    </span>
                                </b>
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                    <p />
                                </span>
                            </p>
                            <p
                                className="MsoNormal"
                                style={{ textAlign: "center", msoPagination: "none" }}
                                align="center"
                            >
                                <span style={{ fontFamily: '"Calibri",sans-serif' }}>
                                    CONTRATANTE
                                    <p />
                                </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pdf targetRef={ref} filename="post.pdf">
                {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Gerar PDF</button>}
            </Pdf>
        </div>

    );
}

export default PDF;