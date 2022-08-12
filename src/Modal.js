import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import React from "react";

function ModalDisclaimer({ open, close }) {
  return (
    <Modal isOpen={open}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Disclaimer</ModalHeader>
        <ModalBody>
          As ações apresentas aqui são baseadas no metodo e não têm como fim
          indicar se a empresa é um bom investimento ou não. E sim mostrar se a
          empresa está barata de acordo com o metodo.
        </ModalBody>

        <ModalFooter>
          <Button bg={"#4BD963"} _hover={{ bg: "#228b22" }} onClick={close}>
            Buscar ações
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalDisclaimer;
