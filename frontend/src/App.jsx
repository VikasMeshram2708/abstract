import HelpSection from "./components/helpSection";
import Services from "./components/Services";

const App = () => {
  return (
    <section className="min-h-screen">
      {/* Help Component */}
      <HelpSection />
      {/* Services Component */}
      <div className="my-20">
        <Services />
      </div>
    </section>
  );
};

export default App;
