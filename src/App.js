import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SectionAbout from './components/SectionAbout';
import SectionBottom from './components/SectionBottom';
import SectionFooter from './components/SectionFooter';

function App() {
  useEffect(() => {
    document.title = "Landing Page Zeitplan"
  }, []);
  return (
    <div
      className="container md:mx-auto h-full"
    >
      <Header />
      <SectionAbout />
      <SectionBottom />
      <SectionFooter image="./img/logo.png" />
    </div>
  );
}

export default App;
