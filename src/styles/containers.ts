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

const columnStartCenter: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const rowCenterBetween: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const columnStartStart: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
};

const rowStretchCenter: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center',
};

const containers = {
  rowCenterCenter,
  columnStretchCenter,
  columnCenterCenter,
  rowCenterStart,
  columnStartCenter,
  rowCenterBetween,
  columnStartStart,
  rowStretchCenter,
};

export default containers;
