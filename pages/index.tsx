import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/header/components/Header";
import GameTop from "@/header/GameTop";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <GameTop />
    </div>
  );
}
