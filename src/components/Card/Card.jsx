import React, { useState } from "react";
import "./Card.css";

function Card({ data, onDelete, onUpdate }) {
  const { id, name, price, status, description } = data;
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({ ...data });

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    onUpdate(updatedData);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setUpdatedData({ ...data }); // Reset to original data if canceling edit
  };

  return (
    <div className="card">
      <div className="card-content">
        {editMode ? (
          <div className="edit-mode">
            <input
              type="text"
              name="name"
              value={updatedData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="number"
              name="price"
              value={updatedData.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            <input
              type="text"
              name="description"
              value={updatedData.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            <input
              type="text"
              name="status"
              value={updatedData.status}
              onChange={handleInputChange}
              placeholder="Status"
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={toggleEditMode}>Cancel</button>
          </div>
        ) : (
          <div className="display-mode">
            <h2>{name}</h2>
            <p>{price} $</p>
            <h3>{description}</h3>
            <span>{status}</span>
            <div className="button-group">
              <button onClick={handleDelete}>Delete</button>
              <button onClick={toggleEditMode}>Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
