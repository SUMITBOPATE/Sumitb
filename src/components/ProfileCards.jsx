


import  '../styles/ProfileCards.css';
import { CodeXml ,MapPin,Mail,Mars,Globe} from 'lucide-react';
export const ProfileCards = () => {
  return (
    <div className="profile-cards">
        <div className="profile-card-right">
      <p>    <CodeXml size={24} className="profile-icon"  />Front End Developer</p>
       <p>  <MapPin  size={24} className="profile-icon" />Nagpur,India</p> 
       <p> <Mail size={24} className="profile-icon" />sumitbopate888@gmail.com</p>
 </div>
 <div className="profile-card-left">
     
      <p> <Mars  size={24} className="profile-icon" />he/him</p> 
      <p><Globe size={24} className="profile-icon" />sumitbopte.com</p> 
 </div>
    </div>
  );
};
