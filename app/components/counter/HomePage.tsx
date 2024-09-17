"use client";


import { MenuBook } from "@mui/icons-material";
import { Badge, Button, Card, CardContent, CardHeader, Input, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Eye, Menu, Star } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';




const categories = [
  { name: "Fashion", icon: "👕" },
  { name: "Home & Garden", icon: "🏡" },
  { name: "Sports & Outdoors", icon: "⚽" },
];

export default function HomePage() {
  const [cartItems, setCartItems] = useState(0)

  const addToCart = () => {
    setCartItems(cartItems + 1)
  }

  return (
    <div className="flex flex-col min-h-screen style={{ width: '100%' }}">
  
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Discover Your Style, Elevate Your Life
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Explore our curated collection of premium products. From fashion to tech, find everything you need to express yourself.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
                <Button className="text-white border-white hover:bg-white hover:text-black">
                  View Lookbook
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">New Arrivals</h2>
            <p className="text-center text-gray-500 mb-8">Check out our latest products, fresh off the shelves!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Smart Watch Pro",
                  price: "$299.99",
                  image: "/placeholder.svg?height=300&width=300",
                  rating: 4.8,
                  reviews: 120,
                  badge: "New",
                },
                {
                  name: "Noise-Canceling Headphones",
                  price: "$199.99",
                  image: "/placeholder.svg?height=300&width=300",
                  rating: 4.5,
                  reviews: 85,
                  badge: "Trending",
                },
                {
                  name: "Eco-Friendly Water Bottle",
                  price: "$29.99",
                  image: "/placeholder.svg?height=300&width=300",
                  rating: 4.7,
                  reviews: 200,
                  badge: "Eco",
                },
                {
                  name: "Wireless Charging Pad",
                  price: "$49.99",
                  image: "/placeholder.svg?height=300&width=300",
                  rating: 4.3,
                  reviews: 150,
                },
              ].map((product, index) => (
                <Card key={index} className="flex flex-col justify-between overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-[200px]"
                      />
                      {product.badge && (
                        <Badge className="absolute top-2 right-2">{product.badge}</Badge>
                      )}
                      <Menu>
                        <MenuBook>
                          <Button className="absolute bottom-2 right-2">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </MenuBook>
                        <div className="w-80">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="font-bold">{product.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                Quick view of the product details and features.
                              </p>
                            </div>
                            <div className="grid gap-2">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                                <span className="text-sm font-medium">{product.rating}</span>
                                <span className="text-sm text-muted-foreground ml-2">
                                  ({product.reviews} reviews)
                                </span>
                              </div>
                              <div className="font-bold">{product.price}</div>
                            </div>
                          </div>
                        </div>
                      </Menu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Typography className="line-clamp-1">{product.name}</Typography>
                    <p className="text-2xl font-bold mt-2">{product.price}</p>
                    <div className="flex items-center mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </CardContent>
                  <CardContent className="p-4">
                    <Button className="w-full" onClick={addToCart}>Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Featured Categories</h2>
            <p className="text-center text-gray-500 mb-8">Explore our most popular product categories</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="text-4xl mb-2"><link type="image/png" sizes="16x16" rel="icon" href=".../icons8-gadgets-color-16.png"></link></div>
                    <Typography className="text-center h1 monospace">Electronics</Typography>
                  </CardHeader>
                  <CardContent>
                    <Button>Shop Now</Button>
                  </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">What Our Customers Say</h2>
            <p className="text-center text-gray-500 mb-8">Read reviews from our satisfied customers</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex Johnson",
                  avatar: "/placeholder.svg?height=40&width=40",
                  review: "Great products and fast shipping! Will definitely shop here again.",
                  rating: 5,
                },
                {
                  name: "Sarah Lee",
                  avatar: "/placeholder.svg?height=40&width=40",
                  review: "The customer service is top-notch. They helped me find the perfect item.",
                  rating: 4,
                },
                {
                  name: "Mike Brown",
                  avatar: "/placeholder.svg?height=40&width=40",
                  review: "Quality products at reasonable prices. Highly recommended!",
                  rating: 5,
                },
              ].map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <Avatar src={review.avatar} alt={review.name} />
                        <Avatar>{review.name.split(' ').map(n => n[0]).join('')}</Avatar>
                      </Avatar>
                      <div>
                        <Typography>{review.name}</Typography>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Newsletter</h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Stay updated with our latest offers, new arrivals, and exclusive discounts!
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-primary-foreground text-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-primary-foreground/70">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>

      {/* Floating Cart Summary */}
      <div className="fixed bottom-4 right-4 bg-background border rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">Cart Summary</span>
          <Badge>{cartItems} items</Badge>
        </div>
        <Button className="w-full">View Cart</Button>
      </div>
    </div>
  )
}
