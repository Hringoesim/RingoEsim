import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Bell, Gift } from 'lucide-react';

export default function WaitlistConfirmed() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-background">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-900">
              You're on the Ringo Waitlist! 🎉
            </h1>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Thank you for joining our pilot program. You're now part of an exclusive group that will help shape the future of global connectivity.
            </p>
          </div>

          {/* What Happens Next */}
          <Card className="card-elegant max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-green-900">What Happens Next</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Stay Updated</h3>
                    <p className="text-sm text-blue-800">
                      We'll keep you informed about our development progress and pilot milestones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-2">Priority Access</h3>
                    <p className="text-sm text-purple-800">
                      You'll receive priority access when we launch our pilot program.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">Early Benefits</h3>
                    <p className="text-sm text-green-800">
                      Pilot participants may receive special pricing and exclusive features.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2">Shape the Product</h3>
                    <p className="text-sm text-orange-800">
                      Your feedback will directly influence Ringo's development and features.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="card-elegant max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Expected Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Now - Development Phase</h3>
                    <p className="text-sm text-muted-foreground">
                      Building core features and preparing pilot infrastructure
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Q1 2025 - Pilot Invitations</h3>
                    <p className="text-sm text-muted-foreground">
                      First wave of pilot invitations sent to waitlist members
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Q2 2025 - Pilot Testing</h3>
                    <p className="text-sm text-muted-foreground">
                      Active pilot testing with feedback collection and improvements
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Q3 2025 - Public Launch</h3>
                    <p className="text-sm text-muted-foreground">
                      Full public launch based on pilot feedback and improvements
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/dashboard">View Dashboard</a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="/how-it-works">Learn More About Ringo</a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="/">Back to Homepage</a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              Have questions? <a href="/contact" className="text-primary hover:underline">Contact our team</a> or 
              check out our <a href="/faq" className="text-primary hover:underline">FAQ</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}