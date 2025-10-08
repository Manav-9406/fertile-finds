import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About AgroMart</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Empowering farmers across India with quality agriculture products and knowledge
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide farmers with easy access to high-quality agriculture products at affordable prices,
                    ensuring better yields and sustainable farming practices across India.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted agriculture marketplace, connecting farmers directly with
                    quality products and empowering them with modern farming solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose AgroMart?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to supporting farmers with the best products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                  <p className="text-sm text-muted-foreground">
                    100% authentic products from certified manufacturers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Agricultural experts available to guide you
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">🚚</span>
                  <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick delivery to your doorstep across India
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">💰</span>
                  <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
                  <p className="text-sm text-muted-foreground">
                    Competitive pricing with regular discounts
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                AgroMart was founded with a simple yet powerful vision: to bridge the gap between farmers
                and quality agriculture products. We recognized that farmers often struggle to access genuine
                products at fair prices, which directly impacts their yields and livelihoods.
              </p>
              
              <p>
                Starting with a small team of agriculture enthusiasts, we built a platform that connects
                farmers directly with trusted manufacturers and suppliers. Our e-commerce platform eliminates
                middlemen, ensuring farmers get the best products at competitive prices.
              </p>
              
              <p>
                Today, we serve thousands of farmers across India, offering a comprehensive range of pesticides,
                fertilizers, seeds, and farming tools. Our commitment to quality, affordability, and farmer
                satisfaction drives everything we do.
              </p>

              <p className="font-semibold text-foreground">
                Join us in our mission to transform Indian agriculture, one farmer at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="opacity-90">Happy Farmers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="opacity-90">Cities Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="opacity-90">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
