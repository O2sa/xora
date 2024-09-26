import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import html2canvas from 'html2canvas';
import domtoimage from "dom-to-image";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
      <CaptureSection />
    </main>
  );
};





const CaptureSection = () => {
  const handleCapture = () => {
    const element = document.getElementById("download");

    domtoimage.toSvg(element)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = "section-image.svg";
        link.click();
      })
      .catch((err) => {
        console.error('Error capturing:', err);
      });
  };

  return (
    <div>
 
      <button onClick={handleCapture} style={{ marginTop: '20px' }}>
        Capture Section
      </button>
    </div>
  );
};


export default App;
