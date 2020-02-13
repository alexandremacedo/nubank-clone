import { Animated } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Content = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
`;

export const Card = styled(Animated.View)`
  background: #fff;
`;

export const CardContent = styled.View`
  padding: 0 25px;
  margin-top: 25%;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #999;
`;

export const Balance = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardSaveMoney = styled.TouchableOpacity`
  padding: 25px;
  margin-top: 20%;
  margin-bottom: 20%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const CardSaveMoneyContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const CardSaveMoneyImage = styled.Image`
  width: 27px;
  height: 27px;
`;

export const CardSaveMoneyTextContent = styled.View`
  margin-left: 25px;
`;


export const CardSaveMoneyTitle = styled.Text`
  margin-bottom: 5px;
  font-size: 15px;
  color: #999;
`;

export const CardSaveMoneyAmount = styled.Text`
  font-size: 15px;
  color: #333;
`;

export const Annotation = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 12px;
  color: #333;
`;


export const Header = styled.View`
  flex-direction: row;
  padding: 20px 25px 20px 25px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
`;

export const IconAccountButton = styled.TouchableOpacity`
`;

export const Yield = styled.View`
`;

export const YieldText = styled.Text`
  font-size: 16px;
  padding: 3px 9px;
  border-radius: 5px;
  border: 0.5px solid #19aa19;
  color: #19aa19;
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
