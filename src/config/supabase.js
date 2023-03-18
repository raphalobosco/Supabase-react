import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rwodvdfgsqbtbztwgmdu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3b2R2ZGZnc3FidGJ6dHdnbWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwMTExMDEsImV4cCI6MTk5NDU4NzEwMX0.fH4QW8yvoFveFKJS7LswbsCN0uEavBXO-LYolarjhok'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase