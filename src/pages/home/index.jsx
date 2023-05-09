import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Navbar,
} from "components";
import "./Home.scss";

export const Home = () => (
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
