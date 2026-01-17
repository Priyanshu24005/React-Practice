const ProfileCard = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h4>{props.role}</h4>
      <p>skills : {props.skills}</p>
    </div>
  );
};

export default ProfileCard;
