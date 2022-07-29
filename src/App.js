import { useState } from "react";
import { Container } from "@chakra-ui/react";
import ModalDisclaimer from "./Modal";
import axios from "axios";

function App() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const busca = async () => {
    const response = await axios.get();
  };

  return (
    <Container>
      <ModalDisclaimer open={show} close={handleClose} />
    </Container>
  );
}

export default App;
