import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import HowItWorks from "./components/howItWorks/howItWorks";
import Navigation from "./components/navigation/navigation";
import Shop from "./components/shop";

function App() {
  return (
    <>
      <div id="page-container">
        <div>
          <Navigation />
        </div>
        <div id="content-wrap">
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
