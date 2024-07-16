import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/gameTop/components/Header";
import GameTop from "@/gameTop/GameTop";
import NextDiv from "@/nextDiv/NextDiv";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <GameTop />
      <NextDiv />
    </div>
  );
}
