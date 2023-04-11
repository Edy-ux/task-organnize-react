import Lottie from 'react-lottie';
import networkFaillData from './network-failed';
import Typography from '@material-ui/core/Typography';

const NetworkFaill = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: networkFaillData
  };

  return (
    <div style={{ padding: '5px 0' }}>
      <Lottie options={defaultOptions} height={300} width={300} />
      <Typography align="center" color="textSecondary">
        Verifique sua conexão com a internset.
      </Typography>
    </div>
  );
};

export default NetworkFaill;
