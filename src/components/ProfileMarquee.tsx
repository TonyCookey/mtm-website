import Image from "next/image";
import { profileMarquee } from "@/content/homepage";

export function ProfileMarquee() {
  const profiles = [...profileMarquee, ...profileMarquee];

  return (
    <section className="profiles" id="profiles" aria-label="MTM profiles preview">
      <div className="profiles__inner">
        <h2>Why Mentor To Marry?</h2>
        <div className="profiles__track-wrap">
          <div className="profiles__track">
            {profiles.map((profile, index) => (
              <article className="profile-chip" key={`${profile.name}-${index}`}>
                <div className="profile-chip__avatar">
                  <Image src={profile.image} alt="" fill sizes="150px" />
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
        <p className="profiles__copy">
          It is a quieter way to prepare, meet, and discern: human enough for real connection,
          structured enough for people who are serious about marriage.
        </p>
      </div>
    </section>
  );
}
