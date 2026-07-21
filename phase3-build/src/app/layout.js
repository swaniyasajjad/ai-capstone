import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Phase 3 Build",
  description: "AI Capstone Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/health">Health</Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}