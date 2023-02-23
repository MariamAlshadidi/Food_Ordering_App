import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <>
   
        <div className={styles.container}>

             <div className={styles.item}> 
             <Image src="/img/bg.png" layout='fill' alt="Footer"  objectFit='cover'/>
             </div>

             <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>OH YES , WE DID YUMMY FOOD WELL BAKED SLICE OF PIZZA  </h2>
                </div>
                <div className={styles.card}> 
                  <h1 className={styles.title}>Find Our Resturant</h1>

                   <p className={styles.text}> 
                   1952 Road R , #304.
                   <br />Newwork 15542,
                   <br /> (011) 987-097
                   </p>

                   <p className={styles.text}> 
                   1952 Road R , #304.
                   <br />Newwork 15542,
                   <br /> (011) 987-097
                   </p>

                   <p className={styles.text}> 
                   1952 Road R , #304.
                   <br />Newwork 15542,
                   <br /> (011) 987-097
                   </p>

                </div>

                <div className={styles.card}> 
                <h1 className={styles.title}>Working House</h1>

                  <p className={styles.text}> 
                   Monday until Friday
                   <br />9:00 - 22:00
                  </p>

                  <p className={styles.text}> 
                   Saturday until Sunday
                   <br />10:00 - 19:00
                  </p>
                </div>
             </div>
        </div>
        <div className={styles.containerDown}>
            <p className={styles.text}>
            <span> © The Yummy Food Store, All Rights Reserved.</span>
            <span class="fa fa-facebook"></span>
            <span class="fa fa-twitter"></span>
            <span class="fa fa-instagram"></span>
            <span class="fa fa-linkedin"></span>
            </p>
        </div>

        </>
    )
}

export default Footer