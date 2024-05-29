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

const App = () => {
  return (

    <BrowserRouter>
    <Navbar />
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
        {/* <Route path="/" element={< />} /> */}
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
