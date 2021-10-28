import './App.css';
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'



function App() {

  
  
  const clique = 'Trailer'

  return (
    <>
    <Header/>
    <Banner clique ={clique}/>
    <Footer/>
    </>
  );
}

export default App;
