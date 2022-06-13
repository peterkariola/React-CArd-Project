import ProfilePic from "../img/profile-pic.png";

let Info = () => {
  return (
    <div className="info-container">
      <img src={ProfilePic} alt="" className="profile-pic" />
      <h1 className="user-name">Laura Smith</h1>
      <h3 className="user-occupation">Frontend Developer</h3>
      <h4 className="user-website">laurasmith.website</h4>
      <button className="user-email">Email</button>
    </div>
  );
};

export default Info;
