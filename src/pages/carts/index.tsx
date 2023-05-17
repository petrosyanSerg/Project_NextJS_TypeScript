import React, { useEffect, useRef, RefObject } from "react";
import axios from "axios";
import MetaLayout from "@/components/Layout/MetaLayout";
import { API_Parameters } from "@/config/Api_Parameters";
import { Base_Url } from "@/config/Base_Url";
import { ICartData } from "@/types/InterfaceCart";
import { GetStaticProps } from "next";
import CartsUI from "./CartsUI";
import styles from "./carts.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(Base_Url + API_Parameters.carts);
  const data = response.data;
  return {
    props: {
      cartsData: data,
    },
  };
};

interface ICartsProps {
  cartsData: ICartData;
}

export default function Carts({ cartsData }: ICartsProps) {
  const { carts } = cartsData;

  return (
    <MetaLayout title="Carts | Project">
      <section className={styles.carts}>
        {carts.map((cart) => (
          <CartsUI key={cart.id} cart={cart} />
        ))}
      </section>
    </MetaLayout>
  );
}
