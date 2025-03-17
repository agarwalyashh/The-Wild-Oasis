import NavigationHeader from "./_components/NavigationHeader";
import { ReservationProvider } from "./_components/ReservationContext";
import "./_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
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
        className={`bg-primary-950 text-primary-100 ${josefin.className} antialiased flex flex-col `}
      >
        <header className="border-b-1 border-primary-100/10 ">
          <NavigationHeader />
        </header>
        <div className="md:p-4 p-2">
          <main className="mx-auto">
            <ReservationProvider>
              {children} {/*Like Outlet in React Router*/}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
