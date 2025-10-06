import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
