import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/MainW'
import News from './pages/News'
import Contacts from './pages/Contacts'
import Houses from './pages/Houses'
import DetailNews from './pages/DetailNews'
import DetailHouses from './pages/DetailHouses'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

    const [tableHouses, setTableHouses] = useState([]);
    const [dataNews, setDataNews] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [protocols, setProtocols] = useState([]);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const housesResponse = await axios.get('/houses');
                const contractsResponse = await axios.get('/contracts');
                const newsResponse = await axios.get('/news');
                const protocolsResponse = await axios.get('/protocols');
                const documentsResponse = await axios.get('/documents');
                setTableHouses(housesResponse.data);
                setContracts(contractsResponse.data);
                setDataNews(newsResponse.data);
                setProtocols(protocolsResponse.data);
                setDocuments(documentsResponse.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <div className='mainWindow'>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/news" element={<News dataNews={dataNews}/>} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/houses" element={<Houses tableHouses = {tableHouses}/>} />
                    <Route path="/news/:newsId" element={<DetailNews dataNews = {dataNews}/>} />
                    <Route path="/houses/:housesId" element={<DetailHouses tableHouses = {tableHouses} contracts = {contracts} protocols = {protocols} documents = {documents}/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;