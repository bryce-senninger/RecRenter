import React from "react";
import "../postForm/style-post.css";
// import SignUp from "../../pages/signup";
// import { PromiseProvider } from "mongoose";

function PostForm(props) {
  return (
    <div id="wrapper">
      <div className="">
        <h1 className="display-4">Post Your Gear for Rent</h1>
        <div id="headText">
          <p>Tell us a bit about yourself and your listing</p>
        </div>
        <hr />
        <form
          method="POST"
          //   action="http://localhost:3001/api/user/signup"
          // encType="multipart/form-data"
        >
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01">Post Title</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="e.g. 'Mountain Bike'"
                name="posttitle"
                value={props.postTitle}
                onChange={props.handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="e.g. 'Salt Lake City'"
                name="location"
                value={props.location}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-2">
              <label htmlFor="exampleInputEmail1">Sub-Category</label>
              <select className="form-control">
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </select>
            </div>
            <div className="col-md-4 mb-2">
              <label htmlFor="exampleInputEmail1">
                Asking Rental Price Per Day
              </label>
              <input
                type="price"
                className="form-control"
                id="price"
                placeholder="e.g. 25.00"
                name="email"
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
                id="imagePath"
                name="imagePath"
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
