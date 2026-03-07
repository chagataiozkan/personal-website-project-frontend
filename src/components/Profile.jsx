export default function Profile() {
  return (
    <section className="profile">
      <div className="container">
        <h2>Profile</h2>
        <div className="profile-left">
          <h3>Profile</h3>
          <div className="profile-left-row">
            <span className="profile-label">Doğum Tarihi</span>
            <span className="profile-value">24.03.1996</span>
          </div>
          <div className="profile-left-row">
            <span className="profile-label">İkamet Şehri</span>
            <span className="profile-value">Ankara</span>
          </div>
          <div className="profile-left-row">
            <span className="profile-label">Eğitim Durumu</span>
            <span className="profile-value">Hacettepe Ünv. Biyoloji Lisans, 2026</span>
          </div>
          <div className="profile-left-row">
            <span className="profile-label">Tercih Ettiği Rol</span>
            <span className="profile-value">Frontend, UI</span>
          </div>
        </div>
        <div className="profile-right">
          <h3>About Me</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
    </section>
  );
}
