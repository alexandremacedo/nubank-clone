import React from 'react';
import {
  Container, Yield, Title, IconAccount, IconAccountButton, IconHelp,
} from './styles';

import contaIcon from '~/assets/conta-icon.png';
import ajudaIcon from '~/assets/ajuda-icon.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <IconAccountButton>
        <IconAccount source={contaIcon} />
      </IconAccountButton>
      <Yield>
        <Title>+R$ 2.579,65</Title>
      </Yield>
      <IconHelp source={ajudaIcon} />
    </Container>
  );
}
