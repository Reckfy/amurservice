import news from '../json/news.json';
import React from 'react';
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

    return (
        <div>
          {news.map((item, index) => (
            <div className='newsCard' key={index}>
              <h3>{item.date} {item.title}</h3>
              <p>{formatText(item.text)}</p>
            </div>
          ))}
        </div>
      );
}
export default NewsCard;