import { MailOpen, MapPin, Phone } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
  SiGoogle,
} from "@icons-pack/react-simple-icons";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

const LogoPath = "/logo.svg";

function Footer() {
  return (
    <footer className="bg-app-dark-blue flex w-full items-center justify-center px-4 py-12">
      <div
        className={cn(
          "flex w-full max-w-7xl flex-col-reverse gap-1",
          "md:flex-row md:gap-16",
        )}
      >
        {/* First column*/}
        <div className="bg-app-light-blue mx-auto w-full rounded-2xl px-5 py-8 lg:mx-0 lg:max-w-sm">
          <img
            className="mx-auto my-5 max-w-[150px]"
            src={LogoPath}
            alt="Logo"
          />
          <p className="text-primary-foreground my-5 text-center font-extralight lg:text-left">
            Menyediakan beragam kebutuhan burung. Terpercaya, Berkualitas &
            Amanah
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-x-2">
              <MapPin className="text-primary" strokeWidth={1.5} />
              <p className="text-primary-foreground font-extralight">
                Jl. Imam Bonjol No.24, Mataram
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <MailOpen className="text-primary" strokeWidth={1.5} />
              <p className="text-primary-foreground font-extralight">
                omahring123@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <Phone className="text-primary" strokeWidth={1.5} />
              <p className="text-primary-foreground font-extralight">
                +62-8123-4567-8910
              </p>
            </div>
          </div>

          <div className="my-6 flex justify-around">
            <a href="#">
              <SiFacebook className="text-primary size-9" />
            </a>
            <a href="#">
              <SiInstagram className="text-primary size-9" />
            </a>
            <a href="#">
              <SiWhatsapp className="text-primary size-9" />
            </a>
            <a href="#">
              <SiGoogle className="text-primary size-9" />
            </a>
          </div>
        </div>

        {/* Second column*/}
        <div className="flex w-full flex-col">
          <h1 className="text-primary mb-4 text-center text-2xl font-semibold lg:text-left">
            Hubungi Kami :
          </h1>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <Input
              className="bg-secondary rounded-full"
              type="text"
              placeholder="Tuliskan pesan"
            />
            <Button className="rounded-full px-10 whitespace-nowrap">
              KIRIM
            </Button>
          </div>

          <div
            className={cn(
              "hidden justify-start gap-5",
              "md:flex md:flex-row md:flex-wrap",
            )}
          >
            <div className="bg-app-light-blue flex w-64 flex-col justify-center gap-y-1 rounded-2xl px-6 py-8">
              <p className="text-primary mb-3 text-xl font-semibold md:text-2xl">
                Company :
              </p>
              <div className="text-primary-foreground flex flex-col gap-y-2 font-extralight">
                <a href="#" className="w-fit hover:underline">
                  Tentang Kami
                </a>
                <a href="#" className="w-fit hover:underline">
                  Peternak Pilihan
                </a>
                <a href="#" className="w-fit hover:underline">
                  Shop
                </a>
                <a href="#" className="w-fit hover:underline">
                  Info Lomba
                </a>
                <a href="#" className="w-fit hover:underline">
                  Join Membership
                </a>
                <a href="#" className="w-fit hover:underline">
                  Garansi Aman
                </a>
                <a href="#" className="w-fit hover:underline">
                  Blog
                </a>
              </div>
            </div>

            <div className="bg-app-light-blue flex w-64 flex-col justify-center gap-y-1 rounded-2xl px-6 py-8">
              <p className="text-primary mb-3 text-xl font-semibold md:text-2xl">
                Service :
              </p>
              <div className="text-primary-foreground flex flex-col gap-y-2 font-extralight">
                <a href="#" className="w-fit hover:underline">
                  Tentang Kami
                </a>
                <a href="#" className="w-fit hover:underline">
                  Peternak Pilihan
                </a>
                <a href="#" className="w-fit hover:underline">
                  Shop
                </a>
                <a href="#" className="w-fit hover:underline">
                  Info Lomba
                </a>
                <a href="#" className="w-fit hover:underline">
                  Join Membership
                </a>
                <a href="#" className="w-fit hover:underline">
                  Garansi Aman
                </a>
                <a href="#" className="w-fit hover:underline">
                  Blog
                </a>
              </div>
            </div>

            <div className="bg-app-light-blue flex w-64 flex-col justify-center gap-y-1 rounded-2xl px-6 py-8">
              <p className="text-primary mb-3 text-xl font-semibold md:text-2xl">
                Support :
              </p>
              <div className="text-primary-foreground flex flex-col gap-y-2 font-extralight">
                <a href="#" className="w-fit hover:underline">
                  Tentang Kami
                </a>
                <a href="#" className="w-fit hover:underline">
                  Peternak Pilihan
                </a>
                <a href="#" className="w-fit hover:underline">
                  Shop
                </a>
                <a href="#" className="w-fit hover:underline">
                  Info Lomba
                </a>
                <a href="#" className="w-fit hover:underline">
                  Join Membership
                </a>
                <a href="#" className="w-fit hover:underline">
                  Garansi Aman
                </a>
                <a href="#" className="w-fit hover:underline">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
