import logo from './logo.svg';
import './App.css';
import { Header, ItemListContainer, Counters} from './components';
import { ItemDetailConteiner } from './components/ItemDetailConteiner';

function App() {
  return (
    <div className="App">      
      <Header />
      <main>
      <section className="App-content">        
        {/* Contador */}
        <Counters />
        {/* <ItemListContainer greeting={'greeting'}/> */}
        <ItemDetailConteiner />
        <img src={logo} className="App-logo" alt="logo" />
        </section>
      </main>
    </div>
  );
}

export default App;
