import Navbar from "./components/navbar/navbar";
import Header from './components/header/header';
import About from "./components/about/about";
import Services from "./components/services/services";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
