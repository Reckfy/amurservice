import { useState } from 'react'
import './News.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function News({dataNews}){

    const [activeTab, setActiveTab] = useState('all');

    const outputType = (report) => {
      if (report === true) {
        return "Отчет";
      } else {
        return "Новость";
      }
    }

    const reportNews = dataNews.filter(item => item.report === true);
    const newsNews = dataNews.filter(item => item.report === false);

    return(
        <div>
            <div className='titleNews'>
                <img alt='' src='./img/imageNews.jpg'></img>
                <h2>Новости</h2>
            </div>
            <div className="windowNews">
                <div className='submenuNews'>
                    <button onClick={() => setActiveTab('all')} className={activeTab === 'all' ? 'activeButton' : ''}>Все</button>
                    <button onClick={() => setActiveTab('reports')} className={activeTab === 'reports' ? 'activeButton' : ''}>Отчеты</button>
                    <button onClick={() => setActiveTab('news')} className={activeTab === 'news' ? 'activeButton' : ''}>Новости</button>
                </div>
                <div>
                    <div style={{ display: activeTab === 'all' ? 'block' : 'none' }}>
                        <div className='cards'>
                            {dataNews.map((item) => (
                                <Link to={`/news/${item.id}`}>
                                    <div className='newsCard' key={item.id}>
                                        <img alt='' src={item.image}></img>
                                        <p>{item.title}</p>
                                        <div>
                                            <p>{item.date}</p>
                                            <p>{outputType(item.report)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: activeTab === 'reports' ? 'block' : 'none' }}>
                        <div className='cards'>
                            {reportNews.map((item, index) => (
                                <Link to={`/news/${item.id}`}>
                                    <div className='newsCard' key={index}>
                                        <img alt='' src={item.image}></img>
                                        <p>{item.title}</p>
                                        <div>
                                            <p>{item.date}</p>
                                            <p>{outputType(item.type)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: activeTab === 'news' ? 'block' : 'none' }}>
                        <div className='cards'>
                            {newsNews.map((item, index) => (
                                <Link to={`/news/${item.id}`}>
                                    <div className='newsCard' key={index}>
                                        <img alt='' src={item.image}></img>
                                        <p>{item.title}</p>
                                        <div>
                                            <p>{item.date}</p>
                                            <p>{outputType(item.type)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;