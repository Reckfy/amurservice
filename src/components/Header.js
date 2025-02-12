import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'


function Header(props) {

    return(
        <div className='header'>
            <div className='upHeader'>
                <div>
                    <img alt='Логотип' src='./img/logo.svg'></img>
                    <div>
                        <h1>АМУРСЕРВИС</h1>
                        <p>УПРАВЛЯЮЩАЯ</p>
                        <p>КОМПАНИЯ</p>
                    </div>
                </div>
                <a href="tel:8-988-764-83-51">+7 (988) 764-83-51</a>
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