import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import WholesaleInquiry from "./components/WholesaleInquiry";
import WhyChooseUs from "./components/WhyChooseUs";

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
