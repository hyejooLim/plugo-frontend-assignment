import clientApi from '..';
import { Color } from '../../types';

const getColors = async (): Promise<Color[]> => {
  const response = await clientApi.get<Color[]>('/colors');
  return response;
};

export default getColors;
