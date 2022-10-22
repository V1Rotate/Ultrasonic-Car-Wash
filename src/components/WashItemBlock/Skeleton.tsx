import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className='washItem-block'
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='3' y='3' rx='10' ry='10' width='300' height='180' />
    <rect x='6' y='190' rx='0' ry='0' width='292' height='20' />
    <rect x='4' y='215' rx='0' ry='0' width='239' height='20' />
    <rect x='4' y='242' rx='0' ry='0' width='274' height='20' />
  </ContentLoader>
);
