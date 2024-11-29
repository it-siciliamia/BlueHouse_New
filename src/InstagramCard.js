import "./css/InstagramCard.css";
function InstagramCard({ path }) {
  return (
    <div className="instagramCard">
      <figure>
        <img src={path} alt="Instagram Card" />
      </figure>
    </div>
  );
}

export default InstagramCard;
