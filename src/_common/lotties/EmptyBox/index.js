import Lottie from 'react-lottie';
import EmptyBoxData from './empty-box';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core';

const EmptyBox = () => {
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyBoxData
  };

  return (
    <div style={{ padding: '32px 0' }}>
      <Lottie options={defaultOptions} height={200} width={200} fill="" />
      <Typography align="center" color={theme.palette.mode === 'dark' ? '#5555' : '#15151'}>
        Nenhum registro encontrado.
      </Typography>
    </div>
  )
};

export default EmptyBox;
