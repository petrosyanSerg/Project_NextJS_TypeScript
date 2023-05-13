import React from "react";
import { RoutesPath } from "@/config/RoutesPath";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/SiteLogo.png";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={RoutesPath.home} className={styles.logo__link}>
          <Image
            src={Logo}
            alt="Logo"
            className={styles.logo__image}
            placeholder="blur"
          />
        </Link>
      </div>
      <nav className={styles.nabar}>
        <ul className={styles.nabar__menu}>
          <li className={styles.nabar__item}>
            <Link className={styles.nabar__link} href={RoutesPath.users}>
              Users
            </Link>
          </li>
          <li className={styles.nabar__item}>
            <Link className={styles.nabar__link} href={RoutesPath.quotes}>
              Quotes
            </Link>
          </li>
          <li className={styles.nabar__item}>
            <Link className={styles.nabar__link} href={RoutesPath.posts}>
              Posts
            </Link>
          </li>
          <li className={styles.nabar__item}>
            <Link className={styles.nabar__link} href={RoutesPath.carts}>
              Carts
            </Link>
          </li>
          <li className={styles.nabar__item}>
            <Link className={styles.nabar__link} href={RoutesPath.todos}>
              Todos
            </Link>
          </li>
          <li className={styles.nabar__item}>
            <Link className={styles.nabar__link} href={RoutesPath.products}>
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
