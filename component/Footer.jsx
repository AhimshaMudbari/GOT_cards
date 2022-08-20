import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import styles from '../styles/foot.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className={styles.foot}>
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted"
      >
        <section className={styles.sec1}>
          <div className={styles.upper}>
            <div>
              <p className={styles.para}>Find me in social media:</p>
            </div>
            <div className={styles.logoimg}>
              <img
                src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png"
                alt=""
                height="50px"
                width="50px"
              />
              <img
                src="https://pngimg.com/uploads/instagram/instagram_PNG9.png"
                alt=""
                height="50px"
                width="50px"
              />
              <img
                src="https://pngimg.com/uploads/github/github_PNG3.png"
                alt=""
                height="50px"
                width="50px"
              />
            </div>
          </div>
        </section>

        <section className={styles.sec2}>
          <MDBContainer className="text-center text-md-start mt-4">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className={styles.para}>CREATOR DETAIL</h6>
                <p className={styles.paracon}>
                  Name: Ahim mudbari
                  <br /> Address: Nepal, Kathmandu <br /> profession: Developer
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className={styles.para}>USEFUL LINKS</h6>
                <p className={styles.paracon}>
                  Login
                  <br />
                  Home
                  <br />
                  Register
                  <br />
                  Read More
                  <br />
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className={styles.para}>CONTACT</h6>
                <p className={styles.paracon}>
                  +977 9828911954
                  <br />
                  Lamatar-8, Lalitpur
                  <br />
                  ahim@gmail.com
                  <br />
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <hr />
        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2022 Copyright: <a className="text-reset fw-bold">AhimshaMudbari</a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
