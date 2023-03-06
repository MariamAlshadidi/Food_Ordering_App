import Image from "next/image";
import React from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          <tr className={styles.tr2}>
            <td >
                <div className={styles.imgContainer}>
                    <Image src="/img/pizza.png"  alt="Phone" layout="fill" objectFit="cover"/>
                </div>
            </td>

            <td>
                 <span  className={styles.name}>Pizza one</span>
            </td>

            <td> 
                <span  className={styles.extras}> spicy sauce</span>
            </td>

            <td> 
                <span  className={styles.price}> $ 19.95</span> 
            </td>

            <td> 
                <span  className={styles.quantity}> 3</span>
            </td>

            <td> 
                <span  className={styles.total}> $ 89.5</span>
            </td>
          </tr>
          
        </table>
      </div>
      <div className={styles.right}> 
        <div  className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>

            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>SubTotal</b> : $ 70.5
            </div>

            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount</b> : $ 0.00
            </div>

            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total</b> : $ 70.5
            </div>

            <button  className={styles.btn}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
