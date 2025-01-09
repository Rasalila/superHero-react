
function ListHero(props) {
  return (
    <div className="card">
      <h2 className="card__title">{props.name}</h2>
      <p className="card__text"><b>Вселенная:</b> {props.universe}</p>
      <p className="card__text"><b>Альтер-эго:</b> {props.alterego}</p>
      <p className="card__text"><b>Род деятельности:</b> {props.occupation}</p>
      <p className="card__text"><b>Друзья:</b> {props.friends}</p>
      <p className="card__text"><b>Суперсилы:</b> {props.superpowers}</p>
      <div>
        <img className="card__box-img" src={props.url} alt='{props.name}'></img>
      </div>
      <div className="card__ratings">
        <span data-rating="5">&#9733;</span>
        <span data-rating="4">&#9733;</span>
        <span data-rating="3">&#9733;</span>
        <span data-rating="2">&#9733;</span>
        <span data-rating="1">&#9733;</span>
      </div>
    </div>
  );
}


export default ListHero;
