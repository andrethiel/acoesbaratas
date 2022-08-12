import { useState } from "react";
import { Container, Table, Td, Thead, Tr } from "@chakra-ui/react";
import ModalDisclaimer from "./Modal";
import axios from "axios";

function App() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  async function buscar() {
    const response = await axios.get(
      "https://acoesbaratas.herokuapp.com/buscaracoes"
    );
    if (response.data.length > 0) {
      setShow(false);
    }
  }

  return (
    <Container>
      <ModalDisclaimer open={show} buscar={buscar} />
      <Table>
        <Thead>
          <Tr>
            <Td>Ticker Ação</Td>
            <Td>Preço</Td>
          </Tr>
        </Thead>
      </Table>
    </Container>
  );
}

export default App;
