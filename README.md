# RateThey

Letterboxd benzeri, ama daha kapsamlı algoritmalar ve kişiselleştirilmiş öneriler hedefler.
Önce web, ardından (Expo ile) mobil.

## Teknoloji yığını

- **Next.js 16** (App Router, React 19, TypeScript strict) — `npm`
- **Tailwind CSS v4** + shadcn/ui uyumlu tasarım sistemi (koyu tema) + Framer Motion (`motion`)
- **Supabase** (yönetilen PostgreSQL + Auth + Storage)
- **Prisma 7** (`prisma-client` generator + `@prisma/adapter-pg` driver adapter)
- **Zod 4** + `@t3-oss/env-nextjs` ile tip güvenli env doğrulama
- ESLint + Prettier + Husky + lint-staged

## Mimari

Tek yönlü katmanlı akış: **UI → service → repository → db**. İş mantığı framework'ten
bağımsız tutulur, böylece ileride mobil/ayrı servislere taşınabilir.

```
src/
  app/          Rotalar (UI + route handlers)
  features/     Özellik modülleri (auth, movies, ratings, profile, marketing)
  server/       Framework-agnostik domain (db, services, repositories)
  lib/          supabase (browser/server), env, utils
  components/   Tasarım sistemi (ui) + ortak bileşenler
  generated/    Prisma client (üretilen, git'e dahil değil)
```

## Kurulum

```bash
npm install
```

### Supabase'i bağla

1. [supabase.com](https://supabase.com) üzerinde ücretsiz bir proje oluştur.
2. `.env.example` dosyasını `.env` olarak kopyala ve değerleri doldur:
   - **Project Settings → API**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
     `SUPABASE_SERVICE_ROLE_KEY`
   - **Project Settings → Database → Connection string**: pooled (6543) → `DATABASE_URL`,
     direct (5432) → `DIRECT_URL`
3. Şemayı veritabanına uygula:

```bash
npm run db:migrate
```

### Geliştirme

```bash
npm run dev          # http://localhost:3000
```

Sağlık kontrolü: [http://localhost:3000/api/health](http://localhost:3000/api/health)

## Komutlar

| Komut                  | Açıklama                                  |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Geliştirme sunucusu (Turbopack)           |
| `npm run build`        | Production build                          |
| `npm run typecheck`    | TypeScript tip kontrolü                   |
| `npm run lint`         | ESLint                                    |
| `npm run format`       | Prettier ile biçimlendir                  |
| `npm run db:migrate`   | Prisma migration (geliştirme)             |
| `npm run db:studio`    | Prisma Studio                             |

## Yol haritası (fazlar)

0. **Temel & İskelet** ✅ — proje kurulumu, tasarım sistemi, Supabase/Prisma scaffold
1. Kimlik doğrulama & kullanıcı (Supabase Auth)
2. Film verisi & TMDB entegrasyonu
3. Puanlama çekirdeği
4. Profil & sosyal
5. Öneri sistemi v1 (içerik tabanlı, pgvector)
6. Öneri sistemi v2 & polyglot servis
7. Diğer dikeyler (dizi, kitap)
8. Cila, test, performans, deploy → ardından mobil (Expo)
