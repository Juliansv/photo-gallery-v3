import type { Metadata } from "next";
import porterSansBlock from "next/font/local";
import "./globals.css";

const porterSans = porterSansBlock({
	src: "../public/fonts/porter-sans-inline-block.otf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Fotos Analogicas - EM",
	description: "EM Film fotos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${porterSans.className} + " " + bg-blackChocolate min-h-screen md:overflow-y-hidden scroll-smooth`}>{children}</body>
		</html>
	);
}
