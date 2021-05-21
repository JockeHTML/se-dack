import "./App.css";
import Heading from "./Components/Heading/Heading";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import MainServices from "./Components/MainServices/MainServices";
import Appointment from "./Components/Appointment/Appointment";
import Supplier from "./Components/Supplier/Supplier";
import Staff from "./Components/Staff/Staff";
import Contact from "./Components/Contact/Contact";
import MoreInfoComponent from "./Components/MoreInfoComponent/MoreInfoComponent";
import { AppProvider } from "./Components/Context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllServices from "./Components/AllServices/AllServices";
import TireServices from "./Components/TireServices/TireServices";

function App() {
  return (
    <AppProvider>
      <Router>
        <Heading />
        <Nav />
        <Switch>
          <Route path="/Appointment">
            <Appointment />
          </Route>
          <Route path="/tjanster">
            <AllServices />
          </Route>
          <Route path="/dack&falg">
            <TireServices />
          </Route>
          <Route path="/tvatt&rekond">
            <MainServices />
          </Route>
          <Route path="/dackverkstad">
            <MainServices />
          </Route>
          <Route path="/dackhotell">
            <MainServices />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/Supplier">
            <Supplier />
          </Route>
          <Route path="/Staff">
            <Staff />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/MoreInfo">
            <MoreInfoComponent />
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
