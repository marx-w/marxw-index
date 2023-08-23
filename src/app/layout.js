import global from "../styles/global.css";

export const metadata = {
  title: "Marx Wang -- My Personal Page.",
  description: "Welcome to my page!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={global.body}>{children}</body>
    </html>
  );
}
