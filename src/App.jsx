import React from 'react'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './Screens/About'
import Act1973 from './Screens/Act1973'
import MasterPlan from './Screens/MasterPlan'
import PayYourDue from './Screens/PayYourDue'
import PropertiesForSale from './Screens/PropertiesForSale'
import DownloadFormate from './Screens/DownloadFormate'
import Gallery from './Screens/Gallery'
import OrganizationalStructure from './Screens/OrganizationalStructure'
import BoardMember from './Screens/BoardMember'
import Transferred from './Screens/Transferred'
import Upcoming from './Screens/Upcoming'
import Running from './Screens/Running'
import Niyam2013 from './Screens/Niyam2013'
import Niyam2018 from './Screens/Niyam2018'
import RERAAct from './Screens/RERAAct'
import ImportantNotices from './Screens/ImportantNotices'
import TimeLimits from './Screens/TimeLimits'
import ExpressYourInterest from './Screens/ExpressYourInterest'
import Tenders from './Screens/Tenders'
import {Header} from '../src/components/footer/navbar2/Header'
const App = () => {
  
  return (

    <BrowserRouter>
    <Navbar />
    {/* <Header /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Act1973" element={<Act1973 />} />
        <Route path="/DownloadFormate" element={<DownloadFormate />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/MasterPlan" element={<MasterPlan />} />
        <Route path="/PayYourDue" element={<PayYourDue />} />
        <Route path="/PropertiesForSale" element={<PropertiesForSale />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/OrganizationalStructure" element={<OrganizationalStructure />} />
        <Route path="/BoardMember" element={<BoardMember />} />
        <Route path="/Transferred" element={<Transferred />} />
        <Route path="/Running" element={<Running />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Niyam2013" element={<Niyam2013 />} />
        <Route path="/Niyam2018" element={<Niyam2018 />} />
        <Route path="/RERAAct" element={<RERAAct />} />
        <Route path="/ImportantNotices" element={<ImportantNotices />} />
        <Route path="/TimeLimits" element={<TimeLimits />} />
        <Route path="/ExpressYourInterest" element={<ExpressYourInterest />} />
        <Route path="/Tenders" element={<Tenders />} />
        {/* <Route path="/" element={< />} /> */}
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
