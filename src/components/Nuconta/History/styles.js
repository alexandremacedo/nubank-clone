import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Card = styled.View`
padding-top: 10px;
background: #f9f9f9;
`;

export const CardHistory = styled.View`
  padding: 15px;
  justify-content: space-between;
  flex-direction: row;
`;

export const CardHistoryContent = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CardHistoryImage = styled.Image`
  width: 29px;
  padding: 2px;
  height: 29px;
`;

export const CardHistoryTextContent = styled.View`
  margin-left: 15px;
`;


export const CardHistoryDescription = styled.Text`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const CardHistoryName = styled.Text`
  margin-bottom: 5px;
  max-width: 90%;
  font-size: 19px;
  color: #333;
`;

export const CardHistoryAmount = styled.Text`
  font-size: 19px;
  color: #333;
`;

export const CardHistoryDate = styled.Text`
  font-size: 11px;
  color: #999;
`;
