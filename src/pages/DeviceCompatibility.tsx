import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, AlertTriangle, XCircle, Smartphone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Device {
  id: string;
  brand: string;
  model: string;
  os_type: string;
  min_os_version: string;
  compatibility_status: 'compatible' | 'limited' | 'incompatible';
  notes: string;
}

export default function DeviceCompatibility() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [devices, setDevices] = useState<Device[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<Device[]>([]);
  const [result, setResult] = useState<Device | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDevices();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const brandModels = devices.filter(device => device.brand === selectedBrand);
      setModels(brandModels);
      setSelectedModel('');
      setResult(null);
    }
  }, [selectedBrand, devices]);

  const fetchDevices = async () => {
    try {
      const { data, error } = await supabase
        .from('device_compatibility_2025_10_01_16_16')
        .select('*')
        .order('brand', { ascending: true })
        .order('model', { ascending: true });

      if (error) throw error;

      setDevices(data || []);
      const uniqueBrands = [...new Set(data?.map(device => device.brand) || [])];
      setBrands(uniqueBrands);
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  };

  const checkCompatibility = () => {
    if (!selectedBrand || !selectedModel) return;

    setIsLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      const device = devices.find(d => d.brand === selectedBrand && d.model === selectedModel);
      setResult(device || null);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compatible':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'limited':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'incompatible':
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return <Smartphone className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compatible':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'limited':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'incompatible':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'compatible':
        return 'Fully Compatible';
      case 'limited':
        return 'Limited Compatibility';
      case 'incompatible':
        return 'Not Compatible';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/20">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2">
              Device Compatibility
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Check Your Device
            </h1>
            <p className="text-xl text-muted-foreground">
              See if your phone is compatible with Ringo's global connectivity service.
            </p>
          </div>
        </div>
      </section>

      {/* Compatibility Checker */}
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Card className="card-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Device Compatibility Checker</CardTitle>
              <p className="text-muted-foreground">
                Select your device to check compatibility with Ringo
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your phone brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Model</label>
                  <Select 
                    value={selectedModel} 
                    onValueChange={setSelectedModel}
                    disabled={!selectedBrand}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      {models.map((device) => (
                        <SelectItem key={device.id} value={device.model}>
                          {device.model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={checkCompatibility}
                  disabled={!selectedBrand || !selectedModel || isLoading}
                  className="btn-primary px-8"
                >
                  {isLoading ? 'Checking...' : 'Check Compatibility'}
                </Button>
              </div>

              {/* Result */}
              {result && (
                <div className={`p-6 rounded-lg border-2 ${getStatusColor(result.compatibility_status)}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    {getStatusIcon(result.compatibility_status)}
                    <div>
                      <h3 className="text-xl font-semibold">
                        {result.brand} {result.model}
                      </h3>
                      <p className="font-medium">
                        {getStatusText(result.compatibility_status)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p><strong>OS Type:</strong> {result.os_type.toUpperCase()}</p>
                    <p><strong>Minimum OS Version:</strong> {result.min_os_version}</p>
                    {result.notes && (
                      <p><strong>Notes:</strong> {result.notes}</p>
                    )}
                  </div>

                  {result.compatibility_status === 'compatible' && (
                    <div className="mt-4 p-4 bg-white/50 rounded-lg">
                      <p className="font-semibold text-green-800">Great news!</p>
                      <p className="text-green-700">
                        Your device is fully compatible with Ringo. Join our waitlist to get early access.
                      </p>
                    </div>
                  )}

                  {result.compatibility_status === 'limited' && (
                    <div className="mt-4 p-4 bg-white/50 rounded-lg">
                      <p className="font-semibold text-yellow-800">Limited Support</p>
                      <p className="text-yellow-700">
                        Your device has limited compatibility. We'll confirm full functionality during pilot onboarding.
                      </p>
                    </div>
                  )}

                  {result.compatibility_status === 'incompatible' && (
                    <div className="mt-4 p-4 bg-white/50 rounded-lg">
                      <p className="font-semibold text-red-800">Not Currently Supported</p>
                      <p className="text-red-700">
                        Unfortunately, your device is not currently supported. Join the waitlist for updates on device expansion.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* General Requirements */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">General Requirements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Basic requirements for using Ringo across all supported devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elegant text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold mb-2">iOS Devices</h3>
                <p className="text-sm text-muted-foreground">
                  iOS 13 or later<br />
                  iPhone XR and newer
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold mb-2">Android Devices</h3>
                <p className="text-sm text-muted-foreground">
                  Android 9.0 or later<br />
                  Most modern smartphones
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">📶</div>
                <h3 className="font-semibold mb-2">Cellular Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Active plan with existing carrier<br />
                  Works alongside your current service
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🌐</div>
                <h3 className="font-semibold mb-2">Data Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Internet connectivity required<br />
                  For initial setup and activation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Join?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether your device is compatible or not, join our waitlist to stay updated on Ringo's development and device support expansion.
            </p>
            <Button 
              size="lg" 
              className="btn-sunset px-8 py-6"
              onClick={() => {
                window.location.href = '/#waitlist-cta';
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}