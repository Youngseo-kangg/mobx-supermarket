import './App.css';
import Router from './routes/Router';
import Header from './components/common/header';
import Footer from './components/common/footer';

function App() {
  return (
    <div className='App'>
      <div id='appWrapper'>
        <Header />
        <Router />
        <Footer />
      </div>
    </div>
  );
}

export default App;
