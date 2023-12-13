import React from "react";

const NewsItem =(props)=> {
 
    let { title, description, imageUrl, url, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://gumlet.assettype.com/freepressjournal/2023-11/4011975d-a59c-4b9e-b1ca-1b79eb1be7a5/spacecraft_orbiting_planet_earth_global_communications_generated_by_ai__1_.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
