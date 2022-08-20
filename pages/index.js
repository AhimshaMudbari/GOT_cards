import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Cards from '../component/Cards';
import axios from 'axios';

const Home = () => {
  const imgarr = [
    'https://cdn.pixabay.com/photo/2020/11/13/16/51/white-walker-5739181__340.jpg',
    'https://cdn.pixabay.com/photo/2019/05/05/15/05/game-of-thrones-4180794_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/09/19/17/49/keychain-3689063_960_720.jpg',
  ];
  const n = parseInt(Math.random() * 3);
  return (
    <>
      <div className={styles.topper}>
        <div className={styles.d1}>
          <div className={styles.da}>
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              style={{
                fontSize: 50,
                color: 'white',
                zIndex: 9999,
                cursor: 'pointer',
              }}
            />
          </div>
          <div className={styles.db}>
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              style={{
                fontSize: 50,
                color: 'white',
                zIndex: 9,
              }}
            />
          </div>
        </div>
        <div className={styles.d2}>
          <Image
            src={imgarr[n]}
            alt=""
            layout="fill"
            objectFit="fill"
            style={{ zIndex: -1 }}
          />
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>About the creator</h2>
        <div className={styles.senior}>
          <div>
            <Image
              src="https://i.ibb.co/dfdHkks/my-passport-photo.jpg"
              alt=""
              height="350"
              width="350"
              layout="fixed"
              objectFit="fill"
            />
          </div>
          <div>
            <p className={styles.para} style={{ color: 'teal' }}>
              Hi, I just created this website with intention of learning and
              nothing else. However it was fun creating this website with NextJs
              and material design bootstrap
            </p>
          </div>
        </div>
        <hr className={styles.hr} />

        <h2 className={styles.title}>About the helper</h2>
        <div className={styles.senior}>
          <div>
            <p className={styles.para} style={{ color: 'aqua' }}>
              Yeah I helped my self and created this website. Thanks to me and
              Google
            </p>
          </div>
          <div>
            <Image
              src="https://i.ibb.co/dfdHkks/my-passport-photo.jpg"
              alt=""
              height="350"
              width="350"
              layout="fixed"
              objectFit="fill"
            />
          </div>
        </div>
        <hr className={styles.hr} />
      </div>
      <div>
        <h1 className={styles.character}>Character cards</h1>

        <Cards />
      </div>
    </>
  );
};

export default Home;
