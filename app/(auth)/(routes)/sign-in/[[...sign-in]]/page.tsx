import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          card: "max-w-[90vw] mx-auto",
          formButtonPrimary: "bg-[#5A63F7] hover:bg-[#5A63F7]/90",
        },
      }}
    />
  );
}
//  appearance={{
//         variables: {
//           fontSize: "0.875rem",
//           borderRadius: "0.5rem",
//           colorPrimary: "#5A63F7",
//         },
//       }}
