import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  height: 108px;
  background: #fff;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
`;

export const TabItem = styled.View`
  width: 108px;
  height: 108px;
  padding: 15px;
  border-right-color: #ccc;
  border-right-width: 1px;

  border-top-color: #ccc;
  border-top-width: 1px;

  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #333;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;
