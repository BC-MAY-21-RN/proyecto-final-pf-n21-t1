import plumbering from '../../../assets/images/plumbering.png';
import constructor from '../../../assets/images/constructor.png';
import painter from '../../../assets/images/painter.png';
import electrician from '../../../assets/images/electrician.png';
import carpenter from '../../../assets/images/carpenter.png';
import electronics from '../../../assets/images/electronics.png';
import {navigation} from '@react-navigation/native'; 

const serviceButtonsData = [
  {
    width: '40%',
    height: '20%',
    marginBottom: '10%',
    serviceTitle: 'Fontanero',
    icon: plumbering,
    action: () => navigation.navigate('Login'),
  },
  {
    width: '40%',
    height: '20%',
    marginBottom: '10%',
    serviceTitle: 'Constructor',
    icon: constructor,
    action: () => navigation.navigate('Login'),
  },
  {
    width: '40%',
    height: '20%',
    marginBottom: '10%',
    serviceTitle: 'Ténico',
    icon: electronics,
    action: () => navigation.navigate('Login'),
  },
  {
    width: '40%',
    height: '20%',
    marginBottom: '10%',
    serviceTitle: 'Electricista',
    icon: electrician,
    action: () => navigation.navigate('Login'),
  },
  {
    width: '40%',
    height: '20%',
    marginBottom: '10%',
    serviceTitle: 'Carpintero',
    icon: carpenter,
    action: () => navigation.navigate('Login'),
  },
  {
    width: '40%',
    height: '20%',
    marginBottom: '10%',
    serviceTitle: 'Pintor',
    icon: painter,
    action: () => navigation.navigate('Login'),
  },
];
export default serviceButtonsData;