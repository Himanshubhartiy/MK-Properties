import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CarouselComponent from "./CarouselComponent";
import Explore from "./Explore";
import Footer from "./Footer";
import Location from "./Location";
import Loan from "./Loan";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Home />
                <Explore />
                <Location />
                <CarouselComponent />
                <Loan />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
