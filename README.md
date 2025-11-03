# Vizyon+ | Modern Dizi & Film Platformu

Vizyon+, [Next.js](https://nextjs.org/), [Supabase](https://supabase.io/) ve [Tailwind CSS](https://tailwindcss.com/) kullanılarak geliştirilmiş, Netflix benzeri tam özellikli bir dizi ve film izleme platformudur. Kullanıcıların içerikleri keşfetmesi, filtrelemesi, listelerine eklemesi ve yorum yapması için modern bir arayüz sunar.

## 🛠️ Kullanılan Teknolojiler

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
</p>

## ✨ Temel Özellikler

- **Güvenli Kimlik Doğrulama:** Supabase Auth (E-posta/Şifre ile) kullanarak güvenli kayıt olma ve giriş yapma.
- **İçerik Keşfi:**
  - Diziler ve filmler için ayrı listeleme sayfaları.
  - Türe göre gelişmiş filtreleme.
  - İçerikleri alfabetik (A-Z, Z-A) veya puana (Artan, Azalan) göre sıralama.
  - Tüm platformda çalışan anlık arama çubuğu.
- **Kullanıcı Etkileşimi:**
  - Filmlere ve dizilere yorum yapabilme (Spoiler gizleme seçeneği ile).
  - "Favoriler" listesi oluşturma.
  - "Daha Sonra İzle" listesine içerik ekleme.
- **Profil Yönetimi:**
  - Kullanıcı adı, e-posta ve cinsiyet bilgilerini güncelleme.
  - Profil fotoğrafı yükleme ve değiştirme (Supabase Storage ile).
  - Güvenli şifre değişikliği.
- **Tema Desteği:** `next-themes` kütüphanesi ile aydınlık ve karanlık mod arasında kolayca geçiş yapabilme.
- **Duyarlı Arayüz:** `swiper` ve Tailwind CSS ile mobil, tablet ve masaüstü cihazlara tam uyumlu tasarım.


### Frontend

- **Framework:** **Next.js 15** (App Router)
- **UI Kütüphanesi:** **React 19**
- **Stil:** **Tailwind CSS 4**
- **Tema:** `next-themes` (Aydınlık/Karanlık Mod)
- **Form Yönetimi:** `react-hook-form`
- **UI Bileşenleri:**
  - `swiper`: Modern slider ve carousel'ler için.
  - `react-icons`: İkon kütüphanesi.
  - `react-hot-toast`: Bildirimler (Toast).
  - `react-spinners`: Yükleme animasyonları.
  - `emoji-picker-react`: Yorumlar için emoji seçici.

### Backend & Veritabanı

- **Platform:** **Supabase**
- **Veritabanı:** **PostgreSQL**
- **Kimlik Doğrulama:** `supabase/ssr` ve `@supabase/auth-helpers-nextjs` (Sunucu ve İstemci taraflı oturum yönetimi)
- **Depolama:** Supabase Storage (Profil fotoğrafları için)

### Geliştirme Araçları

- **Dil:** **TypeScript**
- **Formatlama:** Prettier (`prettier-plugin-tailwindcss`)
- **Linting:** ESLint

## 🗃️ Veritabanı Yapısı ve Güvenlik

Proje, Supabase PostgreSQL veritabanını kullanır. Veritabanı şeması; `icerikler`, `profiller`, `diziler`, `bolumler`, `yorumlar`, `favoriler` ve `daha_sonra_izle` gibi ana tablolar etrafında şekillenmiştir.

Güvenlik, **Row Level Security (RLS)** politikaları ile sağlanmıştır. Bu sayede kullanıcılar sadece kendi verilerine (profil, favoriler vb.) erişebilir, silebilir veya güncelleyebilir ve veritabanı üzerinde yetkisiz işlem yapamazlar.

## 🚀 Projeyi Başlatma

1.  **Depoyu klonlayın:**

    ```bash
    git clone https://github.com/talhaceliktas/vizyonplus-frontend.git
    cd vizyonplus-frontend
    ```

2.  **Bağımlılıkları yükleyin:**

    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Supabase Çevre Değişkenlerini Ayarlayın:**
    `.env.local.example` dosyasını `.env.local` olarak kopyalayın ve kendi Supabase projenizin **URL** ve **Anon Key** bilgilerini girin:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    RAPIDAPI_KEY=YOUR_IMDB_RAPID_API_KEY
    ```

4.  **Veritabanı Şemasını Kurun:**
    - Supabase projenizin "SQL Editor" bölümüne gidin.
    - Size sağlanan SQL şemasını çalıştırarak tabloları ve RLS politikalarını oluşturun.

5.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

Uygulama artık `http://localhost:3000` adresinde çalışıyor olacaktır.
