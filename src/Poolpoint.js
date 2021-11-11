import coin from './assets/coin.png';

const Poolpoint = () => {
  return (
    <section className='poolpoint'>
      <div className='poolpoint-detail'>
        <p>Total Poin Aktif</p>
        <div className='poolpoint-amount'>
          <h3>Rp. 100.000</h3>
          <div className='coin'>
            <img src={coin} alt='coin' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poolpoint;
