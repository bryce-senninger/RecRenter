import React from "react";
import SignUp from "../../pages/signup";

function SignUpForm() {
  return (
    <div id="wrapper">
      <div class="">
        <h1 class="display-4">Rec Renter Sign Up</h1>
        <div id="headText">
          <p>Tell us a bit about your rad self</p>
        </div>
        <hr />
        <form>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault01">First Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="First"
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault02">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault03">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="City"
                required
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault04">State</label>
              <select
                type="text"
                class="form-control"
                id="validationDefault04"
                placeholder="State"
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
                type="text" class="form-control" id="validationDefault04"
                placeholder="State" required
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault05">Zip</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault05"
                placeholder="Zip"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="email@sample.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="username"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="skibum420"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input
              type="password"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="password"
            />
          </div>
          <div class="form-group">
            <label>Upload a photo to your profile</label>
            <input
              type="link"
              class="form-control"
              id="upload"
              placeholder="www.yourimagelink.com"
            />
          </div>
        </form>
        <button class="btn btn-primary submit" type="submit">
          Ready?
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;