import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/anothercar.jpg';

export const CartEmpty: React.FC = () => (
  <div className='cart cart--empty'>
    <h2>Service is not ordered yet</h2>
    <p>
      Our team is taking car of someone else car at the moment...
      <br />
      Please visit our main page to select our services.
      <br />
      Thank you.
    </p>
    <img className='anotherCarImg' src={cartEmptyImg} alt='Empty cart' />
    <Link to='/' className='button button--black'>
      <span>Back</span>
    </Link>
  </div>
);
