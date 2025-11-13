import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2025
            </p>
          </div>

          <Card className="card-elegant">
            <CardContent className="prose prose-gray max-w-none p-8">
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>

              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li><strong>Essential Functionality:</strong> Enable core website features and navigation</li>
                <li><strong>User Preferences:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics:</strong> Understand how visitors use our website</li>
                <li><strong>Performance:</strong> Improve website speed and functionality</li>
                <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>
              
              <h3>3.1 Essential Cookies</h3>
              <p>These cookies are necessary for the website to function properly:</p>
              <ul>
                <li><strong>Session Cookies:</strong> Maintain your session while browsing</li>
                <li><strong>Authentication Cookies:</strong> Keep you logged in to your account</li>
                <li><strong>Security Cookies:</strong> Protect against cross-site request forgery</li>
                <li><strong>Load Balancing:</strong> Distribute traffic across our servers</li>
              </ul>

              <h3>3.2 Analytics Cookies</h3>
              <p>We use analytics cookies to understand how our website is used:</p>
              <ul>
                <li><strong>Google Analytics:</strong> Track page views, user behavior, and site performance</li>
                <li><strong>Usage Statistics:</strong> Monitor which pages are most popular</li>
                <li><strong>Error Tracking:</strong> Identify and fix technical issues</li>
                <li><strong>Performance Monitoring:</strong> Measure page load times and responsiveness</li>
              </ul>

              <h3>3.3 Preference Cookies</h3>
              <p>These cookies remember your choices and preferences:</p>
              <ul>
                <li><strong>Language Settings:</strong> Remember your preferred language</li>
                <li><strong>Theme Preferences:</strong> Store your dark/light mode choice</li>
                <li><strong>Form Data:</strong> Remember information you've entered in forms</li>
                <li><strong>Notification Settings:</strong> Store your communication preferences</li>
              </ul>

              <h2>4. Third-Party Cookies</h2>
              <p>We may use third-party services that set their own cookies:</p>
              
              <h3>4.1 Google Analytics</h3>
              <ul>
                <li><strong>Purpose:</strong> Website analytics and performance monitoring</li>
                <li><strong>Data Collected:</strong> Page views, session duration, bounce rate</li>
                <li><strong>Retention:</strong> 26 months</li>
                <li><strong>Opt-out:</strong> Available through Google Analytics opt-out browser add-on</li>
              </ul>

              <h3>4.2 Supabase</h3>
              <ul>
                <li><strong>Purpose:</strong> Authentication and database services</li>
                <li><strong>Data Collected:</strong> Session tokens, user authentication status</li>
                <li><strong>Retention:</strong> Session duration or until logout</li>
              </ul>

              <h2>5. Cookie Duration</h2>
              <p>Cookies may be stored for different periods:</p>
              <ul>
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain until expiration date or manual deletion</li>
                <li><strong>Authentication Cookies:</strong> 7-30 days depending on "Remember Me" setting</li>
                <li><strong>Analytics Cookies:</strong> Up to 26 months</li>
                <li><strong>Preference Cookies:</strong> Up to 1 year</li>
              </ul>

              <h2>6. Managing Cookies</h2>
              <p>You have several options for managing cookies:</p>

              <h3>6.1 Browser Settings</h3>
              <p>Most browsers allow you to:</p>
              <ul>
                <li>View and delete existing cookies</li>
                <li>Block all cookies or specific types</li>
                <li>Set preferences for different websites</li>
                <li>Receive notifications when cookies are set</li>
              </ul>

              <h3>6.2 Browser-Specific Instructions</h3>
              <ul>
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3>6.3 Opt-Out Tools</h3>
              <ul>
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Do Not Track:</strong> Enable in your browser settings</li>
                <li><strong>Privacy Extensions:</strong> Use browser extensions that block tracking</li>
              </ul>

              <h2>7. Impact of Disabling Cookies</h2>
              <p>Disabling cookies may affect your experience:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Website may not function properly</li>
                <li><strong>Authentication:</strong> You'll need to log in repeatedly</li>
                <li><strong>Preferences:</strong> Settings won't be remembered</li>
                <li><strong>Analytics:</strong> We can't improve the site based on usage data</li>
              </ul>

              <h2>8. Cookie Consent</h2>
              <p>By using our website, you consent to our use of cookies as described in this policy. You can:</p>
              <ul>
                <li>Accept all cookies for the best experience</li>
                <li>Customize your cookie preferences</li>
                <li>Reject non-essential cookies</li>
                <li>Change your preferences at any time</li>
              </ul>

              <h2>9. Updates to This Policy</h2>
              <p>We may update this Cookie Policy to reflect:</p>
              <ul>
                <li>Changes in our cookie usage</li>
                <li>New features or services</li>
                <li>Legal or regulatory requirements</li>
                <li>Industry best practices</li>
              </ul>
              <p>We will notify you of significant changes through our website or email.</p>

              <h2>10. International Considerations</h2>
              
              <h3>10.1 GDPR Compliance (EU)</h3>
              <p>For users in the European Union:</p>
              <ul>
                <li>We obtain explicit consent for non-essential cookies</li>
                <li>You can withdraw consent at any time</li>
                <li>We provide clear information about cookie purposes</li>
                <li>You have the right to object to cookie processing</li>
              </ul>

              <h3>10.2 CCPA Compliance (California)</h3>
              <p>For California residents:</p>
              <ul>
                <li>Cookies may be considered "personal information"</li>
                <li>You have the right to know what information is collected</li>
                <li>You can request deletion of cookie data</li>
                <li>We don't sell cookie data to third parties</li>
              </ul>

              <h2>11. Contact Information</h2>
              <p>For questions about our Cookie Policy:</p>
              <ul>
                <li><strong>Email:</strong> info@ringoesim.com</li>
                <li><strong>General Contact:</strong> info@ringoesim.com</li>
                <li><strong>Data Protection Officer:</strong> info@ringoesim.com</li>
              </ul>

              <Separator className="my-8" />
              
              <p className="text-sm text-muted-foreground">
                This Cookie Policy is effective as of January 1, 2025. By continuing to use our website, you acknowledge that you have read and understood this policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}