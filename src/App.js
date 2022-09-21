import logo from './logo.svg';
import './App.css';
import { Header, Counters} from './components';
import { ItemDetailConteiner } from './components/ItemDetailConteiner';

function App() {
  return (
    <div className="App">      
      <Header />
      <main>
      <section className="App-content">        
        {/* <ItemListContainer greeting={'greeting'}/> */}
        <ItemDetailConteiner />
        {/* Contador */}
        <Counters />
        <img src={logo} className="App-logo" alt="logo" />
        </section>
      </main>
    </div>
  );
}

export default App;
