import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div className="card mt-5 d-flex flex-column mx-auto" style={{ width: "20rem", height: "30rem" }}>
        <div className="d-flex justify-content-center">
          {book.volumeInfo.imageLinks && (
            <img
              loading="lazy"
              src={book.volumeInfo.imageLinks.thumbnail}
              className="card-img-top"
              alt={book.volumeInfo.title}
              id="cardImg"
            />
          )}
        </div>
        <div className="card-body d-flex flex-column align-items-start  justify-content-end">
          <h5 className="card-title ">{book.volumeInfo.title}</h5>
          <div>
            {book.volumeInfo.authors &&
              book.volumeInfo.authors.map((author, idx) => {
                return (
                  <span key={idx} className="text-muted fst-italic me-3">
                    {author}
                  </span>
                );
              })}
          </div>
            <button
            type="button"
            className="btn btn-primary mt-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Details
          </button>








          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {book.volumeInfo.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex flex-row">
                    
                    {book.volumeInfo.imageLinks&& <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                      lodaing="lazy"
                      className="col-4"
                      id="modalImg"
                    />}
                    <div className="ms-3">
                      <h6>Brief Summary</h6>
                      <p>{book.volumeInfo.description}</p>
                      <h6>Page</h6>
                      <p>{book.volumeInfo.pageCount} </p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
