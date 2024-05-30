import React from 'react'

function BoardMember() {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      width:'100%'
    },
    heading: {
      color: '#2c3e50',
      fontSize: '2.5em',
      marginBottom: '20px'
    },
    paragraph: {
      color: '#34495e',
      fontSize: '1.2em',
      lineHeight: '1.6',
      // maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'justify'
    },
    table: {
      width: '80%',
      margin: '20px auto',
      borderCollapse: 'collapse',
      textAlign:'center'
      
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      backgroundColor: '#f2f2f2',
      color:'black'
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign:'left'
    },
    tr: {
      backgroundColor: '#f9f9f9'
    }
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Board Member</h1>
        <p style={styles.paragraph}>
          
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>S.NO.</th>
              <th style={styles.th}>NAME</th>
              <th style={styles.th}>BOARD MEMBER</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Chairman, JDA</td>
              <td style={styles.td}>Chairman</td>
            </tr>
            <tr>
              <td style={styles.td}>2</td>
              <td style={styles.td}>Chief Executive Officer, JDA</td>
              <td style={styles.td}>Secretary & CEO</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>3</td>
              <td style={styles.td}>Collector, Jabalpur</td>
              <td style={styles.td}>Member</td>
            </tr>
            <tr>
              <td style={styles.td}>4</td>
              <td style={styles.td}>Commissioner, JMC, Jabalpur</td>
              <td style={styles.td}>Member</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>5</td>
              <td style={styles.td}>Deputy Director T&CP, Jabalpur</td>
              <td style={styles.td}>Member</td>
            </tr>
            <tr>
              <td style={styles.td}>6</td>
              <td style={styles.td}>Forest Conservator, Jabalpur</td>
              <td style={styles.td}>Member</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>7</td>
              <td style={styles.td}>SE, PHE, Jabalpur</td>
              <td style={styles.td}>Member</td>
            </tr>
            <tr>
              <td style={styles.td}>8</td>
              <td style={styles.td}>SE, PWD, Jabalpur</td>
              <td style={styles.td}>Member</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>9</td>
              <td style={styles.td}>SE,MPSEB, Jabalpur</td>
              <td style={styles.td}>Member</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BoardMember
