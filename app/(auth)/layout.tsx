const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center dark:bg-[#2B2D31] bg-[#5A63F7]">
      {children}
    </div>
  );
};

export default AuthLayout;
