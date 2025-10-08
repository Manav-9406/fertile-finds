import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/hooks/useCart";
import { Sprout, Droplets, Leaf, Wrench, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.slice(0, 4);
        setFeaturedProducts(featured);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const categories = [
    {
      name: "Pesticides",
      icon: Droplets,
      description: "Protect your crops from pests",
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Fertilizers",
      icon: Leaf,
      description: "Nourish your soil naturally",
      color: "bg-secondary/10 text-secondary",
    },
    {
      name: "Seeds",
      icon: Sprout,
      description: "High-yield quality seeds",
      color: "bg-accent/10 text-accent-foreground",
    },
    {
      name: "Tools",
      icon: Wrench,
      description: "Essential farming equipment",
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Agricultural farmland"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Empowering Farmers with Quality Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
              Your trusted partner for pesticides, fertilizers, seeds, and farming tools
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Product Categories</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need for successful farming
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link to={`/products?category=${category.name}`} key={category.name}>
                    <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-lg text-muted-foreground">
                Best-selling products trusted by farmers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose AgroMart?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="opacity-90">
                  100% genuine products from trusted manufacturers
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="opacity-90">
                  Quick and reliable delivery to your doorstep
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="opacity-90">
                  Competitive pricing with great discounts
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
