import React from 'react'

const DownloadFormate = () => {
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
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'justify',

    }
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Download Formate</h1>
        <p style={styles.paragraph}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem error non, illum expedita alias officia! Reprehenderit sed eos voluptas molestiae eaque vitae temporibus fugiat, iure quidem accusantium, maxime totam dolor.
        </p>
      </div>
    </>
  )
}

export default DownloadFormate
