import React from "react";
import './style.css';
import { Link } from "react-router-dom";


function ButtonBar(){
    const menu = document.querySelector('#menu-bar');
    const navbar = document.querySelector('.menu');
    
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
    
    menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });
    
}

function Navbar(){
    return(
        <header>
            <div onClick={ButtonBar} id="menu-bar" className="fas fa-bars"></div>
            <Link>
                <a className="logo"><i className="fas fa-solid fa-graduation-cap">Treete</i></a>
            </Link>
            <nav className="menu">
                <a>
                    <Link to={"/"}>Home</Link>
                </a>
                <a>
                    <Link to={"/cursos"}>Cursos</Link>
                </a>
                <a>
                    <Link to={"/planos"}>Planos</Link>
                </a>
                <a>
                    <Link to={"/feed"}>Feed</Link>
                </a>
                <a>
                    <Link to={"/doacao"}>Doações</Link>
                </a>
                <a>
                    <Link to={"/contato"}>Contato</Link>
                </a>
                <a>
                    <Link to={"/sobre"}>Quem Somos</Link>
                </a>
            </nav>
            <div className="icons">
                <i className="fas fa-search" id="search"></i>
                <Link to={"/create"}>
                    <i className="fas fa-user"></i>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;