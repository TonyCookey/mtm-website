import type { CSSProperties } from "react";
import { profileMarquee } from "@/content/homepage";

export function ProfileMarquee() {
  const profiles = [...profileMarquee, ...profileMarquee];

  return (
    <section className="profiles" id="profiles" aria-label="MTM profiles preview">
      <div className="profiles__inner">
        <h2>A community of serious Christian singles.</h2>
        <div className="profiles__track-wrap">
          <div className="profiles__track">
            {profiles.map((profile, index) => (
              <article className="profile-chip" key={`${profile.image}-${index}`}>
                <div className="profile-chip__avatar" style={getProfileTileStyle(profile.image, index)} />
              </article>
            ))}
          </div>
        </div>
        <p className="profiles__copy">
          These are fictional AI-generated portraits for preview only. MTM protects member privacy while showing the kind
          of diverse, marriage-minded community the process is built to serve.
        </p>
      </div>
    </section>
  );
}

function getProfileTileStyle(image: string, index: number): CSSProperties {
  const tileIndex = index % profileMarquee.length;
  const col = tileIndex % 4;
  const row = Math.floor(tileIndex / 4);

  return {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${(col / 3) * 100}% ${row * 100}%`
  };
}
