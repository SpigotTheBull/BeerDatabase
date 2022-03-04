import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function BeverageForm() {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Beverage Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Beverage Name"
                        name="name"
                        required 
                    />
                </div>
                <div class="mb-3">
                    <label for="ABV" class="form-label">
                        ABV
                    </label>
                    <input
                        type="number"
                        min="0"
                        max="1"
                        step=".01"
                        class="form-control"
                        placeholder="0.00"
                        name="ABV"
                        required 
                    />
                </div>
                <div class="mb-3">
                    <label for="Brewery" class="form-label">
                        Brewery
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Brewery"
                        name="Category"
                        required 
                    />
                </div>
                <div class="mb-3">
                    <label for="Brewery" class="form-label">
                        Category
                    </label>
                    <br />
                    <small>Tenative logic is to have the backend create categories during the 1:M linking if they don't exist</small>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Category"
                        name="Category"
                        required 
                    />
                </div>
                <input type="submit" value="Send" class="btn btn-success">
                    Submit Beverage
                </input>
            </form>
        </div>
    )
}

export default BeverageForm;