const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center dark:bg-[#2B2D31] bg-[#E3E5E8]">
      {children}
    </div>
  );
};

export default AuthLayout;
