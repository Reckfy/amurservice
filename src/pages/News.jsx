import { useState } from 'react'
import './News.scss'
import news from '../json/news.json'
import React from 'react'
import { Link } from 'react-router-dom'

function News(){

    const [activeTab, setActiveTab] = useState('all');

    const formatText = (text) => {
        return text.split('\n').map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ));
      };

    const outputType = (type) => {
      if (type === 1) {
        return "Отчет";
      } else {
        return "Новость";
      }
    }

    const reportNews = news.filter(item => item.type === 1);
    const newsNews = news.filter(item => item.type === 0);

    return(
        <div>
            <div className='title'>
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
                    <div className='all' style={{ display: activeTab === 'all' ? 'block' : 'none' }}>
                        <div className='cards'>
                            {news.map((item, index) => (
                                <div className='newsCard' key={index}>
                                <img alt='' src={item.image}></img>
                                <p>{item.title}</p>
                                <div>
                                    <p>{item.date}</p>
                                    <p>{outputType(item.type)}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='reports' style={{ display: activeTab === 'reports' ? 'block' : 'none' }}>
                        <div className='cards'>
                            {reportNews.map((item, index) => (
                                <div className='newsCard' key={index}>
                                <img alt='' src={item.image}></img>
                                <p>{item.title}</p>
                                <div>
                                    <p>{item.date}</p>
                                    <p>{outputType(item.type)}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='news' style={{ display: activeTab === 'news' ? 'block' : 'none' }}>
                        <div className='cards'>
                            {newsNews.map((item, index) => (
                                <div className='newsCard' key={index}>
                                <img alt='' src={item.image}></img>
                                <p>{item.title}</p>
                                <div>
                                    <p>{item.date}</p>
                                    <p>{outputType(item.type)}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;