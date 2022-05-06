//@ts-ignore
import facebookIcon from "./../assets/images/icon-facebook.svg";
//@ts-ignore
import instagramIcon from "./../assets/images/icon-instagram.svg";
//@ts-ignore
import pinterestIcon from "./../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="social-item">
          <img src={facebookIcon} />
        </div>
        <div className="social-item">
          <img src={pinterestIcon} />
        </div>
        <div className="social-item">
          <img src={instagramIcon} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
