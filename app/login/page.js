import SignInButton from "../_components/SignInButton"

export const metadata = {
    title: "Login",
  };
function Login() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 justify-center items-center my-10">
      <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">Sign in to access your account</h1>
      <SignInButton/>
    </div>
  )
}

export default Login
