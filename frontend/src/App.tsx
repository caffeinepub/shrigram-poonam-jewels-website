import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import WholesaleInquiry from './components/WholesaleInquiry';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutUs />
        <Products />
        <WhyChooseUs />
        <WholesaleInquiry />
      </main>
      <Footer />
    </div>
  );
}
