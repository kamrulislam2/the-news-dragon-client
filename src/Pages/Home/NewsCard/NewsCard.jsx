import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;

  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex gap-2 align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="flex-grow-1">
          <p className="m-0">{author?.name}</p>
          <p className="m-0">
            <small>{moment(author?.published_date).format("yyyy-mm-D")}</small>
          </p>
        </div>
        <div className="d-inline-flex gap-2">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.substring(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="d-flex align-items-center gap-2 flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span className="mb-0">{rating?.number}</span>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaEye></FaEye>
          <span className="mb-0">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
