import './02_Styles/App.scss';
import {Header} from "./01_Components/01_Header/Header";
import {Skills} from "./01_Components/02_Skills/Skills";
import {Slider} from "./01_Components/03_Slider/Slider";
import {Portfolio} from "./01_Components/04_Portfolio/Portfolio";
import {Accordion} from "./01_Components/05_Accordion/Accordion";
import {Availability} from "./01_Components/06_Availability/Availability";
import {Contact} from "./01_Components/07_Contact/Contact";
import {Footer} from "./01_Components/999_Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Skills />
        <Slider />
        <Portfolio />
        <Accordion />
        <Availability />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
