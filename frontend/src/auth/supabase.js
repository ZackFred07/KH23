import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://kgptyaudsdvabhlmsvvw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtncHR5YXVkc2R2YWJobG1zdnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3MTI5NjMsImV4cCI6MjAxMjI4ODk2M30.7UNLieKaAR1vZx65UYQFheWV6UPCRItGyRZzpnJhuyI'
    );