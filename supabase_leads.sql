-- ============================================================
-- Tabela de Leads — Moradia T3 Lista Privada
-- Executar no Supabase Dashboard: https://supabase.com/dashboard/project/wuehdrluzwnukvokhzpo/editor
-- ============================================================

CREATE TABLE IF NOT EXISTS leads (
  id          uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at  timestamptz DEFAULT now(),
  nome        text        NOT NULL,
  telefone    text        NOT NULL,
  finalidade  text        CHECK (finalidade IN ('habitacao', 'investimento')),
  credito     text        CHECK (credito IN ('sim_acima', 'sim_abaixo', 'em_processo', 'nao_tratei')),
  prazo       text        CHECK (prazo IN ('ate6', '6a12', 'mais12')),
  valor       text        CHECK (valor IN ('ate280', '280a300', 'acima300'))
);

-- Habilitar Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserts anónimos (formulário público)
CREATE POLICY "allow_anon_insert" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Apenas o role "authenticated" (owner) pode ler
CREATE POLICY "allow_authenticated_select" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
