import NewsCard from "../components/NewsCard";

function News(){
    return(
        <div>
            <div className="window">
                <h2>Новости</h2>
                <NewsCard />
            </div>  
        </div>
    );
}

export default News;