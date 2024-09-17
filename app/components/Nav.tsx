"use client";

import { Badge, Button, Input } from "@mui/material";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import styles from "../styles/layout.module.css";
import { SubNav } from "./SubNav";


export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState(0)

  const addToCart = () => {
    setCartItems(cartItems + 1)
  }

  const pathname = usePathname();

  return (
    <>
          {/* Promotional Banner */}
          <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
          🎉 Summer Sale! Up to 50% off on selected items. Shop now!
        </div>
  
        <header className="px-4 lg:px-6 h-16 flex items-center border-b">
          <Button  className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-8 w-8 mr-6" /> : <Menu className="h-8 w-8 mr-8" />}
          </Button>
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-xl">Advera Store</span>
          </Link>
          <nav className={`md:ml-auto md:flex md:items-center flex inline gap-4 sm:gap-6 ${isMenuOpen ? 'absolute top-20 left-0 right-0 bg-background border-b p-8' : 'hidden md:flex'}`}>
		        <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/components/seller-dashboard" ? styles.active : ""
        }`}
        href="/components/seller-dashboard"
      >
        Dashboard
      </Link>
      <div>
        <Link href="/loginauth">Login here</Link>
      </div>
        <Link className={`${ pathname === "/create-new" ? styles.active : ""}`}
        href="/create-new"
      >Create Product here !!</Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <form className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 w-[300px]"
                />
              </div>
            </form>
            <Button  className="relative">
              <ShoppingCart className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2">{cartItems}</Badge>
            </Button>
          </div>
        </header>
        <SubNav/>
        </>
  );
};
