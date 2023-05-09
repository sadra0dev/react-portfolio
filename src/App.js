import { About, Footer, Header, Skills, Testimonial, Work } from "sections";
import { Navbar } from "components";
import "App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
