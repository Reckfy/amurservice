import './MainW.scss'
import { useState } from 'react'

function Main(){

    const [activeTab, setActiveTab] = useState('about');

    return(
        <div className='main'>
            <div className={activeTab === 'about' ? 'showmenu1' : 'showmenu2'}>
                <div className='submenu'>
                    <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'activeButton' : ''}>О нас</button>
                    <button onClick={() => setActiveTab('docs')} className={activeTab === 'docs' ? 'activeButton' : ''}>Лицензии и свидетельства</button>
                </div>
                <div className='about' style={{ display: activeTab === 'about' ? 'block' : 'none' }}>
                    <div>
                        <div className='info'>
                            <h2>Управляющая компания "Амурсервис"</h2>
                            <p>Мы выбираем только лучшие решения и работаем на качество,
                                совершенствуем процессы эксплуатации многоквартирных домов и создаем комфортные и безопасные условия для жизни
                            </p>
                            <p>
                            Наша компания постоянно стремится делать свою работу более эффективной, а связь с жителями еще оперативнее. Мы открыты для диалога и благодарны за обратную связь
                            </p>
                        </div>
                        <img alt='' src='./img/imageAbout.jpeg'></img>
                    </div>
                    <div className="targets">
                        <h2>Цели:</h2>
                        <p>Улучшение процессов эксплуатации и качества жилищно-коммунального обслуживания для создания комфортного проживания </p>
                        <p>Снижение затрат на содержание и ремонт общего имущества многоквартирного дома с сохранением качества услуги</p>
                        <p>Достижение ведущих позиций и высоких показателей на рынке жилищно-коммунальных услуг</p>
                    </div>
                </div>
                <div className='docs' style={{ display: activeTab === 'docs' ? 'flex' : 'none' }}>
                    <img alt='' src='./img/imageDocs.jpg'></img>
                    <div>
                        <div className='titleDocs'>
                            <h2>Лицензии,</h2>
                            <h2>свидетельства</h2>
                        </div> 
                        <ul>
                            <li><a href='https://drive.google.com/file/d/1x65EE5uantUB06WNW6ytKHF_l0V3sVqb/view?usp=sharing' target="_blank" rel="noopener noreferrer">Приказ о предоставлении лицензии на осуществление предпринимательской деятельности по управлению МКД</a></li>
                            <li><a href='https://drive.google.com/file/d/1GIR7R7y1S3f6IUGpMH8plPcvujlNOT4j/view?usp=sharing' target="_blank" rel="noopener noreferrer">Выписка из реестра лицензий</a></li>
                            <li><a href='https://drive.google.com/file/d/1SWkd3kRKAAPIKZcQ0ZcqejFAEKC_sWvR/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Свидетельство ИНН от 26.08.2024</a></li>
                            <li><a href='https://drive.google.com/file/d/18gZhrdlelmZnBbYT7NzNFW5fthkJR2h4/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Свидетельство ОГРН от 26.08.2024</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Main;