import coin from './assets/coin.png';

const Poolpoint = () => {
  return (
    <div className='poolpoint'>
      <h1>poolpoint</h1>
      <div className='poolpoint-detail'>
        <p>Total Poin Aktif</p>
        <div className='poolpoint-amount d-flex'>
          <h3>Rp. 100.000</h3>
          <div className='coin'>
            <img src={coin} alt='coin' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poolpoint;
