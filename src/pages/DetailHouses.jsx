import { useParams, useNavigate } from 'react-router-dom';
import './DetailHouses.scss'

function DetailHouses({tableHouses, contracts, protocols, documents}) {

    const navigate = useNavigate();

    const params = useParams();
    const id = parseInt(params.housesId);

    const currentHouses = tableHouses.find(item => item.id === id);
    if (!currentHouses) return null;

    const currentContracts = contracts.filter(item => item.house_id === id);
    if (!currentContracts) return null;

    const currentProtocols = protocols.filter(item => item.house_id === id);
    if (!currentContracts) return null;

    const currentDocuments = documents.filter(item => item.house_id === id);
    if (!currentContracts) return null;
    
    return(
        <div className='detailHouse'>
            <button className='backButton' onClick={() => navigate('/houses')}><img alt='' src='../img/left.png' /></button>
            <h2>Информация по дому:</h2>
            <div className='infoHouse'>
                <div>
                    <b>Адрес:</b>
                    <b>Дата приема:</b>
                    <b>Площадь:</b>
                    <b>Тариф:</b>
                </div>
                <div>
                    <p>{currentHouses.address}</p>
                    <p>{currentHouses.date}</p>
                    <p>{currentHouses.area}</p>
                    <p>{currentHouses.tariff}</p>
                </div>
            </div>
            <h3>Документация по дому:</h3>
            {currentContracts.map((contract) => {
                return(
                    <div className='contracts' key={contract.house_id}><p>{contract.txt}</p><a className='linkPdf' href={contract.link} target="_blank" rel="noreferrer">Скачать<img alt='' src='../img/pdfIcon.png'/></a></div>
                )
            })}
            <b>Протоколы общего собрания:</b>
            <table>
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>№ протокола</th>
                        <th>Дата</th>
                        <th>Файл для загрузки</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProtocols.map((protocol) => {
                        return(
                            <tr key={protocol.id}>
                                <td>{protocol.name}</td>
                                <td>{protocol.number}</td>
                                <td>{protocol.date}</td>
                                <td><a className='linkPdf' href={protocol.link} target="_blank" rel="noreferrer">Скачать<img alt='' src='../img/pdfIcon.png'/></a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <b>Прочая документация по дому:</b>
            <table>
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>№ документа</th>
                        <th>Дата</th>
                        <th>Файл для загрузки</th>
                    </tr>
                </thead>
                <tbody>
                    {currentDocuments.map((document) => {
                        return(
                            <tr key={document.id}>
                                <td>{document.name}</td>
                                <td>{document.number}</td>
                                <td>{document.date}</td>
                                <td><a className='linkPdf' href={document.link} target="_blank" rel="noreferrer">Скачать<img alt='' src='../img/pdfIcon.png'/></a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DetailHouses;