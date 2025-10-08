import { Product } from "@/hooks/useCart";
import { useCart } from "@/hooks/useCart";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden hover:shadow-medium transition-all duration-300">
      <div className="relative overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount > 0 && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
            {product.discount}% OFF
          </Badge>
        )}
        {!product.inStock && (
          <Badge className="absolute top-3 left-3 bg-muted text-muted-foreground">
            Out of Stock
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {product.category}
        </Badge>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
