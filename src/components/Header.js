import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Header(props) {

    function scrollDown() {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className='header'>
            <h1 className={'name'}>ООО "Амурсервис"</h1>
            <div className={`menu ${scrolled ? 'menuScrolled' : ''}`}>
                <Link to="/news" className='menuLink' onClick={scrollDown}>Новости</Link>
                <Link to="/" className='menuLink' onClick={scrollDown}>Главная</Link>
                <Link to="/contacts" className='menuLink' onClick={scrollDown}>Контакты</Link>
                <Link to="/houses" className='menuLink' onClick={scrollDown}>Наши дома</Link>
            </div>
            <img className='logoHeader' src='./img/city.png'></img>
        </div>
    );
}
export default Header;