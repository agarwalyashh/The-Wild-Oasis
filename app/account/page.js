import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth()
  const firstName = session.user.name.split(" ")[0]
  return <h1 className="text-lg md:text-xl xl:text-2xl text-accent-400">Welcome,<span className="font-semibold mx-1">{firstName}</span></h1>;
}
