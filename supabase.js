// ==========================================
// FALKENSTEIN PORTAL V3
// Supabase Verbindung
// ==========================================

"use strict";

// Supabase Projekt
const SUPABASE_URL = "https://cfkjmshifdjikhru.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Jr3S2WjBiU8r-jcWKGwgGQ_05_mB33U";

// Supabase Client erstellen
const falkensteinSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// Für das gesamte Portal verfügbar machen
window.falkensteinSupabase = falkensteinSupabase;

// Verbindung bereit
console.log("✓ Falkenstein Portal: Supabase geladen");
