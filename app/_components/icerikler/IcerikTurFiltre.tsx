"use client";

import { useEffect, useState } from "react";
import { turleriGetir } from "../../_lib/data-service-client";

const IcerikTurFiltre = () => {
  const [icerikTurleri, setIcerikTurleri] = useState(null);

  useEffect(() => {
    const icerikTurleriniGetir = async () => {
      await turleriGetir();
    };

    icerikTurleriniGetir();
  }, []);

  return (
    <div>
      <input type="checkbox" />
    </div>
  );
};

export default IcerikTurFiltre;
