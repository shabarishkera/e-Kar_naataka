import React from 'react'

export default function Profile() {
  return (
    <div>
     <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Profile Page</h3>
            </div>
            <div className="card-body">
              <img
                src="https://placekitten.com/200/200"
                alt="Profile"
                className="img-fluid rounded-circle mb-3"
              />
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Email:</strong> john.doe@example.com
                </li>
                <li className="list-group-item">
                  <strong>Location:</strong> City, Country
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
