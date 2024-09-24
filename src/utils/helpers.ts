import type {IProfile, IAddress} from 'src/types/ordering';
import copies from 'src/constants/copies';

const {RUPEE} = copies;

const isValidProfile = (profile: any): profile is IProfile => {
  if (typeof profile === 'object') {
    const keys = Object.keys(profile);

    return (
      keys.length > 0 &&
      keys.includes('name') &&
      keys.includes('token') &&
      keys.includes('phone_number') &&
      !!profile.name &&
      !!profile.token &&
      !!profile.phone_number
    );
  }

  return false;
};

const getInitials = ({name}: {name: string}) => {
  return name
    .split(' ')
    .map(s => s[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getMergedAddress = ({address}: {address?: IAddress | {}}) => {
  const {line_1 = '', line_2 = ''} = address as IAddress;
  let mergedAddress = '';
  if (address && Object.keys(address).length > 0) {
    if (line_1 && typeof line_1 === 'string') {
      mergedAddress += line_1;
    }
    if (line_2) {
      mergedAddress += line_2;
    }
  }

  return mergedAddress;
};

const isValidHttpUrl = (string: string) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(string);
};

const getFormattedPrice = (price: number) => {
  return `${RUPEE}${price.toFixed(2)}`;
};

export {
  getInitials,
  isValidProfile,
  getMergedAddress,
  isValidHttpUrl,
  getFormattedPrice,
};
