import Contacts from './components/Contacts/Contacts';
import Operations from './components/Operations/Operations';
import './styles/App.scss';

const App = () => {
  return (
    <div className='app'>
      <Contacts />
        <div className="app__highlight"></div>
      <Operations />
    </div>
  )
}

export default App
