import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export default function Unsubscribe() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    handleUnsubscribe();
  }, []);

  const handleUnsubscribe = async () => {
    const token = searchParams.get('token');

    if (!token) {
      setError('Invalid unsubscribe link. Please check your email and try again.');
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('waitlist_management_2025_10_01_16_16', {
        body: {
          action: 'unsubscribe',
          token: token,
        }
      });

      if (error) throw error;

      if (data.success) {
        setIsSuccess(true);
        toast({
          title: "Unsubscribed",
          description: data.message,
        });
      } else {
        throw new Error(data.error || 'Unsubscribe failed');
      }
    } catch (error: any) {
      console.error('Unsubscribe error:', error);
      setError(error.message || 'Failed to unsubscribe. Please try again.');
      toast({
        title: "Unsubscribe Failed",
        description: error.message || 'Failed to unsubscribe. Please try again.',
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
              <h2 className="text-xl font-semibold mb-2">Processing Unsubscribe</h2>
              <p className="text-muted-foreground">Please wait while we process your request...</p>
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
              <CardTitle className="text-2xl text-green-900">Successfully Unsubscribed</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-green-700">
                You have been successfully unsubscribed from the Ringo waitlist. You will no longer receive updates from us.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-green-900 mb-2">What this means:</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• You won't receive pilot program updates</li>
                  <li>• You won't get launch notifications</li>
                  <li>• Your waitlist spot has been removed</li>
                  <li>• You can rejoin anytime if you change your mind</li>
                </ul>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Sorry to see you go! If this was a mistake, you can rejoin our waitlist anytime.
              </p>
              
              <div className="space-y-3 pt-4">
                <Button 
                  onClick={() => window.location.href = '/#waitlist-cta'}
                  className="w-full btn-primary"
                >
                  Rejoin Waitlist
                </Button>
                
                <Button 
                  onClick={() => window.location.href = '/'}
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
            <CardTitle className="text-2xl text-red-900">Unsubscribe Failed</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-red-700">{error}</p>
            
            <div className="bg-red-50 p-4 rounded-lg text-left">
              <h3 className="font-semibold text-red-900 mb-2">Possible reasons:</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• The unsubscribe link has expired</li>
                <li>• The link has already been used</li>
                <li>• The link is malformed or incomplete</li>
                <li>• You may already be unsubscribed</li>
              </ul>
            </div>
            
            <div className="space-y-3 pt-4">
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="w-full btn-primary"
              >
                Contact Support
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/'}
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