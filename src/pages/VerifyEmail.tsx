import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = async () => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    if (!token || !email) {
      setError('Invalid verification link. Please check your email and try again.');
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('waitlist_management_2025_10_01_16_16', {
        body: {
          action: 'verify',
          token: token,
          email: decodeURIComponent(email),
        }
      });

      if (error) throw error;

      if (data.success) {
        setIsSuccess(true);
        toast({
          title: "Email Verified!",
          description: data.message,
        });
      } else {
        throw new Error(data.error || 'Verification failed');
      }
    } catch (error: any) {
      console.error('Email verification error:', error);
      setError(error.message || 'Failed to verify email. Please try again.');
      toast({
        title: "Verification Failed",
        description: error.message || 'Failed to verify email. Please try again.',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding bg-muted/20">
        <div className="w-full max-w-md">
          <Card className="card-elegant">
            <CardContent className="text-center py-12">
              <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Verifying Your Email</h2>
              <p className="text-muted-foreground">Please wait while we verify your email address...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding bg-muted/20">
        <div className="w-full max-w-md">
          <Card className="card-elegant">
            <CardHeader className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-2xl text-green-900">Email Verified!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-green-700">
                Your email has been successfully verified. You're now on the Ringo waitlist!
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-green-900 mb-2">What happens next:</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• You'll receive updates on our pilot development progress</li>
                  <li>• You'll get priority access when we launch</li>
                  <li>• Early members may receive special benefits</li>
                </ul>
              </div>
              
              <div className="space-y-3 pt-4">
                <Button 
                  onClick={() => navigate('/waitlist/confirmed')}
                  className="w-full btn-primary"
                >
                  View Waitlist Status
                </Button>
                
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="w-full"
                >
                  Back to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center section-padding bg-muted/20">
      <div className="w-full max-w-md">
        <Card className="card-elegant">
          <CardHeader className="text-center">
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl text-red-900">Verification Failed</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-red-700">{error}</p>
            
            <div className="bg-red-50 p-4 rounded-lg text-left">
              <h3 className="font-semibold text-red-900 mb-2">Possible reasons:</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• The verification link has expired (links expire after 24 hours)</li>
                <li>• The link has already been used</li>
                <li>• The link is malformed or incomplete</li>
              </ul>
            </div>
            
            <div className="space-y-3 pt-4">
              <Button 
                onClick={() => navigate('/#waitlist-cta')}
                className="w-full btn-primary"
              >
                Join Waitlist Again
              </Button>
              
              <Button 
                onClick={() => navigate('/contact')}
                variant="outline"
                className="w-full"
              >
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}