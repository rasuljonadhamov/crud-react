import { useRef } from "react";
import "./Form.css";

function InputForm({ formValue, setFormValue, onSubmit }) {
  let nameRef = useRef("");
  let priceRef = useRef("");
  let descRef = useRef("");
  let statusRef = useRef("");

  function validate() {
    if (
      !nameRef.current.value ||
      !priceRef.current.value ||
      !descRef.current.value
    ) {
      alert("Please fill in all fields before submitting.");
    }

    return true;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setFormValue({
      name: nameRef.current.value,
      price: priceRef.current.value,
      status: statusRef.current.value,
      description: descRef.current.value,
    });

    onSubmit(); // Invoke onSubmit from props
    console.log("Submitted");
  };

  return (
    <div className="input-form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" ref={priceRef} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" ref={descRef}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="isActive">Status:</label>
          <select id="isActive" ref={statusRef}>
            <option value="active" className="active-option">
              Active
            </option>
            <option value="inactive" className="inactive-option">
              Inactive
            </option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputForm;
