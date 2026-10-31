import { ORDER_BOOK_ASKS, ORDER_BOOK_BIDS } from '@/lib/mock-data';
import styles from './OrderBook.module.css';

export function OrderBook() {
  const maxTotal = Math.max(
    ...ORDER_BOOK_ASKS.map((r) => r.total),
    ...ORDER_BOOK_BIDS.map((r) => r.total)
  );

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>دفتر الأوامر والعمق</h3>
        <span dir="ltr">Spread: 0.01 USDT</span>
      </div>

      <div className={styles.tableHead}>
        <span>السعر (USDT)</span>
        <span>الحجم (BTC)</span>
        <span>الإجمالي (BTC)</span>
      </div>

      <div className={styles.asks}>
        {ORDER_BOOK_ASKS.map((r) => (
          <div key={r.price} className={styles.row} dir="ltr">
            <div className={styles.barAsk} style={{ width: `${(r.total / maxTotal) * 100}%` }} />
            <span className={styles.askPrice}>{r.price.toFixed(2)}</span>
            <span>{r.size.toFixed(3)}</span>
            <span>{r.total.toFixed(3)}</span>
          </div>
        ))}
      </div>
      <div className={styles.midPrice} dir="ltr">
        $91,420.50 ↑ <small>Mark: 91,421.00</small>
      </div>

      <div className={styles.bids}>
        {ORDER_BOOK_BIDS.map((r) => (
          <div key={r.price} className={styles.row} dir="ltr">
            <div className={styles.barBid} style={{ width: `${(r.total / maxTotal) * 100}%` }} />
            <span className={styles.bidPrice}>{r.price.toFixed(2)}</span>
            <span>{r.size.toFixed(3)}</span>
            <span>{r.total.toFixed(3)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
       