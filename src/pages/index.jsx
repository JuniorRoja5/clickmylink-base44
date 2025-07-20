import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout.jsx";

// Importamos todas las páginas que queremos poder ver
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Home from "./Home";
import PublicProfile from "./PublicProfile";
import LinkPreview from "./LinkPreview";
import Design from "./Design";
import Customers from "./Customers";
import Statistics from "./Statistics";
import Orders from "./orders"; // 'orders' está en minúscula según tu archivo original
import Calendar from "./Calendar";
import Referrals from "./Referrals";
import EmailSequences from "./EmailSequences";
import InstagramAutomation from "./InstagramAutomation";
import AskLink from "./AskLink";
import PublicStorefront from "./PublicStorefront";
import PublicProduct from "./PublicProduct";

function App() {
  return (
    <Router>
      <Layout>
        {/* Aquí definimos todas las rutas posibles dentro de nuestra aplicación */}
        <Routes>
          {/* Ruta por defecto: si no se especifica nada, muestra el Dashboard */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Rutas para cada una de las páginas */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PublicProfile" element={<PublicProfile />} />
          <Route path="/LinkPreview" element={<LinkPreview />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Referrals" element={<Referrals />} />
          <Route path="/EmailSequences" element={<EmailSequences />} />
          <Route path="/InstagramAutomation" element={<InstagramAutomation />} />
          <Route path="/AskLink" element={<AskLink />} />
          <Route path="/PublicStorefront" element={<PublicStorefront />} />
          <Route path="/PublicProduct" element={<PublicProduct />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
