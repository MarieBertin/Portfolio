
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
