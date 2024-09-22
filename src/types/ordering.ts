interface IProfile {
  id: string;
  name: string;
  image?: string;
  gender: string;
  token: string;
  address: {
    landmark: string;
    line_1: string;
    line_2: string;
    pin_code: string;
    latitude?: string;
    longitude?: string;
  };
}

export type {IProfile};
