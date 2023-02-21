import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}> The Best Pizza in The Town</h1>
       <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore commodi minima odio
         praesentium quo nostrum corporis eius, adipisci possimus quos in ex aut quia eos maiores debitis est. 
         Dicta?
       </p>
       <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
       </div>
    </div>
  )
}
