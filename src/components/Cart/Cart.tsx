import React from "react"
import styles from "../Cart/cart.module.scss"
import BinIcon from "../../assets/icons/Bin"
import PlusIcon from "../../assets/icons/PlusIcon"
import MinusIcon from "../../assets/icons/MinusIcon"
import { useCart } from "../hooks/useCart"

const Cart: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()


  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <section>
      <h2 className={styles.pageTitle}>Корзина</h2>

      {cart.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.cardContent}>
            <img
              className={styles.cardImage}
              alt={item.title}
              src={item.image}
            />

            <div className={styles.cardName}>{item.title}</div>
            <div className={styles.cardPrice}>{item.price} ₽</div>
            <div className={styles.cardTotal}>{item.price * item.quantity} ₽</div>

            <div className={styles.quantity}>
              <div className={styles.quantityButton} onClick={() => decreaseQuantity(item.id)}>
                <MinusIcon />
              </div>

              <span className={styles.quantityValue}>{item.quantity}</span>

              <div className={styles.quantityButton}  onClick={() => increaseQuantity(item.id)}>
                <PlusIcon />
              </div>
            </div>

            <div className={styles.deleteButton} onClick={() => removeFromCart(item.id)}>
              <BinIcon />
            </div>
          </div>
        </div>
      ))}

      <div className={styles.summary}>
        <div className={styles.summaryContent}>
          <div className={styles.summaryTotal}>
            <span>ИТОГО</span>
            <span>₽ {total}</span>
          </div>

          <button className={styles.summaryButton}>
            Перейти к оформлению
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
