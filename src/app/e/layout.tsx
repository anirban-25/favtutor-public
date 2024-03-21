import { AppProvider } from "@/contexts/AppContext";

const TryItYourselfLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <div className="">{children}</div>
    </AppProvider>
  );
};

export default TryItYourselfLayout;
