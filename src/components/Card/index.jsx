import { useContext, useState } from "react";
import { ConfraternizationContext } from "../../providers/Confraternization";
import { GraduationContext } from "../../providers/Graduation";
import { WeddingContext } from "../../providers/Wedding";
import {
  Button,
  CardBrewedSince,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
  CardVolume,
} from "./styles";

const EVENTS_NAMES = ["confraternization", "graduation", "wedding"];

const Card = ({ context, beverage }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const {
    addBeverageToConfraternization,
    removeBeverageFromConfraternization,
  } = useContext(ConfraternizationContext);

  const { addBeverageToGraduation, removeBeverageFromGraduation } =
    useContext(GraduationContext);

  const { addBeverageToWedding, removeBeverageFromWedding } =
    useContext(WeddingContext);

  const handleEventChange = (event) => {
    setName(event.target.value);
  };

  const handleAddBeverage = () => {
    setError("");

    switch (name) {
      case "confraternization":
        addBeverageToConfraternization(beverage);
        break;

      case "graduation":
        addBeverageToGraduation(beverage);
        break;

      case "wedding":
        addBeverageToWedding(beverage);
        break;

      default:
        setError("This option is required");
        break;
    }
  };

  const handleRemoveBeverage = () => {
    switch (context) {
      case "confraternization":
        removeBeverageFromConfraternization(beverage.id);
        break;

      case "graduation":
        removeBeverageFromGraduation(beverage.id);
        break;

      case "wedding":
        removeBeverageFromWedding(beverage.id);
        break;

      default:
        break;
    }
  };

  return (
    <CardContainer>
      <CardImage>
        <img src={beverage.image_url} alt={beverage.name} />
      </CardImage>

      <CardBrewedSince>{beverage.first_brewed}</CardBrewedSince>

      <hr />

      <CardTitle>{beverage.name}</CardTitle>

      <CardDescription>{beverage.description}</CardDescription>

      <CardVolume>{`${beverage.volume.value} ${beverage.volume.unit}`}</CardVolume>

      <hr />

      {context === "" && (
        <>
          <select value={name} onChange={(event) => handleEventChange(event)}>
            <option value="">--Select an event--</option>
            {EVENTS_NAMES.map((eventName, index) => (
              <option key={index} value={eventName}>
                {eventName}
              </option>
            ))}
          </select>

          {error && <p className="error">{error}</p>}

          <Button onClick={handleAddBeverage}>Add</Button>
        </>
      )}

      {context !== "" && <Button onClick={handleRemoveBeverage}>Remove</Button>}
    </CardContainer>
  );
};

export default Card;
