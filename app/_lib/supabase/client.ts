"use client"; // Bu modülün kendisi istemci tarafı içindir

import { createBrowserClient } from "@supabase/ssr";

// Tarayıcıda çalışacak bir Supabase istemcisi oluştur
export default createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
