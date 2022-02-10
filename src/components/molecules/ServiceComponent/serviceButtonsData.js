import plumbering from '../../../assets/images/plumbering.png';
import constructor from '../../../assets/images/constructor.png';
import painter from '../../../assets/images/painter.png';
import electrician from '../../../assets/images/electrician.png';
import carpenter from '../../../assets/images/carpenter.png';
import electronics from '../../../assets/images/electronics.png';

const serviceButtonsData = ({navigation}) => {
  return [
    {
      width: '90%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Fontanero',
      icon: plumbering,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Constructor',
      icon: constructor,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Ténico',
      icon: electronics,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Electricista',
      icon: electrician,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Carpintero',
      icon: carpenter,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Pintor',
      icon: painter,
      toScreen: () => navigation.navigate('Login'),
    },
  ];
};

export default serviceButtonsData;
