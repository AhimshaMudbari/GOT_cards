import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from 'mdb-react-ui-kit';
import styles from '../styles/Cards.module.css';

const axios = require('axios');

const Cards = ({ characters }) => {
  // console.log(characters);

  return (
    <div className={styles.mainbox}>
      <div className={styles.boxx}>
        <MDBCard>
          <MDBRipple className="bg-image hover-overlay">
            <MDBCardImage
              src="https://freepngimg.com/thumb/game_of_thrones/91360-art-thrones-of-clarke-poster-game-daenerys.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle></MDBCardTitle>
            <MDBCardText>
              The North is by far the largest of the Seven Kingdoms; it can fit
              the other six inside it. Not that the others care... cold and
              damp, thats how the southerners see the North. But without the
              cold, a man cant appreciate the fire in his hearth.
            </MDBCardText>
            <MDBBtn href="#">Read More...</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className={styles.boxx}>
        <MDBCard>
          <MDBRipple className="bg-image hover-overlay">
            <MDBCardImage
              src="https://freepngimg.com/thumb/game_of_thrones/91360-art-thrones-of-clarke-poster-game-daenerys.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle></MDBCardTitle>
            <MDBCardText>
              The North is by far the largest of the Seven Kingdoms; it can fit
              the other six inside it. Not that the others care... cold and
              damp, thats how the southerners see the North. But without the
              cold, a man cant appreciate the fire in his hearth.
            </MDBCardText>
            <MDBBtn href="#">Read More...</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className={styles.boxx}>
        <MDBCard>
          <MDBRipple className="bg-image hover-overlay">
            <MDBCardImage
              src="https://freepngimg.com/thumb/game_of_thrones/91360-art-thrones-of-clarke-poster-game-daenerys.png"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle></MDBCardTitle>
            <MDBCardText>
              The North is by far the largest of the Seven Kingdoms; it can fit
              the other six inside it. Not that the others care... cold and
              damp, thats how the southerners see the North. But without the
              cold, a man cant appreciate the fire in his hearth.
            </MDBCardText>
            <MDBBtn href="#">Read More...</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};
export async function getStaticProps(content) {
  const res = await axios('http://localhost:3000/api/characters');
  const { data } = res;
  const { characters } = await data;
  console.log(characters);
  return {
    props: { characters },
  };
}
export default Cards;
