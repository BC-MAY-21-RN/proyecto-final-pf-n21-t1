import plumbering from '../../../assets/images/plumbering.png';
import constructor from '../../../assets/images/constructor.png';
import painter from '../../../assets/images/painter.png';
import electrician from '../../../assets/images/electrician.png';
import carpenter from '../../../assets/images/carpenter.png';
import electronics from '../../../assets/images/electronics.png';

const Fontanero = {
  serviceTitle: 'Fontanería',
  icon: plumbering,
};

const Constructor = {
  serviceTitle: 'Construcción',
  icon: constructor,
};

const Tecnico = {
  serviceTitle: 'Técnico',
  icon: electronics,
};

const Electricista = {
  serviceTitle: 'Electricista',
  icon: electrician,
};

const Carpintero = {
  serviceTitle: 'Carpintero',
  icon: carpenter,
};

const Pintor = {
  serviceTitle: 'Pintor',
  icon: painter,
};

const serviceButtonsData = () => {
  return [Fontanero, Constructor, Tecnico, Electricista, Carpintero, Pintor];
};

export default serviceButtonsData;
