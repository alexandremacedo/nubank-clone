import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ajudaIcon from '~/assets/ajuda-icon.png';

import {
  Container, InputContent, Header, Yield, YieldText, IconAccountButton, Form, Input, UserContainer, SearchButton, List, NewContactContainer, NewContactIconTextContainer, NewContactText,
} from './styles';

export default function Transfer({ navigation }) {
  return (
    <Container>

      <Header>
        <IconAccountButton onPress={() => navigation.goBack(null)}>
          <Icon name="clear" size={35} color="#999" />
        </IconAccountButton>
        <Yield>
          <YieldText>TRANSFERIR</YieldText>
        </Yield>
        <Icon name="crop-free" size={35} color="#999" />
      </Header>

      <InputContent>
        <Form>
          <Input onPress={() => navigation.goBack(null)} />
          <SearchButton>
            <Icon name="search" size={30} color="#999" />
          </SearchButton>
        </Form>
      </InputContent>

      <List>
        <NewContactContainer>
          <NewContactIconTextContainer>
            <Icon name="person-add" size={30} color="#8B10AE" />
            <NewContactText>Transferir para novo contato</NewContactText>
          </NewContactIconTextContainer>
          <Icon name="keyboard-arrow-right" size={20} color="#999" />
        </NewContactContainer>
        <UserContainer>
          <NewContactIconTextContainer>
            <NewContactText>Alexandre Macedo</NewContactText>
          </NewContactIconTextContainer>
          <Icon name="keyboard-arrow-right" size={20} color="#999" />
        </UserContainer>
        <UserContainer>
          <NewContactIconTextContainer>
            <NewContactText>Felipe Deschamps</NewContactText>
          </NewContactIconTextContainer>
          <Icon name="keyboard-arrow-right" size={20} color="#999" />
        </UserContainer>
        <UserContainer>
          <NewContactIconTextContainer>
            <NewContactText>Diego Fernandes</NewContactText>
          </NewContactIconTextContainer>
          <Icon name="keyboard-arrow-right" size={20} color="#999" />
        </UserContainer>
      </List>

    </Container>
  );
}
