import "./App.css";
import Heading from "./Components/Heading/Heading";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import MainServices from "./Components/MainServices/MainServices";
import Supplier from "./Components/Supplier/Supplier";
import StaffPage from "./Components/Staff/StaffPage";
import ContactPage from "./Components/Contact/ContactPage";
import { AppProvider } from "./Components/Context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllServices from "./Components/AllServices/AllServices";
import TireServices from "./Components/TireServices/TireServices";
import WashingServices from "./Components/WashingServices/WashingServices";
import TireHotel from "./Components/TireHotel/TireHotel";

function App() {
  return (
    <AppProvider>
      <Router>
        <Heading />
        <Nav />
        <Switch>
          <Route path="/tjanster">
            <AllServices />
          </Route>
          <Route path="/dack&falg">
            <TireServices />
          </Route>
          <Route path="/tvatt&rekond">
            <WashingServices />
          </Route>
          <Route path="/dackverkstad">
            <MainServices />
          </Route>
          <Route path="/dackhotell">
            <TireHotel />
          </Route>
          <Route path="/hem">
            <Home />
          </Route>
          <Route path="/leverantorer">
            <Supplier />
          </Route>
          <Route path="/personal">
            <StaffPage />
          </Route>
          <Route path="/kontakt">
            <ContactPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
