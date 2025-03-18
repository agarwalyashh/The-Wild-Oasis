"use server";
import { signOut,signIn} from "./auth";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}
export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}
