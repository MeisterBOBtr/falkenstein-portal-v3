// Falkenstein Portal V3 – Supabase Verbindung

const SUPABASE_URL = "https://cfkjmshifdjikhru.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Jr3S2WjBiU8r-jcWKGwgGQ_05_mB33U";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
