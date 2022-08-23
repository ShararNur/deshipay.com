import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import Faq from "./pages/Faq";
import Signup from "./pages/auth/Signup";
import Cashback from "./pages/Cashback";
import Offers from "./pages/Offers";
import { useState, useEffect } from "react";
import HomeBangla from './pages/bangla_contents/HomeBangla';
import TermsConditionBangla from "./pages/bangla_contents/TermsConditionBangla";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08A858",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1.1rem",
    },
    subtitle1: {
      fontSize: "1.1rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 500,
    },
  },
});

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {language === "EN" ?
          <>
            <Route path="/" exact element={<Home language={language} setLanguage={setLanguage} />} />
            <Route path="/help" element={<Help />} />
            <Route path="/offers/instant-cashback" element={<Cashback />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signup" element={<Signup />} />
          </>
          :
          <>
            <Route path="/" exact element={<HomeBangla language={language} setLanguage={setLanguage} />} />
            <Route path="/terms-condition" element={<TermsConditionBangla />} />
          </>

        }
      </Routes>
    </ThemeProvider>
  );
}

export default App;
