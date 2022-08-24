import { useState } from "react";
import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Center,
} from "@chakra-ui/react";
import ModalDisclaimer from "./Modal";
import axios from "axios";
import Lottie from "react-lottie";
import * as animationData from "./99142-green-graph-growing.json";

function App() {
  const [show, setShow] = useState(true);
  const [play, setPlay] = useState(false);
  const [dados, setDados] = useState([]);
  const [frase, setFrase] = useState("");

  async function buscar() {
    setShow(false);
    setPlay(true);
    setFrase("Estamos buscando todos os papeis");
    setTimeout(() => {
      setFrase("fazendo a seleção das ações mais baratas");
    }, 10000);
    const response = await axios.get("http://170.80.208.69:9500/buscaracoes");
    if (response.data.length > 0) {
      setPlay(false);
      setDados(response.data);
      console.log(response.data);
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  if (dados.length == 0) {
    return (
      <Container marginTop={10}>
        <Center>
          <ModalDisclaimer open={show} buscar={buscar} />
          <Lottie
            style={{ display: play ? "block" : "none" }}
            options={defaultOptions}
            isStopped={null}
          />
          <Text fontSize="xl">{frase}</Text>
        </Center>
      </Container>
    );
  }

  return (
    <TableContainer marginTop={10}>
      <Center>
        <Table size={"md"}>
          <Thead>
            <Tr>
              <Th>Ticker Ação</Th>
              <Th>Preço</Th>
              <Th>Margem EBIT</Th>
              <Th>EV/EBIT</Th>
              <Th>Div.Yield</Th>
              <Th>Volume Financ.(R$)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dados.map((item) => (
              <Tr>
                <Td>{item.acao}</Td>
                <Td>
                  {item.preco.toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "BRL",
                    },
                    { minimumFractionDigits: 2 }
                  )}
                </Td>
                <Td>{item.margem}</Td>
                <Td>{item.ebit}</Td>
                <Td>{item.dividendo}</Td>
                <Td>{item.financeiro}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Center>
    </TableContainer>
  );
}

export default App;
