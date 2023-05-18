import React from "react";
import axios from "axios";
import Image from "next/image";
import MetaLayout from "@/components/Layout/MetaLayout";
import { API_Parameters } from "@/config/Api_Parameters";
import { Base_Url } from "@/config/Base_Url";
import { GetStaticProps } from "next";
import { IUser } from "@/types/InterfaceUser";

import styles from "./users.module.scss";

interface IUserProps {
  userData: IUser;
}

export default function user({ userData }: IUserProps) {
  const {
    id,
    image,
    age,
    firstName,
    lastName,
    birthDate,
    gender,
    maidenName,
    phone,
    email,
  } = userData;
  return (
    <MetaLayout title={`User | ${firstName}`}>
      <div className={styles.details}>
        <span className={styles.details__id}>{id}</span>
        <div className={styles.details__imageBox}>
          <div className={styles.details__iamgeCont}>
            <Image src={image} alt={firstName} width={250} height={250} />
          </div>
          <div className={styles.details__imageName}>
            {firstName} {lastName}
          </div>
        </div>
        <div className={styles.details__info}>
          <h1 className={styles.details__name}>{maidenName}</h1>
          <div className={styles.details__moreInfo}>
            <p className={styles.details__text}>Email : {email}</p>
            <p className={styles.details__text}>Birth Day : {birthDate}</p>
            <p className={styles.details__text}>Age : {age} year</p>
            <p className={styles.details__text}>Gender : {gender}</p>
            <p className={styles.details__text}>Phone : {phone}</p>
          </div>
        </div>
      </div>
    </MetaLayout>
  );
}

export const getStaticPaths = async () => {
  const response = await axios.get(Base_Url + API_Parameters.users);
  const data = await response.data;
  return {
    paths: data.users.map((user: any) => ({
      params: {
        id: user.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axios.get(
    Base_Url + API_Parameters.users + `/${params?.id}`
  );
  const data = response.data;
  return {
    props: {
      userData: data,
    },
  };
};
