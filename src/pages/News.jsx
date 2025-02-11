import NewsCard from '../components/NewsCard'
import './News.scss'

function News(){
    return(
        <div>
            <div className="windowNews">
                <h2>Новости</h2>
                <NewsCard />
            </div>  
        </div>
    );
}

export default News;