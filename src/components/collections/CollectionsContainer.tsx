import { useRouter } from 'next/router';
import { FC } from 'react';
import { PageTitle } from '../ui/PageTitle';
import styles from './collections.module.css';

export const CollectionsContainer: FC = () => {
  const {
    query: { name },
  } = useRouter();
  return (
    <>
      <PageTitle
        title={name as string}
        text="All posters are shipped through UPS or USPS. Customers are responsible
          for paying any additional customs/duties fees."
      />

      <div className={styles.container}>
        <div className={styles.div1}>
          <img
            className="w-full h-full object-cover"
            src="/pictures/posters/long-1.JPG"
            alt=""
          />
        </div>
        <div className={styles.div2}>
          <img
            className="w-full h-full object-cover"
            src="/pictures/posters/weight-1.JPG"
            alt=""
          />
        </div>
        <div className={styles.div4}>
          <img
            className="w-full h-full object-cover"
            src="/pictures/posters/weight-1.JPG"
            alt=""
          />
        </div>
        <div className={styles.div6}>
          <img
            className="w-full h-full object-cover"
            src="/pictures/posters/long-3.JPG"
            alt=""
          />
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.div7}>
          <img
            className="w-full h-full object-cover"
            src="/pictures/posters/weight-2.JPG"
            alt=""
          />
        </div>
        <div className={styles.div8}>
          <img
            className="w-full h-full object-cover"
            src="/pictures/posters/long-4.JPG"
            alt=""
          />
        </div>
        <div className={styles.div9}>
          <img
            className="w-full h-full object-cover"
            src="/pictures/posters/weight-1.JPG"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
