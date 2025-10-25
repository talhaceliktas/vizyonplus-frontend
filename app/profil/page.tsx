"use client";

import { useAuth } from "../_context/AuthContext";

const Page = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <div className="mt-40">
          Giris yapildi <button onClick={signOut}>Cikis yap</button>
        </div>
      ) : (
        "Giris yapilamadi"
      )}
    </div>
  );
};

export default Page;
