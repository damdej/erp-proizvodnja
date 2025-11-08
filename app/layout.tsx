import "./globals.css";

export const metadata = {
  title: "ERP Proizvodnja",
  description: "Sistem za upravljanje proizvodnjom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        {process.env.NODE_ENV === "development" && (
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; connect-src * 'unsafe-inline' ws: wss:;"
          />
        )}
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
