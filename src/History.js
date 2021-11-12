import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import coin from './assets/coin.png';

const History = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  const transactions = [
    {
      type: 'Referral',
      date: 'Jumat, 29 Okt 2021',
      time: '12:38 wib',
      amount: '100.000',
    },
    {
      type: 'Cashback',
      date: 'Jumat, 29 Okt 2021',
      time: '12:38 wib',
      amount: '100.000',
    },
    {
      type: 'Referral',
      date: 'Jumat, 29 Okt 2021',
      time: '12:38 wib',
      amount: '100.000',
    },
    {
      type: 'Referral',
      date: 'Jumat, 29 Okt 2021',
      time: '12:38 wib',
      amount: '100.000',
    },
  ];

  return (
    <section className='history'>
      <p className='bold'>Riwayat Transaksi</p>
      <div className='history-filter'>
        <div className='history-filter-category'>
          <button className='active'>Semua</button>
          <button className='tertiary'>Point Masuk</button>
          <button className='tertiary'>Point Keluar</button>
        </div>
        <DateRangePicker onChange={onChange} value={value} />
      </div>
      {transactions.map((data) => (
        <div className='history-entry'>
          <p>
            {data.date} <span>{data.time}</span>
          </p>
          <h3>{data.type}</h3>
          <h3>{data.amount}</h3>
          <p>
            <span>
              <img src={coin} alt='' />
            </span>
            Poolpoint
          </p>
        </div>
      ))}
    </section>
  );
};

export default History;
