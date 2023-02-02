import { Header } from './01_Components/000_Header/Header';
import { Skills } from './01_Components/02_Skills/Skills';
import { HireMe } from './01_Components/04_HireMe/HireMe';
import { Contact } from './01_Components/07_Contact/Contact';
import { Footer } from './01_Components/998_Footer/Footer';
import { Hero } from './01_Components/01_Hero/Hero';
import {StateType, store} from './store'
import {Portfolio} from "./01_Components/03_Portfolio/Portfolio";

const state: StateType = store.getState()

function App() {
  return (
    <div className='App'>
      <Header {...state.header} />
      <Hero {...state.hero} />
      <Skills {...state.skills}/>
      <Portfolio {...state.portfolio}/>
      <HireMe />
      {/*<Slider {...state.slider}/>*/}
      {/*<About {...state.accordion}/>*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
