import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import MetaLayout from "@/components/Layout/MetaLayout";

import { IUserData } from "@/types/InterfaceUser";
import { GetStaticProps } from "next";
import { Base_Url } from "@/config/Base_Url";
import { API_Parameters } from "@/config/Api_Parameters";

import styles from "./users.module.scss";

interface IUsersProps {
  usersData: IUserData;
}
export default function Users({ usersData }: IUsersProps) {
  const { users } = usersData;

  return (
    <MetaLayout title="Users | Project">
      <section className={styles.users}>
        {users.map((user) => (
          <Link
            key={user.id}
            href={`${API_Parameters.users}/${user.id}`}
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <span className={styles.card__id}>{user.id}</span>
              <div className={styles.card__content}>
                <div className={styles.card__info}>
                  <Image
                    src={user.image}
                    alt={user.username}
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                </div>
                <div className={styles.card__nameCont}>
                  <h4 className={styles.card__names}>{user.firstName}</h4>
                  <h4 className={styles.card__names}>{user.lastName}</h4>
                </div>
              </div>
              <div className={styles.card__data}>
                <div className={styles.card__dateInfo}>{user.email}</div>
                <div className={styles.card__dateInfo}>{user.birthDate}</div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </MetaLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(Base_Url + API_Parameters.users);
  const data = response.data;
  return {
    props: {
      usersData: data,
    },
  };
};
