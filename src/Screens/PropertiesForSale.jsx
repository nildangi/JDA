import React from 'react'

const PropertiesForSale = () => {
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
        <h1 style={styles.heading}>Properties For Sale</h1>
        <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi maiores voluptate minus ex dolores! Blanditiis quam sit delectus praesentium maxime eligendi omnis maiores molestias quas officiis, incidunt, ut voluptates labore commodi minus alias quia nulla! Facere nobis quas voluptas, ea provident veritatis. Vitae, itaque!
        </p>
      </div>
    </>
  )
}


export default PropertiesForSale
