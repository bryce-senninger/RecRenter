import React from "react";
import "../postForm/style-post.css";
// import SignUp from "../../pages/signup";
// import { PromiseProvider } from "mongoose";

function PostForm(props) {
  console.log(props);
  return (
    <div id="wrapper">
      <div className="">
        <h1 className="display-4">Post Your Gear for Rent</h1>
        <div id="headText">
          <p>Tell us a bit about your listing</p>
        </div>
        <hr />
        <form
          method="POST"
          action="http://localhost:3001/api/item"
          encType="multipart/form-data"
        >
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01">Post Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="e.g. 'Mountain Bike'"
                value={props.title}
                onChange={props.handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="e.g. 'Salt Lake City'"
                value={props.location}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-2">
              <label htmlFor="exampleInputEmail1">Sub-Category</label>

              <select
                className="form-control"
                name="subcategoryId"
                onChange={props.handleChange}
                id={props.id}
                key={props.id}
              >
                {props.category.subcategories.map(index => {
                  return (
                    <option
                      data-id={index._id}
                      value={index._id}
                      name={props.value}
                      // key={index._id}
                    >
                      {index.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-md-4 mb-2">
              <label htmlFor="exampleInputEmail1">
                Asking Rental Price Per Day
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                placeholder="e.g. 25.00"
                value={props.price}
                onChange={props.handleChange}
              />
            </div>
            <div className="col-md-4 mb-2">
              <label htmlFor="exampleFormControlFile1">
                Upload a Photo to Your Listing
              </label>
              <input
                type="file"
                // className="form-control-file form-control"
                id="imagePath-2"
                name="imagePath"
                // className="form-control-file form-control"
                value={props.imagePath}
                onChange={props.handleChange}
              />
            </div>
            <div className="col-md-12 mb-6">
              <label htmlFor="validationDefault02">Description</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Enter your description here"
                name="description"
                value={props.description}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
        </form>
        <button
          className="btn-1 btn-primary submit"
          id="button-2"
          type="submit"
          onClick={props.handleSubmit}
        >
          Post My Gear
        </button>
      </div>
    </div>
  );
}

export default PostForm;
