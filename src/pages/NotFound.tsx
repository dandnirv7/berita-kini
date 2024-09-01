import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@nextui-org/react";

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-6 mb-10 text-center font-nunito-sans">
      <>
        <div>
          <h1 className="font-bold text-8xl text-primary">404</h1>
          <h3 className="text-4xl font-semibold text-primary">oops!</h3>
        </div>
        <div>
          <h1 className="text-3xl font-semibold capitalize">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg font-semibold text-black/80">
            Kemungkinan halaman telah dihapus, atau anda salah tulis URL
          </p>
        </div>
        <Link to="/" tabIndex={-1}>
          <Button
            color="primary"
            size="lg"
            radius="sm"
            className="font-semibold uppercase"
          >
            Kembali Ke Berita Kini
          </Button>
        </Link>
      </>
    </main>
  );
};

export default NotFoundPage;
