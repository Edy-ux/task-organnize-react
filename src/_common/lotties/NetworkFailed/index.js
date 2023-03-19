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
      <Lottie options={defaultOptions} height={500} width={500} />
      <Typography align="center" color="textSecondary">
        Verifique sua conexão com a internet.
      </Typography>
    </div>
  );
};

export default NetworkFaill;
