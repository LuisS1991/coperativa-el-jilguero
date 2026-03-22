import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

/*'use client'

import { supabase } from '@/lib/supabase'

const { data } = await supabase.from('posts').select('*')*/