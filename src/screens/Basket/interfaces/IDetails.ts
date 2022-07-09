import { ImageProps } from 'react-native';

export interface IDetails {
  name: string;
  farmLogo: Readonly<ImageProps>;
  farmName: string;
  description: string;
  price: string;
  button: string;
}
