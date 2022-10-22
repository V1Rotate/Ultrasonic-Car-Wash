import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullWashItem: React.FC = () => {
  const [washItem, setWashItem] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchWashItem() {
      try {
        const { data } = await axios.get(
          'https://63194b7e6b4c78d91b38a8f1.mockapi.io/items/' + id
        );
        setWashItem(data);
      } catch (error) {
        alert('Error with fetching Wash Item');
        navigate('/');
      }
    }

    fetchWashItem();
  }, []);

  if (!washItem) {
    return <>Loading ...</>;
  }

  return (
    <div className='fullWashItem-container'>
      <img
        className='fullWashItem-container_img'
        src={washItem.imageUrl}
        alt='Wash Item'
      />
      <h2 className='fullWashItem-container_title'>{washItem.title}</h2>
      <p className='fullWashItem-container_note'>
        <span className='fullWashItem-container_span'>NOTE :</span> The
        Ultrasonic car wash method provides the deepest cleaning possible,
        however, it is individual to every car and requires adjusting the
        procedure settings: procedure time, ultrasonic frequencies, materials
        applied, etc. Older cars may have thinner paint and clear coat layers
        with defects because of aging - Ultrasonic waves may affect the clear
        coat shine and its condition. That is why we require clients to select
        the type of your car: Newer or Older car, and your car size. That helps
        the Ultrasonic team to select the procedure optimal settings and make
        your car have a showroom condition again.
      </p>
      <h4 className='fullWashItem-container_price'>$ {washItem.price} </h4>
      <Link to='/'>
        <button className='button button--outline button--add'>
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullWashItem;
