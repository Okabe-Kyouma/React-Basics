/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./Card.module.css";
import PropTypes from "prop-types";
export default function Card(props) {
  return (
    <div className={styles.div}>
      <div className={styles.card}>
        <img
          className={styles.imageLink}
          src={props.imageLink}
          alt={props.name}
        ></img>
        <h4>Name: {props.name}</h4>
        <p>Age: {props.age}</p>
        <Button></Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  imageLink: PropTypes.string,
};

Card.defaultProps = {
  name: "guest",
  age: 0,
  imageLink:
    "https://archive.org/download/placeholder-image//placeholder-image.jpg",
};
