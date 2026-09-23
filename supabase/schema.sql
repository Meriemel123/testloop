create extension if not exists "pgcrypto";

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  tests_per_year text not null,
  current_tool text not null,
  would_pay text not null,
  source text,
  created_at timestamptz not null default now()
);

alter table waitlist enable row level security;

-- No policies are created on purpose: with RLS enabled and no policies,
-- the table is only reachable through the service role key, i.e. from
-- the server action in src/lib/waitlist.ts. The anon/public key can
-- neither read nor write this table.
