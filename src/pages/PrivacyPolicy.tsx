import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2025
            </p>
          </div>

          <Card className="card-elegant">
            <CardContent className="prose prose-gray max-w-none p-8">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Ringo ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>

              <h2>2. Information We Collect</h2>
              
              <h3>2.1 Waitlist Information</h3>
              <p>When you join our waitlist, we collect:</p>
              <ul>
                <li><strong>Email Address:</strong> To send you updates about Ringo's launch and service availability</li>
                <li><strong>Name:</strong> To personalize our communications with you</li>
                <li><strong>Country:</strong> To understand our global reach and plan service availability</li>
                <li><strong>Timestamp:</strong> When you joined our waitlist</li>
              </ul>

              <h3>2.2 Contact Information</h3>
              <p>When you contact us through our contact form, we collect:</p>
              <ul>
                <li>Name and email address</li>
                <li>Subject and message content</li>
                <li>Any additional information you choose to provide</li>
              </ul>

              <h3>2.3 Automatically Collected Information</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul>
                <li>IP address and general location information</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li><strong>Waitlist Management:</strong> To notify you about Ringo's launch and early access opportunities</li>
                <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                <li><strong>Service Development:</strong> To understand user needs and improve our services</li>
                <li><strong>Marketing:</strong> To send you updates about Ringo (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2>6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Unsubscribe:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality and user experience</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p>You can control cookie settings through your browser preferences.</p>

              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>

              <h2>9. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to:</p>
              <ul>
                <li>Provide you with our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Fulfill the purposes outlined in this Privacy Policy</li>
              </ul>

              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>

              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices on our platform</li>
              </ul>

              <h2>12. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> info@ringoesim.com</li>
                <li><strong>General Contact:</strong> info@ringoesim.com</li>
              </ul>

              <Separator className="my-8" />
              
              <p className="text-sm text-muted-foreground">
                This Privacy Policy is effective as of January 1, 2025. By using our services, you acknowledge that you have read, understood, and agree to the collection and use of your information as described in this policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}