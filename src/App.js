import './App.css';
import Router from './routes/Router';
import Header from './components/common/header';
import Footer from './components/common/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
