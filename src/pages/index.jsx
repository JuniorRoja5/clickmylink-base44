import Layout from "./Layout.jsx";

import Dashboard from "./Dashboard";

import Profile from "./Profile";

import Home from "./Home";

import PublicProfile from "./PublicProfile";

import LinkPreview from "./LinkPreview";

import Design from "./Design";

import Customers from "./Customers";

import Statistics from "./Statistics";

import orders from "./orders";

import Calendar from "./Calendar";

import Referrals from "./Referrals";

import EmailSequences from "./EmailSequences";

import InstagramAutomation from "./InstagramAutomation";

import AskLink from "./AskLink";

import PublicStorefront from "./PublicStorefront";

import PublicProduct from "./PublicProduct";

import [ from "./[";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Dashboard: Dashboard,
    
    Profile: Profile,
    
    Home: Home,
    
    PublicProfile: PublicProfile,
    
    LinkPreview: LinkPreview,
    
    Design: Design,
    
    Customers: Customers,
    
    Statistics: Statistics,
    
    orders: orders,
    
    Calendar: Calendar,
    
    Referrals: Referrals,
    
    EmailSequences: EmailSequences,
    
    InstagramAutomation: InstagramAutomation,
    
    AskLink: AskLink,
    
    PublicStorefront: PublicStorefront,
    
    PublicProduct: PublicProduct,
    
    [: [,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Dashboard />} />
                
                
                <Route path="/Dashboard" element={<Dashboard />} />
                
                <Route path="/Profile" element={<Profile />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/PublicProfile" element={<PublicProfile />} />
                
                <Route path="/LinkPreview" element={<LinkPreview />} />
                
                <Route path="/Design" element={<Design />} />
                
                <Route path="/Customers" element={<Customers />} />
                
                <Route path="/Statistics" element={<Statistics />} />
                
                <Route path="/orders" element={<orders />} />
                
                <Route path="/Calendar" element={<Calendar />} />
                
                <Route path="/Referrals" element={<Referrals />} />
                
                <Route path="/EmailSequences" element={<EmailSequences />} />
                
                <Route path="/InstagramAutomation" element={<InstagramAutomation />} />
                
                <Route path="/AskLink" element={<AskLink />} />
                
                <Route path="/PublicStorefront" element={<PublicStorefront />} />
                
                <Route path="/PublicProduct" element={<PublicProduct />} />
                
                <Route path="/[" element={<[ />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}