import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-sunset">Ringo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              One Number. One Plan. Everywhere.
            </p>
            <p className="text-xs text-muted-foreground">
              Stay connected globally using your existing phone number.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <div className="space-y-2">
              <Link
                to="/how-it-works"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                How It Works
              </Link>
              <Link
                to="/pricing"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/device-compatibility"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Device Compatibility
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Support</h4>
            <div className="space-y-2">
              <Link
                to="/faq"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <a
                href="mailto:info@ringoesim.com"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Email Support
              </a>
              <Link
                to="/device-compatibility"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Check Compatibility
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <div className="space-y-2">
              <Link
                to="/privacy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-muted-foreground">
            © 2025 Ringo. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@ringoesim.com"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              info@ringoesim.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}