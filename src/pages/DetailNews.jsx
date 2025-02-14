import React from "react"
import { useParams } from 'react-router-dom'
import './DetailNews.scss'

function DetailNews({dataNews}) {
    const params = useParams();
    const id = parseInt(params.newsId);

    const currentNews = dataNews.find(item => item.id === id);
    if (!currentNews) return null;

    const formatText = (text) => {
        return text.split('\\n').map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ));
      };

    return (
        
        <div className="detailNews">
            <div>
                <p>{currentNews.date}</p>  
                <b>{currentNews.title}</b>               
                <img alt='' src={'.' + currentNews.image}/>
                <p>{formatText(currentNews.txt)}</p>
            </div>    
        </div>
    );
}

export default DetailNews;