import React from 'react'
import ORGN from '../assets/ORGN.jpg'
const OrganizationalStructure = () => {
  return (
    <div style={{textAlign:'center'}}>
    <h4 
    style={{margin:'10px',padding:'15px',fontWeight:'bold',background:'#C9C9C9'}}
    >Organisational Structure</h4> 
    <div className="div">
        <img src={ORGN} alt=" OrganisationalStructure" />
    </div>
    </div>
  )
}

export default OrganizationalStructure
