"use client";
import { useState } from "react";
import supabase from "../../_lib/supabase/client";
import { User } from "@supabase/supabase-js";
import toast from "react-hot-toast";

export default function AvatarYukle({ user }: { user: User }) {
  const [uploading, setUploading] = useState(false);

  async function resizeAndCropImage(file: File, size = 512): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const minSide = Math.min(img.width, img.height);
        const sx = (img.width - minSide) / 2;
        const sy = (img.height - minSide) / 2;

        canvas.width = size;
        canvas.height = size;

        ctx?.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);

        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Görsel işlenemedi."));
          },
          "image/jpeg",
          0.85,
        );
      };

      reader.readAsDataURL(file);
    });
  }

  async function uploadAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);

      const file = event.target.files?.[0];
      if (!file) return;

      // 🔸 Boyut kontrolü (2 MB sınırı)
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Dosya 2 MB’tan büyük olamaz!");
        return;
      }

      // 🔸 Geçerli format kontrolü
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          "Yalnızca JPG, PNG veya WEBP formatında görsel yükleyebilirsin!",
        );
        return;
      }

      // 🔸 Görseli yeniden boyutlandır ve kırp
      const processedImage = await resizeAndCropImage(file, 512);

      const filePath = `${user.id}/avatar.jpg`;
      const bucket = supabase.storage.from("profil_fotograflari");

      // 🔸 Eski dosyayı sil (isteğe bağlı)
      await bucket.remove([filePath]);

      // 🔸 Yeni dosyayı yükle
      const { error: uploadError } = await bucket.upload(
        filePath,
        processedImage,
        {
          contentType: "image/jpeg",
          upsert: true,
        },
      );

      if (uploadError) throw uploadError;

      // 🔸 Public URL al ve cache kır
      const { data } = bucket.getPublicUrl(filePath);
      const publicUrl = `${data.publicUrl}?t=${Date.now()}`;

      // 🔸 Profili güncelle
      const { error: updateError } = await supabase
        .from("profiller")
        .update({ profil_fotografi: publicUrl })
        .eq("id", user.id);

      if (updateError) throw updateError;

      toast.success("Profil fotoğrafı güncellendi ✅");
    } catch {
      toast.error("Yükleme hatası");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        accept="image/*"
        onChange={uploadAvatar}
        disabled={uploading}
      />
      {uploading && <p className="text-sm text-gray-500">Yükleniyor...</p>}
    </div>
  );
}
