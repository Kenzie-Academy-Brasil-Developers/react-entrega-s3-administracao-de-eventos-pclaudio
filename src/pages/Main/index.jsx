import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Routes from "../../routes";
import { Aside, Container, MainContent } from "./styles";
import { FaGraduationCap, FaHome, FaRing } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const Main = () => {
  const history = useHistory();

  const [context, setContext] = useState(() =>
    history.location.pathname.substring(1)
  );

  useEffect(() => {
    history.push(`/${context}`);

    // eslint-disable-next-line
  }, [context]);

  const handleChangeDisplay = (context) => {
    setContext(context);
  };

  return (
    <Container>
      <Aside>
        <ul>
          <li>
            <button onClick={() => handleChangeDisplay("")}>
              <FaHome />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleChangeDisplay("confraternization")}>
              <GiPartyPopper />
              <span>Confraternization</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleChangeDisplay("graduation")}>
              <FaGraduationCap />
              <span>Graduation</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleChangeDisplay("wedding")}>
              <FaRing />
              <span>Wedding</span>
            </button>
          </li>
        </ul>
      </Aside>

      <MainContent>
        <Routes context={context} />
      </MainContent>
    </Container>
  );
};

export default Main;
