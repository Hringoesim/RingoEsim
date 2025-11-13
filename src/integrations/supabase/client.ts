import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wglgkqfvhgsgxzqovgyg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbGdrcWZ2aGdzZ3h6cW92Z3lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMzMyNDEsImV4cCI6MjA3NDkwOTI0MX0.09vT_9Hz2zQvktOXBeS9WufqsFpHGLLvOEcvGHe1faY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";
