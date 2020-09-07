import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeinght = 
  Platform.OS == 'ios' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeinght + 'px'};
`;

export const Container = styled.View`
  padding-left: 14px;
`;

export const Main = styled.View`

`;