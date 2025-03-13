import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "./_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["Latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, surrounded by beautiful mountains and dark forests",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefin.className} antialiased min-h-screen`}
      >
        <header className="border-b-1 border-primary-100/10">
          <Navigation />
        </header>
        <div className="p-4">
          <main className="mx-auto">
            {children} {/*Like Outlet in React Router*/}
          </main>
        </div>
      </body>
    </html>
  );
}
