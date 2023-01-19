import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <HomePage />
      </main>

      <Footer />
    </>
  );
}

export default App;
