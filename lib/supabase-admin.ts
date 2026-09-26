import { createClient } from "@supabase/supabase-js";

// 관리자용 Supabase 클라이언트. secret key는 RLS(행 단위 접근 제어)를 무시하므로
// 신청자 명단 조회가 가능하다. **서버에서만 쓴다 — 클라이언트 컴포넌트에서 import 금지.**
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getSupabaseAdminClient() {
  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
