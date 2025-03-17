import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";

export const metadata = {
  title: "Update Profile",
};

export default function Page() {
  // const countryFlag = "";
  const nationality = "portugal";

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold lg:text-2xl sm:text-xl text-lg text-accent-400">
        Update your guest profile
      </h2>

      <p className="lg:text-lg sm:text-sm text-xs text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        {/*As selectCountry is a server component because it fetches data, we cant use it directly inside UpdateProfileForm which is a client component, we need to pass it as a prop*/}
        <SelectCountry
          name="nationality"
          id="nationality"
          className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
