import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function BreweryForm() {
    return (

        <div>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Brewery Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Beverage Name"
                        name="name"
                    />
                </div>
                <div class="mb-3">
                    <label for="streetNumber" class="form-label">
                        Street Number
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Street Number"
                        name="streetNumber"
                    />
                </div>
                <div class="mb-3">
                    <label for="streetName" class="form-label">
                        Street Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Street Name"
                        name="streetName"
                    />
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                        name="city"
                    />
                </div>
                <div class="mb-3">
                    <label for="state" class="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="State"
                        name="state"
                    />
                </div>
                <div class="mb-3">
                    <label for="zipCode" class="form-label">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Zip Code"
                        name="zipCode"
                    />
                </div>
                <div class="mb-3">
                    <label for="website" class="form-label">
                        Website
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Website"
                        name="website"
                    />
                </div>
                <button class="btn btn-success">
                    Submit Brewery
                </button>

            </form>
        </div>
    )
}

export default BreweryForm;