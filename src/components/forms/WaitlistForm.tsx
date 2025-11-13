import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const countries = [
  { code: 'US', name: '🇺🇸 United States' },
  { code: 'GB', name: '🇬🇧 United Kingdom' },
  { code: 'DE', name: '🇩🇪 Germany' },
  { code: 'FR', name: '🇫🇷 France' },
  { code: 'ES', name: '🇪🇸 Spain' },
  { code: 'IT', name: '🇮🇹 Italy' },
  { code: 'NL', name: '🇳🇱 Netherlands' },
  { code: 'CA', name: '🇨🇦 Canada' },
  { code: 'AU', name: '🇦🇺 Australia' },
  { code: 'JP', name: '🇯🇵 Japan' },
  { code: 'SG', name: '🇸🇬 Singapore' },
  { code: 'HK', name: '🇭🇰 Hong Kong' },
  { code: 'CN', name: '🇨🇳 China' },
  { code: 'IN', name: '🇮🇳 India' },
  { code: 'BR', name: '🇧🇷 Brazil' },
  { code: 'MX', name: '🇲🇽 Mexico' },
  { code: 'CH', name: '🇨🇭 Switzerland' },
  { code: 'SE', name: '🇸🇪 Sweden' },
  { code: 'NO', name: '🇳🇴 Norway' },
  { code: 'DK', name: '🇩🇰 Denmark' },
  { code: 'FI', name: '🇫🇮 Finland' },
  { code: 'AT', name: '🇦🇹 Austria' },
  { code: 'BE', name: '🇧🇪 Belgium' },
  { code: 'PT', name: '🇵🇹 Portugal' },
  { code: 'IE', name: '🇮🇪 Ireland' },
  { code: 'OTHER', name: '🌍 Other' },
];

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('waitlist_management_2025_10_01_16_16', {
        body: {
          action: 'signup',
          email: formData.email,
          first_name: formData.name.split(' ')[0] || formData.name,
          last_name: formData.name.split(' ').slice(1).join(' ') || '',
          country: formData.country,
          referral_source: 'Website'
        }
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "Check your email for confirmation.",
      });

    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4 p-6 bg-green-50 rounded-lg border border-green-200">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
        <h3 className="text-lg font-semibold text-green-800">You're on the list!</h3>
        <p className="text-green-700">
          We've sent a confirmation email to <strong>{formData.email}</strong>. 
          You'll be among the first to know when Ringo launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? 'border-red-500' : ''}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? 'border-red-500' : ''}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="country">Country *</Label>
          <Select 
            value={formData.country} 
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger className={errors.country ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country}</p>}
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full btn-sunset" 
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining waitlist...
          </>
        ) : (
          'Join Waitlist'
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By joining, you agree to receive updates about Ringo's launch. 
        You can unsubscribe at any time.
      </p>
    </form>
  );
}

export default WaitlistForm;