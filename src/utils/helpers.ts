import {IProfile} from 'src/types/ordering';

const isValidProfile = (profile: any): profile is IProfile => {
  if (typeof profile === 'object') {
    const keys = Object.keys(profile);

    return (
      keys.length > 0 &&
      keys.includes('name') &&
      keys.includes('token') &&
      !!profile.name &&
      !!profile.token
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

export {getInitials, isValidProfile};
