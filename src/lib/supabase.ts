import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
    nome: string;
    telefone: string;
    finalidade: string;
    credito: string;
    prazo: string;
    valor: string;
}

export async function insertLead(lead: Lead) {
    const { data, error } = await supabase.from('leads').insert([lead]).select();
    if (error) throw error;
    return data;
}
