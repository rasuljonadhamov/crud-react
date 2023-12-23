import "./Card.css";

function Card({ data, onDelete }) {
  const { id, name, price, status, description } = data;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{price} $</p>
      <h3>{description}</h3>
      <span>{status}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Card;
