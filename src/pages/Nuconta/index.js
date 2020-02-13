import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Tabs from '~/components/Nuconta/Tabs';
import History from '~/components/Nuconta/History';

import dinheiroGuardadoIcon from '~/assets/dinheiro-guardado-icon.png';
import contaIcon from '~/assets/conta-icon.png';
import ajudaIcon from '~/assets/ajuda-icon.png';

import {
  Container, Content, Header, Yield, YieldText, IconAccount, IconAccountButton, IconHelp, Card, CardContent, CardSaveMoney, Title, Balance, CardSaveMoneyTextContent, CardSaveMoneyContent, CardSaveMoneyImage, CardSaveMoneyTitle, CardSaveMoneyAmount,
} from './styles';

export default function Nuconta({ navigation }) {
  return (
    <Container>

      <Header>
        <IconAccountButton onPress={() => navigation.goBack(null)}>
          <IconAccount source={contaIcon} />
        </IconAccountButton>
        <Yield>
          <YieldText>+R$ 2.579,65</YieldText>
        </Yield>
        <IconHelp source={ajudaIcon} />
      </Header>

      <Content>
        <Card>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Balance>R$ 367.611,65</Balance>
          </CardContent>

          <CardSaveMoney>
            <CardSaveMoneyContent>
              <CardSaveMoneyImage source={dinheiroGuardadoIcon} />
              <CardSaveMoneyTextContent>
                <CardSaveMoneyTitle>Dinheiro guardado</CardSaveMoneyTitle>
                <CardSaveMoneyAmount>R$ 7.980,75</CardSaveMoneyAmount>
              </CardSaveMoneyTextContent>
            </CardSaveMoneyContent>
            <Icon name="keyboard-arrow-right" size={25} color="#999" />
          </CardSaveMoney>
        </Card>
        <Tabs />
        <History />
      </Content>

    </Container>
  );
}
