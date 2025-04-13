import React from "react"
import styles from "../Cart/cart.module.scss"
import BinIcon from "../../assets/icons/Bin";
import PlusIcon from "../../assets/icons/PlusIcon";
import MinusIcon from "../../assets/icons/MinusIcon";


const Cart: React.FC = () => {
	const cartItem = {
    name: "Apple BYZ S852I",
    price: 2927,
    quantity: 1,
    image: "/public/img//item3.png",
  };

	
  return (
		<section>
			<h2 className={styles.pageTitle}>Корзина</h2>

			<div className={styles.card}>
				<div className={styles.cardContent}>
					<img
						className={styles.cardImage}
						alt={cartItem.name}
						src={cartItem.image}
					/>

					<div className={styles.cardName}>{cartItem.name}</div>
					<div className={styles.cardPrice}>{cartItem.price} ₽</div>
					<div className={styles.cardTotal}>{cartItem.price} ₽</div>

					<div className={styles.quantity}>
						<div className={styles.quantityButton}>
							<PlusIcon />
						</div>

						<span className={styles.quantityValue}>{cartItem.quantity}</span>

						<div className={styles.quantityButton}>
							<MinusIcon />
						</div>
					</div>

					<div className={styles.deleteButton}>
						<BinIcon />
					</div>
				</div>
			</div>

			<div className={styles.summary}>
				<div className={styles.summaryContent}>
					<div className={styles.summaryTotal}>
						<span>ИТОГО</span>
						<span>₽ {cartItem.price}</span>
					</div>

					<button className={styles.summaryButton}>
						Перейти к оформлению
					</button>
				</div>
			</div>
	</section>
  );
};

export default Cart