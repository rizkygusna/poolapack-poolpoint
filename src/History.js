import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const History = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <section className='history'>
      <p className='bold'>Riwayat Transaksi</p>
      <div className='history-filter'>
        <div className='history-filter-category'>
          <button>Semua</button>
          <button>Point Masuk</button>
          <button>Point Keluar</button>
        </div>
        <DateRangePicker onChange={onChange} value={value} />
      </div>
    </section>
  );
};

export default History;
