import React from 'react'

const MasterPlan = () => {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign:'center'
      
    
    },
    heading: {
      color: '#333',
      fontSize: '2em',
      marginBottom: '10px'
    },
    paragraph: {
      color: '#666',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Master Plan</h1>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores cumque in aut possimus labore neque necessitatibus, doloribus magnam illum odit consectetur officia porro id distinctio ad placeat nam qui nisi, eaque quaerat sunt a unde atque quidem! Facere dolorem quam, laborum iste, nam at temporibus quo enim repellat ducimus voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi ad hic quas nulla dolor vero consequatur maxime laborum vitae?
      </p>
    </div>
  )
}

export default MasterPlan
