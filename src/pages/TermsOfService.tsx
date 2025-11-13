import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2025
            </p>
          </div>

          <Card className="card-elegant">
            <CardContent className="prose prose-gray max-w-none p-8">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Ringo's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                Ringo is a voice-enabled travel eSIM service that provides global connectivity solutions. We are currently in development phase, building a waitlist for early access to our services when they become available.
              </p>

              <h3>2.1 Waitlist Service</h3>
              <ul>
                <li>Our waitlist is free to join</li>
                <li>No account creation is required</li>
                <li>We collect only essential information: email, name, and country</li>
                <li>Joining the waitlist does not guarantee service access</li>
                <li>We will notify waitlist members when services become available</li>
              </ul>

              <h2>3. Eligibility</h2>
              <p>You must be at least 18 years old to use our services. By using our services, you represent and warrant that:</p>
              <ul>
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into this agreement</li>
                <li>You will provide accurate and complete information</li>
                <li>You will comply with all applicable laws and regulations</li>
              </ul>

              <h2>4. Waitlist Terms</h2>
              <p>By joining our waitlist, you understand and agree that:</p>
              <ul>
                <li>Waitlist position does not guarantee service access or priority</li>
                <li>We may invite users to our service based on various criteria</li>
                <li>Service availability is subject to development progress and regional rollout</li>
                <li>You may unsubscribe from the waitlist at any time</li>
                <li>We reserve the right to remove users from the waitlist at our discretion</li>
                <li>No payment is required to join the waitlist</li>
              </ul>

              <h2>5. Information Accuracy</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information when joining our waitlist</li>
                <li>Update your information if it changes</li>
                <li>Not provide false or misleading information</li>
                <li>Not use someone else's information without permission</li>
              </ul>

              <h2>6. Acceptable Use</h2>
              <p>You agree not to use our services to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or illegal content</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Spam, harass, or abuse other users or our staff</li>
                <li>Use automated systems to join our waitlist multiple times</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by Ringo and are protected by copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul>
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our services</li>
              </ul>

              <h2>8. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>

              <h2>9. Communications</h2>
              <p>By joining our waitlist, you consent to receive:</p>
              <ul>
                <li>Service launch notifications</li>
                <li>Updates about Ringo's development progress</li>
                <li>Early access invitations (when available)</li>
                <li>Important service announcements</li>
              </ul>
              <p>You may unsubscribe from these communications at any time.</p>

              <h2>10. Service Availability</h2>
              <p>We make no guarantees regarding:</p>
              <ul>
                <li>When our services will become available</li>
                <li>Service availability in specific geographic regions</li>
                <li>Specific features or functionality</li>
                <li>Pricing or service plans</li>
                <li>Compatibility with specific devices or networks</li>
              </ul>

              <h2>11. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Ringo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service delays or unavailability</li>
                <li>Third-party actions or content</li>
                <li>Any damages arising from your use of our waitlist or website</li>
              </ul>

              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Ringo, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
              </p>
              <ul>
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any information you provide to us</li>
              </ul>

              <h2>13. Termination</h2>
              <p>We may terminate or suspend your access to our services at any time, with or without cause, including if:</p>
              <ul>
                <li>You violate these Terms of Service</li>
                <li>You engage in fraudulent or illegal activities</li>
                <li>We discontinue the service</li>
                <li>Required by law or regulation</li>
              </ul>

              <h2>14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul>
                <li>Posting updated Terms on our website</li>
                <li>Sending email notifications to waitlist members</li>
                <li>Displaying prominent notices on our platform</li>
              </ul>
              <p>
                Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>

              <h2>15. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
              </p>

              <h2>16. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.
              </p>

              <h2>17. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Ringo regarding the use of our services.
              </p>

              <h2>18. Contact Information</h2>
              <p>For questions about these Terms of Service, contact us:</p>
              <ul>
                <li><strong>Email:</strong> info@ringoesim.com</li>
                <li><strong>General Contact:</strong> info@ringoesim.com</li>
              </ul>

              <Separator className="my-8" />
              
              <p className="text-sm text-muted-foreground">
                These Terms of Service are effective as of January 1, 2025. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}