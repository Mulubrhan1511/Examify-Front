// layout/MinimalLayout.tsx
import { ReactNode } from 'react';

const MinimalLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden items-center justify-center">
        {children}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default MinimalLayout;
