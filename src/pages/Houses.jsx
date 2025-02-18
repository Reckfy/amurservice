import './Houses.scss'
import { useNavigate } from 'react-router-dom';

function Houses({tableHouses}){

    const navigate = useNavigate();

    return(
        <div>
            <div className="windowHouses">
                <div className='titleHouses'>
                    <img alt='' src='./img/imageHouses.jpg'></img>
                    <h2>Наши дома</h2>
                </div>
                <table>
                    <thead>
                        <tr className='titles'>
                            <th>Адрес</th>
                            <th>Дата приема</th>
                            <th>Площадь, м²</th>
                            <th>Тариф, руб.</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tableHouses.map((house) => (
                            <tr style={{cursor: 'pointer'}} key={house.id} onClick={() => navigate(`/houses/${house.id}`)}>
                                <td>{house.address}</td>
                                <td>{house.date}</td>
                                <td>{house.area}</td>
                                <td>{house.tariff}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>  
        </div>
    );
}

export default Houses;