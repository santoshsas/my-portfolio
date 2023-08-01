import "./card.css";
export function Card({ id, name, sprites }) {
  return (
    <div id={id} className="card-container">
      <img src={sprites.front_default} alt={name} />
      <div>{name}</div>
    </div>
  );
}
