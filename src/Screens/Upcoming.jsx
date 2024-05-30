import React from 'react'

const Upcoming = () => {
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
        <h1 style={styles.heading}>Upcoming</h1>
        <p style={styles.paragraph}>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quos pariatur quidem, iste quas at consequatur atque autem veritatis mollitia impedit dignissimos. Cupiditate, nostrum odit? Ea ab error voluptate porro. Corrupti obcaecati illum optio autem expedita officia dolorem mollitia. Voluptatem?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur nemo laudantium, aliquid quod aut.
       </p>
      </div>
    </>
  )
}


export default Upcoming
