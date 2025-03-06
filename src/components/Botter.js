import { Link } from 'react-router-dom'
import './Botter.scss'

function Botter() {
    return(
        <botter>
            <div>
                <div className='botterName'>
                    <img className='logoButter' alt='Лого' src={`${process.env.PUBLIC_URL}/img/logo.svg`}></img>
                    <div>
                        <h1>АМУРСЕРВИС</h1>
                        <p>УПРАВЛЯЮЩАЯ</p>
                        <p>КОМПАНИЯ</p>
                    </div>
                </div>
                <div className='linkGit'>
                    <p>Сайт разработан</p>
                    <a href='https://github.com/Reckfy' target="_blank" rel="noopener noreferrer">Reckfy
                    <img alt='' style={{width: '20px'}} src={`${process.env.PUBLIC_URL}/img/github.svg`} />
                    </a>
                </div>
            </div>
            <div className='menuBotter'>
                <Link to="/" className='menuLink'>Компания</Link>
                <Link to="/houses" className='menuLink'>Дома</Link>
                <Link to="/news" className='menuLink'>Новости</Link>
                <Link to="/contacts" className='menuLink'>Контакты</Link>
            </div>
        </botter>
    );
}

export default Botter;