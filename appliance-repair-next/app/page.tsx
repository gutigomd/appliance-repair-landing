import BackgroundArt from "@/components/BackgroundArt";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundArt />
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

