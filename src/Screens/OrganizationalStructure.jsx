
import React from 'react'
import ORGN from '../assets/ORGN.jpg'


const OrganizationalStructure = () => {
  const styles = {
    contain: {
      textAlign: 'center',
      maxWidth:'100%'
    },
    headStyle :{
      margin: '10px', 
      padding: '15px', 
      fontWeight: 'bold', 
      background: '#C9C9C9' ,
      textAlign: 'center',
      maxWidth:'100%'
    }

  }
  return (
    <div style={styles.contain}>
      <h4 style={styles.headStyle}>Organisational Structure</h4>
      <div className="div">
        <img src={ORGN} alt=" OrganisationalStructure" />
      </div>
    </div>
  )
}

export default OrganizationalStructure

