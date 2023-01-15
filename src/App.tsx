import { Header } from './01_Components/000_Header/Header';
import { Skills } from './01_Components/02_Skills/Skills';
import { HireMe } from './01_Components/06_HireMe/HireMe';
import { Contact } from './01_Components/07_Contact/Contact';
import { Footer } from './01_Components/998_Footer/Footer';
import { Hero } from './01_Components/01_Hero/Hero';
import { About } from './01_Components/05_About/About';
import {Slider} from "./01_Components/03_Slider/Slider";
import {StateType, store} from './store'

const state: StateType = store.getState()

function App() {
  return (
    <div className='App'>
      <Header {...state.header} />
      <Hero {...state.hero} />
      <Skills {...state.skills}/>
      <Slider {...state.slider}/>
      <About {...state.accordion}/>
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
