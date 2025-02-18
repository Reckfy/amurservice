import React from "react"
import { useNavigate, useParams } from 'react-router-dom'
import './DetailNews.scss'

function DetailNews({dataNews, reports}) {
    const navigate = useNavigate();

    const params = useParams();
    const id = parseInt(params.newsId);

    const currentNews = dataNews.find(item => item.id === id);
    if (!currentNews) return null;

    const reports_id = currentNews.report_id;
    const currentReports = reports.filter(item => item.report_id === reports_id);
    if (!currentReports) return null;
    
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
            <button className="backButton" onClick={() => navigate('/news')}><img alt="" src='../img/left.png' /></button>
            <div>
                <p>{currentNews.date}</p>  
                <b>{currentNews.title}</b>               
                <img alt='' src={'.' + currentNews.image}/>
                <p>{formatText(currentNews.txt)}</p>
            </div>  

            <div className="reports">
                {currentNews.report && (
                    currentReports.map((report) => {
                        return(
                        <div key={report.id} className="cardReport">
                            <img alt='' src={'.' + report.image} />
                            <p>{report.txt}</p>
                        </div>
                        )
                    })
                )}  
            </div>
        </div>
    );
}

export default DetailNews;