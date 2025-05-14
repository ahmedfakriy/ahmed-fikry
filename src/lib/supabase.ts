import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gczymgbqwsgwtxfbpzad.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjenltZ2Jxd3Nnd3R4ZmJwemFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTk1MTAsImV4cCI6MjA2MjAzNTUxMH0.ciJ0HSilB0mo_y-7M0UZ38-rdClCexUvG_t6cNWZcHY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});