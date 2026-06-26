import { profileMarquee } from "@/content/homepage";

export function ProfileMarquee() {
  const profiles = [...profileMarquee, ...profileMarquee];

  return (
    <section className="profiles" id="profiles" aria-label="MTM profiles preview">
      <div className="profiles__inner">
        <p className="eyebrow">MTM Profiles</p>
        <h2>Meet people who are preparing with intention.</h2>
        <div className="profiles__track-wrap">
          <div className="profiles__track">
            {profiles.map((profile, index) => (
              <article className={`profile-chip profile-chip--${profile.tone}`} key={`${profile.name}-${index}`}>
                <div className="profile-chip__avatar" aria-hidden>
                  <span>{profile.name.slice(0, 1)}</span>
                </div>
                <div>
                  <strong>
                    {profile.name}, {profile.age}
                  </strong>
                  <span>{profile.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
