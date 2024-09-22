import type {ViewStyle} from 'react-native';

const rowCenterCenter: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const columnStretchCenter: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
};

const columnCenterCenter: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const rowCenterStart: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const containers = {
  rowCenterCenter,
  columnStretchCenter,
  columnCenterCenter,
  rowCenterStart,
};

export default containers;
