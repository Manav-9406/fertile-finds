import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center p-8">
            <div className="mb-6">
              <CheckCircle className="h-20 w-20 text-success mx-auto" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
            
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We will deliver your products soon.
              You will receive a confirmation email shortly.
            </p>

            <div className="space-y-3">
              <Link to="/products">
                <Button className="w-full" size="lg">
                  Continue Shopping
                </Button>
              </Link>
              
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
