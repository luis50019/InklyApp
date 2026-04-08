import { createClient } from "@supabase/supabase-js";

const URL_DATABASE = process.env.EXPO_PUBLIC_BASE_URL;
const ANON_KEY = procress.env.EXPO_PUBLIC_ANON_KEY;

export const clienteSupabase = createClient(URL_DATABASE, ANON_KEY);
