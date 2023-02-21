import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProductCard.module.css'
export default function ProductCard() {
  return (
    <div  className={styles.container}>
         <Image  src="/img/pizza.png"  alt="Phone" width={200} height={200}  />
         <h1 className={styles.title}> Checken Pizza </h1>
         <span className={styles.price}> $19.45 </span>
       <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore commodi minima odio
         praesentium quo nostrum corporis eius, adipisci possimus quos in ex aut quia eos maiores debitis est. 
         Dicta?
       </p>
    </div>
  )
}
