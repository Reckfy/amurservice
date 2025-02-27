import './Contacts.scss'
import { useState } from 'react'

function Contacts(){

    const [activeTab, setActiveTab] = useState('address');

    return(
        <div>
            <div className="window">
                <div className='titleContacts'>
                    <img alt='' src='./img/imageContacts.jpg'></img>
                    <h2>Контакты</h2>
                </div>
                <div className='submenuContacts'>
                    <button onClick={() => setActiveTab('address')} className={activeTab === 'address' ? 'activeButton' : ''}>Как нас найти</button>
                    <button onClick={() => setActiveTab('worktime')} className={activeTab === 'worktime' ? 'activeButton' : ''}>График работы</button>
                    <button onClick={() => setActiveTab('details')} className={activeTab === 'details' ? 'activeButton' : ''}>Реквизиты</button>
                    <button onClick={() => setActiveTab('indicators')} className={activeTab === 'indicators' ? 'activeButton' : ''}>Передача показателей</button>
                    <button onClick={() => setActiveTab('social')} className={activeTab === 'social' ? 'activeButton' : ''}>Соцсети</button>
                </div>

                <div className='address' style={{ display: activeTab === 'address' ? 'flex' : 'none' }}>
                    <div className='infoAddress'>
                        <b>Адрес:</b>
                        <p>357350, ст. Ессентукская, ул. Цветочная 1В помещение 1</p>
                        <p>ГРАФИК ПРИЕМА: c 8.00 до 17.00</p>
                        <p>вторник, четверг - 8.00 - 17.00</p>
                        <p>Перерыв: 12:00 - 13:00</p>
                        <b>Телефон УК (абонентский и юридический отдел, аварийная служба, диспетчер, прием заявок):</b>
                        <a href="tel:8-988-764-83-51">8-988-764-83-51</a>
                        <b>E-mail адрес:</b>
                        <a href="mailto:">uk-amurservis@mail.ru</a>
                        <b>Генеральный директор:</b> 
                        <p>Понасийская Ирина Константиновна</p>
                    </div>
                    <div>
                        <iframe title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A07ac5c396474ab1de776e60f81ba40ba949c3654b6553edc36946859f19f6a0e&amp;source=constructor" frameborder="0"></iframe>
                    </div>
                </div>
                <div className='worktime' style={{ display: activeTab === 'worktime' ? 'flex' : 'none' }}>
                    <div>
                        <p>Понедельник – Пятница</p>
                        <p>Перерыв</p>
                        <p>Суббота, Воскресенье</p>
                    </div>
                    <div>
                        <p>08.00 – 17.00</p>
                        <p>12.00 – 13.00</p>
                        <p>Выходной</p>
                    </div>
                </div>
                <div className='details' style={{ display: activeTab === 'details' ? 'block' : 'none' }}>
                    <div className='detailsTitle'>
                        <b className='greenTitle'>Управляющая компания</b>
                        <b className='greenTitle'>«Амурсервис»</b>
                    </div>
                    <div>
                        <p>Юридический адрес: 357350 Ставропольский край,</p>
                        <p>М.О.Предгорный, ст-ца Ессентукская, ул.Цветочная, д.1В, помещ.1</p>
                    </div>
                    <div>
                        <p>Основной государственный регистрационный номер</p>
                        <p>ОГРН 1242600010696</p>
                    </div>
                    <div>
                        <p>Дата его присвоения</p>
                        <p>26.08.2024 г.</p>
                    </div>
                    <div>
                        <p>Орган, принявший решение о регистрации:</p>
                        <p>Межрайонная инспекция Федеральной налоговой службы № 15 по Ставропольскому краю</p>
                    </div>
                    <div>
                        <p>ОКВЭД</p>
                        <p>68.32, 37.00, 41.2, 42.11, 42.99, 43.11, 43.12, 43.21, 43.22, 43.29, 43.31, 43.32, 43.33, 43.39, 43.91, 43.99, 46.13, 46.19, 68.32, 81.22, 81.29, 81.30</p>
                    </div>
                    <div>
                        <p>ИНН организации</p>
                        <p>2618026453</p>
                    </div>
                    <div>
                        <p>КПП организации</p>
                        <p>261801001</p>
                    </div>
                </div>
                <div className='indicators' style={{ display: activeTab === 'indicators' ? 'block' : 'none' }}>
                    <b>Способы передачи показаний приборов учета с 20 по 24 число:</b>
                    <p>WhatsApp<img alt = '' src='./img/whatsapp.png'></img>: <a href="https://wa.me/89887648351">8-988-764-83-51</a></p>
                    <p>Контактный телефон: <a href="tel:8-988-764-83-51">8-988-764-83-51</a></p>
                    
                    <p>Email: <a href="mailto:">uk-amurservis@mail.ru</a></p>
                    
                </div>
                <div className='social' style={{ display: activeTab === 'social' ? 'block' : 'none' }}>
                    На данный момент информация отсутствует
                </div>
                <div style={{display: 'none'}}>
                    <div>
                        <p>Способы передачи показаний приборов учета с 20 по 25 число:</p>
                        <p>WhatsApp:</p>
                        <a href="tel:8-988-764-83-51">8-988-764-83-51</a>
                        <p>Контактный телефон:</p>
                        <a href="tel:8-988-764-83-51">8-988-764-83-51</a>
                        <p>Email:</p>
                        <a href="mailto:">uk-amurservis@mail.ru</a>
                        <p>Генеральный директор: Понасийская Ирина Константиновна</p>
                        <p>Генеральный директор: Понасийская Ирина Константиновна</p>
                        <p>ОГРН 1242600010696, ИНН 2618026453 Р/С 40702810406530001205 ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО), БИК 044525411, к/с 30101810145250000411 Лицензия № 026-000505</p>
                        <p>Прием граждан производится по предварительной записи. </p>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default Contacts;