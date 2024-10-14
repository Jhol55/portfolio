import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ShootingStars } from "@/components/ShootingStars";
import { StarsBackground } from "@/components/StarsBackground";
// import { ScrollProgress } from "@/components/ScrollProgress";


export const metadata: Metadata = {
  title: "Jhonathan Galhardo",
  description: "Meu portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-cursive antialiased bg-[#10071f] text-white">
        <StarsBackground className="fixed -z-10" />
        <ShootingStars className="fixed -z-10" />
        {/* <ScrollProgress className="bg-gradient-to-r from-[#271343] to-[#4F228D]" /> */}
        <NavigationMenu />
        {children}
      </body>
    </html>
  );
}
