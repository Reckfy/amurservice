import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { useState } from 'react'

function Header() {

    const [activeMenu, setActiveMenu] = useState();

    return(
        <div className='header'>
            <div className='mobileMenu' style={{display: activeMenu === 'menu' ? 'block' : 'none'}}>
                <button className='mobileMenuClose' onClick={() => setActiveMenu()}><img src={`${process.env.PUBLIC_URL}/img/cross.png`}/></button>
                <Link to="/" className='menuLink' onClick={() => setActiveMenu()}>Компания</Link>
                <Link to="/houses" className='menuLink' onClick={() => setActiveMenu()}>Дома</Link>
                <Link to="/news" className='menuLink' onClick={() => setActiveMenu()}>Новости</Link>
                <Link to="/contacts" className='menuLink' onClick={() => setActiveMenu()}>Контакты</Link>
            </div>
            <div className='upHeader'>
                <div>
                    <img className='logo' alt='Логотип' src={`${process.env.PUBLIC_URL}/img/logo.svg`}></img>
                    <div>
                        <h1>АМУРСЕРВИС</h1>
                        <p>УПРАВЛЯЮЩАЯ</p>
                        <p>КОМПАНИЯ</p>
                    </div>
                </div>
                <a className='number' href="tel:8-988-764-83-51">+7 (988) 764-83-51</a>
                <button className='mobileMenuButton' onClick={() => setActiveMenu('menu')}><img src={`${process.env.PUBLIC_URL}/img/menu.png`}/></button>
            </div>
            <div className={`menu`}>
                <Link to="/" className='menuLink'>Компания</Link>
                <Link to="/houses" className='menuLink'>Дома</Link>
                <Link to="/news" className='menuLink'>Новости</Link>
                <Link to="/contacts" className='menuLink'>Контакты</Link>
            </div>
            
        </div>
    );
}
export default Header;