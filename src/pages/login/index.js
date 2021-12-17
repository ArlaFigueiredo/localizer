import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Link, Redirect} from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    async function logar(){
        let auth = await getAuth();
        signInWithEmailAndPassword(auth, email, senha).then(resultado => {
            setMsgTipo('sucesso');           
        }).catch(erro => {
            setMsgTipo('erro');
        });      
            
    }  

    return (
        <div className="login-content d-flex align-items-center">

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <i className="far fa-compass text-white fa-5x"></i>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>


                <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />


                <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                    {msgTipo === 'sucesso' && <span>Você está conectado!</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546; </span>}
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a className="text-white mx-2">Ainda não é nosso cliente?</a>
                    <Link to='/cadastro-cliente' className="mx-2">Quero Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;