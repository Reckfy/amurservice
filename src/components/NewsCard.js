import news from '../json/news.json'
import React from 'react'
import './NewsCard.scss'

function NewsCard(params) {

    const formatText = (text) => {
        return text.split('\n').map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ));
      };

    const outputType = (type) => {
      if (type == 1) {
        return "Отчет";
      } else {
        return "Новость";
      }
    }

    return (
        <div className='cards'>
          {news.map((item, index) => (
            <div className='newsCard' key={index}>
              <img alt='' src={item.image}></img>
              <p>{item.title}</p>
              <div>
                <p>{item.date}</p>
                <p>{outputType(item.type)}</p>
              </div>
              {/* <p>{formatText(item.text + ' ...')}</p> */}
            </div>
          ))}
        </div>
      );
}
export default NewsCard;