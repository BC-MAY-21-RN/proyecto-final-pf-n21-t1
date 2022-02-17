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
      marginBottom: '20%',
      serviceTitle: 'Fontanero',
      icon: plumbering,
      toScreen: () => navigation.navigate('ServiceProviders'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '20%',
      serviceTitle: 'Constructor',
      icon: constructor,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '20%',
      serviceTitle: 'Técnico',
      icon: electronics,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '20%',
      serviceTitle: 'Electricista',
      icon: electrician,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '20%',
      serviceTitle: 'Carpintero',
      icon: carpenter,
      toScreen: () => navigation.navigate('Login'),
    },
    {
      width: '90%',
      height: '20%',
      marginBottom: '20%',
      serviceTitle: 'Pintor',
      icon: painter,
      toScreen: () => navigation.navigate('Login'),
    },
  ];
};

export default serviceButtonsData;

/*  Este es un ejemplo de como evitar el data en caso de que todos los items del data sean iguales:  let serviceButtonsData = [];
  for (let i = 0; i < 6; i++) {
    serviceButtonsData.push({
      width: '40%',
      height: '20%',
      marginBottom: '20%',
      serviceTitle: 'Escoga su servicio',
      action: () => navigation.navigate('Login'),
    });
  } */
