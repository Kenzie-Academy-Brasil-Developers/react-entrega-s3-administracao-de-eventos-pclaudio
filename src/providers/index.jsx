import { BeveragesProvider } from "./Beverages";
import { ConfraternizationProvider } from "./Confraternization";
import { GraduationProvider } from "./Graduation";
import { WeddingProvider } from "./Wedding";

const Providers = ({ children }) => {
  return (
    <BeveragesProvider>
      <ConfraternizationProvider>
        <GraduationProvider>
          <WeddingProvider>{children}</WeddingProvider>
        </GraduationProvider>
      </ConfraternizationProvider>
    </BeveragesProvider>
  );
};

export default Providers;
