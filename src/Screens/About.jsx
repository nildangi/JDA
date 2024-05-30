import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { TbBackground } from 'react-icons/tb';

function About() {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      // backgroundColor:'gray'
    },
    heading: {
      color: '#2c3e50',
      fontSize: '2.5em',
      marginBottom: '20px',
      backgroundColor:'white'
    },
    paragraph: {
      color: '#34495e',
      fontSize: '1.2em',
      lineHeight: '1.6',
      margin: '0 auto',
      textAlign: 'justify',
  

    }
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>About JDA</h1>
        <p style={styles.paragraph}>
          Jabalpur Development Authority was established and incorporated on 11th January 1980 with an aim of well planned and balanced development of Jabalpur city. The authority is structured under the town and country planning act 1973 of MP State Govt. and it works under the administration of Housing and Development Ministry of MP Govt. The symbol of urbanization, which is directly perceived by common people, is "the development of land in an organized manner". The common people do the investment in this activity. JDA provides a platform for people to participate in the development. JDA sells the plots in the scheme. JDA provides the land at reasonable prices. And it is generally safe measure to invest in the land in an authorized colony. These colonies are well planned, and well furnished with all the facilities and utilities. The function of JDA is to control and regulate the development. If the private developers make plans for any institutional, residential or any other area, then they are required to be approved by JDA. If the plan does not meet the requirement of existing proposal of the master plan then it is not given the approval. In case if the matter is not solved by the JDA then it goes to the TCPO.
        </p>
      </div>
    </>
  )
}

export default About

