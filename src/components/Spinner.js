import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div style={styles.container}>
        <img src={loading} alt="loading..." />
      </div>
    )
}

const styles = {
    container: {
        textAlign: "center",
        margin: "20px 0 20px 0"
    }
}

export default Spinner
