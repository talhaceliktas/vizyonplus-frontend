import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 pt-48 pb-20">
      <div className="mx-auto flex h-full w-full max-w-[1360px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
