import React, { Component } from 'react';

import PropTypes from 'prop-types';
import depositIcon from '~/assets/depositar-icon.png';
import payIcon from '~/assets/pagar-icon.png';
import transferIcon from '~/assets/transferir-icon.png';
import loanIcon from '~/assets/emprestimo-icon.png';
import {
  Container, TabsContainer, TabItem, TabText, Icon, TabTouch,
} from './styles';

export default function Tabs({ navigation }) {
  function handleNavigate() {
    navigation.navigate('Transfer');
  }

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
        <TabTouch onPress={() => handleNavigate()}>
          <TabItem>
            <Icon source={transferIcon} />
            <TabText>Transferir</TabText>
          </TabItem>
        </TabTouch>
        <TabItem>
          <Icon source={loanIcon} />
          <TabText>Empréstimos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
