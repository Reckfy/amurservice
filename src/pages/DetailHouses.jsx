import { useParams } from 'react-router-dom';
import './DetailHouses.scss'

function DetailHouses({tableHouses, contracts, protocols, documents}) {

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
                    <div className='contracts' key={contract.house_id}><p>{contract.txt}</p><a className='linkPdf' href={contract.link}>Скачать<img alt='' src='../img/pdfIcon.png'/></a></div>
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
                                <th>{protocol.name}</th>
                                <th>{protocol.number}</th>
                                <th>{protocol.date}</th>
                                <th><a className='linkPdf' href={protocol.link}>Скачать<img alt='' src='../img/pdfIcon.png'/></a></th>
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
                                <th>{document.name}</th>
                                <th>{document.number}</th>
                                <th>{document.date}</th>
                                <th><a className='linkPdf' href={document.link}>Скачать<img alt='' src='../img/pdfIcon.png'/></a></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DetailHouses;