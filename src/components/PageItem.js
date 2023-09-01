import React, { useState } from 'react'
import styles from './pageItem.module.css'

export default function PageItem(props) {

  const item = props.item;

  const [likes, setLikes] = useState(0);

  const addLike = (item) => {
    setLikes(likes+1);
  }

  return (
    <div className={styles.itemContainer}>
      <div className={styles.ItemImg}>
        <img src={item.download_url} alt="articleImage" />
      </div>
      <div className={styles.rightDiv}>
        <span style={{fontWeight:"bold"}}>Author</span>
        &nbsp;
        <span>{item.author}</span>
        &nbsp;
        &nbsp;
        <i className="fa-solid fa-thumbs-up" style={{color : likes > 0 ? '#2c86f3' : '#b7d2f4'}} onClick={addLike}></i>
        &nbsp;
        {likes > 0 && <span>{likes}</span>}
      </div>
    </div>
  )
}
