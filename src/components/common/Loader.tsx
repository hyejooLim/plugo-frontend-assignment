import { FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  color: string;
  size: number;
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ size, color, isLoading }) => {
  return (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>
      <ClipLoader color={color} size={size} loading={isLoading} />
    </div>
  );
};

export default Loader;
