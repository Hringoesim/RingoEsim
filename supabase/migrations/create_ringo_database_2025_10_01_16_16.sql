-- Create waitlist table for pilot program
CREATE TABLE public.waitlist_2025_10_01_16_16 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(254) UNIQUE NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  country VARCHAR(2), -- ISO 3166-1 alpha-2
  referral_source VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  email_verified BOOLEAN DEFAULT FALSE,
  verification_token VARCHAR(255),
  verification_sent_at TIMESTAMP,
  unsubscribed BOOLEAN DEFAULT FALSE,
  unsubscribe_token VARCHAR(255),
  ip_address INET,
  user_agent TEXT
);

-- Create contact form submissions table
CREATE TABLE public.contact_submissions_2025_10_01_16_16 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100),
  email VARCHAR(254) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address INET,
  user_agent TEXT,
  status VARCHAR(20) DEFAULT 'new' -- new, read, replied
);

-- Create device compatibility table
CREATE TABLE public.device_compatibility_2025_10_01_16_16 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand VARCHAR(50) NOT NULL,
  model VARCHAR(100) NOT NULL,
  os_type VARCHAR(20) NOT NULL, -- ios, android, feature
  min_os_version VARCHAR(20),
  compatibility_status VARCHAR(20) NOT NULL, -- compatible, limited, incompatible
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX idx_waitlist_email_2025_10_01_16_16 ON public.waitlist_2025_10_01_16_16(email);
CREATE INDEX idx_waitlist_created_2025_10_01_16_16 ON public.waitlist_2025_10_01_16_16(created_at);
CREATE INDEX idx_contact_created_2025_10_01_16_16 ON public.contact_submissions_2025_10_01_16_16(created_at);
CREATE INDEX idx_device_brand_model_2025_10_01_16_16 ON public.device_compatibility_2025_10_01_16_16(brand, model);

-- Insert sample device compatibility data
INSERT INTO public.device_compatibility_2025_10_01_16_16 (brand, model, os_type, min_os_version, compatibility_status, notes) VALUES
-- iOS devices
('Apple', 'iPhone 15 Pro Max', 'ios', '17.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 15 Pro', 'ios', '17.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 15', 'ios', '17.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 14 Pro Max', 'ios', '16.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 14 Pro', 'ios', '16.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 14', 'ios', '16.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 13 Pro Max', 'ios', '15.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 13 Pro', 'ios', '15.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 13', 'ios', '15.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 12 Pro Max', 'ios', '14.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 12 Pro', 'ios', '14.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone 12', 'ios', '14.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone XR', 'ios', '13.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone XS', 'ios', '13.0', 'compatible', 'Full compatibility with all features'),
('Apple', 'iPhone X', 'ios', '13.0', 'limited', 'Some features may have reduced performance'),

-- Android devices
('Samsung', 'Galaxy S24 Ultra', 'android', '14.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy S24+', 'android', '14.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy S24', 'android', '14.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy S23 Ultra', 'android', '13.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy S23+', 'android', '13.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy S23', 'android', '13.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy S22 Ultra', 'android', '12.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy S21', 'android', '11.0', 'compatible', 'Full compatibility with all features'),
('Samsung', 'Galaxy Note 20', 'android', '10.0', 'limited', 'Some features may require updates'),
('Google', 'Pixel 8 Pro', 'android', '14.0', 'compatible', 'Full compatibility with all features'),
('Google', 'Pixel 8', 'android', '14.0', 'compatible', 'Full compatibility with all features'),
('Google', 'Pixel 7 Pro', 'android', '13.0', 'compatible', 'Full compatibility with all features'),
('Google', 'Pixel 7', 'android', '13.0', 'compatible', 'Full compatibility with all features'),
('Google', 'Pixel 6 Pro', 'android', '12.0', 'compatible', 'Full compatibility with all features'),
('OnePlus', '12 Pro', 'android', '14.0', 'compatible', 'Full compatibility with all features'),
('OnePlus', '11', 'android', '13.0', 'compatible', 'Full compatibility with all features'),
('OnePlus', '10 Pro', 'android', '12.0', 'compatible', 'Full compatibility with all features'),
('Xiaomi', '14 Ultra', 'android', '14.0', 'compatible', 'Full compatibility with all features'),
('Xiaomi', '13 Pro', 'android', '13.0', 'compatible', 'Full compatibility with all features'),

-- Basic feature phones
('Nokia', '3310 (2017)', 'feature', 'N/A', 'incompatible', 'Feature phones not supported in pilot phase'),
('Nokia', '8110 4G', 'feature', 'KaiOS 2.5', 'incompatible', 'KaiOS support planned for future release'),
('CAT', 'B35', 'feature', 'KaiOS 2.5', 'incompatible', 'KaiOS support planned for future release');

-- Enable Row Level Security
ALTER TABLE public.waitlist_2025_10_01_16_16 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions_2025_10_01_16_16 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.device_compatibility_2025_10_01_16_16 ENABLE ROW LEVEL SECURITY;

-- RLS Policies for waitlist (public read for email verification, authenticated users can manage their own data)
CREATE POLICY "Allow public waitlist signup" ON public.waitlist_2025_10_01_16_16
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public email verification" ON public.waitlist_2025_10_01_16_16
  FOR UPDATE TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can view their own waitlist entry" ON public.waitlist_2025_10_01_16_16
  FOR SELECT TO authenticated
  USING (auth.jwt() ->> 'email' = email);

-- RLS Policies for contact submissions (public can insert, authenticated users can view their own)
CREATE POLICY "Allow public contact form submission" ON public.contact_submissions_2025_10_01_16_16
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view their own contact submissions" ON public.contact_submissions_2025_10_01_16_16
  FOR SELECT TO authenticated
  USING (auth.jwt() ->> 'email' = email);

-- RLS Policies for device compatibility (public read access)
CREATE POLICY "Allow public device compatibility read" ON public.device_compatibility_2025_10_01_16_16
  FOR SELECT TO anon
  USING (true);