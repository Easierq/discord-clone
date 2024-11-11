import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          card: "max-w-[90vw] mx-auto",
          formButtonPrimary: "bg-[#5A63F7] hover:bg-[#5A63F7]/90",
        },
      }}
    />
  );
}
