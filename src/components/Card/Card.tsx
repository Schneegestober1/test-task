import React from "react"
import styles from "../Card/card.module.scss"
import StarIcon from "../../assets/icons/StartIcon"
import Button from "../UI/Button/Button"
import { useCart } from "../Context/CartContext";

interface CardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
}

const Card: React.FC<CardProps> = ({ id, title, image, price, oldPrice, rating }) => {
  const { addToCart } = useCart()
  const handleBuy = () => {
    addToCart({ id, title, price, image })
  };
  return (
    <section key={id} className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt={title} />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.priceBox}>
            <p className={styles.price}>{price} ₽</p>
            {oldPrice && <p className={styles.oldPrice}>{oldPrice} ₽</p>}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.rating}>
            <StarIcon width={23} height={21} />
            <span className={styles.rating}>{rating}</span>
          </div>
          <Button
            className={styles.button}
            onClick={handleBuy}
            aria-label={`Купить ${title}`}
          >
            Купить
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Card
