import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent-beige">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold text-accent-gray">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#menu">View Menu</Link>
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Lost? Try our delicious menu instead! 🍕🦞
          </p>
        </div>
      </div>
    </div>
  );
}
