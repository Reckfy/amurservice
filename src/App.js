import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/MainW'
import News from './pages/News'
import Contacts from './pages/Contacts'
import Houses from './pages/Houses'

function App() {
    return (
        <div>
            <Header />
            <div className='mainWindow'>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/houses" element={<Houses />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;