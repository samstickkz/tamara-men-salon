import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Astro injects PUBLIC_* env vars at build time. Set these in Vercel
// → Settings → Environment Variables (production) and in `.env` for local dev.
const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

export const isSupabaseConfigured = (): boolean =>
  Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
