import { Suspense } from "react";
import Header from "@/src/components/ui/header/index";

interface PrivateLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = async ({ children }) => {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          className="animate-spin rounded-full border-2 border-orange-500 border-t-black"
          style={{ width: 60, height: 60 }}
        />
      </div>
    }>
      <div className="min-h-screen bg-background">
        <Header />
        {children}
      </div>
    </Suspense>
  )
}

export default PrivateLayout;