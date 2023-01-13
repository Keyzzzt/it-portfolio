import './02_Styles/App.scss';
import { Header } from './01_Components/000_Header/Header';
import { Skills } from './01_Components/02_Skills/Skills';
import { Slider } from './01_Components/03_Slider/Slider';
import { Portfolio } from './01_Components/04_Portfolio/Portfolio';
import { HireMe } from './01_Components/06_Availability/HireMe';
import { Contact } from './01_Components/07_Contact/Contact';
import { Footer } from './01_Components/998_Footer/Footer';
import { Hero } from './01_Components/01_Hero/Hero';

import {store} from './store'
import { Accordion } from './01_Components/05_About/Accordion';

const state = store.getState()

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero {...state.hero} />
      <Skills />
      <Slider />
      <Portfolio />
      <Accordion {...state.accordion}/>
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
