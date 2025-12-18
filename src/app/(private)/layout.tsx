import { Suspense } from "react";
import Header from "@/src/components/ui/header/index";

interface PrivateLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = async ({ children }) => {
  return (
    <Suspense fallback={
      <div className="flex justify-center">Loading...</div>
    }>
      <div className="min-h-screen bg-background">
        <Header />
        {children}
      </div>
    </Suspense>
  )
}

export default PrivateLayout;