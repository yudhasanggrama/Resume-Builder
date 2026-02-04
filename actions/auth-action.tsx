"use server";

import { createClient } from "@/lib/supabase/server";

export async function signUpNewUser(
  name: string,
  email: string,
  password: string,
) {
  // Use server client so cookies (session) are set on the server response
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: { display_name: name },
    },
  });

  return { data, error };
}

export async function signInWithEmail(email: string, password: string) {
  // Use server client so cookies (session) are set on the server response
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return { data, error };
}

export async function signOutUser() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    return { ok: false, error };
  }
  return { ok: true };
}

export async function getCurrentUser() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  return data.user;
}
