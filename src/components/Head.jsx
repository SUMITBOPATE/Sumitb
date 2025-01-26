
import '../styles/Head.css';

const Head = () => {
    return (
       
        <div className="min-h-screen">



  {/* Main Content */}
  <main className="main-content">
    {/* Hero Section */}
    <div className="hero-section">
      <div>
        <h1 className="hero-title">
          Hi, I&apos;m Sumit Bopate{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="hero-description">
          Software Engineer .
          <br></br> I love building  Products people use .
        </p>
      </div>
      <img
        src="avatar.png"
        alt="Profile"
        className="profile-image"
      />
    </div>
  </main>
</div>

    );
};

export default Head;