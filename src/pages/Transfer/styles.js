import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background: rgba(0,0,0,0.5);
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 8px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const IconAccountButton = styled.TouchableOpacity`
`;

export const Yield = styled.View`
`;

export const YieldText = styled.Text`
  font-size: 13px;
  padding: 3px 9px;
  border-radius: 5px;
  color: #999;
  font-weight: bold;
`;

export const IconAccount = styled.Image`
  width: 40px;
  height: 25px;
`;
export const IconHelp = styled.Image`
  width: 25px;
  height: 25px;
`;


export const InputContent = styled.View`
  padding-bottom: 10px;
  background: #fff;
`;

export const Form = styled.View`
  margin: 15px;
  align-items: center;
  flex-direction: row;
  padding: 0 5px ;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

export const Input = styled.TextInput.attrs({
  type: 'text',
  placeholder: 'Buscar contato',
})`
  flex: 1;
  padding-left: 10px;
  border-radius: 4px;
  font-size: 18px;
`;

export const SearchButton = styled.TouchableOpacity.attrs({
  type: 'submit',
})`
  border: 0;
  padding-right: 10px;
  margin-left: 10px;
  border-radius: 4px;
`;


export const List = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
flex: 1;
background: #fff;
`;

export const NewContactContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

export const NewContactIconTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NewContactText = styled.Text`
  margin-left: 15px;
  color: #333;
  font-size: 14px;
`;

export const UserContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
