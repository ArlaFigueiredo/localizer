import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import { getFirestore, query, where, updateDoc, deleteDoc, doc, addDoc, getDocs, collection, get } from 'firebase/firestore';
import {Link, Navigate} from 'react-router-dom';
import Navbar from '../../components/navbar';
import { useSelector, useDispatch} from 'react-redux';


function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    async function logar(){
        let db = getFirestore();
        const userRef = collection(db, "usuario");
        const q = query(userRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        let password = undefined;
        let privilege = undefined;
        querySnapshot.forEach((doc) => {
            password = doc.data().senha;
            privilege = doc.data().privilege;
        });
        if (password === senha) {
            dispatch({type: 'LOG_IN', usuarioEmail: email, usuarioPrivilege: privilege})
            setMsgTipo('sucesso');
        } else {
            setMsgTipo('erro');
        }
    }  

    return (
        <>
        <Navbar />
        <div className="login-content d-flex align-items-center">

            {useSelector(state => state.usuarioLogado) > 0 ? <Navigate to='/' /> : null}

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
        </>
    )
}

export default Login;