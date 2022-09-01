import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function ActivityCardBody(column, col_idx) {
    return (
      <div key={col_idx} className="col">
        {column.map(activity => {
            
            return (
                <div key={activity.id} className="card mb-3 shadow">
                <img src={activity.image_url} className="card-img-top" />
                <div className="card-body">
                    <Link to="detail">
                        <h5 className="card-title">{activity.name}</h5>
                    </Link>
                    {/* <h5 className="card-title">{activity.name}</h5> */}
                    <h6 className="card-subtitle mb-2 text-muted">
                        Rating: {activity.rating} • Price: {activity.price ? activity.price : "N/A"}
                    </h6>
                    <span className="card-text">                  
                        {activity.location.display_address.join(", ")}
                    </span>
                    <div className="card-footer text-center">
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
                </div>
            );
        })}
      </div>
    );
  }

export default ActivityCardBody;