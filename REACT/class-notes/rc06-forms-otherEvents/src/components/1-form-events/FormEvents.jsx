import React from "react";

const FormEvents = () => {
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <hr />
        <h2> FORM EVENTS </h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input type="datetime-local" className="form-control" id="date" />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input type="text" className="form-control" id="country" />
        </div>
        <select className="form-select" aria-label="Default select example">
          <option selected="">Countries</option>
          <option value="Türkiye">Turkiye</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
        </select>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="remember" id="remember">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormEvents;
