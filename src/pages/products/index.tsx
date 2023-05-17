import React from "react";
import MetaLayout from "@/components/Layout/MetaLayout";
import axios from "axios";
import { API_Parameters } from "@/config/Api_Parameters";
import { Base_Url } from "@/config/Base_Url";
import { IProductData } from "@/types/InterfaceProduct";
import { GetStaticProps } from "next";
import Image from "next/image";

import styles from "./products.module.scss";
interface IProductProps {
  productsData: IProductData;
}
export default function Products({ productsData }: IProductProps) {
  const { products } = productsData;
  console.log(products);
  return (
    <MetaLayout title="Products | Project">
      <section className={styles.products}>
        {products.map((product) => (
          <div className={styles.card}>
            <span className={styles.card__id}>{product.id}</span>
            <div className={styles.card__imagecont}>
              <Image
                src={product.thumbnail}
                width={250}
                height={150}
                alt={product.category}
                title={product.title}
              />
            </div>
            <div className={styles.card__info}>
              <p>🙀 {product.title}</p>
              <div className={styles.card__text}>🚀 {product.brand}</div>
              <div className={styles.card__text}>💬 {product.description}</div>
              <div className={styles.card__text}>⚙️ {product.category}</div>
              <div className={styles.card__text}>⭐ {product.rating}</div>
              <div className={styles.card__text}>💲{product.price}</div>
            </div>
          </div>
        ))}
      </section>
    </MetaLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(Base_Url + API_Parameters.products);
  const data = await response.data;
  return {
    props: {
      productsData: data,
    },
  };
};
