import React, { useEffect, useRef, RefObject } from "react";
import styles from "./carts.module.scss";
import { ICart } from "@/types/InterfaceCart";

interface ICartsProps {
  cart: ICart;
}

export default function CartsUI({ cart }: ICartsProps) {
  const elRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className={styles.row} ref={elRef as RefObject<HTMLDivElement>}>
      {cart.products.map((product) => (
        <div key={product.id} className={styles.product}>
          <span className={styles.product__id}>{product.id}</span>
          <div>
            <div>{product.title}</div>
            <div>Price : {product.price}$</div>
          </div>
          <div>
            <div>Quantity : {product.quantity}</div>
            <div>Discounted Price : {product.discountedPrice}$</div>
          </div>
        </div>
      ))}
    </div>
  );
}
