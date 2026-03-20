import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import http from 'node:http'
import https from 'node:https'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: (url, options) => {
          return fetch(url, {
            ...options,
            // Forzamos a que no mantenga conexiones vivas que puedan expirar
            headers: {
              ...options?.headers,
              'Connection': 'close',
            },
          })
        },
      },
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}
