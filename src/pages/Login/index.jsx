import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import LoginImg from '../../assets/images/login.svg';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro(){
    const[name, setName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();

        await axios
        .post("http://localhost:8080/user/create",{
            name : name,
            username : username,
            password : password,
        })
        .then((result) =>{
            alert(`${name} cadastrado`);
            navigate("/");
        })
        .catch((erro) => {
            alert("Usuário existente!Tente novamente.")
        });
    };


    return(
        <div className="main-login">
            <div className="left-login">
                <h1>Cadastre-se <br/> E faça parte da Treete.</h1>
                <img className="left-image" src={LoginImg} alt=""/>
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>Cadastrar</h1>
                    <div className="textfield">
                        <h3>Nome:</h3>
                        <input 
                        value={name}
                        type="text" 
                        name="name" 
                        placeholder="Nome" 
                        required 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="textfield">
                        <h3>Email:</h3>
                        <input 
                        value={username}
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="textfield">
                        <h3>Nome:</h3>
                        <input 
                        value={password}
                        type="password" 
                        name="senha" 
                        placeholder="Senha" 
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <a>
                        <Link className="signbutton" to={"/login"}>
                            <br/> Já tem cadastro? Entre agora.
                        </Link>
                    </a>
                    <button className="btn-login" onClick={signUp}>
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;