import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-full flex  font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="px-36 grid grid-cols-12 w-full flex-row h-screen">
        <div className="bg-red-500 grid col-span-3 h-screen"></div>
        <div className="bg-blue-600 grid col-span-6 h-screen"></div>
        <div className="bg-purple-500 grid col-span-3 h-screen"></div>
      </main>
    </div>
  );
}
