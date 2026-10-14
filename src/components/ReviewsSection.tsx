"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { mentoringReviews } from "@/content/reviews";

const reviewsPerPage = 6;

function FiveStars() {
  return (
    <span className="reviews__stars" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(reviewsPerPage);
  const hasMore = visibleCount < mentoringReviews.featured.length;

  return (
    <section className="section reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="section__inner">
        <Reveal className="reviews__heading">
          <div className="section__header">
            <p className="eyebrow">Mentor To Marry reviews</p>
            <h2 id="reviews-title">Growing in wisdom. Preparing for marriage.</h2>
            <p>In their own words, here is how members are growing through Mentor To Marry.</p>
          </div>
          <div className="reviews__rating">
            <span className="reviews__score">{mentoringReviews.rating}<span> / 5</span></span>
            <FiveStars />
            <span className="reviews__rating-caption">{mentoringReviews.fiveStarRatings} five-star ratings</span>
          </div>
        </Reveal>

        <div className="reviews__grid" id="reviews-list">
          {mentoringReviews.featured.slice(0, visibleCount).map((review, index) => (
            <Reveal className="review-card" as="figure" delay={(index % 3) * 0.06} key={`${review.name}-${review.country}`}>
              <FiveStars />
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>
                <span className="review-card__initial" aria-hidden="true">{review.name[0]}</span>
                <span>
                  <strong>{review.name}</strong>
                  <span className="review-card__credit">{review.country}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="reviews__footer">
          <button
            className="button button--light reviews__more"
            type="button"
            aria-controls="reviews-list"
            aria-expanded={visibleCount > reviewsPerPage}
            onClick={() => setVisibleCount(hasMore ? Math.min(visibleCount + reviewsPerPage, mentoringReviews.featured.length) : reviewsPerPage)}
          >
            {hasMore ? "See more reviews" : "Show fewer reviews"}
            {hasMore ? <ChevronDown size={17} aria-hidden="true" /> : <ChevronUp size={17} aria-hidden="true" />}
          </button>
          <span className="reviews__announcement" role="status" aria-live="polite" aria-atomic="true">
            Showing {visibleCount} Mentor To Marry reviews.
          </span>
        </div>
      </div>
    </section>
  );
}
