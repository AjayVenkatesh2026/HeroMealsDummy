import {IProfile} from 'src/types/ordering';

const dummyProfile: IProfile = {
  id: 'id',
  name: 'John Doe',
  token: 'token',
  gender: 'Male',
  image: '',
  address: {
    landmark: "Near St. John's Library",
    line_1: 'Luxary Residence, 5nd Floor, 504, 4560 Creek Rd',
    line_2: 'Lewiston, New York, United States',
    pin_code: '14092',
    latitude: '43.194012',
    longitude: '-79.022338',
  },
};

export {dummyProfile};
