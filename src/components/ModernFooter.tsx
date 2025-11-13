import { Link } from "react-router-dom";

export default function ModernFooter() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sunset">Ringo</span>
            </div>
            <p className="text-white/60 max-w-sm">
              Voice-enabled travel eSIM for digital nomads. Your number,
              everywhere.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <div className="space-y-2 text-sm">
              <Link
                to="/how-it-works"
                className="block text-white/60 hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                to="/pricing"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/faq"
                className="block text-white/60 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Legal & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link
                to="/privacy-policy"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Ringo. All rights reserved. • Launch: Q2 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
