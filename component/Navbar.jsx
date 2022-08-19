import Link from 'next/link';
import { MDBBtn } from 'mdb-react-ui-kit';

import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import styles from '../styles/Nav.module.css';
import Image from 'next/image';

function Navbar() {
  //   const [color, setColor] = useState('blue');
  //   useEffect(() => setColor('red'), []);
  return (
    <>
      <nav className={styles.navigationbar}>
        <div className={styles.card}>
          <Link href="/">
            <MDBNavbarBrand href="#" className="text-light fs-1">
              GOT Card
            </MDBNavbarBrand>
          </Link>
        </div>

        <div className={styles.data}>
          <div className={styles.img}>
            <Link href="/">
              <Image
                src="https://freepngimg.com/thumb/game_of_thrones/6-2-game-of-thrones-logo-transparent.png"
                alt=""
                width="180"
                height="69"
                layout="fixed"
              />
            </Link>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link href="/login">
            <MDBBtn outline rounded className="mx-2 text-white" color="warning">
              Login
            </MDBBtn>
          </Link>

          <Link href="/register">
            <MDBBtn outline rounded className="mx-2 text-white" color="warning">
              Register
            </MDBBtn>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
