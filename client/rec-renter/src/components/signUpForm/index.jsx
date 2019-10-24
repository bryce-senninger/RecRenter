import React from "react";
import "../signUpForm/style-form.css";
// import SignUp from "../../pages/signup";
// import { PromiseProvider } from "mongoose";

function SignUpForm(props) {
  return (
    <div id="wrapper">
      <div className="">
        <h1 className="display-4">Rec Renter Sign Up</h1>
        <div id="headText">
          <p>Tell us a bit about your rad self</p>
        </div>
        <hr />
        <form
          method="POST"
          action="http://localhost:3001/api/user/signup"
          // encType="multipart/form-data"
        >
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationDefault01">First Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="First"
                name="firstname"
                value={props.firstname}
                onChange={props.handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label for="validationDefault02">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last"
                name="lastname"
                value={props.lastname}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationDefault03">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
                name="city"
                value={props.city}
                onChange={props.handleChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationDefault04">State</label>
              <select
                type="text"
                className="form-control"
                id="validationDefault04"
                placeholder="State"
                name="state"
                value={props.state}
                onChange={props.handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  Select
                </option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                type="text" className="form-control" id="validationDefault04"
                placeholder="State" required
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationDefault05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                placeholder="Zip"
                name="zip"
                value={props.zip}
                onChange={props.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="email@sample.com"
              name="email"
              value={props.email}
              onChange={props.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="skibum420"
              name="username"
              value={props.username}
              onChange={props.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input
              type="password"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="password"
              name="password"
              value={props.password}
              onChange={props.handleChange}
            />
          </div>
          <form
          // method="POST"
          // action="http://localhost:3001/api/user/signup"
          // enctype="multipart/form-data"
          >
            <div class="form-group">
              <label for="exampleFormControlFile1">
                Upload a Photo to Your Profile
              </label>
              <input
                type="file"
                class="form-control-file"
                id="imagePath"
                name="imagePath"
                value={props.imagePath}
                onChange={props.handleChange}
              />
            </div>
          </form>
        </form>
        <button
          class="btn btn-primary submit"
          type="submit"
          onClick={props.handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
