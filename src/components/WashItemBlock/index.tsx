import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/slice';

const typeNames = ['Newer Car', 'Older Car'];

type WashItemBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  carSizes: string[];
  carTypes: number[];
  rating: number;
};

export const WashItemBlock: React.FC<WashItemBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  carSizes,
  carTypes,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeCarType, setActiveCarType] = useState(0);
  const [activeCarSize, setActiveCarSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      carType: typeNames[activeCarType],
      carSize: carSizes[activeCarSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className='washItem-block-wrapper'>
      <div className='washItem-block'>
        <Link key={id} to={`/washitem/${id}`}>
          <img
            className='washItem-block_image itemImg'
            src={imageUrl}
            alt='Wash Item'
          />
          <h4 className='washItem-block__title washItem-title'>{title}</h4>
        </Link>
        <div className='washItem-block_selector typeNsizeSelector'>
          <ul>
            {carTypes?.map((carTypeId) => (
              <li
                key={carTypeId}
                onClick={() => setActiveCarType(carTypeId)}
                className={activeCarType === carTypeId ? 'active' : ''}
              >
                {typeNames[carTypeId]}
              </li>
            ))}
          </ul>
          <ul>
            {carSizes?.map((carSize, i) => (
              <li
                key={carSize}
                onClick={() => setActiveCarSize(i)}
                className={activeCarSize === i ? 'active' : ''}
              >
                {carSize}
              </li>
            ))}
          </ul>
        </div>
        <div className='washItem-block_bottom wBlockBottom'>
          <div className='washItem-block_price itemPrice'>
            Starts from $ {price}
          </div>
          <button
            onClick={onClickAdd}
            className='button button--outline button-add washItemBlock-addBtn'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Add</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
