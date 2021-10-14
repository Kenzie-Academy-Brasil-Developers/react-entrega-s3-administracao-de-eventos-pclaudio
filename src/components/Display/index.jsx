import { useContext } from "react";
import { BeveragesContext } from "../../providers/Beverages";
import { ConfraternizationContext } from "../../providers/Confraternization";
import { GraduationContext } from "../../providers/Graduation";
import { WeddingContext } from "../../providers/Wedding";
import { Container, Content } from "./styles";
import Card from "../Card";

const Display = ({ context }) => {
  const { beverages } = useContext(BeveragesContext);
  const { confraternizationBeverages } = useContext(ConfraternizationContext);
  const { graduationBeverages } = useContext(GraduationContext);
  const { weddingBeverages } = useContext(WeddingContext);

  return (
    <Container>
      {context === "confraternization" && <h2>Confraternization</h2>}
      {context === "graduation" && <h2>Graduation</h2>}
      {context === "wedding" && <h2>Wedding</h2>}

      <Content>
        {context === "" &&
          beverages.map((beverage) => (
            <Card key={beverage.id} context={context} beverage={beverage} />
          ))}

        {context === "confraternization" &&
          confraternizationBeverages.map((beverage) => (
            <Card key={beverage.id} context={context} beverage={beverage} />
          ))}

        {context === "graduation" &&
          graduationBeverages.map((beverage) => (
            <Card key={beverage.id} context={context} beverage={beverage} />
          ))}

        {context === "wedding" &&
          weddingBeverages.map((beverage) => (
            <Card key={beverage.id} context={context} beverage={beverage} />
          ))}
      </Content>
    </Container>
  );
};

export default Display;
