import { useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons';

const Profile = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {setLoaded(true)})

  const cssStyle = { height: 45, width: 45, marginLeft: 2, marginRight: 3 }


  return (
      <div className={`profile-wrapper ${loaded ? 'profile-loaded' : ''}`}>
        <div className="profile">
          <div className="profile-name">Saad Taimoor</div>
          <div className="profile-image"></div>
          <div className="profile-sm">
            <SocialIcon url="https://twitter.com/FeelsXaadMan"  style={cssStyle} fgColor="#CBF3FF" bgColor="#000000" />
            <SocialIcon url="https://www.twitch.tv/feelsxaadman"  style={cssStyle} fgColor="#CBF3FF" bgColor="#000000" />
            <SocialIcon url="https://www.youtube.com/channel/UC8Jm6M2ZR_9LprIxkrw5etg"  style={cssStyle} fgColor="#CBF3FF" bgColor="#000000" />
            <SocialIcon url="https://www.linkedin.com/in/saad-taimoor/"  style={cssStyle} fgColor="#CBF3FF" bgColor="#000000" />
            <SocialIcon url="https://github.com/Saad888"  style={cssStyle} fgColor="#CBF3FF" bgColor="#000000" />
            <SocialIcon url="mailto:saadtaimoor8@gmail.com" style={cssStyle} fgColor="#CBF3FF" bgColor="#000000" />
          </div>
        </div>
      </div>
  )
}

export default Profile;