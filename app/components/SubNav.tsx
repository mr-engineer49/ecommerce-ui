"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const SubNav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.subnav}>
      <Link
        className={`${styles.link} ${pathname === "/accessories" ? styles.active : ""}`}
        href="/accessories"
      >
        Accessories
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/clothes" ? styles.active : ""
        }`}
        href="/clothes"
      >
        Clothes
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/electronics" ? styles.active : ""
        }`}
        href="/electronics"
      >
        Electronics
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/handmade" ? styles.active : ""
        }`}
        href="/handmade"
      >
        Hand Made
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/retailstores" ? styles.active : ""
        }`}
        href="/retailstores"
      >
        Retail Stores
      </Link>
      <Link href="#">
      New Arrivals
      </Link>
      <Link href="#">
      Deals
      </Link>
    </nav>
  );
};
