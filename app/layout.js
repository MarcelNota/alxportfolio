
import "./globals.css";


export const metadata = {
  title: "Portfolio Marcel",
  description: "Generated by Marcel Nota",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-[100vw]`}
      >
        {children}
      </body>
    </html>
  );
}
