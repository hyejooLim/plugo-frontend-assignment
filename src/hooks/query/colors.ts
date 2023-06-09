import { useQuery } from '@tanstack/react-query';
import getColors from '../../apis/colors/getColors';

const useGetColors = () => useQuery(['colors'], getColors);

export { useGetColors };
