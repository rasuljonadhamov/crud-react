import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import InputForm from "./components/Form/Form";

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchData = () => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (submitted && form.name && form.price) {
      fetch("https://auth-rg69.onrender.com/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        // .then((res) => res.json())
        .then((json) => {
          console.log(json, "skj");
          setForm([...data, json]);
          setForm({});
          setSubmitted(false);
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
          fetchData();
        })
        .catch((err) => console.log("Error while submitting data", err));
    }
  }, [submitted, form]);

  const handleDelete = (id) => {
    fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => console.log("Error deleting item", err));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      {showSuccessMessage && (
        <p>Form submitted successfully! Form values cleared.</p>
      )}
      <InputForm
        formValue={form}
        setFormValue={setForm}
        onSubmit={handleSubmit}
      />
      <div className="card-wrapper">
        {data.length > 0 ? (
          data.map((item) => (
            <Card data={item} key={item.id} onDelete={handleDelete} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
