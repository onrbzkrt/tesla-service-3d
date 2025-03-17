import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tesla Service Excellence",
  description: "Professional Repair, Maintenance & Diagnostics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            background-color: black !important;
            margin: 0;
            padding: 0;
          }
          
          /* Initial loading animation */
          .initial-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .loader {
            width: 48px;
            height: 48px;
            border: 5px solid #FFF;
            border-bottom-color: #3B82F6;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
          }

          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="initial-loader" className="initial-loader">
          <span className="loader"></span>
        </div>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              document.getElementById('initial-loader').style.display = 'none';
            });
          `
        }} />
      </body>
    </html>
  );
}