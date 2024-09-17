"use client";
import { Badge, Button, Card, CardContent, } from "@mui/material";
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

export default function CardPage() {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4 p-4">
        <Card className="w-full max-w-[100%] mx-auto">
          <div className="relative">
            <img
              src="https://www.anglingdirect.co.uk/media/catalog/product/cache/ac527c7582b02617b1ecdcb3739644c7/m/a/matrix_deluxe_accessory_chair_.jpg?height=180&width=280"
              alt="Product img"
              className="w-full h-[150px] object-cover rounded-t-lg"
            />
            <Badge className="absolute top-2 left-3 bg-red-500 rounded-full px-4 text-white text-xs">
              Sale
            </Badge>
          </div>
          <CardContent className="p-3">
            <h3 className="font-semibold text-sm mb-1 truncate">Ergonomic Office Chair</h3>
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
              <span className="ml-1 text-xs text-muted-foreground">(4.0)</span>
            </div>
            <div className="text-sm font-bold mb-2">$199.99</div>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>12 in stock</span>
              <span>23 sold</span>
            </div>
          </CardContent>
          <CardContent className="p-3 pt-0">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center border rounded-md ">
                <Button className="h-7 w-7" onClick={decrementQuantity}>
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="mx-2 text-sm">{quantity}</span>
                <Button className="h-7 w-7" onClick={incrementQuantity}>
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Button className="h-7">
                <ShoppingCart className="mr-1 h-3 w-3" />
                <span className="text-xs">Add</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
  )
}