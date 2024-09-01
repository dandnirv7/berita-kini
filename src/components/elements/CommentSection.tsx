import { Avatar, Button, Textarea } from "@nextui-org/react";
import { Dot } from "lucide-react";

export const CommentSection: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-row items-center gap-4 py-3">
      <span className="after:content-[''] border-l-4 rounded-full h-8 w-1 border-primary"></span>
      <h1 className="text-xl font-semibold">Komentar</h1>
    </div>
    <div className="flex flex-row gap-4 p-6 border-b ">
      <Avatar
        radius="md"
        classNames={{
          base: "w-14 h-14",
        }}
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      />
      <div className="flex flex-col items-start w-full gap-2 ">
        <Textarea
          placeholder="Apa yang ingin anda tanyakan?"
          className="max-w-full placeholder:text-gray-1 focus-within:placeholder:text-foreground"
          variant="bordered"
          size="lg"
          description="0/50"
          classNames={{
            description: "text-end text-foreground",
            inputWrapper: "bg-transparent border border-gray-3 ",
          }}
        />
        <Button color="primary" size="md" radius="sm">
          Kirim
        </Button>
      </div>
    </div>
    <div className="flex flex-row gap-4 p-6 border-b ">
      <Avatar
        radius="md"
        classNames={{
          base: "w-14 h-14",
        }}
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
      />
      <div className="flex flex-col items-start w-full gap-4 ">
        <div className="flex flex-row items-center justify-center">
          <h1 className="font-medium text-secondary-text">
            UJANG YUSMEIDI S.P., M.Agr.
          </h1>
          <Dot className="text-secondary-text" size={24} />
          <span className="text-secondary-text">28 Mar 2024 11:15</span>
        </div>
        <p>
          Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena
          saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana
          ya solusinya ?
        </p>
        <button className="text-medium text-primary">Balas</button>
        <div className="flex flex-row gap-4 p-6 ">
          <Avatar
            radius="md"
            classNames={{
              base: "w-14 h-14",
            }}
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <div className="flex flex-col items-start w-full gap-4 ">
            <div className="flex flex-row items-center justify-center">
              <h1 className="font-medium text-secondary-text">
                DINA RIKHA RIYANAWATI, S.Pd
              </h1>
              <Dot className="text-secondary-text" size={24} />
              <span className="text-secondary-text">28 Mar 2024 11:15</span>
            </div>
            <p>saya mengunduh sertifikatnya kok juga belumbisa</p>
            <button className="text-medium text-primary">Balas</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
