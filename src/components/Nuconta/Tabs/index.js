import React from 'react';

import depositIcon from '~/assets/depositar-icon.png';
import payIcon from '~/assets/pagar-icon.png';
import transferIcon from '~/assets/transferir-icon.png';
import loanIcon from '~/assets/emprestimo-icon.png';

import {
  Container, TabsContainer, TabItem, TabText, Icon,
} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon source={depositIcon} />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon source={payIcon} />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon source={transferIcon} />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon source={loanIcon} />
          <TabText>Empréstimos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
