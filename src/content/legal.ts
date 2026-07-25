export type LegalBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; style: "bulleted" | "numbered"; items: string[] }
  | { type: "table"; rows: string[][] };

export type LegalDocument = {
  title: string;
  slug: string;
  description: string;
  featured: boolean;
  blocks: LegalBlock[];
};

export const legalDocuments: LegalDocument[] = [
  {
    "title": "Terms of Use",
    "slug": "terms-of-use",
    "description": "These Terms of Use govern access to and use of Mentor to Marry, a global interdenominational Christian relationship, dating, marriage education, community and matching platform operated...",
    "featured": true,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "These Terms of Use govern access to and use of Mentor to Marry, a global interdenominational Christian relationship, dating, marriage education, community and matching platform operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "By accessing, registering for, joining, subscribing to, participating in or using Mentor to Marry, you agree to be bound by these Terms of Use and by all related platform policies, including the:"
      },
      {
        "type": "paragraph",
        "text": "Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "Platform Values & Community Principles;"
      },
      {
        "type": "paragraph",
        "text": "Community Guidelines & Code of Conduct;"
      },
      {
        "type": "paragraph",
        "text": "Membership & Subscription Terms;"
      },
      {
        "type": "paragraph",
        "text": "Profile Standards Policy;"
      },
      {
        "type": "paragraph",
        "text": "Matching Platform Terms;"
      },
      {
        "type": "paragraph",
        "text": "Messaging & Communications Policy;"
      },
      {
        "type": "paragraph",
        "text": "User Verification Policy;"
      },
      {
        "type": "paragraph",
        "text": "Safeguarding & Community Safety Policy;"
      },
      {
        "type": "paragraph",
        "text": "Reporting & Complaints Policy;"
      },
      {
        "type": "paragraph",
        "text": "Account Suspension & Enforcement Policy;"
      },
      {
        "type": "paragraph",
        "text": "Privacy Policy;"
      },
      {
        "type": "paragraph",
        "text": "Cookie Policy; and"
      },
      {
        "type": "paragraph",
        "text": "any other policy, notice or guideline published by Mentor to Marry from time to time."
      },
      {
        "type": "paragraph",
        "text": "If you do not agree to these Terms of Use, you must not create an account, purchase a membership, access paid services or use the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. About Mentor to Marry",
        "id": "about-mentor-to-marry"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a Christian platform designed to support Christians in preparing for healthy relationships, wise courtship and Christ-centred marriage."
      },
      {
        "type": "paragraph",
        "text": "The platform may provide, among other things:"
      },
      {
        "type": "paragraph",
        "text": "free website content;"
      },
      {
        "type": "paragraph",
        "text": "free community access;"
      },
      {
        "type": "paragraph",
        "text": "teaching videos;"
      },
      {
        "type": "paragraph",
        "text": "paid membership communities;"
      },
      {
        "type": "paragraph",
        "text": "self-paced relationship courses;"
      },
      {
        "type": "paragraph",
        "text": "mentoring and educational resources;"
      },
      {
        "type": "paragraph",
        "text": "live sessions;"
      },
      {
        "type": "paragraph",
        "text": "member profiles;"
      },
      {
        "type": "paragraph",
        "text": "location-based discovery;"
      },
      {
        "type": "paragraph",
        "text": "profile likes;"
      },
      {
        "type": "paragraph",
        "text": "matching and recommendation features;"
      },
      {
        "type": "paragraph",
        "text": "messaging features depending on membership tier;"
      },
      {
        "type": "paragraph",
        "text": "course completion badges;"
      },
      {
        "type": "paragraph",
        "text": "verification badges;"
      },
      {
        "type": "paragraph",
        "text": "app-based services in the future; and"
      },
      {
        "type": "paragraph",
        "text": "other relationship education, community or matching services."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not a general social media platform, secular dating app, counselling service, psychotherapy service, legal advisory service or financial advisory service."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is operated on a non-profit basis by Love, Dating and Marriage Ministries. Use of the platform does not create any ownership interest, membership interest in the governing body, partnership, agency relationship, employment relationship, trustee relationship, or entitlement to participate in the governance, assets or decision-making of Love, Dating and Marriage Ministries."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Christian Identity and Platform Purpose",
        "id": "christian-identity-platform-purpose"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is founded upon Christian beliefs and values."
      },
      {
        "type": "paragraph",
        "text": "The platform exists to serve Christians seeking Christ-centred relationships and marriage. Its teaching, community standards and matching framework are shaped by its Statement of Faith and Platform Values & Community Principles."
      },
      {
        "type": "paragraph",
        "text": "Users must respect the Christian identity, beliefs, values and marriage-focused purpose of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Nothing in these Terms prevents Mentor to Marry from maintaining its Christian identity, Statement of Faith, membership criteria, community standards or biblical understanding of relationships and marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Non-Profit Purpose",
        "id": "non-profit-purpose"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is operated by Love, Dating and Marriage Ministries as part of its non-profit mission to support Christian relationship education, community, mentoring and marriage preparation."
      },
      {
        "type": "paragraph",
        "text": "Any payments, subscriptions, membership fees, course fees or other charges are intended to support the operation, development, administration and sustainability of the platform and its related ministry activities."
      },
      {
        "type": "paragraph",
        "text": "Nothing in these Terms creates:"
      },
      {
        "type": "paragraph",
        "text": "any ownership interest in Mentor to Marry;"
      },
      {
        "type": "paragraph",
        "text": "any ownership interest in Love, Dating and Marriage Ministries;"
      },
      {
        "type": "paragraph",
        "text": "any right to participate in organisational governance;"
      },
      {
        "type": "paragraph",
        "text": "any partnership or agency relationship;"
      },
      {
        "type": "paragraph",
        "text": "any employment relationship;"
      },
      {
        "type": "paragraph",
        "text": "any trustee or leadership role; or"
      },
      {
        "type": "paragraph",
        "text": "any entitlement to organisational assets, income or decision-making."
      },
      {
        "type": "paragraph",
        "text": "Users participate in Mentor to Marry as platform users, members, learners or subscribers only, according to the access rights attached to their account or membership tier."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Eligibility",
        "id": "eligibility"
      },
      {
        "type": "paragraph",
        "text": "To create an account and use Mentor to Marry, you must:"
      },
      {
        "type": "paragraph",
        "text": "be at least 25 years old;"
      },
      {
        "type": "paragraph",
        "text": "identify as a Christian;"
      },
      {
        "type": "paragraph",
        "text": "agree to respect the Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "agree to comply with these Terms of Use;"
      },
      {
        "type": "paragraph",
        "text": "agree to comply with the Community Guidelines & Code of Conduct;"
      },
      {
        "type": "paragraph",
        "text": "provide accurate registration and profile information;"
      },
      {
        "type": "paragraph",
        "text": "use the platform honestly, respectfully and in good faith; and"
      },
      {
        "type": "paragraph",
        "text": "not be prohibited from using the platform under any applicable law or previous enforcement decision."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may refuse registration, suspend access or terminate an account where it reasonably believes that a person does not meet the platform’s eligibility requirements."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Account Registration",
        "id": "account-registration"
      },
      {
        "type": "paragraph",
        "text": "To use certain parts of the platform, you may be required to create an account."
      },
      {
        "type": "paragraph",
        "text": "When creating an account, you agree to:"
      },
      {
        "type": "paragraph",
        "text": "provide accurate, complete and current information;"
      },
      {
        "type": "paragraph",
        "text": "keep your login details secure;"
      },
      {
        "type": "paragraph",
        "text": "not share your account with another person;"
      },
      {
        "type": "paragraph",
        "text": "not create an account for another person without authorisation;"
      },
      {
        "type": "paragraph",
        "text": "not create multiple accounts to evade restrictions;"
      },
      {
        "type": "paragraph",
        "text": "keep your profile information up to date; and"
      },
      {
        "type": "paragraph",
        "text": "notify Mentor to Marry if you believe your account has been compromised."
      },
      {
        "type": "paragraph",
        "text": "You are responsible for activity carried out through your account, except where such activity results from a platform issue or unauthorised access that is not caused by your own failure to take reasonable care."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Membership and Subscriptions",
        "id": "membership-subscriptions"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may offer free access, paid memberships, paid communities, courses, subscriptions, live sessions and tiered membership benefits."
      },
      {
        "type": "paragraph",
        "text": "Membership tiers may include Regular, Premium and VIP."
      },
      {
        "type": "paragraph",
        "text": "The benefits, access rights, pricing, renewal terms, message limits, profile visibility, matching features, live session access and other benefits attached to each tier may be set out separately in the Membership & Subscription Terms or Membership Benefits Schedule."
      },
      {
        "type": "paragraph",
        "text": "Membership benefits may vary over time. Mentor to Marry may update, amend, withdraw or introduce membership features, provided this is done in accordance with applicable law and any applicable subscription terms."
      },
      {
        "type": "paragraph",
        "text": "Where memberships renew automatically, this will be stated in the Membership & Subscription Terms and/or at the point of purchase."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Electronic Communications",
        "id": "electronic-communications"
      },
      {
        "type": "paragraph",
        "text": "By creating an account, purchasing a membership, enrolling on a course, subscribing to services or otherwise using Mentor to Marry, users agree that Mentor to Marry may communicate with them electronically."
      },
      {
        "type": "paragraph",
        "text": "Electronic communications may include:"
      },
      {
        "type": "paragraph",
        "text": "account notifications;"
      },
      {
        "type": "paragraph",
        "text": "membership confirmations;"
      },
      {
        "type": "paragraph",
        "text": "subscription notices;"
      },
      {
        "type": "paragraph",
        "text": "billing and payment information;"
      },
      {
        "type": "paragraph",
        "text": "renewal reminders;"
      },
      {
        "type": "paragraph",
        "text": "course information;"
      },
      {
        "type": "paragraph",
        "text": "community updates;"
      },
      {
        "type": "paragraph",
        "text": "service announcements;"
      },
      {
        "type": "paragraph",
        "text": "moderation notices;"
      },
      {
        "type": "paragraph",
        "text": "safety notices;"
      },
      {
        "type": "paragraph",
        "text": "complaint responses;"
      },
      {
        "type": "paragraph",
        "text": "policy updates;"
      },
      {
        "type": "paragraph",
        "text": "verification requests;"
      },
      {
        "type": "paragraph",
        "text": "password or security notices; and"
      },
      {
        "type": "paragraph",
        "text": "other communications relating to use of the platform."
      },
      {
        "type": "paragraph",
        "text": "Users are responsible for ensuring that their contact details are accurate and up to date. Communications sent to the email address, phone number, account inbox or other contact method provided by the user may be treated as having been sent to that user."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Payments",
        "id": "payments"
      },
      {
        "type": "paragraph",
        "text": "Where paid services are offered, you agree to pay all applicable fees clearly displayed at the time of purchase."
      },
      {
        "type": "paragraph",
        "text": "Payments may be processed in multiple currencies and may be handled through third-party payment processors."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not responsible for bank charges, currency conversion charges, card issuer charges or payment provider fees that may be imposed by your financial institution or payment provider."
      },
      {
        "type": "paragraph",
        "text": "Access to paid services may be suspended, restricted or cancelled if payment fails or if a subscription is cancelled, reversed, disputed or not renewed."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Refunds and Cancellations",
        "id": "refunds-cancellations"
      },
      {
        "type": "paragraph",
        "text": "Refunds, cancellations, cooling-off rights, subscription cancellation processes and access to digital content will be governed by the Refund & Cancellation Policy and Membership & Subscription Terms."
      },
      {
        "type": "paragraph",
        "text": "Unless otherwise stated, purchasing access to digital content, courses, membership communities or immediate-access services may affect refund availability once access has been granted."
      },
      {
        "type": "paragraph",
        "text": "Users should review the Refund & Cancellation Policy before purchasing any paid membership or course."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Course and Educational Content",
        "id": "course-educational-content"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may provide Christian relationship education, teaching, mentoring content, self-paced courses, videos, live sessions, community discussions and other educational resources."
      },
      {
        "type": "paragraph",
        "text": "Such content is provided for educational, mentoring and discipleship purposes only."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not provide counselling, psychotherapy, mental health treatment, legal advice, financial advice, medical advice, professional relationship therapy or guaranteed relationship outcomes."
      },
      {
        "type": "paragraph",
        "text": "Users remain responsible for their personal decisions, relationships, conduct and wellbeing."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Third-Party Platforms and Services",
        "id": "third-party-platforms-services"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use or integrate with third-party platforms, including course hosting, payment processing, community tools, email systems, video hosting, analytics, app services or other providers."
      },
      {
        "type": "paragraph",
        "text": "Where a third-party service is used, you may also be subject to that third party’s own terms, policies and privacy notices."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not responsible for the acts, omissions, failures, technical issues, data practices or service interruptions of third-party platforms, except where responsibility cannot lawfully be excluded."
      },
      {
        "type": "paragraph",
        "text": "Course and mentoring services may be delivered through third-party learning platforms, including Selfany or any replacement platform used from time to time."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Member Profiles",
        "id": "member-profiles"
      },
      {
        "type": "paragraph",
        "text": "Where profile features are available, members may be required to provide profile information, including first name, age, sex at birth, marital status, country, city, church or regular place of Christian fellowship, profession, profile photograph, personal introduction or “About Me” information, and other information required or permitted by the platform."
      },
      {
        "type": "paragraph",
        "text": "Members must ensure that profile information is truthful, accurate, respectful and not misleading."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may remove, restrict or require amendment of profile content that breaches platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Marital Status",
        "id": "marital-status"
      },
      {
        "type": "paragraph",
        "text": "For participation in matching services, members must accurately disclose their marital status."
      },
      {
        "type": "paragraph",
        "text": "Permitted marital status categories are Never Married, Divorced or Widowed."
      },
      {
        "type": "paragraph",
        "text": "Members must not use the matching service if they are already married or if they are misrepresenting their relationship status."
      },
      {
        "type": "paragraph",
        "text": "Misrepresentation of marital status may result in account suspension, termination or permanent removal from the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Matching and Recommendations",
        "id": "matching-recommendations"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may provide matching, profile discovery, likes, recommendations, location-based discovery and algorithmic suggestion features."
      },
      {
        "type": "paragraph",
        "text": "These features are designed to help members discover and connect with other members who may share similar values, preferences or relationship goals."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee profile views, likes, matches, responses, messages, compatibility, courtship, engagement, marriage, long-term relationship success or any particular personal outcome."
      },
      {
        "type": "paragraph",
        "text": "A match does not create any obligation to communicate, continue communication, meet, enter courtship or pursue a relationship."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own discernment, communication, choices and relationship decisions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Relationship Disclaimer",
        "id": "relationship-disclaimer"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry facilitates Christian relationship education, mentoring, community, profile discovery, matching tools, recommendations and opportunities for connection."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not endorse individual members, approve individual members as suitable partners, verify compatibility between members, assess whether any person is suitable for marriage, guarantee the character, honesty, intentions, spiritual maturity or relationship readiness of any member, guarantee that any match will be appropriate, safe, successful or marriage-oriented, provide relationship approval, pastoral endorsement or marriage endorsement, or replace personal discernment, wise counsel, prayer, pastoral guidance or family support."
      },
      {
        "type": "paragraph",
        "text": "Members remain solely responsible for evaluating potential relationships, exercising wisdom, making personal decisions and determining whether to continue communication, enter courtship, meet offline, become engaged or marry."
      },
      {
        "type": "paragraph",
        "text": "A match, message, recommendation, profile view, like, badge or tier status should not be treated as confirmation that a member is suitable for a relationship or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Messaging and Communication",
        "id": "messaging-communication"
      },
      {
        "type": "paragraph",
        "text": "Messaging features may be limited by membership tier, course completion, verification status or other platform rules."
      },
      {
        "type": "paragraph",
        "text": "Members must use messaging respectfully and in accordance with the Community Guidelines & Code of Conduct and Messaging & Communications Policy."
      },
      {
        "type": "paragraph",
        "text": "Members must not send messages that are abusive, threatening, sexually explicit, harassing, manipulative, coercive, fraudulent, exploitative, misleading, spam-like, financially exploitative or inconsistent with the Christian values and purpose of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "If a member asks not to be contacted, that request must be respected immediately."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry shall not be responsible for private conversations, emotional commitments, promises, representations or relationship decisions made between members, whether those communications occur through the platform, outside the platform, by telephone, by messaging apps, on social media or in person."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Verification and Badges",
        "id": "verification-badges"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use verification processes and badges to indicate particular statuses, including email verification, phone verification, identity verification, app-based verification, course completion, membership tier, length of membership or other platform-recognised statuses."
      },
      {
        "type": "paragraph",
        "text": "A verification badge does not guarantee that all information supplied by a member is true, complete or current."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for exercising wisdom, caution and discernment in their communications and relationships."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may remove or amend badges where it believes they were issued in error, obtained dishonestly, are no longer accurate, or should be withdrawn for safety or policy reasons."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Community Participation",
        "id": "community-participation"
      },
      {
        "type": "paragraph",
        "text": "Members may participate in communities, groups, discussions, comments, learning spaces, events, live sessions or other interactive features."
      },
      {
        "type": "paragraph",
        "text": "Members must participate respectfully and must not harass, bully, intimidate, post abusive content, share inappropriate content, disrupt sessions, misuse teaching spaces, promote unrelated businesses, solicit money or gifts, exploit other members, create denominational hostility or act inconsistently with platform values."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may moderate, restrict or remove community content in accordance with its policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Prohibited Conduct",
        "id": "prohibited-conduct"
      },
      {
        "type": "paragraph",
        "text": "Users must not use Mentor to Marry to create fake accounts, impersonate another person, misrepresent identity, age, sex at birth, marital status, church involvement or relationship intentions, catfish or deceive other members, harass, bully, threaten or abuse others, send sexually explicit messages, share or request explicit images, distribute pornography, exploit others emotionally, spiritually, financially or sexually, request money, gifts, loans or financial support from members, promote scams, fraud or investment schemes, engage in romance scams, manipulate or coerce other members, evade suspension or bans, interfere with platform security, scrape, copy or misuse member information, upload malicious code, use bots or automated systems without permission, infringe intellectual property rights, breach privacy rights, misuse confidential information, engage in unlawful activity, or act in any way that undermines the safety, trust, integrity or Christian purpose of the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Safety and Safeguarding",
        "id": "safety-safeguarding"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry seeks to provide a safe and respectful environment, but it cannot guarantee that all users will behave appropriately."
      },
      {
        "type": "paragraph",
        "text": "Members are responsible for exercising caution and wisdom in online and offline interactions."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take immediate protective action where it reasonably believes that a member may pose a risk to another member, the community or themselves."
      },
      {
        "type": "paragraph",
        "text": "Protective action may include restricting access, limiting messaging, removing content, suspending an account, terminating membership, initiating safeguarding procedures, conducting an enhanced review or referring concerns to appropriate authorities where required by law."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not supervise private offline meetings between members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Reporting Concerns",
        "id": "reporting-concerns"
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to report concerns promptly, including harassment, bullying, fake profiles, catfishing, fraud, suspicious financial requests, inappropriate messages, repeated unwanted contact, abusive behaviour, identity concerns, safety concerns, misuse of the platform or breaches of platform policies."
      },
      {
        "type": "paragraph",
        "text": "Reports should be submitted through the platform’s reporting tools or other approved reporting channels."
      },
      {
        "type": "paragraph",
        "text": "Members must not submit false, malicious or misleading reports."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Moderation and Enforcement",
        "id": "moderation-enforcement"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may moderate content, profiles, messages, reports, member activity and platform participation."
      },
      {
        "type": "paragraph",
        "text": "Moderation or enforcement action may include reminders, warnings, content removal, profile amendment requests, feature restrictions, messaging restrictions, temporary suspension, permanent suspension, account termination, membership cancellation, removal from communities, prevention of re-registration or other appropriate action."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take action without prior warning where it considers that immediate action is necessary to protect members, the community, platform integrity or legal compliance."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Investigations",
        "id": "investigations"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may investigate alleged breaches of these Terms or platform policies."
      },
      {
        "type": "paragraph",
        "text": "Members must cooperate honestly and in good faith with reasonable investigations."
      },
      {
        "type": "paragraph",
        "text": "Members must not provide false or misleading information, conceal relevant evidence, destroy evidence, interfere with investigations, retaliate against reporters or witnesses, encourage others to provide false information or attempt to obstruct moderation processes."
      },
      {
        "type": "paragraph",
        "text": "Failure to cooperate may itself constitute a breach of these Terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Appeals",
        "id": "appeals"
      },
      {
        "type": "paragraph",
        "text": "Where applicable, members may request a review of certain moderation or enforcement decisions in accordance with the Account Suspension & Enforcement Policy or Appeals Policy."
      },
      {
        "type": "paragraph",
        "text": "Submitting an appeal does not automatically restore access, reinstate membership or reverse a moderation decision."
      },
      {
        "type": "paragraph",
        "text": "Appeals must be submitted respectfully, honestly and in good faith."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Off-Platform Conduct",
        "id": "off-platform-conduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take action in relation to conduct occurring outside the platform where that conduct affects member safety, concerns another member, creates safeguarding concerns, involves harassment, abuse, fraud, exploitation or coercion, undermines community trust, creates legal or reputational risk or is inconsistent with these Terms or platform policies."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not required to investigate every private or off-platform dispute but reserves the right to act where the safety or integrity of the community may be affected."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Intellectual Property",
        "id": "intellectual-property"
      },
      {
        "type": "paragraph",
        "text": "All platform content, branding, course materials, teaching materials, videos, written resources, logos, graphics, designs, documents, templates, policies, software, platform features and related materials are owned by or licensed to Love, Dating and Marriage Ministries or its relevant licensors, unless otherwise stated."
      },
      {
        "type": "paragraph",
        "text": "Users must not copy, reproduce, distribute, modify, sell, publish, share, upload elsewhere, create derivative works from, or commercially exploit Mentor to Marry content without written permission."
      },
      {
        "type": "paragraph",
        "text": "Membership or course access does not transfer ownership of any intellectual property rights."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. User Content",
        "id": "user-content"
      },
      {
        "type": "paragraph",
        "text": "Users may submit content such as profile information, photographs, comments, messages, discussion posts, responses, feedback or other materials."
      },
      {
        "type": "paragraph",
        "text": "By submitting content, users confirm that they have the right to submit it and that it does not breach these Terms or any applicable law."
      },
      {
        "type": "paragraph",
        "text": "Users retain ownership of their own content, but grant Mentor to Marry a licence to host, display, process, moderate, use, store and make that content available as necessary to operate the platform and provide its services."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may remove user content that breaches these Terms or platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Privacy and Data Protection",
        "id": "privacy-data-protection"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will process personal data in accordance with its Privacy Policy and applicable data protection laws."
      },
      {
        "type": "paragraph",
        "text": "The Privacy Policy will explain how personal data is collected, used, stored, shared, transferred and protected."
      },
      {
        "type": "paragraph",
        "text": "By using the platform, users acknowledge that Mentor to Marry may process personal data for purposes including account management, membership administration, course access, profile features, matching, messaging, safety, moderation, reporting, fraud prevention, compliance and platform improvement."
      },
      {
        "type": "paragraph",
        "text": "Users should read the Privacy Policy carefully before using the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Cookies and Similar Technologies",
        "id": "cookies-similar-technologies"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use cookies or similar technologies for website functionality, account access, analytics, security, preferences, marketing or other purposes described in the Cookie Policy."
      },
      {
        "type": "paragraph",
        "text": "Users should review the Cookie Policy for further information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Availability of the Platform",
        "id": "availability-of-the-platform"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry aims to provide a reliable platform but does not guarantee uninterrupted, error-free or continuous availability."
      },
      {
        "type": "paragraph",
        "text": "Access may be interrupted, restricted or suspended for reasons including maintenance, updates, security issues, technical faults, third-party service failures, payment issues, misuse of the platform, legal or regulatory requirements or circumstances beyond reasonable control."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not responsible for temporary unavailability of the platform where reasonable measures have been taken."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "32. Changes to Services",
        "id": "changes-to-services"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update, modify, improve, replace, suspend or discontinue parts of the platform or its services from time to time, including membership tiers, course access, matching features, messaging access, badges, community features, app functionality, pricing, content, eligibility processes or platform rules."
      },
      {
        "type": "paragraph",
        "text": "Where changes materially affect paid membership rights, Mentor to Marry will act in accordance with the applicable Membership & Subscription Terms and any applicable legal requirements."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "33. Disclaimers",
        "id": "disclaimers"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry provides relationship education, mentoring resources, community features, matching tools and opportunities for connection."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee that members will find a match, receive messages, form a relationship, enter courtship, become engaged, marry, have a successful relationship, that user-provided information will always be accurate, that all profiles will be genuine, that every inappropriate user will be detected or that online or offline interactions will be risk-free."
      },
      {
        "type": "paragraph",
        "text": "Users are responsible for exercising wisdom, prayerful discernment, caution and personal responsibility."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "34. Limitation of Liability",
        "id": "limitation-of-liability"
      },
      {
        "type": "paragraph",
        "text": "To the fullest extent permitted by law, Mentor to Marry and Love, Dating and Marriage Ministries shall not be liable for losses, claims, damages, liabilities, costs or expenses arising from relationship decisions made by users, interactions between members whether online or offline, private communications between members, offline meetings arranged by users, unsuccessful matches, lack of matches, lack of responses, personal disappointment, emotional distress arising from user interactions, conduct of other members, false or misleading information provided by users, reliance on profile information supplied by other users, assumptions made about another member’s character, intentions, faith, suitability or relationship readiness, third-party platform failures, payment provider failures, course hosting provider failures, unauthorised access caused by a user’s failure to protect login details, service interruptions, loss of data caused by user action or third-party systems, indirect loss, consequential loss, loss of opportunity, loss of goodwill, loss of expected benefit or loss arising from misuse of the platform."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not exclude or limit liability where such liability cannot lawfully be excluded or limited. Nothing in these Terms affects any rights that cannot be excluded under applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "35. Indemnity",
        "id": "indemnity"
      },
      {
        "type": "paragraph",
        "text": "Users agree to be responsible for losses, claims, damages, liabilities, costs or expenses arising from breach of these Terms, breach of platform policies, misuse of the platform, infringement of intellectual property rights, unlawful activity, fraudulent conduct, harassment, abuse or exploitation of another user, false or misleading profile information or violation of another person’s rights."
      },
      {
        "type": "paragraph",
        "text": "This clause applies to the extent permitted by applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "36. Termination by User",
        "id": "termination-by-user"
      },
      {
        "type": "paragraph",
        "text": "A user may stop using Mentor to Marry at any time."
      },
      {
        "type": "paragraph",
        "text": "Account deletion, membership cancellation and subscription cancellation may be subject to the relevant Membership & Subscription Terms, Refund & Cancellation Policy and Privacy Policy."
      },
      {
        "type": "paragraph",
        "text": "Deleting an account may not automatically remove all information where retention is necessary for legal, safety, fraud prevention, safeguarding, complaint handling or legitimate operational purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "37. Termination by Mentor to Marry",
        "id": "termination-by-mentor-to-marry"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may suspend, restrict or terminate access where it reasonably believes that a user has breached these Terms or platform policies, provided false information, acted dishonestly, misused the platform, created safety concerns, harassed or exploited another person, attempted to evade enforcement, failed to pay applicable fees, engaged in unlawful conduct or acted inconsistently with the Christian identity, mission or values of the platform."
      },
      {
        "type": "paragraph",
        "text": "Termination may result in loss of access to profile features, community areas, courses, messages, matches, subscriptions or other platform services. Refunds, if any, will be addressed in accordance with the Refund & Cancellation Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "38. Force Majeure",
        "id": "force-majeure"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry shall not be responsible for any delay, disruption, failure, suspension, unavailability or inability to perform any obligation under these Terms where this is caused by circumstances beyond its reasonable control."
      },
      {
        "type": "paragraph",
        "text": "Such circumstances may include natural disasters, fire, flood, storm or extreme weather, epidemic, pandemic or public health emergency, war, terrorism, civil unrest or public disorder, government action, restriction or regulation, court orders or legal restrictions, internet outages, telecommunications failures, power failures, cyber incidents, platform security incidents, third-party service failures, payment provider failures, hosting provider failures, app store or technology provider restrictions, strikes or labour disruption, or any other event beyond reasonable control."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will take reasonable steps where appropriate to restore or continue services, but does not guarantee uninterrupted availability of the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "39. Severability",
        "id": "severability"
      },
      {
        "type": "paragraph",
        "text": "If any provision of these Terms is found by a court, regulator or other competent authority to be unlawful, invalid or unenforceable, that provision shall be treated as removed or modified to the minimum extent necessary."
      },
      {
        "type": "paragraph",
        "text": "The remaining provisions of these Terms shall continue in full force and effect. The invalidity or unenforceability of one provision shall not affect the validity or enforceability of the rest of these Terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "40. Entire Agreement",
        "id": "entire-agreement"
      },
      {
        "type": "paragraph",
        "text": "These Terms of Use, together with the policies, notices, schedules and documents incorporated by reference, constitute the entire agreement between the user and Mentor to Marry concerning use of the platform."
      },
      {
        "type": "paragraph",
        "text": "The incorporated documents may include Statement of Faith, Platform Values & Community Principles, Community Guidelines & Code of Conduct, Membership & Subscription Terms, Refund & Cancellation Policy, Privacy Policy, Cookie Policy, Profile Standards Policy, Matching Platform Terms, Messaging & Communications Policy, User Verification Policy, Safeguarding & Community Safety Policy, Reporting & Complaints Policy, Account Suspension & Enforcement Policy, and any other policy, schedule or notice published by Mentor to Marry from time to time."
      },
      {
        "type": "paragraph",
        "text": "If there is any inconsistency between these Terms and another platform policy, Mentor to Marry may determine which provision applies, having regard to the nature of the issue, the specific policy involved and any applicable legal requirement."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "41. Governing Law",
        "id": "governing-law"
      },
      {
        "type": "paragraph",
        "text": "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria."
      },
      {
        "type": "paragraph",
        "text": "Where users access the platform from outside Nigeria, they are responsible for complying with any local laws that apply to them."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry makes no representation that the platform is appropriate or available in every jurisdiction."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "42. Dispute Resolution",
        "id": "dispute-resolution"
      },
      {
        "type": "paragraph",
        "text": "Users are encouraged to raise concerns through the platform’s complaints or support channels in the first instance."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may seek to resolve disputes through informal resolution, internal review, mediation or other appropriate processes before formal legal proceedings are considered."
      },
      {
        "type": "paragraph",
        "text": "Nothing in this clause prevents Mentor to Marry from taking urgent action where necessary to protect members, the community, platform integrity or legal rights."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "43. Changes to These Terms",
        "id": "changes-to-these-terms"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update these Terms of Use from time to time."
      },
      {
        "type": "paragraph",
        "text": "Where appropriate, updated Terms may be published on the website or communicated through the platform."
      },
      {
        "type": "paragraph",
        "text": "Continued use of Mentor to Marry after updated Terms become effective may be treated as acceptance of the updated Terms."
      },
      {
        "type": "paragraph",
        "text": "If a user does not agree to updated Terms, they should stop using the platform and, where applicable, cancel any relevant subscription in accordance with the Membership & Subscription Terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "44. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about these Terms should be directed to Mentor to Marry or Love, Dating and Marriage Ministries through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "User Acceptance"
      },
      {
        "type": "paragraph",
        "text": "By creating an account, purchasing a membership, accessing a course, using community features, creating a profile, using matching features, sending messages or otherwise using Mentor to Marry, you confirm that you:"
      },
      {
        "type": "paragraph",
        "text": "are at least 25 years old;"
      },
      {
        "type": "paragraph",
        "text": "identify as Christian;"
      },
      {
        "type": "paragraph",
        "text": "agree to respect the Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "agree to comply with these Terms of Use;"
      },
      {
        "type": "paragraph",
        "text": "agree to comply with the Community Guidelines & Code of Conduct;"
      },
      {
        "type": "paragraph",
        "text": "agree to provide truthful and accurate information;"
      },
      {
        "type": "paragraph",
        "text": "understand that Mentor to Marry does not guarantee matches, relationships, engagement or marriage;"
      },
      {
        "type": "paragraph",
        "text": "accept responsibility for your own decisions, communications and relationships;"
      },
      {
        "type": "paragraph",
        "text": "agree to use the platform in a manner consistent with its Christian values and marriage-focused purpose;"
      },
      {
        "type": "paragraph",
        "text": "understand that Mentor to Marry does not endorse, approve or guarantee the suitability of any individual member;"
      },
      {
        "type": "paragraph",
        "text": "understand that matches, recommendations, badges or profile information should not be treated as relationship approval or marriage endorsement;"
      },
      {
        "type": "paragraph",
        "text": "agree to receive platform communications electronically; and"
      },
      {
        "type": "paragraph",
        "text": "understand that use of Mentor to Marry does not create any ownership, governance, partnership, employment, agency or trustee relationship with Love, Dating and Marriage Ministries."
      }
    ]
  },
  {
    "title": "Privacy Policy",
    "slug": "privacy-policy",
    "description": "This Privacy Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, collects, uses, stores, shares, protects and otherwise processes personal information.",
    "featured": true,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Privacy Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, collects, uses, stores, shares, protects and otherwise processes personal information."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating, marriage education, community and matching platform. The platform may include website content, community features, membership services, courses, mentoring resources, profiles, matching tools, messaging features, location-based discovery, verification processes, badges, live sessions and app-based services."
      },
      {
        "type": "paragraph",
        "text": "This Privacy Policy applies to personal information processed in connection with:"
      },
      {
        "type": "list",
        "style": "bulleted",
        "items": [
          "the Mentor to Marry website;",
          "account registration;",
          "free and paid memberships;",
          "community participation;",
          "relationship education and courses;",
          "member profiles;",
          "matching and recommendation features;",
          "messaging and communication features;",
          "verification processes;",
          "reports and complaints;",
          "moderation and enforcement;",
          "safeguarding and safety procedures;",
          "payments and subscriptions;",
          "live sessions and events;",
          "email communications;",
          "app-based services; and",
          "any other Mentor to Marry service or communication channel."
        ]
      },
      {
        "type": "paragraph",
        "text": "By using Mentor to Marry, you acknowledge that your personal information will be processed in accordance with this Privacy Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Who We Are",
        "id": "who-we-are"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "For the purposes of this Privacy Policy, “Mentor to Marry”, “we”, “us” and “our” refer to the platform and/or Love, Dating and Marriage Ministries as applicable. “User”, “member”, “you” and “your” refer to individuals who access, register for, subscribe to, participate in or use the platform. “Personal information” means information relating to an identified or identifiable individual. “Processing” includes collecting, using, storing, sharing, analysing, deleting or otherwise handling personal information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Our Privacy Commitment",
        "id": "our-privacy-commitment"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is committed to handling personal information responsibly, transparently and securely."
      },
      {
        "type": "paragraph",
        "text": "We aim to process personal information in a way that is lawful, fair, transparent, limited to appropriate purposes, relevant and proportionate, accurate where necessary, kept only for as long as appropriate, protected by reasonable security measures, and handled in accordance with applicable data protection laws."
      },
      {
        "type": "paragraph",
        "text": "Because Mentor to Marry is a relationship, education, community and matching platform, some of the personal information processed may be sensitive or personal in nature. Users should take care when sharing information and should use the platform responsibly."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Privacy Contact",
        "id": "privacy-contact"
      },
      {
        "type": "paragraph",
        "text": "Questions regarding privacy, personal information, data protection rights or complaints may be directed to the privacy contact identified on the Mentor to Marry website or platform."
      },
      {
        "type": "paragraph",
        "text": "Where Mentor to Marry appoints a Data Protection Officer, privacy lead or equivalent privacy representative, their contact information may be published separately."
      },
      {
        "type": "paragraph",
        "text": "Until a dedicated privacy contact is published, privacy enquiries should be directed through the general contact details made available by Mentor to Marry or Love, Dating and Marriage Ministries."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Information We Collect",
        "id": "information-we-collect"
      },
      {
        "type": "paragraph",
        "text": "We may collect and process different categories of personal information depending on how you use the platform."
      },
      {
        "type": "paragraph",
        "text": "Account information may include name, email address, phone number, username, password or login credentials, account preferences, membership status, subscription status, communication preferences, account creation date, account activity, login information and security information."
      },
      {
        "type": "paragraph",
        "text": "Eligibility and profile information may include first name, age, date of birth, sex at birth, marital status, country, city, church or regular place of Christian fellowship, profession, profile photograph, “About Me” information, relationship goals, relationship preferences, interests, language preferences, willingness to relocate where provided, course completion status, membership tier and other information you choose to include in your profile."
      },
      {
        "type": "paragraph",
        "text": "Faith and community information may include Christian identity, church or regular place of Christian fellowship, agreement to the Statement of Faith, community participation, course participation, mentoring participation, faith-based preferences or statements voluntarily provided by you, and participation in Christian discussions, live sessions or groups."
      },
      {
        "type": "paragraph",
        "text": "Matching and preference information may include profile details, likes, matches, profile views, preferences, country or city-level location information, membership tier, messaging eligibility, course completion status, interaction history, recommendation activity, and information used to suggest profiles or improve matching relevance."
      },
      {
        "type": "paragraph",
        "text": "Messaging and communications information may include messages exchanged through the platform, message metadata, reports of inappropriate messages, blocking activity, moderation flags, communication preferences, support communications, complaint correspondence and safety-related communications."
      },
      {
        "type": "paragraph",
        "text": "Course and learning information may include course enrolment, course progress, lesson completion, course completion badge eligibility, assessment or reflection activity where applicable, live session attendance, community participation linked to courses, mentoring participation, learning platform access and related educational activity."
      },
      {
        "type": "paragraph",
        "text": "Payment and subscription information may include membership tier, subscription status, payment status, billing details, transaction reference, currency, renewal status, refund or cancellation records and payment-related correspondence. Payment card or full financial details may be processed by third-party payment providers and may not be received or stored by Mentor to Marry unless expressly stated."
      },
      {
        "type": "paragraph",
        "text": "Verification information may include email verification, phone verification, identity verification, app-based verification, badge eligibility, verification status, verification dates, information submitted for verification, and records relating to failed, withdrawn or disputed verification."
      },
      {
        "type": "paragraph",
        "text": "Safety, reporting and moderation information may include reports, complaints, safeguarding concerns, safety concerns, fake profile reports, harassment reports, fraud or scam reports, moderation decisions, warnings, suspensions, account restrictions, appeals, investigation records, evidence submitted by users and internal safety assessments."
      },
      {
        "type": "paragraph",
        "text": "Technical and usage information may include IP address, device information, browser type, operating system, approximate location derived from technical data, login times, pages viewed, features used, error logs, security logs, cookie identifiers, analytics data and platform usage information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Sensitive Personal Information",
        "id": "sensitive-personal-information"
      },
      {
        "type": "paragraph",
        "text": "Some information processed by Mentor to Marry may be sensitive because it may relate to faith, identity, relationship status, personal preferences, messages, safety concerns or relationship interactions."
      },
      {
        "type": "paragraph",
        "text": "We may process sensitive personal information where you have provided it voluntarily, where it is necessary for membership eligibility, platform safety, matching or community features, reports, complaints or safeguarding concerns, where it is necessary to protect users or the platform, where required or permitted by law, or where you have given appropriate consent where required."
      },
      {
        "type": "paragraph",
        "text": "Users should avoid sharing unnecessary sensitive information in profiles, messages, community discussions or public areas of the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Consent",
        "id": "consent"
      },
      {
        "type": "paragraph",
        "text": "Where Mentor to Marry relies on consent to process personal information, users may withdraw consent at any time, subject to applicable law and any legitimate reason for continued processing."
      },
      {
        "type": "paragraph",
        "text": "Withdrawal of consent does not affect processing that occurred before consent was withdrawn."
      },
      {
        "type": "paragraph",
        "text": "Withdrawal of consent may limit or prevent access to certain platform features, including profile visibility, matching, messaging, verification, course participation, community access or communications."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. How We Collect Personal Information",
        "id": "how-we-collect-personal-information"
      },
      {
        "type": "paragraph",
        "text": "We may collect personal information directly from you when you create an account, complete your profile, subscribe to a membership, enrol on a course, participate in the community, send messages, like, match with or interact with profiles, contact support, submit a complaint or report, participate in verification, attend live sessions or events, or otherwise use the platform."
      },
      {
        "type": "paragraph",
        "text": "We may also collect information through cookies and similar technologies, from third-party service providers used to operate the platform, and from other users where they submit reports, complaints, safety concerns or relevant information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. How We Use Personal Information",
        "id": "how-we-use-personal-information"
      },
      {
        "type": "paragraph",
        "text": "We may use personal information for account and membership administration, platform services, Christian community and relationship purposes, matching and recommendations, safety, moderation and enforcement, legal, governance and compliance purposes, communications, improvement and analytics."
      },
      {
        "type": "paragraph",
        "text": "Examples include creating and managing accounts, confirming eligibility, administering membership tiers and subscriptions, delivering courses, operating profiles, matching, likes, messaging, badges, live sessions, app-based services, maintaining the Christian identity and purpose of the platform, responding to reports, detecting fake accounts, preventing fraud, enforcing Community Guidelines, handling appeals, maintaining records, protecting legal rights, sending service communications, improving courses, improving matching features and improving safety systems."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Lawful Bases for Processing",
        "id": "lawful-bases-for-processing"
      },
      {
        "type": "paragraph",
        "text": "Depending on the applicable law and the purpose of processing, we may rely on one or more lawful bases, including consent, performance of a contract or taking steps before entering a contract, legitimate interests, legal obligations, vital interests or safety-related grounds, compliance with platform governance obligations, and other lawful bases recognised under applicable data protection law."
      },
      {
        "type": "paragraph",
        "text": "Where we rely on legitimate interests, such interests may include operating the platform, maintaining safety, preventing fraud, moderating harmful conduct, improving services, protecting users, maintaining records, enforcing platform policies and protecting the integrity of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Personal Information We May Share",
        "id": "personal-information-we-may-share"
      },
      {
        "type": "paragraph",
        "text": "We do not sell users’ personal information."
      },
      {
        "type": "paragraph",
        "text": "We may share personal information where reasonably necessary with service providers, third-party platforms, other users, and where necessary for safety, legal or governance purposes."
      },
      {
        "type": "paragraph",
        "text": "Service providers may include providers of website hosting, course hosting, community platforms, payment processing, email delivery, SMS or phone verification, identity verification, analytics, security tools, cloud storage, customer support, video hosting, app services, moderation tools and technical support."
      },
      {
        "type": "paragraph",
        "text": "Course and mentoring services may be delivered through third-party learning platforms, including Selfany or any replacement platform used from time to time. Where third-party services are used, their own privacy notices and terms may also apply."
      },
      {
        "type": "paragraph",
        "text": "Depending on platform features, other users may see your first name, age, country, city, sex at birth, marital status, church or regular place of Christian fellowship, profession, profile photograph, “About Me” information, membership or badge status, course completion badge where applicable, matching-related information and information you choose to share in messages, profiles, groups or community areas."
      },
      {
        "type": "paragraph",
        "text": "We may share information where necessary to investigate serious reports, address safeguarding concerns, respond to legal requests, comply with law, prevent fraud, protect members, protect the platform, enforce Terms of Use, handle disputes, cooperate with appropriate authorities where required, or protect the rights, safety and wellbeing of users or others."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. International Users and Cross-Border Transfers",
        "id": "international-users-cross-border-transfers"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is available to users worldwide. This means personal information may be accessed, stored, processed or transferred across borders, including between Nigeria and other countries where users, service providers, platform systems or technical infrastructure are located."
      },
      {
        "type": "paragraph",
        "text": "Where required by applicable law, Mentor to Marry will seek to use appropriate safeguards for international transfers."
      },
      {
        "type": "paragraph",
        "text": "Users acknowledge that using a global platform may involve cross-border processing of personal information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Matching, Recommendations and Automated Features",
        "id": "matching-recommendations-automated-features"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use profile information, user preferences, tier status, location information, course completion status, likes, interactions and other platform activity to support matching, recommendations, profile discovery and safety features."
      },
      {
        "type": "paragraph",
        "text": "Recommendation systems may consider profile information, stated preferences, activity, location information, membership tier, course completion status, likes, matches, blocking activity, reporting activity and similar platform information when generating recommendations or improving relevance."
      },
      {
        "type": "paragraph",
        "text": "Recommendations are intended to assist discovery and community engagement. They do not guarantee compatibility, courtship, engagement, marriage or relationship success."
      },
      {
        "type": "paragraph",
        "text": "We may use automated or partly automated tools to suggest profiles, rank or recommend potential matches, detect suspicious activity, support safety processes, identify possible misuse, enforce feature limits and improve user experience."
      },
      {
        "type": "paragraph",
        "text": "Where required by applicable law, users may have rights relating to automated decision-making or profiling."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Messaging Privacy",
        "id": "messaging-privacy"
      },
      {
        "type": "paragraph",
        "text": "Messages sent through the platform may be processed to provide messaging services, maintain records, respond to reports, investigate breaches, prevent misuse, support safety and comply with platform policies."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee that messages are private from moderation or safety review where concerns are reported or where review is necessary for safety, fraud prevention, legal compliance or enforcement."
      },
      {
        "type": "paragraph",
        "text": "Users should not share sensitive personal, financial, identity or safety-critical information in messages unless they are comfortable doing so."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Location Information",
        "id": "location-information"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may collect or display location information such as country and city."
      },
      {
        "type": "paragraph",
        "text": "Location information may be used to display profiles, support location-based discovery, support matching preferences, improve recommendations, help users find relevant profiles and administer platform features."
      },
      {
        "type": "paragraph",
        "text": "Unless expressly stated, Mentor to Marry should not be treated as verifying a user’s physical location or guaranteeing that a user is located where they claim to be."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Verification and Badges",
        "id": "verification-badges"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may process information for verification and badge purposes, including email verification, phone verification, identity verification, app verification, course completion, membership tier and length of membership."
      },
      {
        "type": "paragraph",
        "text": "A badge does not guarantee the truth, completeness or current accuracy of all information supplied by a user."
      },
      {
        "type": "paragraph",
        "text": "Verification information may be retained where necessary for safety, fraud prevention, identity review, dispute handling, compliance or moderation purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Data Retention",
        "id": "data-retention"
      },
      {
        "type": "paragraph",
        "text": "We will retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy."
      },
      {
        "type": "paragraph",
        "text": "Retention periods may depend on the type of data, account status, membership status, legal obligations, complaint or dispute history, safeguarding concerns, fraud prevention needs, moderation history, payment records, course participation, consent withdrawal, technical limitations and legitimate operational needs."
      },
      {
        "type": "paragraph",
        "text": "Examples may include account data retained while the account is active, payment records retained as needed for accounting, tax or legal purposes, report and moderation records retained as needed for safety, complaint handling and platform integrity, messages retained as needed for service delivery, safety, reporting, moderation or legal purposes, and deleted account information retained where necessary for legal, safeguarding, fraud prevention, complaint handling or enforcement purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Data Retention Schedule",
        "id": "data-retention-schedule"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may maintain a separate internal Data Retention Schedule that specifies retention periods for particular categories of information."
      },
      {
        "type": "paragraph",
        "text": "The Data Retention Schedule may be updated from time to time to reflect legal requirements, operational needs, platform changes, safeguarding requirements, fraud prevention needs and technical arrangements."
      },
      {
        "type": "paragraph",
        "text": "Where there is a conflict between operational retention practices and this Privacy Policy, Mentor to Marry will seek to apply the approach that best complies with applicable law and protects user rights, safety and platform integrity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Account Deletion",
        "id": "account-deletion"
      },
      {
        "type": "paragraph",
        "text": "Users may request account deletion through available platform processes or by contacting Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Account deletion may result in loss of access to profile features, membership benefits, course progress, messages, matches, badges, community spaces, subscriptions and platform services."
      },
      {
        "type": "paragraph",
        "text": "Some information may be retained after account deletion where necessary for legal compliance, payment records, fraud prevention, safeguarding, complaint handling, moderation records, enforcement records, dispute resolution, security or legitimate operational purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Security",
        "id": "security"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to use reasonable technical and organisational measures to protect personal information. Such measures may include account security controls, access controls, secure hosting arrangements, password protection, verification processes, moderation controls, security monitoring, limited access to sensitive information, staff or volunteer confidentiality expectations, data handling procedures and incident response processes."
      },
      {
        "type": "paragraph",
        "text": "While Mentor to Marry uses reasonable measures to protect personal information, no internet transmission, cloud service or electronic storage system can be guaranteed to be completely secure."
      },
      {
        "type": "paragraph",
        "text": "Users are responsible for keeping their login details secure and for using the platform safely."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Data Breaches and Security Incidents",
        "id": "data-breaches-security-incidents"
      },
      {
        "type": "paragraph",
        "text": "Where Mentor to Marry becomes aware of a personal data breach or security incident, it will assess the incident and take appropriate steps in accordance with applicable law and internal procedures."
      },
      {
        "type": "paragraph",
        "text": "This may include investigating the incident, containing the issue, assessing risks to users, notifying affected users where appropriate, notifying regulators where required, improving controls and maintaining records of the incident."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Your Rights",
        "id": "your-rights"
      },
      {
        "type": "paragraph",
        "text": "Depending on applicable law, you may have rights in relation to your personal information, including the right to be informed about how your information is used, access your personal information, request correction of inaccurate information, request deletion of information, restrict processing, object to processing, withdraw consent where processing is based on consent, request data portability, object to certain automated decision-making, complain to a data protection authority and seek remedies available under applicable law."
      },
      {
        "type": "paragraph",
        "text": "The availability and scope of these rights may vary depending on your location and the applicable legal framework."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Exercising Your Rights",
        "id": "exercising-your-rights"
      },
      {
        "type": "paragraph",
        "text": "To exercise your privacy rights, you may contact Mentor to Marry using the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "We may need to verify your identity before responding to a request."
      },
      {
        "type": "paragraph",
        "text": "We may refuse or limit a request where permitted by law, including where information must be retained for legal compliance, fraud prevention, safeguarding, safety, complaint handling, dispute resolution, moderation records, enforcement records, security or protection of another person’s rights."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Children and Age Restriction",
        "id": "children-age-restriction"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is intended only for users aged 25 years and over."
      },
      {
        "type": "paragraph",
        "text": "The platform is not intended for children or persons under 25. Users must not create an account if they are under 25."
      },
      {
        "type": "paragraph",
        "text": "If Mentor to Marry becomes aware that a person under 25 has created an account, the account may be removed or restricted."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Marketing and Communications",
        "id": "marketing-communications"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may send users service-related communications, including account, membership, course, safety, policy and platform notices."
      },
      {
        "type": "paragraph",
        "text": "Where permitted, we may also send newsletters, ministry updates, event information, course updates or promotional communications."
      },
      {
        "type": "paragraph",
        "text": "Users may be able to opt out of certain marketing communications. However, service-related communications may still be sent where necessary for account, membership, safety, legal or operational purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Cookies",
        "id": "cookies"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use cookies and similar technologies for website functionality, account login, security, preferences, analytics, performance, service improvement, marketing where applicable and other purposes described in the Cookie Policy."
      },
      {
        "type": "paragraph",
        "text": "Users should read the Cookie Policy for more information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Third-Party Links",
        "id": "third-party-links"
      },
      {
        "type": "paragraph",
        "text": "The platform may contain links to third-party websites, platforms, payment providers, course platforms, video platforms, community tools, app stores or other services."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not responsible for the privacy practices, terms or content of third-party services."
      },
      {
        "type": "paragraph",
        "text": "Users should review the privacy notices and terms of any third-party service they use."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Changes to This Privacy Policy",
        "id": "changes-to-this-privacy-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update this Privacy Policy from time to time."
      },
      {
        "type": "paragraph",
        "text": "Where appropriate, updated versions may be published on the website or communicated through the platform."
      },
      {
        "type": "paragraph",
        "text": "Where material changes affect how personal information is processed, Mentor to Marry may notify users through email, platform notifications or other appropriate communication channels."
      },
      {
        "type": "paragraph",
        "text": "Continued use of Mentor to Marry after an updated Privacy Policy becomes effective may be treated as acknowledgement of the updated Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about this Privacy Policy or the handling of personal information should be directed to Mentor to Marry or Love, Dating and Marriage Ministries using the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Privacy Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By creating an account, purchasing a membership, accessing a course, using community features, creating a profile, using matching features, sending messages or otherwise using Mentor to Marry, you acknowledge that:"
      },
      {
        "type": "list",
        "style": "bulleted",
        "items": [
          "Mentor to Marry may process your personal information in accordance with this Privacy Policy;",
          "your profile information may be visible to other users depending on platform features and privacy settings;",
          "your information may be used for matching, recommendations, messaging, safety, moderation and platform administration;",
          "messages and reports may be reviewed where necessary for safety, moderation, fraud prevention, complaint handling or legal compliance;",
          "your personal information may be processed through third-party service providers;",
          "your information may be transferred or processed internationally;",
          "you are responsible for the information you choose to share; and",
          "you may contact Mentor to Marry to exercise applicable privacy rights."
        ]
      }
    ]
  },
  {
    "title": "Cookie Policy",
    "slug": "cookie-policy",
    "description": "This Cookie Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, uses cookies and similar technologies when users access the website, platform, courses,...",
    "featured": true,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Cookie Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, uses cookies and similar technologies when users access the website, platform, courses, community features, member areas, messaging services, matching features and related services."
      },
      {
        "type": "paragraph",
        "text": "This Cookie Policy should be read together with the Privacy Policy, Terms of Use, Membership & Subscription Terms, Community Guidelines & Code of Conduct and any other applicable platform policy."
      },
      {
        "type": "paragraph",
        "text": "By continuing to use Mentor to Marry, users acknowledge that cookies and similar technologies may be used in accordance with this Policy and applicable user choices."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Who We Are",
        "id": "who-we-are"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating, marriage education, community and matching platform operated by Love, Dating and Marriage Ministries."
      },
      {
        "type": "paragraph",
        "text": "References to “Mentor to Marry”, “we”, “us” and “our” mean Mentor to Marry and/or Love, Dating and Marriage Ministries, as applicable."
      },
      {
        "type": "paragraph",
        "text": "References to “user”, “member”, “you” and “your” mean any individual who accesses or uses the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. What Are Cookies?",
        "id": "what-are-cookies"
      },
      {
        "type": "paragraph",
        "text": "Cookies are small text files placed on a device when a user visits a website or uses an online service."
      },
      {
        "type": "paragraph",
        "text": "Cookies help websites and digital services remember information about users and devices."
      },
      {
        "type": "paragraph",
        "text": "Cookies may remember login sessions, maintain user preferences, improve security, improve website functionality, analyse usage patterns, support performance improvements, remember membership settings, improve user experience, support matching features and help prevent abuse or fraud."
      },
      {
        "type": "paragraph",
        "text": "Cookies do not normally provide complete access to a user’s device and cannot by themselves identify every aspect of a person’s identity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Similar Technologies",
        "id": "similar-technologies"
      },
      {
        "type": "paragraph",
        "text": "In addition to cookies, Mentor to Marry may use technologies such as local storage, session storage, web beacons, tracking pixels, analytics identifiers, log files, device identifiers, mobile application identifiers, security tokens and similar technologies."
      },
      {
        "type": "paragraph",
        "text": "For simplicity, this Cookie Policy refers to all such technologies collectively as “cookies” unless stated otherwise."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Cookie Consent",
        "id": "cookie-consent"
      },
      {
        "type": "paragraph",
        "text": "Where required by applicable law, Mentor to Marry may request consent before placing non-essential cookies on a user’s device."
      },
      {
        "type": "paragraph",
        "text": "Users may be able to accept, reject or manage certain categories of cookies through a cookie banner, cookie preference tool, browser settings, device settings or other available controls."
      },
      {
        "type": "paragraph",
        "text": "Essential cookies may be used where necessary to provide the platform, maintain security, authenticate users, process membership access, deliver services requested by the user or protect the platform from misuse."
      },
      {
        "type": "paragraph",
        "text": "Where consent is used, users may be able to withdraw or change their cookie choices through available controls, subject to technical limitations and applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Why We Use Cookies",
        "id": "why-we-use-cookies"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use cookies for essential website functionality, account authentication, platform security, performance and analytics, user preferences, matching and community features, communications and marketing where applicable."
      },
      {
        "type": "paragraph",
        "text": "Cookies may help keep users logged in, manage authentication sessions, support account security, maintain navigation between pages, remember user settings, support member access, administer subscriptions, enable platform functionality and provide requested services."
      },
      {
        "type": "paragraph",
        "text": "Cookies may also help detect suspicious activity, identify attempted misuse, prevent fraud, secure member accounts, protect against automated attacks, support moderation systems, maintain platform integrity and improve user safety."
      },
      {
        "type": "paragraph",
        "text": "Where analytics cookies are used, they may help us understand how users interact with the platform, identify technical issues, improve performance, assess feature usage, measure engagement, improve educational resources, improve matching services and support platform development."
      },
      {
        "type": "paragraph",
        "text": "Preference cookies may remember language choices, display preferences, notification preferences, login preferences, accessibility settings, cookie preferences, course preferences and other user-selected settings."
      },
      {
        "type": "paragraph",
        "text": "Where applicable, cookies may support profile discovery, matching features, recommendation systems, community participation, messaging systems, member preferences, course completion recognition, badge visibility and user experience improvements. Cookies used for these purposes do not guarantee compatibility, relationship outcomes or matching success."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Types of Cookies We May Use",
        "id": "types-of-cookies-we-may-use"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use essential cookies, functional cookies, analytics cookies, security cookies and communications cookies."
      },
      {
        "type": "paragraph",
        "text": "Essential cookies are necessary for the operation of the platform. Examples include cookies that support login functionality, account authentication, security controls, payment functionality, subscription services, platform administration and user access controls."
      },
      {
        "type": "paragraph",
        "text": "Functional cookies help remember choices and improve user experience, including language settings, profile preferences, notification preferences, course settings and site customisation preferences."
      },
      {
        "type": "paragraph",
        "text": "Analytics cookies help us understand how the platform is used, including page visits, feature usage, traffic sources, user journeys, platform engagement and service performance."
      },
      {
        "type": "paragraph",
        "text": "Security cookies help prevent fraud, identify unusual behaviour, protect member accounts, support authentication and maintain platform integrity."
      },
      {
        "type": "paragraph",
        "text": "Communications cookies may support newsletters, email communications, platform announcements, event registration, campaign performance measurement and communication preferences."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Essential and Non-Essential Cookies",
        "id": "essential-non-essential-cookies"
      },
      {
        "type": "paragraph",
        "text": "Essential cookies are necessary for the platform to function and may not be capable of being switched off through platform controls."
      },
      {
        "type": "paragraph",
        "text": "Essential cookies may be used without separate consent where they are necessary to provide requested services, maintain security, process login sessions, prevent fraud, support payment or subscription functions, or operate core platform features."
      },
      {
        "type": "paragraph",
        "text": "Non-essential cookies, such as analytics, preference or marketing cookies, may be subject to user choice where required by applicable law."
      },
      {
        "type": "paragraph",
        "text": "If a user rejects or disables non-essential cookies, the platform should generally remain accessible, but certain convenience, analytics, preference or personalised features may be affected."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Cookie Duration",
        "id": "cookie-duration"
      },
      {
        "type": "paragraph",
        "text": "Cookies may be session cookies or persistent cookies."
      },
      {
        "type": "paragraph",
        "text": "Session cookies usually expire when the user closes their browser or ends a session."
      },
      {
        "type": "paragraph",
        "text": "Persistent cookies may remain on a device for a defined period or until deleted by the user."
      },
      {
        "type": "paragraph",
        "text": "The duration of specific cookies may depend on the relevant cookie, browser setting, service provider, platform configuration or user preference."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may publish or maintain a separate Cookie List or Cookie Table identifying specific cookie durations where appropriate."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Third-Party Cookies",
        "id": "third-party-cookies"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use services provided by third parties. These service providers may place cookies or use similar technologies in connection with hosting services, analytics services, learning platforms, payment processing, email communications, security tools, verification systems, video services, community services, customer support systems and mobile applications."
      },
      {
        "type": "paragraph",
        "text": "These third parties may operate under their own privacy notices, cookie policies and terms."
      },
      {
        "type": "paragraph",
        "text": "Third-party cookies may be controlled by the relevant third-party provider. Mentor to Marry does not control all third-party cookies once they are set by external services."
      },
      {
        "type": "paragraph",
        "text": "Users should review relevant third-party policies where appropriate."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Analytics Services",
        "id": "analytics-services"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use analytics tools to understand website performance, user engagement, course participation, matching feature usage, platform growth, technical performance and service improvement opportunities."
      },
      {
        "type": "paragraph",
        "text": "Analytics information is generally used in aggregated or statistical form whenever appropriate."
      },
      {
        "type": "paragraph",
        "text": "Analytics tools may use cookies or similar technologies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Advertising and Marketing Technologies",
        "id": "advertising-marketing-technologies"
      },
      {
        "type": "paragraph",
        "text": "At launch, Mentor to Marry may not use advertising network technologies."
      },
      {
        "type": "paragraph",
        "text": "However, if promotional, advertising or marketing technologies are introduced in the future, cookies may be used to measure promotional effectiveness, improve ministry outreach, understand user interests, improve content relevance and evaluate campaign performance."
      },
      {
        "type": "paragraph",
        "text": "Where required by law, appropriate consent mechanisms may be implemented before using non-essential advertising or marketing cookies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Managing Cookies",
        "id": "managing-cookies"
      },
      {
        "type": "paragraph",
        "text": "Users can generally manage cookies through browser settings, device settings, operating system controls, platform cookie preferences or other available controls."
      },
      {
        "type": "paragraph",
        "text": "Users may choose to block cookies, restrict cookies, delete cookies, refuse non-essential cookies or withdraw consent where applicable."
      },
      {
        "type": "paragraph",
        "text": "Different browsers and devices provide different controls and settings."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Effect of Disabling Cookies",
        "id": "effect-of-disabling-cookies"
      },
      {
        "type": "paragraph",
        "text": "Blocking or disabling certain cookies may affect platform functionality."
      },
      {
        "type": "paragraph",
        "text": "Users who disable cookies may experience limitations relating to account access, login persistence, security functions, subscriptions, messaging, matching features, community participation, course access, personal settings and platform performance."
      },
      {
        "type": "paragraph",
        "text": "Certain essential cookies may be required for some platform functions to operate properly."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. International Users",
        "id": "international-users"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is available internationally."
      },
      {
        "type": "paragraph",
        "text": "Cookies and related technologies may therefore involve international processing, cross-border transfers, global hosting services and international service providers."
      },
      {
        "type": "paragraph",
        "text": "Users acknowledge that cookie-related information may be processed in countries outside their country of residence."
      },
      {
        "type": "paragraph",
        "text": "Further information is available in the Privacy Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Data Protection and Privacy",
        "id": "data-protection-privacy"
      },
      {
        "type": "paragraph",
        "text": "Information collected through cookies may be processed in accordance with the Privacy Policy, applicable data protection laws, internal governance procedures and platform security requirements."
      },
      {
        "type": "paragraph",
        "text": "Where cookie information constitutes personal information, it will be handled in accordance with the Privacy Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Cookie List or Cookie Table",
        "id": "cookie-list-or-cookie-table"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may publish or maintain a separate Cookie List or Cookie Table identifying specific cookies, providers, purposes, categories and durations where appropriate."
      },
      {
        "type": "paragraph",
        "text": "The Cookie List or Cookie Table may be updated from time to time to reflect changes in platform technology, service providers, analytics tools, security systems, learning platforms, payment processors, app functionality or consent settings."
      },
      {
        "type": "paragraph",
        "text": "Where a specific Cookie List or Cookie Table is published, it should be read alongside this Cookie Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Changes to This Cookie Policy",
        "id": "changes-to-this-cookie-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update this Cookie Policy from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updates may occur due to legal developments, platform changes, new technology, security requirements, new service providers, new platform features or operational improvements."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the website or platform. Where appropriate, users may be notified of significant changes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions concerning this Cookie Policy or the use of cookies by Mentor to Marry should be directed to Mentor to Marry or Love, Dating and Marriage Ministries using the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Cookie Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By continuing to use Mentor to Marry, you acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "cookies and similar technologies may be used in connection with the platform;"
      },
      {
        "type": "paragraph",
        "text": "cookies may support authentication, security, functionality, analytics and user experience;"
      },
      {
        "type": "paragraph",
        "text": "some cookies may be provided by third-party service providers;"
      },
      {
        "type": "paragraph",
        "text": "essential cookies may be required for the platform to function properly;"
      },
      {
        "type": "paragraph",
        "text": "non-essential cookies may be subject to user choice where required by applicable law;"
      },
      {
        "type": "paragraph",
        "text": "you may be able to manage cookie preferences through available controls;"
      },
      {
        "type": "paragraph",
        "text": "disabling cookies may affect platform functionality; and"
      },
      {
        "type": "paragraph",
        "text": "information collected through cookies may be processed in accordance with the Privacy Policy."
      }
    ]
  },
  {
    "title": "Refund & Cancellation Policy",
    "slug": "refund-cancellation-policy",
    "description": "This Refund & Cancellation Policy explains how cancellations, refund requests, failed payments, subscription changes and access withdrawals are handled by Mentor to Marry, operated by...",
    "featured": true,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Refund & Cancellation Policy explains how cancellations, refund requests, failed payments, subscription changes and access withdrawals are handled by Mentor to Marry, operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "This Policy applies to free memberships, paid memberships, Premium memberships, VIP memberships, subscription services, paid communities, digital courses, self-paced relationship courses, live sessions, mentoring-related access, promotional memberships, app-based subscriptions, third-party marketplace purchases and other paid digital services offered by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read alongside the Terms of Use, Membership & Subscription Terms, Privacy Policy, Community Guidelines & Code of Conduct, Safeguarding & Community Safety Policy and any applicable payment provider or app store terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Core Refund Position",
        "id": "core-refund-position"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not offer automatic, guaranteed or “no questions asked” refunds."
      },
      {
        "type": "paragraph",
        "text": "Refund requests will be considered on a case-by-case basis, in accordance with this Policy, applicable law, payment provider rules, the nature of the service purchased, the access already provided and the circumstances of the request."
      },
      {
        "type": "paragraph",
        "text": "Nothing in this Policy limits any mandatory legal rights that cannot lawfully be excluded."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Purpose of This Policy",
        "id": "purpose-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "The purpose of this Policy is to explain when users may cancel memberships or subscriptions, when refunds may be considered, when refunds are unlikely to be available, how automatic renewals are managed, how digital content access affects refunds, how failed payments are handled, how app store or third-party marketplace purchases are treated, how promotional offers are handled and how enforcement action may affect refunds."
      },
      {
        "type": "paragraph",
        "text": "This Policy is intended to be fair to users while recognising that Mentor to Marry provides digital services, memberships, community access, courses and online platform features that may be accessed immediately after purchase."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. General Position",
        "id": "general-position"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may offer refunds where required by applicable law, where expressly stated in this Policy, or where Mentor to Marry determines that a refund is appropriate in the circumstances."
      },
      {
        "type": "paragraph",
        "text": "Purchasing a membership, subscription, course, digital access product or paid service does not guarantee profile views, likes, matches, messages, responses, compatibility, courtship, engagement, marriage, relationship success, course completion, personal transformation or any particular outcome."
      },
      {
        "type": "paragraph",
        "text": "Refunds will not usually be given solely because a user does not receive the number of matches, likes, messages, responses or relationship outcomes they hoped for."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Digital Services and Immediate Access",
        "id": "digital-services-immediate-access"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry provides digital and online services, including access to online communities, member-only content, course materials, self-paced relationship courses, teaching videos, digital resources, profile features, matching tools, messaging access, live sessions, badges, premium visibility features and other digital services."
      },
      {
        "type": "paragraph",
        "text": "Where a user receives immediate access to digital content or membership benefits after purchase, refund availability may be limited because digital content, online access and membership services may be consumed, viewed, accessed or used immediately after payment."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Cancellation of Membership",
        "id": "cancellation-of-membership"
      },
      {
        "type": "paragraph",
        "text": "Users may cancel paid membership or subscription services in accordance with the Membership & Subscription Terms, this Refund & Cancellation Policy, the relevant payment provider rules, app store or marketplace terms where applicable, and any cancellation process made available through the platform."
      },
      {
        "type": "paragraph",
        "text": "Cancelling a membership does not automatically delete the user’s account. A user who cancels a paid membership may still retain access to free account features unless the account is separately deleted, suspended or terminated."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Cancellation Before Renewal",
        "id": "cancellation-before-renewal"
      },
      {
        "type": "paragraph",
        "text": "Where a membership is set to renew automatically, users are responsible for cancelling their subscription before the next renewal date if they do not wish to be charged again."
      },
      {
        "type": "paragraph",
        "text": "If cancellation is completed before the renewal date, the user will usually retain access to paid features until the end of the current paid subscription period, unless otherwise stated."
      },
      {
        "type": "paragraph",
        "text": "If cancellation is not completed before renewal, the subscription may renew and payment may be taken. Refunds for renewed subscriptions will be considered in accordance with this Policy, applicable law and any payment provider rules."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Automatic Renewal",
        "id": "automatic-renewal"
      },
      {
        "type": "paragraph",
        "text": "Where automatic renewal applies, the subscription may renew at the end of each billing period, the user’s payment method may be charged automatically, renewal may continue until cancelled, renewal terms should be displayed at or before purchase and users remain responsible for managing subscription settings."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may send renewal reminders where appropriate, but failure to receive or read a reminder does not automatically create a right to a refund."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Refunds That May Be Considered",
        "id": "refunds-that-may-be-considered"
      },
      {
        "type": "paragraph",
        "text": "Refunds may be considered where the user was charged in error, duplicate payment was taken, the user was unable to access paid services due to a verified platform error, Mentor to Marry cancels a paid service and does not provide a reasonable alternative, applicable law requires a refund, the user was charged after properly cancelling in accordance with the applicable process, or Mentor to Marry determines that a refund is fair in the circumstances."
      },
      {
        "type": "paragraph",
        "text": "Where appropriate, Mentor to Marry may provide a full refund, partial refund, account credit, subscription extension, replacement access, alternative course access, rescheduled session access or another reasonable remedy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Refunds That Are Usually Not Available",
        "id": "refunds-that-are-usually-not-available"
      },
      {
        "type": "paragraph",
        "text": "Refunds may be refused where the user has accessed substantial membership benefits, used messaging, matching, course or community features, changed their mind after accessing the service, did not receive desired relationship outcomes, failed to cancel before renewal, breached platform policies, was suspended or removed for misconduct, the payment issue arose from the user’s payment provider, bank or app store account, the user provided inaccurate account or billing information, or refund refusal is permitted by applicable law and this Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Refunds for Courses and Educational Content",
        "id": "refunds-for-courses-educational-content"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may offer paid or membership-linked educational content, including self-paced courses, videos, teaching materials and learning resources."
      },
      {
        "type": "paragraph",
        "text": "Refunds for courses may be limited where the user has enrolled on the course, accessed course materials, watched lessons, downloaded or viewed digital resources, completed part of the course, received a badge or completion status, attended live educational sessions or otherwise consumed digital content."
      },
      {
        "type": "paragraph",
        "text": "A refund may be considered where course access was not provided due to a verified platform issue, the user was charged incorrectly, duplicate payment occurred, the course was cancelled by Mentor to Marry without reasonable alternative access or applicable law requires a refund."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee that completing a course will result in a relationship, marriage, engagement, compatibility or any particular personal outcome."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Refunds for Live Sessions and Events",
        "id": "refunds-for-live-sessions-events"
      },
      {
        "type": "paragraph",
        "text": "Where Mentor to Marry offers paid live sessions, webinars, workshops, mentoring sessions or online events, the applicable refund terms may depend on the nature of the event and any event-specific terms."
      },
      {
        "type": "paragraph",
        "text": "Refunds may be considered where the event is cancelled by Mentor to Marry, the user was charged incorrectly, duplicate payment occurred, the user could not access the event due to a verified platform issue or applicable law requires a refund."
      },
      {
        "type": "paragraph",
        "text": "Refunds may be refused where the user failed to attend, joined late, had technical problems unrelated to Mentor to Marry, event replay or alternative access was made available, the user breached event rules, the user was removed for misconduct or event-specific terms provide otherwise."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. App Store or Marketplace Purchases",
        "id": "app-store-or-marketplace-purchases"
      },
      {
        "type": "paragraph",
        "text": "Where a membership, subscription or paid feature is purchased through an app store, mobile marketplace or third-party marketplace, the marketplace provider’s billing rules may apply, cancellation procedures may be controlled by the marketplace provider, refunds may be governed by the marketplace provider’s refund process, Mentor to Marry may have limited ability to issue refunds directly and users may need to request refunds through the relevant marketplace account."
      },
      {
        "type": "paragraph",
        "text": "Users should review the relevant app store, marketplace or payment provider terms before purchasing."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Payment Provider Charges",
        "id": "payment-provider-charges"
      },
      {
        "type": "paragraph",
        "text": "Payments may be processed by third-party payment providers."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not responsible for charges imposed by banks, card issuers, payment processors, app stores, mobile wallets, currency conversion providers, tax authorities or financial institutions."
      },
      {
        "type": "paragraph",
        "text": "Refunds issued by Mentor to Marry may not include third-party charges, foreign exchange differences, bank charges or payment provider fees unless required by law or expressly confirmed."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Taxes, Currency and Exchange Rates",
        "id": "taxes-currency-exchange-rates"
      },
      {
        "type": "paragraph",
        "text": "Membership fees may be charged in different currencies depending on location, payment provider, platform settings or future pricing arrangements."
      },
      {
        "type": "paragraph",
        "text": "The amount ultimately charged may vary because of exchange rates, bank fees, card issuer charges, app store charges, payment processor fees, taxes, local charges or currency conversion rules."
      },
      {
        "type": "paragraph",
        "text": "Refund amounts may differ from the original amount paid where exchange rates, payment provider rules, tax treatment or bank charges apply."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Promotional Offers, Discounts and Free Trials",
        "id": "promotional-offers-discounts-free-trials"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may offer discounts, introductory pricing, promotional rates, scholarships, ministry partner access, trial periods, limited-time offers, referral incentives or special membership promotions."
      },
      {
        "type": "paragraph",
        "text": "Promotional offers may be limited in time, limited in number, subject to eligibility conditions, withdrawn, not apply to renewals, not be combined with other offers or be subject to specific terms."
      },
      {
        "type": "paragraph",
        "text": "Refunds for promotional purchases may be based on the amount actually paid by the user, not the standard price of the membership."
      },
      {
        "type": "paragraph",
        "text": "Where free trials are offered, the trial terms will be displayed at the time of offer. Users are responsible for cancelling trials before the paid subscription begins if they do not wish to be charged."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Failed Payments",
        "id": "failed-payments"
      },
      {
        "type": "paragraph",
        "text": "Where payment fails, membership access may be restricted, premium or VIP features may be suspended, subscription renewal may fail, membership may be cancelled, access to messaging, matching or course features may be affected and Mentor to Marry may attempt to collect payment again where permitted."
      },
      {
        "type": "paragraph",
        "text": "Users are responsible for maintaining accurate and up-to-date payment information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Chargebacks and Payment Disputes",
        "id": "chargebacks-payment-disputes"
      },
      {
        "type": "paragraph",
        "text": "Users should contact Mentor to Marry or the relevant payment provider if they believe they have been charged incorrectly."
      },
      {
        "type": "paragraph",
        "text": "Where a user initiates a chargeback, payment dispute or reversal, membership access may be suspended, paid features may be restricted, the account may be reviewed, payment provider processes may apply and Mentor to Marry may provide transaction records to the relevant payment provider."
      },
      {
        "type": "paragraph",
        "text": "Repeated or abusive chargebacks may result in account restrictions or termination where permitted by law and platform policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Fraudulent or Abusive Refund Requests",
        "id": "fraudulent-or-abusive-refund-requests"
      },
      {
        "type": "paragraph",
        "text": "Users must not submit dishonest, manipulative, abusive or misleading refund requests."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may refuse requests and take enforcement action where it reasonably believes a refund request is fraudulent, abusive, knowingly misleading, connected to payment abuse or inconsistent with platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Duplicate Accounts and Duplicate Purchases",
        "id": "duplicate-accounts-duplicate-purchases"
      },
      {
        "type": "paragraph",
        "text": "Where a user accidentally purchases the same subscription or service more than once, Mentor to Marry may review the transaction and determine an appropriate remedy."
      },
      {
        "type": "paragraph",
        "text": "Possible remedies may include cancellation of the duplicate subscription, account credit, subscription extension, partial refund or full refund of the duplicate charge, depending on the circumstances, payment provider rules and applicable law."
      },
      {
        "type": "paragraph",
        "text": "Users should not create multiple accounts to obtain benefits, bypass restrictions, evade enforcement or manipulate payments."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Cancellation Due to Platform Breach or Misconduct",
        "id": "cancellation-due-to-platform-breach-or-misconduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may suspend, restrict or terminate membership where a user breaches Terms of Use, Community Guidelines & Code of Conduct, Membership & Subscription Terms, Profile Standards Policy, Messaging & Communications Policy, Safeguarding & Community Safety Policy, Account Suspension & Enforcement Policy or any other applicable platform policy."
      },
      {
        "type": "paragraph",
        "text": "Where membership is suspended or terminated because of misconduct, fraud, harassment, safeguarding concerns, deception, financial exploitation, misuse of the platform or serious breach of rules, refunds may be refused where permitted by law."
      },
      {
        "type": "paragraph",
        "text": "Paying for membership does not exempt a user from platform standards."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Temporary Suspension Pending Investigation",
        "id": "temporary-suspension-pending-investigation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may temporarily suspend or restrict membership benefits while investigating concerns relating to fraud, harassment, safeguarding, catfishing, payment abuse, identity concerns, profile deception, financial exploitation, abuse of messaging, chargebacks, policy breaches or platform misuse."
      },
      {
        "type": "paragraph",
        "text": "Temporary suspension pending investigation does not automatically entitle a user to a refund."
      },
      {
        "type": "paragraph",
        "text": "If the investigation confirms no breach and access was materially affected, Mentor to Marry may consider restoration of access, extension of membership time, partial credit or another appropriate remedy at its discretion, subject to applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Platform Unavailability",
        "id": "platform-unavailability"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry aims to provide reliable access but does not guarantee uninterrupted availability."
      },
      {
        "type": "paragraph",
        "text": "Temporary interruptions may occur due to maintenance, updates, technical problems, security incidents, hosting issues, payment provider issues, learning platform issues, internet outages, third-party service failures, app store issues, cyber incidents, legal requirements or events beyond reasonable control."
      },
      {
        "type": "paragraph",
        "text": "Short-term interruptions will not usually give rise to a refund."
      },
      {
        "type": "paragraph",
        "text": "Where a prolonged verified platform outage materially prevents access to paid services, Mentor to Marry may consider a remedy such as restoration of access, account credit, extension of membership time or partial refund, depending on the circumstances."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Third-Party Service Issues",
        "id": "third-party-service-issues"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may operate through third-party service providers, including payment processors, course platforms, community tools, video platforms, email systems, app stores, verification tools and hosting providers."
      },
      {
        "type": "paragraph",
        "text": "Where an issue is caused by a third-party service provider, refund availability may depend on the relevant provider’s terms, the cause of the issue, whether Mentor to Marry can provide an alternative, whether access was materially affected, payment provider rules, app store rules and applicable law."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will take reasonable steps where appropriate but cannot guarantee that third-party providers will issue refunds."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Account Deletion and Refunds",
        "id": "account-deletion-refunds"
      },
      {
        "type": "paragraph",
        "text": "Deleting an account does not automatically create a right to a refund."
      },
      {
        "type": "paragraph",
        "text": "If a user deletes their account during a paid subscription period, access to paid benefits may end, messages, matches, badges and course progress may be lost, subscription cancellation may still need to be completed separately, app store or payment provider cancellation may still be required and refunds will be assessed under this Policy."
      },
      {
        "type": "paragraph",
        "text": "Users should cancel any recurring subscription before deleting an account."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. How to Request a Refund",
        "id": "how-to-request-a-refund"
      },
      {
        "type": "paragraph",
        "text": "To request a refund, users should contact Mentor to Marry through the support or contact details published on the website or platform, unless the payment was made through an app store or third-party marketplace requiring direct refund requests through that provider."
      },
      {
        "type": "paragraph",
        "text": "A refund request should include the user’s account details, payment reference where available, membership or service purchased, purchase date, reason for the refund request, any relevant evidence and confirmation of whether the payment was made directly or through a third-party provider."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may request further information before assessing a refund request."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Refund Decision Timeframe",
        "id": "refund-decision-timeframe"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will aim to assess refund requests within a reasonable period following receipt of all information reasonably required to evaluate the request."
      },
      {
        "type": "paragraph",
        "text": "Processing times may vary depending on payment provider involvement, app store involvement, fraud checks, safeguarding concerns, technical investigations, transaction complexity, identity checks and the information provided by the user."
      },
      {
        "type": "paragraph",
        "text": "Where a payment provider, app store, bank or third-party marketplace controls the refund process, Mentor to Marry may not control the timeframe for final resolution."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Refund Assessment",
        "id": "refund-assessment"
      },
      {
        "type": "paragraph",
        "text": "In assessing refund requests, Mentor to Marry may consider the type of service purchased, whether access was provided, whether digital content was accessed, whether membership benefits were used, the timing of the request, the reason for the request, whether the user cancelled before renewal, whether the user breached platform policies, whether there was a verified platform error, whether a third-party provider was responsible, payment provider rules, app store rules, applicable law and the overall fairness of the request."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Refund Method",
        "id": "refund-method"
      },
      {
        "type": "paragraph",
        "text": "Where a monetary refund is approved, Mentor to Marry will usually process the refund to the original payment method where possible."
      },
      {
        "type": "paragraph",
        "text": "Refunds may be subject to payment provider processing times, bank processing times, app store processes, payment method limitations, currency conversion, third-party fees and identity or fraud checks."
      },
      {
        "type": "paragraph",
        "text": "Where refund to the original payment method is not possible, Mentor to Marry may consider an alternative method where lawful and appropriate."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Account Credits, Extensions and Alternative Remedies",
        "id": "account-credits-extensions-alternative-remedies"
      },
      {
        "type": "paragraph",
        "text": "Where appropriate and lawful, Mentor to Marry may offer platform credit, membership extension, replacement access, alternative course access, rescheduled session access or another reasonable remedy before issuing a monetary refund."
      },
      {
        "type": "paragraph",
        "text": "Such remedies may be offered instead of a refund where appropriate and lawful."
      },
      {
        "type": "paragraph",
        "text": "Offering a discretionary remedy in one case does not require Mentor to Marry to offer the same remedy in all cases."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Partial Refunds",
        "id": "partial-refunds"
      },
      {
        "type": "paragraph",
        "text": "Where appropriate, Mentor to Marry may provide partial refunds, account credits, subscription extensions, replacement access or other remedies."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will determine the appropriate remedy according to the circumstances, the extent of access already provided, applicable law, payment provider rules and platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "32. No Refund for Dissatisfaction with Outcomes",
        "id": "no-refund-for-dissatisfaction-with-outcomes"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not generally provide refunds because a user is dissatisfied with personal or relational outcomes."
      },
      {
        "type": "paragraph",
        "text": "Examples of non-refundable outcome dissatisfaction may include not receiving enough profile views, likes, messages or preferred matches, not forming a relationship, not entering courtship, not becoming engaged, not getting married, not liking another member’s response, a relationship ending, finding the course personally challenging, disagreeing with another member, choosing not to complete the course or deciding that the platform is not personally suitable after using paid features."
      },
      {
        "type": "paragraph",
        "text": "This does not affect any rights a user may have where Mentor to Marry has failed to provide a paid service as required or where applicable law requires a remedy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "33. No Refund for Breach of Platform Rules",
        "id": "no-refund-for-breach-of-platform-rules"
      },
      {
        "type": "paragraph",
        "text": "Refunds may be refused where access is restricted, suspended or terminated because the user harassed another user, bullied another user, sent inappropriate messages, misrepresented identity, misrepresented marital status, created a fake profile, engaged in catfishing, attempted romance fraud, requested money or gifts from users, shared explicit content, breached safety rules, evaded enforcement, misused the platform, breached Statement of Faith-related eligibility rules, breached community standards or otherwise acted contrary to platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "34. Legal Rights",
        "id": "legal-rights"
      },
      {
        "type": "paragraph",
        "text": "Nothing in this Policy limits rights that cannot lawfully be excluded."
      },
      {
        "type": "paragraph",
        "text": "Where applicable law gives a user mandatory refund, cancellation or consumer protection rights, Mentor to Marry will comply with those rights."
      },
      {
        "type": "paragraph",
        "text": "Where there is any inconsistency between this Policy and mandatory applicable law, the mandatory legal requirement will apply to the extent necessary."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "35. Changes to This Policy",
        "id": "changes-to-this-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update this Refund & Cancellation Policy from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Continued use of paid services after an updated Policy takes effect may be treated as acceptance of the updated Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "36. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about refunds, cancellations, subscriptions or billing should be directed to Mentor to Marry through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Refund & Cancellation Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By purchasing, activating, renewing or using a paid service, you acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not offer automatic, guaranteed or “no questions asked” refunds;"
      },
      {
        "type": "paragraph",
        "text": "refund requests are considered case-by-case in accordance with this Policy and applicable law;"
      },
      {
        "type": "paragraph",
        "text": "membership does not guarantee matches, messages, relationships, engagement or marriage;"
      },
      {
        "type": "paragraph",
        "text": "digital content and membership benefits may be accessible immediately after purchase;"
      },
      {
        "type": "paragraph",
        "text": "refund availability may be limited once services or digital content have been accessed;"
      },
      {
        "type": "paragraph",
        "text": "subscriptions may renew automatically where stated;"
      },
      {
        "type": "paragraph",
        "text": "you are responsible for cancelling before renewal if you do not wish to be charged again;"
      },
      {
        "type": "paragraph",
        "text": "app store or third-party marketplace purchases may be subject to third-party refund rules;"
      },
      {
        "type": "paragraph",
        "text": "refunds may be refused where access is terminated because of misconduct or breach of platform rules;"
      },
      {
        "type": "paragraph",
        "text": "deleting an account does not automatically cancel a subscription or create a refund right;"
      },
      {
        "type": "paragraph",
        "text": "payment provider charges, bank fees, taxes or currency differences may affect refund amounts; and"
      },
      {
        "type": "paragraph",
        "text": "refund requests will be assessed in accordance with this Policy and applicable law."
      }
    ]
  },
  {
    "title": "Community Guidelines & Code of Conduct",
    "slug": "community-guidelines-code-of-conduct",
    "description": "Mentor to Marry is a global interdenominational Christian relationship, dating and marriage platform operated by Love, Dating and Marriage Ministries, a non-profit organisation...",
    "featured": true,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating and marriage platform operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "These Community Guidelines and Code of Conduct set out the standards of behaviour expected from every person who uses, joins, participates in, contributes to or represents Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "They apply to all members, users, moderators, mentors, volunteers, contributors, representatives and any other person engaging with the platform, including through:"
      },
      {
        "type": "paragraph",
        "text": "the website;"
      },
      {
        "type": "paragraph",
        "text": "the community platform;"
      },
      {
        "type": "paragraph",
        "text": "member profiles;"
      },
      {
        "type": "paragraph",
        "text": "matching features;"
      },
      {
        "type": "paragraph",
        "text": "messaging features;"
      },
      {
        "type": "paragraph",
        "text": "courses and educational content;"
      },
      {
        "type": "paragraph",
        "text": "live sessions;"
      },
      {
        "type": "paragraph",
        "text": "comments and discussions;"
      },
      {
        "type": "paragraph",
        "text": "online events;"
      },
      {
        "type": "paragraph",
        "text": "future app-based services; and"
      },
      {
        "type": "paragraph",
        "text": "any other Mentor to Marry service or communication channel."
      },
      {
        "type": "paragraph",
        "text": "These Guidelines should be read alongside the:"
      },
      {
        "type": "paragraph",
        "text": "Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "Platform Values & Community Principles;"
      },
      {
        "type": "paragraph",
        "text": "Terms of Use;"
      },
      {
        "type": "paragraph",
        "text": "Membership & Subscription Terms;"
      },
      {
        "type": "paragraph",
        "text": "Profile Standards Policy;"
      },
      {
        "type": "paragraph",
        "text": "Matching Platform Terms;"
      },
      {
        "type": "paragraph",
        "text": "Messaging & Communications Policy;"
      },
      {
        "type": "paragraph",
        "text": "Safeguarding & Community Safety Policy; and"
      },
      {
        "type": "paragraph",
        "text": "Account Suspension & Enforcement Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of These Guidelines",
        "id": "purpose-of-these-guidelines"
      },
      {
        "type": "paragraph",
        "text": "The purpose of these Guidelines is to help create and maintain a safe, respectful, Christ-centred community where Christian singles can grow, learn, connect and pursue meaningful relationships in a manner that honours God."
      },
      {
        "type": "paragraph",
        "text": "These Guidelines are intended to:"
      },
      {
        "type": "paragraph",
        "text": "protect members;"
      },
      {
        "type": "paragraph",
        "text": "promote respectful conduct;"
      },
      {
        "type": "paragraph",
        "text": "support healthy Christian community;"
      },
      {
        "type": "paragraph",
        "text": "prevent misuse of the platform;"
      },
      {
        "type": "paragraph",
        "text": "reduce the risk of harm, deception, exploitation or abuse;"
      },
      {
        "type": "paragraph",
        "text": "establish clear standards for communication and interaction;"
      },
      {
        "type": "paragraph",
        "text": "support fair moderation and enforcement decisions; and"
      },
      {
        "type": "paragraph",
        "text": "preserve the identity, mission and values of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Christian Foundation",
        "id": "christian-foundation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is founded upon a Christian understanding of faith, relationships, courtship and marriage."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to conduct themselves in a manner consistent with:"
      },
      {
        "type": "paragraph",
        "text": "the Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "the Platform Values & Community Principles;"
      },
      {
        "type": "paragraph",
        "text": "biblical principles of love, honesty, respect, purity, accountability and self-control;"
      },
      {
        "type": "paragraph",
        "text": "the dignity and worth of every person as created in the image of God; and"
      },
      {
        "type": "paragraph",
        "text": "the mission of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Members must not use the platform in a way that undermines its Christian purpose, misuses its community, exploits other members or contradicts its foundational values."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Membership Eligibility",
        "id": "membership-eligibility"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is intended for Christians aged 25 years and over who are seeking Christ-centred relationships and marriage."
      },
      {
        "type": "paragraph",
        "text": "To participate in the platform, members must:"
      },
      {
        "type": "paragraph",
        "text": "be at least 25 years old;"
      },
      {
        "type": "paragraph",
        "text": "identify as Christian;"
      },
      {
        "type": "paragraph",
        "text": "respect the Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "provide truthful registration and profile information;"
      },
      {
        "type": "paragraph",
        "text": "comply with these Community Guidelines;"
      },
      {
        "type": "paragraph",
        "text": "comply with the Terms of Use and other platform policies; and"
      },
      {
        "type": "paragraph",
        "text": "participate honestly, respectfully and in good faith."
      },
      {
        "type": "paragraph",
        "text": "For participation in matching features, members must accurately disclose their marital status."
      },
      {
        "type": "paragraph",
        "text": "Permitted marital status categories are:"
      },
      {
        "type": "paragraph",
        "text": "Never Married;"
      },
      {
        "type": "paragraph",
        "text": "Divorced; or"
      },
      {
        "type": "paragraph",
        "text": "Widowed."
      },
      {
        "type": "paragraph",
        "text": "Members must not create an account or use the matching service if they are already married, are seeking casual encounters, or are not participating in good faith."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Core Behavioural Standards",
        "id": "core-behavioural-standards"
      },
      {
        "type": "paragraph",
        "text": "All members must:"
      },
      {
        "type": "paragraph",
        "text": "treat others with dignity and respect;"
      },
      {
        "type": "paragraph",
        "text": "communicate honestly and courteously;"
      },
      {
        "type": "paragraph",
        "text": "respect personal boundaries;"
      },
      {
        "type": "paragraph",
        "text": "act with integrity;"
      },
      {
        "type": "paragraph",
        "text": "avoid manipulation, coercion or pressure;"
      },
      {
        "type": "paragraph",
        "text": "use the platform for its intended Christian relationship and marriage-focused purpose;"
      },
      {
        "type": "paragraph",
        "text": "comply with moderation decisions;"
      },
      {
        "type": "paragraph",
        "text": "report serious concerns appropriately; and"
      },
      {
        "type": "paragraph",
        "text": "avoid conduct that may harm, mislead, exploit or intimidate others."
      },
      {
        "type": "paragraph",
        "text": "Members are responsible for their own behaviour, communications, profile content, relationship decisions and interactions both online and offline."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Respectful Communication",
        "id": "respectful-communication"
      },
      {
        "type": "paragraph",
        "text": "Members should communicate in a manner that reflects Christian maturity, kindness and self-control."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "insult, mock or belittle others;"
      },
      {
        "type": "paragraph",
        "text": "use abusive or degrading language;"
      },
      {
        "type": "paragraph",
        "text": "intimidate or threaten others;"
      },
      {
        "type": "paragraph",
        "text": "repeatedly contact someone who has asked not to be contacted;"
      },
      {
        "type": "paragraph",
        "text": "pressure another member to respond;"
      },
      {
        "type": "paragraph",
        "text": "use aggressive, hostile or humiliating language;"
      },
      {
        "type": "paragraph",
        "text": "deliberately provoke arguments;"
      },
      {
        "type": "paragraph",
        "text": "shame others publicly or privately;"
      },
      {
        "type": "paragraph",
        "text": "misuse spiritual language to control or manipulate another person; or"
      },
      {
        "type": "paragraph",
        "text": "use the platform to create conflict, hostility or division."
      },
      {
        "type": "paragraph",
        "text": "Disagreements must be handled with grace, patience and respect."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Christian Unity and Theological Respect",
        "id": "christian-unity-theological-respect"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is an interdenominational Christian platform."
      },
      {
        "type": "paragraph",
        "text": "Members may come from different churches, traditions and backgrounds. Members must show respect where differences arise on secondary theological matters."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "attack another member’s church background;"
      },
      {
        "type": "paragraph",
        "text": "ridicule another member’s Christian tradition;"
      },
      {
        "type": "paragraph",
        "text": "use the platform to create denominational conflict;"
      },
      {
        "type": "paragraph",
        "text": "aggressively promote divisive theological arguments;"
      },
      {
        "type": "paragraph",
        "text": "shame members for secondary doctrinal differences; or"
      },
      {
        "type": "paragraph",
        "text": "use theological disagreement as a basis for harassment or hostility."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not a forum for denominational disputes. It is a community for Christians seeking healthy relationships, spiritual growth and Christ-centred marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Profile Honesty and Authenticity",
        "id": "profile-honesty-authenticity"
      },
      {
        "type": "paragraph",
        "text": "Members must provide accurate, truthful and up-to-date profile information."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "create fake accounts;"
      },
      {
        "type": "paragraph",
        "text": "impersonate another person;"
      },
      {
        "type": "paragraph",
        "text": "use another person’s photographs;"
      },
      {
        "type": "paragraph",
        "text": "use misleading or heavily deceptive images;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent their age;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent their sex at birth;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent their marital status;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent their church or regular place of Christian fellowship;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent their location;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent their relationship intentions;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent their identity, background or circumstances; or"
      },
      {
        "type": "paragraph",
        "text": "conceal material information in a way that misleads other members."
      },
      {
        "type": "paragraph",
        "text": "Catfishing, impersonation, fraudulent identity use or deliberate deception may result in immediate suspension or permanent removal."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Good Faith Participation",
        "id": "good-faith-participation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry exists to help Christians pursue meaningful Christ-centred relationships and marriage."
      },
      {
        "type": "paragraph",
        "text": "Members must participate in good faith and with genuine relationship intentions."
      },
      {
        "type": "paragraph",
        "text": "Members must not use the platform primarily:"
      },
      {
        "type": "paragraph",
        "text": "for entertainment;"
      },
      {
        "type": "paragraph",
        "text": "for attention-seeking;"
      },
      {
        "type": "paragraph",
        "text": "to collect matches without meaningful engagement;"
      },
      {
        "type": "paragraph",
        "text": "to seek validation from other members;"
      },
      {
        "type": "paragraph",
        "text": "to build a social media following;"
      },
      {
        "type": "paragraph",
        "text": "to manipulate others emotionally;"
      },
      {
        "type": "paragraph",
        "text": "to waste the time of other members; or"
      },
      {
        "type": "paragraph",
        "text": "for any purpose inconsistent with the mission and values of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry reserves the right to take action where it reasonably believes that a member is participating in bad faith or is using the platform in a manner inconsistent with its purpose."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Profile Content Standards",
        "id": "profile-content-standards"
      },
      {
        "type": "paragraph",
        "text": "Profile content must be respectful, truthful and consistent with the values of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Profile content must not include:"
      },
      {
        "type": "paragraph",
        "text": "offensive language;"
      },
      {
        "type": "paragraph",
        "text": "abusive statements;"
      },
      {
        "type": "paragraph",
        "text": "degrading comments;"
      },
      {
        "type": "paragraph",
        "text": "discriminatory language;"
      },
      {
        "type": "paragraph",
        "text": "misleading claims;"
      },
      {
        "type": "paragraph",
        "text": "false information;"
      },
      {
        "type": "paragraph",
        "text": "inappropriate images;"
      },
      {
        "type": "paragraph",
        "text": "suggestive or explicit material;"
      },
      {
        "type": "paragraph",
        "text": "advertising or spam;"
      },
      {
        "type": "paragraph",
        "text": "financial requests;"
      },
      {
        "type": "paragraph",
        "text": "links to unsafe or unrelated external content;"
      },
      {
        "type": "paragraph",
        "text": "impersonation;"
      },
      {
        "type": "paragraph",
        "text": "content designed to manipulate, pressure or mislead others; or"
      },
      {
        "type": "paragraph",
        "text": "anything inconsistent with the Christian values of the platform."
      },
      {
        "type": "paragraph",
        "text": "Profile photographs must:"
      },
      {
        "type": "paragraph",
        "text": "genuinely depict the member;"
      },
      {
        "type": "paragraph",
        "text": "be recent and representative of the member’s current appearance;"
      },
      {
        "type": "paragraph",
        "text": "be appropriate for a Christian relationship and marriage platform;"
      },
      {
        "type": "paragraph",
        "text": "not contain nudity or sexually suggestive content;"
      },
      {
        "type": "paragraph",
        "text": "not contain offensive, vulgar or inappropriate imagery;"
      },
      {
        "type": "paragraph",
        "text": "not be misleading or heavily altered;"
      },
      {
        "type": "paragraph",
        "text": "not primarily feature other individuals; and"
      },
      {
        "type": "paragraph",
        "text": "not infringe another person’s rights or privacy."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may remove, restrict or require changes to profile content or photographs that breach these Guidelines."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Matching and Relationship Conduct",
        "id": "matching-relationship-conduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry provides features that may allow members to discover profiles, like profiles, receive recommendations, match with other members and communicate depending on membership tier and platform rules."
      },
      {
        "type": "paragraph",
        "text": "Members must use these features respectfully and responsibly."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "use matching features for casual encounters;"
      },
      {
        "type": "paragraph",
        "text": "misrepresent romantic intentions;"
      },
      {
        "type": "paragraph",
        "text": "pressure others into communication;"
      },
      {
        "type": "paragraph",
        "text": "pressure others into meeting;"
      },
      {
        "type": "paragraph",
        "text": "pursue a member who has declined interest;"
      },
      {
        "type": "paragraph",
        "text": "use matching features to solicit money, gifts or support;"
      },
      {
        "type": "paragraph",
        "text": "pursue multiple members deceptively;"
      },
      {
        "type": "paragraph",
        "text": "create false emotional expectations for personal gain;"
      },
      {
        "type": "paragraph",
        "text": "manipulate members using spiritual, emotional or romantic pressure; or"
      },
      {
        "type": "paragraph",
        "text": "treat other members disrespectfully because they do not respond or do not reciprocate interest."
      },
      {
        "type": "paragraph",
        "text": "A match does not create any obligation to communicate, continue communication, meet, enter courtship or pursue a relationship."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Messaging Standards",
        "id": "messaging-standards"
      },
      {
        "type": "paragraph",
        "text": "Messaging must be respectful, appropriate and consistent with Christian values."
      },
      {
        "type": "paragraph",
        "text": "Members must not send messages that are:"
      },
      {
        "type": "paragraph",
        "text": "abusive;"
      },
      {
        "type": "paragraph",
        "text": "threatening;"
      },
      {
        "type": "paragraph",
        "text": "manipulative;"
      },
      {
        "type": "paragraph",
        "text": "degrading;"
      },
      {
        "type": "paragraph",
        "text": "harassing;"
      },
      {
        "type": "paragraph",
        "text": "coercive;"
      },
      {
        "type": "paragraph",
        "text": "deceptive;"
      },
      {
        "type": "paragraph",
        "text": "spam-like;"
      },
      {
        "type": "paragraph",
        "text": "offensive;"
      },
      {
        "type": "paragraph",
        "text": "exploitative;"
      },
      {
        "type": "paragraph",
        "text": "sexually explicit;"
      },
      {
        "type": "paragraph",
        "text": "financially exploitative;"
      },
      {
        "type": "paragraph",
        "text": "designed to pressure another member; or"
      },
      {
        "type": "paragraph",
        "text": "inconsistent with the purpose of the platform."
      },
      {
        "type": "paragraph",
        "text": "Members must respect silence, boundaries and refusal."
      },
      {
        "type": "paragraph",
        "text": "If a member asks not to be contacted, that request must be respected immediately."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Zero-Tolerance Conduct",
        "id": "zero-tolerance-conduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry maintains a zero-tolerance approach to serious misconduct."
      },
      {
        "type": "paragraph",
        "text": "The following may result in immediate suspension or permanent removal:"
      },
      {
        "type": "paragraph",
        "text": "harassment;"
      },
      {
        "type": "paragraph",
        "text": "bullying;"
      },
      {
        "type": "paragraph",
        "text": "threats;"
      },
      {
        "type": "paragraph",
        "text": "abuse;"
      },
      {
        "type": "paragraph",
        "text": "predatory behaviour;"
      },
      {
        "type": "paragraph",
        "text": "exploitation;"
      },
      {
        "type": "paragraph",
        "text": "catfishing;"
      },
      {
        "type": "paragraph",
        "text": "impersonation;"
      },
      {
        "type": "paragraph",
        "text": "fraud;"
      },
      {
        "type": "paragraph",
        "text": "romance scams;"
      },
      {
        "type": "paragraph",
        "text": "financial exploitation;"
      },
      {
        "type": "paragraph",
        "text": "coercive conduct;"
      },
      {
        "type": "paragraph",
        "text": "deliberate deception;"
      },
      {
        "type": "paragraph",
        "text": "repeated unwanted contact;"
      },
      {
        "type": "paragraph",
        "text": "sharing or requesting inappropriate images;"
      },
      {
        "type": "paragraph",
        "text": "sending adult or explicit content;"
      },
      {
        "type": "paragraph",
        "text": "attempting to use the platform for casual encounters;"
      },
      {
        "type": "paragraph",
        "text": "creating an account while already married for matching purposes;"
      },
      {
        "type": "paragraph",
        "text": "attempting to evade a suspension or ban; and"
      },
      {
        "type": "paragraph",
        "text": "any conduct that creates a serious safety concern."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take immediate action where it reasonably considers that member safety, community integrity or platform trust is at risk."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Fraud, Scams and Financial Exploitation",
        "id": "fraud-scams-financial-exploitation"
      },
      {
        "type": "paragraph",
        "text": "Members must not use the platform to obtain money, gifts, financial support, investment, donations, business opportunities or personal benefit from other members."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "request money from other members;"
      },
      {
        "type": "paragraph",
        "text": "ask for loans;"
      },
      {
        "type": "paragraph",
        "text": "ask for gifts;"
      },
      {
        "type": "paragraph",
        "text": "claim emergencies to obtain financial help;"
      },
      {
        "type": "paragraph",
        "text": "promote investment schemes;"
      },
      {
        "type": "paragraph",
        "text": "promote business opportunities unrelated to the platform;"
      },
      {
        "type": "paragraph",
        "text": "use emotional pressure to obtain support;"
      },
      {
        "type": "paragraph",
        "text": "create false hardship stories;"
      },
      {
        "type": "paragraph",
        "text": "build romantic trust for financial gain; or"
      },
      {
        "type": "paragraph",
        "text": "direct members away from the platform for suspicious purposes."
      },
      {
        "type": "paragraph",
        "text": "Members should report any suspicious behaviour immediately."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Harassment, Bullying and Abuse",
        "id": "harassment-bullying-abuse"
      },
      {
        "type": "paragraph",
        "text": "Harassment, bullying and abusive behaviour are prohibited."
      },
      {
        "type": "paragraph",
        "text": "This includes:"
      },
      {
        "type": "paragraph",
        "text": "repeated unwanted messages;"
      },
      {
        "type": "paragraph",
        "text": "intimidation;"
      },
      {
        "type": "paragraph",
        "text": "insults;"
      },
      {
        "type": "paragraph",
        "text": "humiliating comments;"
      },
      {
        "type": "paragraph",
        "text": "threats;"
      },
      {
        "type": "paragraph",
        "text": "hostile communication;"
      },
      {
        "type": "paragraph",
        "text": "public shaming;"
      },
      {
        "type": "paragraph",
        "text": "private pressure;"
      },
      {
        "type": "paragraph",
        "text": "aggressive pursuit;"
      },
      {
        "type": "paragraph",
        "text": "manipulation;"
      },
      {
        "type": "paragraph",
        "text": "degrading treatment;"
      },
      {
        "type": "paragraph",
        "text": "coercive behaviour;"
      },
      {
        "type": "paragraph",
        "text": "misuse of spiritual authority or religious language to control another person; and"
      },
      {
        "type": "paragraph",
        "text": "behaviour that makes another member feel unsafe, pressured or distressed."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take moderation action even where behaviour occurs partly outside the platform, particularly where it affects member safety or platform integrity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Discrimination and Degrading Conduct",
        "id": "discrimination-degrading-conduct"
      },
      {
        "type": "paragraph",
        "text": "Members must treat others with dignity and respect."
      },
      {
        "type": "paragraph",
        "text": "Members must not use the platform to harass, abuse, demean or degrade individuals or groups."
      },
      {
        "type": "paragraph",
        "text": "Members must not use insulting, hateful or hostile language towards others."
      },
      {
        "type": "paragraph",
        "text": "Nothing in these Guidelines prevents Mentor to Marry from maintaining its Christian identity, Statement of Faith, membership criteria, platform values or marriage-focused purpose. However, members must express themselves and interact with others in a manner that is respectful, lawful and consistent with Christian character."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Privacy and Confidentiality",
        "id": "privacy-confidentiality"
      },
      {
        "type": "paragraph",
        "text": "Members must respect the privacy of others."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "share another member’s personal information without permission;"
      },
      {
        "type": "paragraph",
        "text": "publish screenshots of private messages without permission;"
      },
      {
        "type": "paragraph",
        "text": "share another person’s contact details;"
      },
      {
        "type": "paragraph",
        "text": "expose another member’s private circumstances;"
      },
      {
        "type": "paragraph",
        "text": "record private conversations without consent;"
      },
      {
        "type": "paragraph",
        "text": "pressure others to disclose private information;"
      },
      {
        "type": "paragraph",
        "text": "misuse information obtained through the platform; or"
      },
      {
        "type": "paragraph",
        "text": "use another member’s personal information for harassment, manipulation, marketing or exploitation."
      },
      {
        "type": "paragraph",
        "text": "Members should exercise caution before sharing personal details, contact information, financial information or private circumstances."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Offline Meetings and Personal Safety",
        "id": "offline-meetings-personal-safety"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may facilitate introductions and communication, but members remain responsible for their own decisions and safety when interacting online or offline."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to:"
      },
      {
        "type": "paragraph",
        "text": "take time before meeting in person;"
      },
      {
        "type": "paragraph",
        "text": "meet in safe and public places;"
      },
      {
        "type": "paragraph",
        "text": "tell trusted friends or family where they are going;"
      },
      {
        "type": "paragraph",
        "text": "arrange their own transport;"
      },
      {
        "type": "paragraph",
        "text": "maintain personal boundaries;"
      },
      {
        "type": "paragraph",
        "text": "avoid sharing sensitive financial or identity information too early;"
      },
      {
        "type": "paragraph",
        "text": "seek wise counsel and prayerful guidance; and"
      },
      {
        "type": "paragraph",
        "text": "report concerns promptly."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not supervise private offline meetings and does not guarantee compatibility, relationship success, engagement or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Off-Platform Conduct",
        "id": "off-platform-conduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry recognises that relationships formed through the platform may continue outside the platform."
      },
      {
        "type": "paragraph",
        "text": "Accordingly, Mentor to Marry may investigate and take action regarding conduct occurring outside the platform where that conduct:"
      },
      {
        "type": "paragraph",
        "text": "affects the safety of a member;"
      },
      {
        "type": "paragraph",
        "text": "concerns another member of the platform;"
      },
      {
        "type": "paragraph",
        "text": "constitutes harassment, abuse, fraud, exploitation or coercion;"
      },
      {
        "type": "paragraph",
        "text": "creates a safeguarding concern;"
      },
      {
        "type": "paragraph",
        "text": "undermines the trust and integrity of the community; or"
      },
      {
        "type": "paragraph",
        "text": "is otherwise inconsistent with these Community Guidelines."
      },
      {
        "type": "paragraph",
        "text": "Nothing in this section obliges Mentor to Marry to investigate every off-platform dispute. However, the platform reserves the right to take appropriate action where member safety, trust or community integrity may be affected."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Reporting Concerns",
        "id": "reporting-concerns"
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to report concerns promptly."
      },
      {
        "type": "paragraph",
        "text": "Concerns may include:"
      },
      {
        "type": "paragraph",
        "text": "harassment;"
      },
      {
        "type": "paragraph",
        "text": "bullying;"
      },
      {
        "type": "paragraph",
        "text": "fake profiles;"
      },
      {
        "type": "paragraph",
        "text": "catfishing;"
      },
      {
        "type": "paragraph",
        "text": "fraud;"
      },
      {
        "type": "paragraph",
        "text": "suspicious financial requests;"
      },
      {
        "type": "paragraph",
        "text": "inappropriate messages;"
      },
      {
        "type": "paragraph",
        "text": "repeated unwanted contact;"
      },
      {
        "type": "paragraph",
        "text": "abusive behaviour;"
      },
      {
        "type": "paragraph",
        "text": "identity concerns;"
      },
      {
        "type": "paragraph",
        "text": "safety concerns;"
      },
      {
        "type": "paragraph",
        "text": "misuse of the platform; or"
      },
      {
        "type": "paragraph",
        "text": "breaches of these Guidelines."
      },
      {
        "type": "paragraph",
        "text": "Reports should be made through the platform’s reporting tools or other approved reporting channels."
      },
      {
        "type": "paragraph",
        "text": "Members must not knowingly submit false, malicious or misleading reports."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Serious Safety Concerns",
        "id": "serious-safety-concerns"
      },
      {
        "type": "paragraph",
        "text": "Where Mentor to Marry reasonably believes that a member may pose a risk to another member, the community, or themselves, the platform may take immediate protective action."
      },
      {
        "type": "paragraph",
        "text": "Such action may include:"
      },
      {
        "type": "paragraph",
        "text": "restricting platform access;"
      },
      {
        "type": "paragraph",
        "text": "suspending an account;"
      },
      {
        "type": "paragraph",
        "text": "removing content;"
      },
      {
        "type": "paragraph",
        "text": "limiting communication features;"
      },
      {
        "type": "paragraph",
        "text": "conducting an enhanced review;"
      },
      {
        "type": "paragraph",
        "text": "invoking safeguarding procedures;"
      },
      {
        "type": "paragraph",
        "text": "reporting concerns internally for further assessment; or"
      },
      {
        "type": "paragraph",
        "text": "referring matters to appropriate authorities where required by law."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry reserves the right to act without prior warning where it believes immediate action is necessary to protect member safety or the integrity of the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Blocking and Boundaries",
        "id": "blocking-boundaries"
      },
      {
        "type": "paragraph",
        "text": "Members may block other members where available. Blocking should be respected."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "create another account to contact someone who has blocked them;"
      },
      {
        "type": "paragraph",
        "text": "ask another person to contact someone on their behalf;"
      },
      {
        "type": "paragraph",
        "text": "continue pursuing communication after being blocked;"
      },
      {
        "type": "paragraph",
        "text": "attempt to pressure someone to unblock them; or"
      },
      {
        "type": "paragraph",
        "text": "retaliate against someone for blocking or reporting them."
      },
      {
        "type": "paragraph",
        "text": "Respecting boundaries is a core requirement of participation in Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Moderation",
        "id": "moderation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may moderate content, profiles, messages, reports and member activity in accordance with its policies."
      },
      {
        "type": "paragraph",
        "text": "Moderation action may include:"
      },
      {
        "type": "paragraph",
        "text": "requesting changes to profile content;"
      },
      {
        "type": "paragraph",
        "text": "removing content;"
      },
      {
        "type": "paragraph",
        "text": "issuing reminders;"
      },
      {
        "type": "paragraph",
        "text": "issuing warnings;"
      },
      {
        "type": "paragraph",
        "text": "restricting access to features;"
      },
      {
        "type": "paragraph",
        "text": "pausing messaging privileges;"
      },
      {
        "type": "paragraph",
        "text": "suspending an account;"
      },
      {
        "type": "paragraph",
        "text": "terminating membership;"
      },
      {
        "type": "paragraph",
        "text": "removing a member from the community;"
      },
      {
        "type": "paragraph",
        "text": "preventing re-registration; or"
      },
      {
        "type": "paragraph",
        "text": "taking other appropriate action."
      },
      {
        "type": "paragraph",
        "text": "Moderation decisions will be based on the nature, seriousness and context of the conduct, including whether there is a risk to member safety, trust or platform integrity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Enforcement",
        "id": "enforcement"
      },
      {
        "type": "paragraph",
        "text": "Breaches of these Guidelines may result in action under the Account Suspension & Enforcement Policy."
      },
      {
        "type": "paragraph",
        "text": "Factors Mentor to Marry may consider include:"
      },
      {
        "type": "paragraph",
        "text": "seriousness of the conduct;"
      },
      {
        "type": "paragraph",
        "text": "whether the conduct was intentional;"
      },
      {
        "type": "paragraph",
        "text": "whether the conduct was repeated;"
      },
      {
        "type": "paragraph",
        "text": "impact on another member;"
      },
      {
        "type": "paragraph",
        "text": "safety risk;"
      },
      {
        "type": "paragraph",
        "text": "evidence available;"
      },
      {
        "type": "paragraph",
        "text": "prior warnings or breaches;"
      },
      {
        "type": "paragraph",
        "text": "cooperation with the investigation;"
      },
      {
        "type": "paragraph",
        "text": "whether the member attempted to evade moderation; and"
      },
      {
        "type": "paragraph",
        "text": "whether immediate action is needed to protect others."
      },
      {
        "type": "paragraph",
        "text": "Some breaches may result in immediate removal without prior warning."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Investigations",
        "id": "investigations"
      },
      {
        "type": "paragraph",
        "text": "Members are expected to cooperate honestly and in good faith with any reasonable investigation into alleged breaches of platform rules or policies."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "knowingly provide false or misleading information during an investigation;"
      },
      {
        "type": "paragraph",
        "text": "destroy or conceal relevant evidence;"
      },
      {
        "type": "paragraph",
        "text": "interfere with an investigation;"
      },
      {
        "type": "paragraph",
        "text": "retaliate against any person involved in an investigation;"
      },
      {
        "type": "paragraph",
        "text": "encourage others to provide false information; or"
      },
      {
        "type": "paragraph",
        "text": "attempt to obstruct platform moderation processes."
      },
      {
        "type": "paragraph",
        "text": "Failure to cooperate with an investigation may itself constitute a breach of these Community Guidelines and may result in moderation or enforcement action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Appeals",
        "id": "appeals"
      },
      {
        "type": "paragraph",
        "text": "Where permitted by the relevant policy, members may request a review of certain moderation or enforcement decisions."
      },
      {
        "type": "paragraph",
        "text": "An appeal should explain:"
      },
      {
        "type": "paragraph",
        "text": "the decision being challenged;"
      },
      {
        "type": "paragraph",
        "text": "why the member believes the decision should be reviewed;"
      },
      {
        "type": "paragraph",
        "text": "any relevant evidence or context; and"
      },
      {
        "type": "paragraph",
        "text": "the outcome requested."
      },
      {
        "type": "paragraph",
        "text": "Appeals must be made respectfully and in good faith."
      },
      {
        "type": "paragraph",
        "text": "Submitting an appeal does not automatically restore access or reverse a moderation decision."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Responsibilities of Moderators, Mentors and Volunteers",
        "id": "responsibilities-of-moderators-mentors-volunteers"
      },
      {
        "type": "paragraph",
        "text": "Moderators, mentors, volunteers and representatives of Mentor to Marry must uphold high standards of conduct."
      },
      {
        "type": "paragraph",
        "text": "They must:"
      },
      {
        "type": "paragraph",
        "text": "act with integrity;"
      },
      {
        "type": "paragraph",
        "text": "treat members fairly and respectfully;"
      },
      {
        "type": "paragraph",
        "text": "maintain appropriate boundaries;"
      },
      {
        "type": "paragraph",
        "text": "avoid favouritism;"
      },
      {
        "type": "paragraph",
        "text": "preserve confidentiality where appropriate;"
      },
      {
        "type": "paragraph",
        "text": "report safeguarding or serious safety concerns;"
      },
      {
        "type": "paragraph",
        "text": "avoid misuse of influence or position;"
      },
      {
        "type": "paragraph",
        "text": "act consistently with platform values and policies; and"
      },
      {
        "type": "paragraph",
        "text": "escalate concerns where required."
      },
      {
        "type": "paragraph",
        "text": "Any misuse of authority, inappropriate conduct or breach of trust by a moderator, mentor, volunteer or representative may result in removal from their role and further action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Course, Community and Live Session Conduct",
        "id": "course-community-live-session-conduct"
      },
      {
        "type": "paragraph",
        "text": "Members participating in courses, discussions, groups, live sessions or events must behave respectfully."
      },
      {
        "type": "paragraph",
        "text": "Members must not:"
      },
      {
        "type": "paragraph",
        "text": "disrupt sessions;"
      },
      {
        "type": "paragraph",
        "text": "dominate discussions;"
      },
      {
        "type": "paragraph",
        "text": "shame or embarrass others;"
      },
      {
        "type": "paragraph",
        "text": "share private disclosures without permission;"
      },
      {
        "type": "paragraph",
        "text": "record sessions without authorisation;"
      },
      {
        "type": "paragraph",
        "text": "use teaching spaces to pursue members inappropriately;"
      },
      {
        "type": "paragraph",
        "text": "promote unrelated businesses or services;"
      },
      {
        "type": "paragraph",
        "text": "undermine facilitators or mentors abusively; or"
      },
      {
        "type": "paragraph",
        "text": "use ministry spaces for manipulation, pressure or personal advantage."
      },
      {
        "type": "paragraph",
        "text": "Learning spaces should remain safe, constructive and Christ-centred."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. No Guarantee of Relationship Outcomes",
        "id": "no-guarantee-of-relationship-outcomes"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry provides teaching, mentoring, community, matching tools and opportunities for connection."
      },
      {
        "type": "paragraph",
        "text": "However, Mentor to Marry does not guarantee:"
      },
      {
        "type": "paragraph",
        "text": "profile views;"
      },
      {
        "type": "paragraph",
        "text": "likes;"
      },
      {
        "type": "paragraph",
        "text": "matches;"
      },
      {
        "type": "paragraph",
        "text": "messages;"
      },
      {
        "type": "paragraph",
        "text": "compatibility;"
      },
      {
        "type": "paragraph",
        "text": "courtship;"
      },
      {
        "type": "paragraph",
        "text": "engagement;"
      },
      {
        "type": "paragraph",
        "text": "marriage;"
      },
      {
        "type": "paragraph",
        "text": "relationship success; or"
      },
      {
        "type": "paragraph",
        "text": "any particular personal outcome."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own decisions, conduct, discernment and relationships."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Changes to These Guidelines",
        "id": "changes-to-these-guidelines"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update these Community Guidelines and Code of Conduct from time to time."
      },
      {
        "type": "paragraph",
        "text": "Where appropriate, updated versions may be published on the website or communicated through the platform."
      },
      {
        "type": "paragraph",
        "text": "Continued use of the platform after updates may be treated as acceptance of the updated Guidelines."
      },
      {
        "type": "paragraph",
        "text": "Member Commitment"
      },
      {
        "type": "paragraph",
        "text": "By using Mentor to Marry, members agree to:"
      },
      {
        "type": "paragraph",
        "text": "Respect the Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "Uphold the Platform Values & Community Principles;"
      },
      {
        "type": "paragraph",
        "text": "Follow these Community Guidelines and Code of Conduct;"
      },
      {
        "type": "paragraph",
        "text": "Treat others with dignity, kindness and respect;"
      },
      {
        "type": "paragraph",
        "text": "Provide truthful and accurate information;"
      },
      {
        "type": "paragraph",
        "text": "Respect boundaries, privacy and safety;"
      },
      {
        "type": "paragraph",
        "text": "Avoid harassment, deception, exploitation and inappropriate conduct;"
      },
      {
        "type": "paragraph",
        "text": "Report serious concerns responsibly;"
      },
      {
        "type": "paragraph",
        "text": "Accept that Mentor to Marry may moderate or restrict accounts where necessary; and"
      },
      {
        "type": "paragraph",
        "text": "Use the platform in a manner consistent with Christian values and its marriage-focused purpose."
      }
    ]
  },
  {
    "title": "Membership & Subscription Terms",
    "slug": "membership-subscription-terms",
    "description": "These Membership & Subscription Terms govern free memberships, paid memberships, premium memberships, VIP memberships, paid communities, subscription services, digital memberships,...",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "These Membership & Subscription Terms govern free memberships, paid memberships, premium memberships, VIP memberships, paid communities, subscription services, digital memberships, course memberships and any other paid access services offered by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "These Terms should be read alongside the Terms of Use, Privacy Policy, Cookie Policy, Community Guidelines & Code of Conduct, Refund & Cancellation Policy and any other applicable platform policy."
      },
      {
        "type": "paragraph",
        "text": "By purchasing, activating, renewing or using a membership, users agree to these Membership & Subscription Terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of Membership",
        "id": "purpose-of-membership"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry memberships are designed to support Christian relationship education, relationship preparation, Christian community participation, mentoring opportunities, matching services, messaging access, premium platform features, live sessions, member benefits and marriage-focused community engagement."
      },
      {
        "type": "paragraph",
        "text": "Membership does not guarantee profile views, responses, matches, compatibility, courtship, engagement, marriage or relationship success."
      },
      {
        "type": "paragraph",
        "text": "Membership fees are paid for access to platform services, educational opportunities, community participation and membership benefits. Membership fees are not payments for guaranteed outcomes, introductions, relationships, engagements or marriages."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Membership Categories",
        "id": "membership-categories"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may offer one or more membership tiers, including Free Membership, Premium Membership and VIP Membership."
      },
      {
        "type": "paragraph",
        "text": "Free Membership may include account creation, profile creation, limited profile browsing, basic community access, selected educational resources and other free services determined by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Premium Membership may include expanded profile visibility, increased profile discovery, enhanced matching features, additional messaging access, premium community spaces, member events, educational benefits and other premium services."
      },
      {
        "type": "paragraph",
        "text": "VIP Membership may include all Premium benefits, priority access features, exclusive sessions, advanced matching benefits, VIP communities, enhanced visibility and additional benefits determined by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may also create seasonal memberships, promotional memberships, ministry partner memberships, mentoring memberships, course-linked memberships, lifetime-style memberships if ever offered, or other membership tiers. Benefits may vary between tiers."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Membership Eligibility",
        "id": "membership-eligibility"
      },
      {
        "type": "paragraph",
        "text": "To purchase or maintain membership, a user must satisfy platform eligibility rules, be at least 25 years old, maintain an active account, comply with the Statement of Faith, comply with Community Guidelines, comply with Terms of Use, provide accurate information and remain in good standing on the platform."
      },
      {
        "type": "paragraph",
        "text": "Membership may be restricted, suspended or cancelled if eligibility requirements are no longer met."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Buying Membership Does Not Create Ownership Rights",
        "id": "buying-membership-does-not-create-ownership-rights"
      },
      {
        "type": "paragraph",
        "text": "Membership does not create ownership of Mentor to Marry or Love, Dating and Marriage Ministries."
      },
      {
        "type": "paragraph",
        "text": "Membership does not create voting rights, governance rights, trustee rights, leadership rights, partnership rights, agency rights, employment rights or any entitlement to organisational assets, income or decision-making."
      },
      {
        "type": "paragraph",
        "text": "Members participate as users, subscribers, learners or platform members only, according to the access rights attached to their account or membership tier."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Membership Benefits",
        "id": "membership-benefits"
      },
      {
        "type": "paragraph",
        "text": "Membership benefits may include profile discovery, matching features, messaging access, profile boosts, premium badges, exclusive content, access to courses, community spaces, live sessions, mentoring opportunities, discounts or future services."
      },
      {
        "type": "paragraph",
        "text": "Benefits may change from time to time. Mentor to Marry may introduce, modify, remove or replace benefits where reasonably necessary for operational, technical, ministry or commercial reasons."
      },
      {
        "type": "paragraph",
        "text": "No benefit should be interpreted as a guarantee of profile visibility, messages, matches, compatibility, courtship, engagement, marriage or relationship success."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Digital Services Disclaimer",
        "id": "digital-services-disclaimer"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry provides digital services, membership access, course access, community access, matching tools and other online features."
      },
      {
        "type": "paragraph",
        "text": "Membership fees are paid for access to those services and benefits, not for any guaranteed relational, emotional, spiritual, social or personal outcome."
      },
      {
        "type": "paragraph",
        "text": "Users remain responsible for their own decisions, discernment, communications, relationships and offline interactions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Subscription Periods",
        "id": "subscription-periods"
      },
      {
        "type": "paragraph",
        "text": "Memberships may be offered on monthly plans, quarterly plans, six-month plans, annual plans, promotional periods or other subscription periods determined by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "The applicable subscription period will be displayed at the point of purchase."
      },
      {
        "type": "paragraph",
        "text": "Where annual plans are offered, annual payment may provide access for the stated subscription term unless cancelled, suspended or terminated in accordance with platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Pricing",
        "id": "pricing"
      },
      {
        "type": "paragraph",
        "text": "Membership prices may vary depending on membership tier, location, promotions, currency, subscription term, introductory offers and future platform pricing structures."
      },
      {
        "type": "paragraph",
        "text": "Prices displayed at the point of purchase will normally apply to that purchase unless an obvious error has occurred."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry reserves the right to change prices for future subscription periods."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Taxes and Currency",
        "id": "taxes-currency"
      },
      {
        "type": "paragraph",
        "text": "Displayed prices may include or exclude applicable taxes depending on the user’s location, payment provider, app marketplace, payment method or applicable law."
      },
      {
        "type": "paragraph",
        "text": "Prices may be displayed in different currencies and may vary due to exchange rates, payment provider rules, tax treatment, promotions or localisation."
      },
      {
        "type": "paragraph",
        "text": "Users remain responsible for any bank charges, currency conversion charges, card issuer charges, app store charges, payment provider fees or taxes imposed by their bank, payment provider, card issuer or relevant authority."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Payments",
        "id": "payments"
      },
      {
        "type": "paragraph",
        "text": "Users agree to pay all applicable fees associated with their chosen membership."
      },
      {
        "type": "paragraph",
        "text": "Payments may be collected through card payments, online payment providers, mobile payment systems, app stores, digital wallets or other approved payment methods."
      },
      {
        "type": "paragraph",
        "text": "Payment processing may be conducted by third-party providers. Mentor to Marry may not receive or store full payment card details."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. App Store and Third-Party Marketplace Purchases",
        "id": "app-store-third-party-marketplace-purchases"
      },
      {
        "type": "paragraph",
        "text": "Where a membership, subscription or in-app purchase is made through an app store, mobile marketplace or third-party marketplace, the marketplace provider’s billing rules, subscription terms, cancellation procedures and refund processes may apply."
      },
      {
        "type": "paragraph",
        "text": "Cancellation procedures may differ depending on whether a user purchased directly from Mentor to Marry, through a payment processor or through an app marketplace."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may have limited ability to cancel, amend, refund or manage subscriptions controlled by third-party marketplaces or app stores."
      },
      {
        "type": "paragraph",
        "text": "Users should review the terms and support guidance of the relevant app store, marketplace or payment provider where applicable."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Automatic Renewal",
        "id": "automatic-renewal"
      },
      {
        "type": "paragraph",
        "text": "Where a membership is sold on a recurring subscription basis, subscriptions may renew automatically, payment methods may be charged automatically and renewal dates will normally correspond with the subscription cycle."
      },
      {
        "type": "paragraph",
        "text": "Automatic renewal information should be displayed during purchase."
      },
      {
        "type": "paragraph",
        "text": "Users remain responsible for managing their subscription settings."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Subscription Management",
        "id": "subscription-management"
      },
      {
        "type": "paragraph",
        "text": "Users may be able to upgrade memberships, downgrade memberships, cancel subscriptions, modify renewal settings or update payment methods."
      },
      {
        "type": "paragraph",
        "text": "The availability of these options may depend upon membership type, payment provider, app marketplace rules, subscription status and technical limitations."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Membership Upgrades",
        "id": "membership-upgrades"
      },
      {
        "type": "paragraph",
        "text": "Users may upgrade membership tiers where available."
      },
      {
        "type": "paragraph",
        "text": "Where permitted, additional charges may apply, upgraded benefits may begin immediately, upgraded benefits may begin on the next billing cycle, or prorated adjustments may apply."
      },
      {
        "type": "paragraph",
        "text": "The applicable approach may vary depending on the payment system used."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Membership Downgrades",
        "id": "membership-downgrades"
      },
      {
        "type": "paragraph",
        "text": "Users may downgrade memberships where available."
      },
      {
        "type": "paragraph",
        "text": "A downgrade may take effect immediately or at the end of the current billing cycle."
      },
      {
        "type": "paragraph",
        "text": "Certain premium features may become unavailable following a downgrade."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Free Trials",
        "id": "free-trials"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may offer free trials from time to time."
      },
      {
        "type": "paragraph",
        "text": "Where offered, the trial length will be specified, eligibility conditions may apply, users may need to provide payment details and subscriptions may convert automatically if not cancelled."
      },
      {
        "type": "paragraph",
        "text": "Specific trial conditions will be displayed at the time of the offer."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Promotional Offers",
        "id": "promotional-offers"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may provide discounts, introductory pricing, promotional rates, scholarships, ministry partnerships, referral incentives or limited-time offers."
      },
      {
        "type": "paragraph",
        "text": "Promotions may be withdrawn, may expire, may have eligibility conditions or may be limited in number."
      },
      {
        "type": "paragraph",
        "text": "Promotional pricing may not apply to future renewals unless expressly stated."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Messaging Access",
        "id": "messaging-access"
      },
      {
        "type": "paragraph",
        "text": "Messaging privileges may vary by membership tier."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may limit message volumes, limit contacts, restrict premium messaging features, require verification, require community participation or require completion of specific educational content."
      },
      {
        "type": "paragraph",
        "text": "Messaging access remains subject to platform moderation rules."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Matching Features",
        "id": "matching-features"
      },
      {
        "type": "paragraph",
        "text": "Membership may affect access to profile discovery, recommendations, visibility levels, likes, matching opportunities, profile boosts or future matching services."
      },
      {
        "type": "paragraph",
        "text": "No membership tier guarantees profile views, responses, matches, compatibility, communication, courtship, engagement or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Membership Badges",
        "id": "membership-badges"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may issue badges that indicate membership status, membership tier, verification status, course completion or other platform-recognised achievements."
      },
      {
        "type": "paragraph",
        "text": "Badges remain the property of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Badges may be withdrawn where they become inaccurate, where a membership ends or where a member breaches platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Failed Payments",
        "id": "failed-payments"
      },
      {
        "type": "paragraph",
        "text": "Where payment fails, access may be restricted, membership may be suspended, premium services may be withdrawn and access to certain features may cease."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may attempt to collect overdue amounts through the selected payment channel where permitted."
      },
      {
        "type": "paragraph",
        "text": "Users are responsible for keeping payment information accurate and up to date where recurring payments apply."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Temporary Suspension Pending Investigation",
        "id": "temporary-suspension-pending-investigation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may temporarily suspend some or all membership benefits while investigating allegations or concerns concerning fraud, harassment, safeguarding concerns, profile deception, financial exploitation, identity concerns, payment abuse, misuse of the platform or policy breaches."
      },
      {
        "type": "paragraph",
        "text": "A temporary suspension may restrict profile visibility, messaging, matching, community access, premium features, badges, live session access or other benefits."
      },
      {
        "type": "paragraph",
        "text": "Temporary suspension does not automatically entitle a user to a refund unless required by law or stated in the Refund & Cancellation Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Termination of Membership by User",
        "id": "termination-of-membership-by-user"
      },
      {
        "type": "paragraph",
        "text": "A user may cancel membership in accordance with these Terms, the Refund & Cancellation Policy and applicable payment provider rules."
      },
      {
        "type": "paragraph",
        "text": "Cancelling a subscription does not automatically delete a user account."
      },
      {
        "type": "paragraph",
        "text": "Users should ensure that cancellation is completed through the correct payment channel, app store, account area or support process."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Termination by Mentor to Marry",
        "id": "termination-by-mentor-to-marry"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may suspend, restrict or terminate membership where a user breaches platform policies, breaches Terms of Use, provides false information, engages in fraud, harasses other users, creates safeguarding concerns, evades enforcement actions, engages in unlawful activity or behaves inconsistently with platform values."
      },
      {
        "type": "paragraph",
        "text": "Termination may result in loss of membership benefits without compensation except where required by law."
      },
      {
        "type": "paragraph",
        "text": "Where membership is terminated for serious misconduct, fraud, safeguarding concerns or breach of platform rules, refunds may be refused where permitted by law and the Refund & Cancellation Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Changes to Membership Services",
        "id": "changes-to-membership-services"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may change membership features, change benefit structures, change subscription models, introduce new tiers, remove old tiers, change technical functionality and improve services."
      },
      {
        "type": "paragraph",
        "text": "Material changes may be communicated through the platform, email or other reasonable methods."
      },
      {
        "type": "paragraph",
        "text": "Where changes materially affect paid membership rights, Mentor to Marry will act in accordance with applicable law and the relevant subscription terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Limitation of Membership Benefits",
        "id": "limitation-of-membership-benefits"
      },
      {
        "type": "paragraph",
        "text": "Membership benefits are provided subject to platform availability, technical limitations, maintenance periods, security requirements, moderation decisions, third-party service providers and circumstances beyond reasonable control."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee uninterrupted access."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Non-Transferability and Account Sharing",
        "id": "non-transferability-account-sharing"
      },
      {
        "type": "paragraph",
        "text": "Memberships are personal to the registered user."
      },
      {
        "type": "paragraph",
        "text": "Users must not transfer membership, sell membership, share membership access, grant account access to another person or allow spouses, relatives, friends, ministry groups or other users to use their membership account."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may suspend or terminate accounts involved in unauthorised sharing, account resale or misuse of membership access."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Refunds and Cancellations",
        "id": "refunds-cancellations"
      },
      {
        "type": "paragraph",
        "text": "Refunds, cancellations and cooling-off rights are governed by the separate Refund & Cancellation Policy."
      },
      {
        "type": "paragraph",
        "text": "Users should review that document before purchasing a membership."
      },
      {
        "type": "paragraph",
        "text": "Refund availability may depend on the subscription type, payment provider, app marketplace rules, access already provided, digital content accessed, cancellation timing, applicable law and the reason for cancellation."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Changes to These Terms",
        "id": "changes-to-these-terms"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update these Membership & Subscription Terms from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the platform or communicated to members."
      },
      {
        "type": "paragraph",
        "text": "Continued use of membership services after updated terms take effect may constitute acceptance of those changes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions relating to memberships, subscriptions, renewals, billing or membership services should be directed to Mentor to Marry using the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Membership Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By purchasing, activating or using membership, you acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "membership does not guarantee relationship outcomes;"
      },
      {
        "type": "paragraph",
        "text": "membership benefits may vary by tier;"
      },
      {
        "type": "paragraph",
        "text": "subscription fees may apply;"
      },
      {
        "type": "paragraph",
        "text": "automatic renewals may apply where stated;"
      },
      {
        "type": "paragraph",
        "text": "membership benefits may change over time;"
      },
      {
        "type": "paragraph",
        "text": "messaging and matching services remain subject to platform rules;"
      },
      {
        "type": "paragraph",
        "text": "refunds are governed by the Refund & Cancellation Policy;"
      },
      {
        "type": "paragraph",
        "text": "membership does not create ownership, governance, trustee, partnership, agency or employment rights;"
      },
      {
        "type": "paragraph",
        "text": "memberships are personal and must not be shared with other users;"
      },
      {
        "type": "paragraph",
        "text": "app store or third-party marketplace subscriptions may be governed by the relevant provider’s rules;"
      },
      {
        "type": "paragraph",
        "text": "taxes, exchange rates and payment provider charges may affect the amount paid; and"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry retains discretion to manage membership services in accordance with its Terms and policies."
      }
    ]
  },
  {
    "title": "Matching Platform Terms",
    "slug": "matching-platform-terms",
    "description": "These Matching Platform Terms govern the use of matching, profile discovery, recommendations, likes, profile visibility, location-based discovery, member suggestions and related...",
    "featured": true,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "These Matching Platform Terms govern the use of matching, profile discovery, recommendations, likes, profile visibility, location-based discovery, member suggestions and related relationship connection features offered by Mentor to Marry, operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is an interdenominational Christian relationship, dating, marriage education, community and matching platform for Christians aged 25 and over."
      },
      {
        "type": "paragraph",
        "text": "These Terms should be read alongside the Statement of Faith, Platform Values & Community Principles, Community Guidelines & Code of Conduct, Terms of Use, Privacy Policy, Membership & Subscription Terms, Profile Standards Policy, Messaging & Communications Policy, Safeguarding & Community Safety Policy, Reporting & Complaints Policy and Account Suspension & Enforcement Policy."
      },
      {
        "type": "paragraph",
        "text": "By using matching, profile discovery or recommendation features, members agree to these Matching Platform Terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of Matching Features",
        "id": "purpose-of-matching-features"
      },
      {
        "type": "paragraph",
        "text": "The matching features on Mentor to Marry are intended to help Christian members discover, consider and connect with other members who may share similar values, profile information, preferences, relationship intentions or platform activity."
      },
      {
        "type": "paragraph",
        "text": "Matching features may support profile discovery, profile recommendations, likes, mutual interest, member suggestions, location-based discovery, compatibility indicators, profile visibility, filtering, tier-based recommendations, course completion recognition, badges, messaging eligibility and future app-based matching features."
      },
      {
        "type": "paragraph",
        "text": "Matching features are tools to support discovery and connection. They are not guarantees of compatibility, courtship, engagement, marriage or relationship success."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Christian and Marriage-Focused Context",
        "id": "christian-marriage-focused-context"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry operates from a Christian understanding of relationships, courtship and marriage."
      },
      {
        "type": "paragraph",
        "text": "Members using matching features are expected to identify as Christians, respect the Statement of Faith, use matching features honestly and respectfully, pursue connections in good faith, respect the marriage-focused purpose of the platform, avoid casual or deceptive use of matching features, communicate with dignity and self-control and comply with all platform policies."
      },
      {
        "type": "paragraph",
        "text": "Members must not use matching features for purposes inconsistent with the Christian identity, mission, values or marriage-focused purpose of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Eligibility for Matching Services",
        "id": "eligibility-for-matching-services"
      },
      {
        "type": "paragraph",
        "text": "To participate in matching services, members must be at least 25 years old, identify as Christian, agree to respect the Statement of Faith, comply with the Terms of Use, comply with the Community Guidelines & Code of Conduct, comply with the Profile Standards Policy, provide accurate profile information, accurately disclose sex at birth where required, accurately disclose marital status and remain in good standing on the platform."
      },
      {
        "type": "paragraph",
        "text": "For matching services, the permitted marital status categories are:"
      },
      {
        "type": "paragraph",
        "text": "Never Married;"
      },
      {
        "type": "paragraph",
        "text": "Divorced; or"
      },
      {
        "type": "paragraph",
        "text": "Widowed."
      },
      {
        "type": "paragraph",
        "text": "Married persons are not eligible to participate in matching services."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict, suspend or remove matching access where eligibility concerns arise."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Profile Information Used for Matching",
        "id": "profile-information-used-for-matching"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use profile information to support matching and recommendations."
      },
      {
        "type": "paragraph",
        "text": "This may include age, sex at birth, country, city, marital status, church or regular place of Christian fellowship, profession, profile text, relationship intentions, preferences, membership tier, course completion status, verification status, profile activity, likes, blocks, reports, interaction patterns and other information relevant to matching or safety."
      },
      {
        "type": "paragraph",
        "text": "Matching and recommendation features may change over time as the platform develops."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Matching Methods and Recommendation Transparency",
        "id": "matching-methods-recommendation-transparency"
      },
      {
        "type": "paragraph",
        "text": "Matching, recommendation and profile discovery features may be generated through automated tools, manual review, user preferences, platform rules, safety settings, membership tier, course completion status or a combination of these factors."
      },
      {
        "type": "paragraph",
        "text": "Recommendation systems may consider available profile information, user preferences, location information, membership tier, course completion status, activity patterns, likes, blocks, reports, verification status, safety settings and other platform signals."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee that any recommendation system will identify the best, most compatible or most suitable person for a member."
      },
      {
        "type": "paragraph",
        "text": "Recommendations may be affected by incomplete profile information, member behaviour, technical settings, eligibility rules, safety restrictions, membership tier, moderation action and platform development."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Location-Based Discovery",
        "id": "location-based-discovery"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use country and city-level location information to support profile discovery and recommendations."
      },
      {
        "type": "paragraph",
        "text": "Location-based discovery may help members identify other members in the same country, same city, nearby regions, preferred locations, global matches or other location-based categories offered by the platform."
      },
      {
        "type": "paragraph",
        "text": "Members should not treat location information as independently verified unless Mentor to Marry expressly states that a specific verification process has occurred."
      },
      {
        "type": "paragraph",
        "text": "Members should avoid publishing precise home addresses, workplace addresses or live location information in profiles or messages."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Membership Tier and Matching Access",
        "id": "membership-tier-matching-access"
      },
      {
        "type": "paragraph",
        "text": "Matching access may vary by membership tier. Mentor to Marry may offer different levels of access for Free members, Regular members, Premium members, VIP members or other membership categories introduced later."
      },
      {
        "type": "paragraph",
        "text": "Tier-based differences may include number of profiles shown, number of recommendations, profile visibility, search or filter access, location discovery, messaging eligibility, profile boosts, priority visibility, advanced matching tools or other features determined by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "No membership tier guarantees profile views, likes, matches, responses, communication, compatibility, courtship, engagement or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Course Completion, Onboarding and Matching Access",
        "id": "course-completion-onboarding-matching-access"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may require completion of relationship education, course modules, onboarding steps, safety guidance, verification checks or other learning content before certain matching, messaging or advanced discovery features become available."
      },
      {
        "type": "paragraph",
        "text": "This may include requiring completion before messaging access, expanded matching, premium recommendations, profile visibility, badges, app-based matching, advanced features or other member benefits."
      },
      {
        "type": "paragraph",
        "text": "Course completion, onboarding completion or safety guidance completion does not guarantee relationship readiness, compatibility, member suitability, engagement or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Likes and Mutual Interest",
        "id": "likes-mutual-interest"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may allow members to like, respond to, save, shortlist or otherwise express interest in another profile."
      },
      {
        "type": "paragraph",
        "text": "A like or expression of interest does not create any obligation, guarantee mutual interest, require a response, require messaging, require continued communication, require an offline meeting, create courtship, create exclusivity or create any relationship commitment."
      },
      {
        "type": "paragraph",
        "text": "Members must respect another member’s decision not to respond, match, continue communication or pursue a relationship."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Matches",
        "id": "matches"
      },
      {
        "type": "paragraph",
        "text": "A match may occur where the platform identifies mutual interest, recommendation suitability, profile compatibility indicators or another matching condition determined by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "A match does not mean that Mentor to Marry endorses either member, verifies compatibility, confirms character, confirms intentions, confirms spiritual maturity, confirms relationship readiness, recommends courtship, recommends engagement, approves marriage or guarantees safety."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own discernment, communication and decisions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Recommendations and Algorithms",
        "id": "recommendations-algorithms"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use automated, semi-automated or manual recommendation tools to suggest profiles."
      },
      {
        "type": "paragraph",
        "text": "Recommendations may be based on profile information, stated preferences, location information, membership tier, platform activity, likes, previous interactions, course completion status, verification status, profile completeness, safety settings, blocked users, reporting signals, engagement patterns and other relevant platform information."
      },
      {
        "type": "paragraph",
        "text": "Matching systems may exclude profiles where users have blocked each other, where safety restrictions apply, where moderation action has been taken, where preferences do not align or where platform rules prevent a recommendation."
      },
      {
        "type": "paragraph",
        "text": "Recommendation systems may change over time as Mentor to Marry improves its services."
      },
      {
        "type": "paragraph",
        "text": "Recommendations are not guarantees of compatibility, mutual interest, safety, courtship, engagement, marriage or relationship success."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Filters and Preferences",
        "id": "filters-preferences"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may allow members to set preferences or filters. Filters may include age range, country, city, marital status, church-related information, relationship intentions, willingness to relocate, membership tier, verification status, course completion status or other platform-approved filters."
      },
      {
        "type": "paragraph",
        "text": "Not all filters may be available to all members or all tiers. Some filters may be introduced, removed, limited or changed over time."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee that filters will produce complete, accurate or suitable results."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. VIP or Advanced Matching Features",
        "id": "vip-or-advanced-matching-features"
      },
      {
        "type": "paragraph",
        "text": "VIP or advanced membership features may include enhanced recommendations, expanded profile discovery, priority visibility, additional location preferences or other advanced matching tools."
      },
      {
        "type": "paragraph",
        "text": "VIP or advanced features do not guarantee better compatibility, higher relationship quality, more responses, more suitable matches, engagement, marriage or successful relationships."
      },
      {
        "type": "paragraph",
        "text": "VIP status should not be treated as an endorsement of a member’s character, intentions, suitability or relationship readiness."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Matching Limits",
        "id": "matching-limits"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may apply limits to matching features. Limits may relate to number of profiles shown, number of likes, number of matches, number of weekly recommendations, visibility limits, message eligibility, tier-based access, verification status, course completion, safety restrictions, moderation decisions or technical capacity."
      },
      {
        "type": "paragraph",
        "text": "Matching limits may change from time to time. Mentor to Marry may alter limits for operational, safety, technical, membership or platform-development reasons."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Good Faith Use of Matching Features",
        "id": "good-faith-use-of-matching-features"
      },
      {
        "type": "paragraph",
        "text": "Members must use matching features in good faith."
      },
      {
        "type": "paragraph",
        "text": "Members must not use matching features for entertainment only, to collect likes, to collect matches, to seek attention without genuine intent, to manipulate others emotionally, to create false expectations, to mislead members about relationship intentions, to pursue casual encounters, to exploit others, to solicit money, to advertise, to recruit, to harass, to test or deceive other members or for purposes inconsistent with the mission of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict or remove matching access where bad-faith use is suspected."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. No Obligation to Communicate",
        "id": "no-obligation-to-communicate"
      },
      {
        "type": "paragraph",
        "text": "Members are not required to communicate with any person simply because a profile is shown, a recommendation is made, a like is received, a match occurs, another member sends a message, the other member has paid membership, the other member is verified, the other member has completed a course, the other member has a badge or the platform suggests compatibility."
      },
      {
        "type": "paragraph",
        "text": "Silence, non-response or refusal must be respected."
      },
      {
        "type": "paragraph",
        "text": "Repeated unwanted contact may result in moderation action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Blocking and Reporting",
        "id": "blocking-reporting"
      },
      {
        "type": "paragraph",
        "text": "Members may block or report other members where platform features permit. Blocking should be respected."
      },
      {
        "type": "paragraph",
        "text": "Members must not create another account to contact someone who blocked them, ask another person to contact someone on their behalf, pressure someone to unblock them, retaliate against someone for blocking or reporting them or attempt to bypass blocking tools."
      },
      {
        "type": "paragraph",
        "text": "Reports of profile deception, harassment, fraud, safety concerns, inappropriate messaging or misuse of matching features may be reviewed under applicable platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Matching and Messaging",
        "id": "matching-messaging"
      },
      {
        "type": "paragraph",
        "text": "Matching access and messaging access are separate features. A match does not automatically guarantee messaging access."
      },
      {
        "type": "paragraph",
        "text": "Messaging may depend on membership tier, course completion, onboarding completion, safety guidance, verification status, safety settings, moderation status, message limits, account standing, feature availability or platform rules."
      },
      {
        "type": "paragraph",
        "text": "Messaging must comply with the Messaging & Communications Policy and Community Guidelines & Code of Conduct."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Safety and Matching",
        "id": "safety-matching"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use safety signals to support matching integrity."
      },
      {
        "type": "paragraph",
        "text": "Safety-related signals may include reports, blocking activity, moderation status, verification concerns, fake profile concerns, account behaviour, suspicious activity, harassment reports, fraud concerns, payment abuse, repeated policy breaches and safeguarding concerns."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may limit or remove matching access where safety concerns arise."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. False Profile or Matching Information",
        "id": "false-profile-or-matching-information"
      },
      {
        "type": "paragraph",
        "text": "Members must not provide false or misleading information to obtain matches or improve profile visibility."
      },
      {
        "type": "paragraph",
        "text": "This includes false or misleading information about age, sex at birth, marital status, location, church or regular place of Christian fellowship, identity, relationship intentions, profession, photos, verification status, course completion, membership status or personal circumstances."
      },
      {
        "type": "paragraph",
        "text": "Deliberate deception may result in account restriction, suspension or termination."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Visibility and Ranking",
        "id": "visibility-ranking"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may determine how profiles are shown, ranked, recommended or made visible."
      },
      {
        "type": "paragraph",
        "text": "Visibility may depend on factors such as membership tier, profile completeness, location, preferences, activity, safety status, verification, course completion, user settings, moderation status, algorithmic systems, platform testing or operational needs."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee equal visibility for every profile or continuous visibility to all members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Profile Availability and Visibility Changes",
        "id": "profile-availability-visibility-changes"
      },
      {
        "type": "paragraph",
        "text": "Profiles may appear, disappear, move position, become unavailable or no longer be recommended for reasons including account deletion, profile changes, membership changes, blocking, reports, safety concerns, moderation action, eligibility concerns, user preferences, technical changes or platform rules."
      },
      {
        "type": "paragraph",
        "text": "Matching systems may exclude or reduce visibility of profiles where users have blocked each other, where safety restrictions apply, where moderation action has been taken, where preferences do not align, where eligibility concerns arise or where platform rules prevent a recommendation."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee continuous profile visibility or equal exposure for all members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Badges and Matching Signals",
        "id": "badges-matching-signals"
      },
      {
        "type": "paragraph",
        "text": "Badges may indicate email verification, phone verification, identity verification, course completion, membership tier, VIP status, length of membership or other platform-recognised statuses."
      },
      {
        "type": "paragraph",
        "text": "Badges are matching signals only."
      },
      {
        "type": "paragraph",
        "text": "A badge does not mean that Mentor to Marry endorses a member, confirms compatibility, confirms character, confirms intentions, confirms relationship readiness or approves the member for courtship or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. No Endorsement of Members",
        "id": "no-endorsement-of-members"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not endorse, approve or recommend any individual member as suitable for a relationship or marriage."
      },
      {
        "type": "paragraph",
        "text": "A profile recommendation, match, like, badge, membership tier, VIP status, course completion badge or verification status should not be treated as relationship approval, pastoral approval, marriage endorsement, character endorsement, compatibility verification, relationship readiness confirmation or safety guarantee."
      },
      {
        "type": "paragraph",
        "text": "Members must exercise their own wisdom and judgment."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. No Guarantee of Outcomes",
        "id": "no-guarantee-of-outcomes"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee profile views, likes, matches, messages, responses, compatibility, chemistry, courtship, commitment, engagement, marriage, relationship success, emotional fulfilment, spiritual alignment, family approval or any particular personal outcome."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own choices, conduct, discernment and relationships."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Refunds and Matching Dissatisfaction",
        "id": "refunds-matching-dissatisfaction"
      },
      {
        "type": "paragraph",
        "text": "Dissatisfaction with recommendations, profile visibility, likes, matches, responses, messaging access, compatibility or relationship outcomes does not automatically entitle a member to a refund."
      },
      {
        "type": "paragraph",
        "text": "Refunds are governed by the Refund & Cancellation Policy."
      },
      {
        "type": "paragraph",
        "text": "Paying for Premium, VIP or other membership access does not guarantee improved relationship outcomes, specific matches, responses, engagement or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Offline Meetings",
        "id": "offline-meetings"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may facilitate online discovery and communication, but it does not supervise private offline meetings."
      },
      {
        "type": "paragraph",
        "text": "Members are responsible for their own safety and decisions when arranging or attending offline meetings."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to take time before meeting, meet in public places, inform trusted people, arrange their own transport, avoid sharing sensitive information too early, avoid financial exchanges, remain alert to pressure or manipulation, leave if they feel unsafe and report concerning behaviour."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Off-Platform Communication",
        "id": "off-platform-communication"
      },
      {
        "type": "paragraph",
        "text": "Members may choose to communicate outside Mentor to Marry. However, moving communication off-platform may reduce the ability of Mentor to Marry to review messages, apply safety tools or support investigations."
      },
      {
        "type": "paragraph",
        "text": "Members should be cautious about moving off-platform quickly."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may still take action where off-platform conduct affects member safety, concerns another member or undermines platform integrity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Suspension or Removal from Matching",
        "id": "suspension-or-removal-from-matching"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may suspend, restrict or remove access to matching features where a member breaches platform policies, provides false information, misrepresents marital status, misrepresents identity, engages in harassment, engages in catfishing, requests money or gifts, sends inappropriate messages, creates safety concerns, repeatedly violates boundaries, abuses matching features, evades enforcement or behaves inconsistently with platform values."
      },
      {
        "type": "paragraph",
        "text": "Suspension or removal from matching may occur with or without prior notice depending on the seriousness of the concern."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Changes to Matching Features",
        "id": "changes-to-matching-features"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update, modify, suspend, restrict, replace or discontinue matching features. This may include changes to recommendations, filters, likes, match limits, visibility, tier access, messaging eligibility, algorithmic features, verification requirements, badges, course completion requirements, onboarding requirements, app-based features or platform rules."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update, test, revise, replace or discontinue any matching method, recommendation logic, ranking system, visibility rule or filter at any time for safety, technical, operational, fairness, ministry, legal or platform-development reasons."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may make changes without guaranteeing that any previous matching method, visibility model, recommendation approach or filter will continue indefinitely."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "32. Privacy and Data Protection",
        "id": "privacy-data-protection"
      },
      {
        "type": "paragraph",
        "text": "Matching features may involve processing personal information in accordance with the Privacy Policy."
      },
      {
        "type": "paragraph",
        "text": "This may include profile information, preferences, location information, likes, matches, interaction activity, messaging eligibility, course completion status, verification status, safety signals and technical information."
      },
      {
        "type": "paragraph",
        "text": "Members should read the Privacy Policy to understand how personal information may be processed for matching, recommendations, safety and platform administration."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "33. Relationship Responsibility",
        "id": "relationship-responsibility"
      },
      {
        "type": "paragraph",
        "text": "Members are responsible for reviewing profiles carefully, communicating respectfully, asking appropriate questions, seeking wise counsel, exercising discernment, maintaining boundaries, taking safety precautions, deciding whether to continue communication, deciding whether to meet offline, deciding whether to enter courtship, deciding whether to pursue engagement or marriage and accepting responsibility for their own relationship decisions."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry provides tools and community support but does not make relationship decisions for members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "34. Changes to These Terms",
        "id": "changes-to-these-terms"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update these Matching Platform Terms from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Continued use of matching features after updated terms take effect may be treated as acceptance of the updated terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "35. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about these Matching Platform Terms should be directed to Mentor to Marry through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Matching Platform Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By using matching, profile discovery, recommendations, likes or related features, members acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "matching features are tools for discovery, not guarantees of relationship outcomes;"
      },
      {
        "type": "paragraph",
        "text": "matching and recommendation features may use automated, manual or hybrid processes;"
      },
      {
        "type": "paragraph",
        "text": "members must use matching features honestly and in good faith;"
      },
      {
        "type": "paragraph",
        "text": "matching access may vary by membership tier, course completion, onboarding, verification, safety settings and platform rules;"
      },
      {
        "type": "paragraph",
        "text": "course completion, badges, verification or VIP status do not amount to endorsement;"
      },
      {
        "type": "paragraph",
        "text": "a match does not create an obligation to communicate, meet or pursue a relationship;"
      },
      {
        "type": "paragraph",
        "text": "members must respect rejection, silence, blocking and boundaries;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict matching access for safety, eligibility or policy reasons;"
      },
      {
        "type": "paragraph",
        "text": "recommendations do not identify the best, most compatible or most suitable person for any member;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may change matching methods, rankings, filters and visibility rules over time;"
      },
      {
        "type": "paragraph",
        "text": "dissatisfaction with matching outcomes does not automatically create a refund entitlement;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee compatibility, courtship, engagement or marriage;"
      },
      {
        "type": "paragraph",
        "text": "members remain responsible for their own choices, discernment and conduct; and"
      },
      {
        "type": "paragraph",
        "text": "no platform can guarantee that every profile, match or offline meeting will be safe or successful."
      }
    ]
  },
  {
    "title": "Messaging & Communications Policy",
    "slug": "messaging-communications-policy",
    "description": "This Messaging & Communications Policy governs communications on Mentor to Marry, operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria.",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Messaging & Communications Policy governs communications on Mentor to Marry, operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a Christian relationship, dating, marriage education, community and matching platform for Christians aged 25 and over."
      },
      {
        "type": "paragraph",
        "text": "This Policy applies to platform messages, member-to-member communications, comments, group discussions, course discussions, community spaces, live session chat, event communications, support messages, moderation communications, safety notices, membership communications, email communications, app-based notifications where introduced and any other communication channel made available by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read alongside the Statement of Faith, Platform Values & Community Principles, Community Guidelines & Code of Conduct, Terms of Use, Privacy Policy, Membership & Subscription Terms, Safeguarding & Community Safety Policy, Profile Standards Policy, Matching Platform Terms, Reporting & Complaints Policy and Account Suspension & Enforcement Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of This Policy",
        "id": "purpose-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "The purpose of this Policy is to promote respectful communication, protect members from harassment, pressure, manipulation and exploitation, support safe relationship-building, set clear messaging standards, reduce misuse of private communication tools, clarify when communications may be reviewed, support responsible reporting and moderation, protect privacy and confidentiality, preserve the Christian identity of the platform and help members communicate in a way that honours God and respects others."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Christian Communication Standard",
        "id": "christian-communication-standard"
      },
      {
        "type": "paragraph",
        "text": "Members are expected to communicate in a way that reflects Christian character, maturity and respect."
      },
      {
        "type": "paragraph",
        "text": "Communication should be honest, kind, respectful, patient, clear, appropriate, self-controlled, non-manipulative, non-coercive and consistent with the Statement of Faith and Platform Values."
      },
      {
        "type": "paragraph",
        "text": "Members must not use communication features in a way that undermines the Christian, marriage-focused purpose of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Good Faith Communication",
        "id": "good-faith-communication"
      },
      {
        "type": "paragraph",
        "text": "Members must communicate in good faith."
      },
      {
        "type": "paragraph",
        "text": "Members must not use messaging or communication tools to waste another member’s time, collect attention or validation, manipulate emotions, create false expectations, mislead members about intentions, pursue casual encounters, pressure members into quick emotional attachment, obtain money, gifts or benefits, recruit members into external schemes, advertise unrelated services or for any purpose inconsistent with Mentor to Marry’s mission."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict communication access where bad-faith use is suspected."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. No Obligation to Respond",
        "id": "no-obligation-to-respond"
      },
      {
        "type": "paragraph",
        "text": "No member is required to respond to another member."
      },
      {
        "type": "paragraph",
        "text": "A member is not obliged to respond simply because a match has occurred, a like has been sent, a message has been received, another member has paid membership, another member is verified, another member has completed a course, another member has a badge or another member believes there is compatibility."
      },
      {
        "type": "paragraph",
        "text": "Silence, delay, refusal or non-response must be respected."
      },
      {
        "type": "paragraph",
        "text": "Repeated contact after non-response may be treated as unwanted communication."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Communication Does Not Create Exclusivity",
        "id": "communication-does-not-create-exclusivity"
      },
      {
        "type": "paragraph",
        "text": "Communication, messaging, profile likes, matches, ongoing conversation, video calls, prayer conversations, mentoring conversations or other interactions do not create exclusivity, courtship, engagement or relationship status unless both members expressly agree."
      },
      {
        "type": "paragraph",
        "text": "Members should not assume exclusivity solely because communication is ongoing."
      },
      {
        "type": "paragraph",
        "text": "Members should communicate clearly, respectfully and honestly about relationship expectations, boundaries and intentions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Communication Does Not Equal Verification",
        "id": "communication-does-not-equal-verification"
      },
      {
        "type": "paragraph",
        "text": "The ability to communicate with another member does not mean Mentor to Marry has verified the accuracy of all profile information, intentions, character, relationship readiness, church involvement or suitability of that member."
      },
      {
        "type": "paragraph",
        "text": "Members must continue to exercise wisdom, discernment and appropriate caution in all communications."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Respecting Boundaries",
        "id": "respecting-boundaries"
      },
      {
        "type": "paragraph",
        "text": "Members must respect personal boundaries."
      },
      {
        "type": "paragraph",
        "text": "Members must not continue messaging after being asked to stop, repeatedly message someone who has not responded, pressure another member to reply, demand explanations for rejection, pressure another member to move off-platform, pressure another member to meet offline, ask intrusive questions too early, shame another member for setting boundaries, retaliate after being blocked or reported, or use spiritual language to override another person’s boundaries."
      },
      {
        "type": "paragraph",
        "text": "Respecting boundaries is a core requirement of participation in Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Appropriate Messaging",
        "id": "appropriate-messaging"
      },
      {
        "type": "paragraph",
        "text": "Messages should be respectful, relationship-appropriate and consistent with the values of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Members may use messaging to introduce themselves respectfully, ask appropriate questions, discuss faith, values and relationship intentions, share appropriate personal information, build trust gradually, clarify compatibility, discuss courtship intentions, communicate respectfully about boundaries and decide whether to continue communication."
      },
      {
        "type": "paragraph",
        "text": "Members should communicate honestly and avoid creating false impressions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Prohibited Messages",
        "id": "prohibited-messages"
      },
      {
        "type": "paragraph",
        "text": "Members must not send messages that are abusive, threatening, harassing, bullying, degrading, manipulative, coercive, deceptive, exploitative, intimidating, discriminatory, fraudulent, scam-related, financially exploitative, spam-like, intrusive, retaliatory, inappropriate or inconsistent with the Christian purpose of the platform."
      },
      {
        "type": "paragraph",
        "text": "Members must not send adult, explicit, indecent, degrading or inappropriate content."
      },
      {
        "type": "paragraph",
        "text": "Members must not use messaging features to request or send inappropriate images, links or materials."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Harassment and Repeated Contact",
        "id": "harassment-repeated-contact"
      },
      {
        "type": "paragraph",
        "text": "Harassment is prohibited."
      },
      {
        "type": "paragraph",
        "text": "Harassment may include repeated unwanted messages, pressure to respond, hostile messages, insults, threats, shaming, repeated pursuit after rejection, contacting someone through another account, asking others to contact someone on your behalf, attempting to bypass blocking, retaliation after a report or using persistent communication to pressure or distress another member."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take moderation or enforcement action where harassment occurs."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Financial Requests and Exploitation",
        "id": "financial-requests-exploitation"
      },
      {
        "type": "paragraph",
        "text": "Members must not use messages or communication features to request money, gifts, loans, investments, donations, vouchers, financial assistance, business funding, personal financial support, payment details, banking details or access to another member’s financial information."
      },
      {
        "type": "paragraph",
        "text": "Members must not use romantic, emotional or spiritual pressure to obtain money or benefits."
      },
      {
        "type": "paragraph",
        "text": "Any financial request made through the platform may be treated as a serious safety concern."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Fraud, Scams and Deceptive Communication",
        "id": "fraud-scams-deceptive-communication"
      },
      {
        "type": "paragraph",
        "text": "Members must not use communication tools for romance scams, fake emergencies, false hardship stories, misleading investment opportunities, identity manipulation, catfishing, impersonation, attempts to move members off-platform for unsafe reasons or attempts to obtain personal, identity or financial information."
      },
      {
        "type": "paragraph",
        "text": "Members should report suspicious communication promptly."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Spiritual Manipulation",
        "id": "spiritual-manipulation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a Christian platform, but members must not misuse faith, Scripture, prayer, prophecy, ministry status or spiritual language to control, pressure or manipulate others."
      },
      {
        "type": "paragraph",
        "text": "Members must not claim that God has forced or guaranteed a relationship, pressure someone to accept courtship or marriage using spiritual language, shame someone for setting boundaries, use spiritual authority to demand trust, imply that refusal is disobedience to God or use religious language to silence concerns."
      },
      {
        "type": "paragraph",
        "text": "Christian communication should reflect humility, wisdom, love and respect."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Privacy and Confidentiality",
        "id": "privacy-confidentiality"
      },
      {
        "type": "paragraph",
        "text": "Members must respect the privacy of others."
      },
      {
        "type": "paragraph",
        "text": "Members must not share another member’s private messages without permission, publish screenshots of conversations, disclose another member’s contact details, expose another member’s personal circumstances, record conversations without consent where consent is required, pressure others to disclose private information, misuse information learned through the platform or use private information for harassment, manipulation, marketing or exploitation."
      },
      {
        "type": "paragraph",
        "text": "Members should avoid sharing sensitive personal, financial, identity or safety-related information too early."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Screenshots, Copies and Message Disclosure",
        "id": "screenshots-copies-message-disclosure"
      },
      {
        "type": "paragraph",
        "text": "Members should assume that messages may be copied, saved, exported, photographed, screenshotted or disclosed by other members even where platform rules prohibit misuse."
      },
      {
        "type": "paragraph",
        "text": "Members should communicate accordingly and avoid sharing information they would not be comfortable being disclosed."
      },
      {
        "type": "paragraph",
        "text": "Misuse of messages, screenshots, recordings or private communications may result in moderation or enforcement action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Contact Details and Moving Off-Platform",
        "id": "contact-details-moving-off-platform"
      },
      {
        "type": "paragraph",
        "text": "Members may choose to exchange contact details or communicate outside the platform, but they do so at their own risk."
      },
      {
        "type": "paragraph",
        "text": "Members should be cautious before moving communication to personal phone numbers, messaging apps, social media, email, video calls or offline meetings."
      },
      {
        "type": "paragraph",
        "text": "Moving off-platform may reduce the ability of Mentor to Marry to review messages, support investigations or apply safety tools."
      },
      {
        "type": "paragraph",
        "text": "Members must not pressure others to move off-platform quickly."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may still take action where off-platform communication affects member safety, concerns another member or undermines platform integrity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Messaging Access",
        "id": "messaging-access"
      },
      {
        "type": "paragraph",
        "text": "Messaging access may depend on membership tier, course completion, onboarding completion, safety guidance, verification status, matching status, account standing, moderation status, message limits, feature availability or platform rules."
      },
      {
        "type": "paragraph",
        "text": "A match does not automatically guarantee messaging access."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may change messaging access rules from time to time for safety, operational, membership, technical or platform-development reasons."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Message Limits and Feature Controls",
        "id": "message-limits-feature-controls"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may apply limits to messaging features. Limits may relate to number of messages, number of conversations, membership tier, course completion, verification status, safety concerns, moderation decisions, account age, suspected misuse or technical capacity."
      },
      {
        "type": "paragraph",
        "text": "Message limits may change from time to time."
      },
      {
        "type": "paragraph",
        "text": "No membership tier guarantees unlimited messaging unless expressly stated."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Technical Availability and Message Delivery",
        "id": "technical-availability-message-delivery"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee uninterrupted messaging services, instant delivery, notification delivery, message storage availability, continuous access to communication features or error-free communication tools."
      },
      {
        "type": "paragraph",
        "text": "Messaging services may be affected by maintenance, technical issues, device settings, internet connectivity, app store restrictions, third-party providers, moderation restrictions, account status or platform changes."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may archive, close, hide or remove inactive conversations after periods determined by the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Communication in Community Spaces",
        "id": "communication-in-community-spaces"
      },
      {
        "type": "paragraph",
        "text": "Members participating in community discussions, course groups, comments, live sessions or forums must communicate respectfully."
      },
      {
        "type": "paragraph",
        "text": "Members must not dominate discussions, shame others, mock questions, share private disclosures without permission, promote unrelated businesses, solicit money, pursue members inappropriately, argue aggressively, create division or misuse teaching or community spaces for personal advantage."
      },
      {
        "type": "paragraph",
        "text": "Community spaces should remain safe, constructive and Christ-centred."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Live Sessions and Event Chat",
        "id": "live-sessions-event-chat"
      },
      {
        "type": "paragraph",
        "text": "Where live sessions, webinars or online events include chat or communication tools, members must participate respectfully."
      },
      {
        "type": "paragraph",
        "text": "Members must not disrupt sessions, post inappropriate content, harass attendees, pursue members through event chat, share private information, record without authorisation, pressure facilitators, promote unrelated services or use live session communication tools in a way that undermines the learning environment."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may remove or restrict participants who misuse live session communication tools."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Moderator, Volunteer and Administrator Role",
        "id": "moderator-volunteer-administrator-role"
      },
      {
        "type": "paragraph",
        "text": "Moderators, volunteers and administrators may support community safety, policy compliance and platform administration."
      },
      {
        "type": "paragraph",
        "text": "Moderators, volunteers and administrators are not relationship counsellors, mediators, pastors, therapists or legal advisers and are not required to intervene in personal disagreements between members."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may choose whether and how to respond to member disputes, reports or communication concerns according to platform policies and available information."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Courtship and Marriage Decisions Remain Personal",
        "id": "courtship-marriage-decisions-remain-personal"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may facilitate introductions and communication but does not recommend, approve, encourage or direct members toward any particular courtship, engagement or marriage decision."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own communication choices, boundaries, relationship decisions, courtship decisions, engagement decisions and marriage decisions."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to seek wise counsel, pastoral support and appropriate accountability when making significant relationship decisions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Official Communications from Mentor to Marry",
        "id": "official-communications-from-mentor-to-marry"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may contact users about account matters, membership, subscriptions, billing, renewals, course access, community updates, platform changes, safety notices, reports, complaints, moderation decisions, verification, policy updates, events, newsletters where applicable and other service-related matters."
      },
      {
        "type": "paragraph",
        "text": "Users are responsible for keeping contact details accurate and up to date."
      },
      {
        "type": "paragraph",
        "text": "Service-related communications may still be sent even where a user opts out of marketing communications."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Marketing and Optional Communications",
        "id": "marketing-optional-communications"
      },
      {
        "type": "paragraph",
        "text": "Where permitted, Mentor to Marry may send newsletters, ministry updates, course updates, event information or promotional communications."
      },
      {
        "type": "paragraph",
        "text": "Users may be able to opt out of certain marketing communications."
      },
      {
        "type": "paragraph",
        "text": "Opting out of marketing communications does not prevent Mentor to Marry from sending necessary service, safety, account, legal, billing or policy-related communications."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Message Review and Moderation",
        "id": "message-review-moderation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee that member messages will be private from review in all circumstances."
      },
      {
        "type": "paragraph",
        "text": "Messages may be reviewed where a report is made, a safety concern arises, a safeguarding concern arises, fraud is suspected, harassment is alleged, policy breaches are suspected, moderation action is required, legal compliance requires review or platform integrity is at risk."
      },
      {
        "type": "paragraph",
        "text": "Message review will be handled in accordance with the Privacy Policy and applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Message Retention",
        "id": "message-retention"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain messages, message metadata, reports, moderation notes, safety records and communication records where necessary for service delivery, safety, safeguarding, fraud prevention, complaint handling, moderation, enforcement, legal compliance, dispute resolution, security or platform integrity."
      },
      {
        "type": "paragraph",
        "text": "Message retention will be handled in accordance with the Privacy Policy and any Data Retention Schedule."
      },
      {
        "type": "paragraph",
        "text": "Deleting a message or account may not immediately delete all records where retention is necessary for safety, legal, moderation or safeguarding purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Reporting Messages",
        "id": "reporting-messages"
      },
      {
        "type": "paragraph",
        "text": "Members should report messages that involve harassment, bullying, threats, manipulation, coercion, fraud, financial requests, inappropriate content, repeated unwanted contact, identity concerns, safeguarding concerns, pressure to move off-platform, pressure to meet offline, spiritual manipulation or any communication that makes a member feel unsafe."
      },
      {
        "type": "paragraph",
        "text": "Reports should be made through platform reporting tools or approved support channels."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Blocking",
        "id": "blocking"
      },
      {
        "type": "paragraph",
        "text": "Members may block other members where the feature is available. Blocking must be respected."
      },
      {
        "type": "paragraph",
        "text": "Members must not create another account to continue contact, use another person to contact the blocked member, pressure a member to unblock them, retaliate after being blocked or attempt to bypass blocking tools."
      },
      {
        "type": "paragraph",
        "text": "Attempting to evade blocking may result in account restriction or suspension."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Evidence Preservation",
        "id": "evidence-preservation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may preserve messages, reports, screenshots, account data, message metadata, moderation notes and technical information where necessary for safeguarding, safety, fraud prevention, harassment investigation, abuse investigation, enforcement, dispute resolution, legal compliance or protection of members."
      },
      {
        "type": "paragraph",
        "text": "Evidence may be preserved even where a user deletes a message, blocks another member, cancels membership or requests account deletion, where retention is necessary and lawful."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "32. Enforcement",
        "id": "enforcement"
      },
      {
        "type": "paragraph",
        "text": "Where a member breaches this Policy, Mentor to Marry may take action including reminders, warnings, message restrictions, temporary messaging suspension, permanent messaging removal, content removal, profile restriction, matching restriction, account suspension, membership termination, community removal, referral to safeguarding review, blocking re-registration or other appropriate action."
      },
      {
        "type": "paragraph",
        "text": "Serious communication breaches may result in immediate restriction or removal without prior warning."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "33. No Guarantee of Communication Outcomes",
        "id": "no-guarantee-of-communication-outcomes"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not guarantee that messages will be received, read or answered, that conversations will continue, that communication will lead to courtship, engagement or marriage, that every message will be appropriate or that every harmful communication will be detected immediately."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own communication choices and safety."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "34. No Refund for Communication Dissatisfaction",
        "id": "no-refund-for-communication-dissatisfaction"
      },
      {
        "type": "paragraph",
        "text": "Dissatisfaction with messaging access, number of messages, quality of replies, lack of replies, conversations ending, communication not progressing or relationship outcomes does not automatically entitle a member to a refund."
      },
      {
        "type": "paragraph",
        "text": "Refunds are governed by the Refund & Cancellation Policy."
      },
      {
        "type": "paragraph",
        "text": "Paid membership does not guarantee messages, responses, emotional connection, courtship, engagement or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "35. Interaction with Other Policies",
        "id": "interaction-with-other-policies"
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read together with all related Mentor to Marry policies."
      },
      {
        "type": "paragraph",
        "text": "Where a messaging or communication issue overlaps with another policy, Mentor to Marry may apply one or more relevant policies, including Terms of Use, Community Guidelines & Code of Conduct, Safeguarding & Community Safety Policy, Profile Standards Policy, Matching Platform Terms, Privacy Policy, Reporting & Complaints Policy, Account Suspension & Enforcement Policy and any internal moderation or safeguarding procedure."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "36. Changes to This Policy",
        "id": "changes-to-this-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update this Policy from time to time. Changes may be made to reflect new features, app development, safety learning, moderation experience, legal developments, user feedback, platform changes or operational needs."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the website or platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "37. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about this Policy should be directed to Mentor to Marry through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Urgent danger or emergency situations should be reported to local emergency services or appropriate authorities."
      },
      {
        "type": "paragraph",
        "text": "Messaging & Communications Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By using messaging, chat, comments, live session communication or other communication features, members acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "communication must be respectful, honest and consistent with Christian values;"
      },
      {
        "type": "paragraph",
        "text": "no member is required to respond to another member;"
      },
      {
        "type": "paragraph",
        "text": "communication does not create exclusivity, courtship, engagement or marriage;"
      },
      {
        "type": "paragraph",
        "text": "communication access does not mean Mentor to Marry has verified another member’s character, intentions or suitability;"
      },
      {
        "type": "paragraph",
        "text": "silence, rejection, blocking and boundaries must be respected;"
      },
      {
        "type": "paragraph",
        "text": "messaging must not be used for harassment, manipulation, deception or exploitation;"
      },
      {
        "type": "paragraph",
        "text": "members must not request money, gifts or financial support from other members;"
      },
      {
        "type": "paragraph",
        "text": "members must not misuse spiritual language to pressure or control others;"
      },
      {
        "type": "paragraph",
        "text": "moving off-platform may reduce Mentor to Marry’s ability to assist with safety concerns;"
      },
      {
        "type": "paragraph",
        "text": "messages may be reviewed where safety, safeguarding, fraud, moderation or legal concerns arise;"
      },
      {
        "type": "paragraph",
        "text": "messages may be copied, saved, screenshotted or disclosed by other members despite platform rules;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict messaging access where concerns arise;"
      },
      {
        "type": "paragraph",
        "text": "paid membership does not guarantee messages, responses, courtship, engagement or marriage; and"
      },
      {
        "type": "paragraph",
        "text": "members remain responsible for their own communication choices, boundaries and safety."
      }
    ]
  },
  {
    "title": "Profile Standards Policy",
    "slug": "profile-standards-policy",
    "description": "This Profile Standards Policy sets out the rules and expectations governing member profiles on Mentor to Marry.",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Profile Standards Policy sets out the rules and expectations governing member profiles on Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "The purpose of this Policy is to promote authenticity, support community safety, reduce deception, encourage meaningful connections, support trust between members, protect the integrity of the platform and complement the Safeguarding & Community Safety Policy."
      },
      {
        "type": "paragraph",
        "text": "Authentic and accurate profiles help create a safer and more trustworthy environment for relationship building and marriage-focused connections."
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read alongside the Statement of Faith, Platform Values & Community Principles, Community Guidelines & Code of Conduct, Terms of Use, Privacy Policy, Safeguarding & Community Safety Policy, Matching Platform Terms, Messaging & Communications Policy and Account Suspension & Enforcement Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of Profiles",
        "id": "purpose-of-profiles"
      },
      {
        "type": "paragraph",
        "text": "Profiles exist to help members present themselves honestly, build trust, communicate relationship intentions, engage in matching features, participate in the community, learn about potential matches and pursue Christ-centred relationships and marriage."
      },
      {
        "type": "paragraph",
        "text": "Profiles must provide a fair and accurate representation of the member."
      },
      {
        "type": "paragraph",
        "text": "Profiles must not be used to deceive, manipulate, impersonate, defraud, advertise, recruit, solicit money, promote businesses or mislead other members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Profile Ownership",
        "id": "profile-ownership"
      },
      {
        "type": "paragraph",
        "text": "Each profile must belong solely to the person operating the account."
      },
      {
        "type": "paragraph",
        "text": "Members must not create profiles for another person, a friend, a family member, a church member, a client, a spouse, a third party or a fictitious person."
      },
      {
        "type": "paragraph",
        "text": "Group profiles and joint profiles are not permitted."
      },
      {
        "type": "paragraph",
        "text": "Each user may maintain only the number of accounts specifically permitted by Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Identity and Authenticity",
        "id": "identity-authenticity"
      },
      {
        "type": "paragraph",
        "text": "Members must provide information that is substantially accurate and truthful."
      },
      {
        "type": "paragraph",
        "text": "Members must not impersonate another individual, use another person’s identity, create fake personas, create misleading accounts, use synthetic identities, falsely claim verification, misrepresent relationship intentions, misrepresent Christian beliefs, conceal material information where required by platform standards or deliberately mislead other members."
      },
      {
        "type": "paragraph",
        "text": "Authenticity is expected throughout the profile. Members must ensure that profile information remains current and accurate."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Required Profile Information",
        "id": "required-profile-information"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may require profile information including first name, age, sex at birth, marital status, country, city, church or regular place of Christian fellowship, profession, profile photographs, relationship intentions, biography information and other information determined by the platform."
      },
      {
        "type": "paragraph",
        "text": "Mandatory profile fields must be completed accurately."
      },
      {
        "type": "paragraph",
        "text": "Providing false information may result in moderation action, restriction, suspension or account removal."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Ongoing Duty to Update",
        "id": "ongoing-duty-to-update"
      },
      {
        "type": "paragraph",
        "text": "Members must update their profile promptly where material information changes."
      },
      {
        "type": "paragraph",
        "text": "Material information may include marital status, location, church or regular place of Christian fellowship, relationship intentions, eligibility for matching services, profile photograph accuracy or other information relevant to trust and safety."
      },
      {
        "type": "paragraph",
        "text": "Failure to update material information may be treated as misleading conduct where it affects member trust, safety or eligibility."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Age Requirements",
        "id": "age-requirements"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is intended only for Christians aged 25 years and over."
      },
      {
        "type": "paragraph",
        "text": "Members must enter their correct age and must not falsify age, manipulate age information, create profiles that conceal age or use another person’s age information."
      },
      {
        "type": "paragraph",
        "text": "Age misrepresentation may result in suspension or removal."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Sex at Birth",
        "id": "sex-at-birth"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may require members to provide sex at birth as a profile or eligibility field."
      },
      {
        "type": "paragraph",
        "text": "Members must provide this information truthfully where requested."
      },
      {
        "type": "paragraph",
        "text": "Members must not misrepresent sex at birth or use profile information in a way that deceives other members about identity or eligibility for matching services."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Marital Status Requirements",
        "id": "marital-status-requirements"
      },
      {
        "type": "paragraph",
        "text": "For participation in matching services, permitted marital status categories are:"
      },
      {
        "type": "paragraph",
        "text": "Never Married;"
      },
      {
        "type": "paragraph",
        "text": "Divorced; or"
      },
      {
        "type": "paragraph",
        "text": "Widowed."
      },
      {
        "type": "paragraph",
        "text": "Married persons are not eligible to participate in matching services."
      },
      {
        "type": "paragraph",
        "text": "Members must not misrepresent their marital status, conceal an existing marriage, create the impression they are unmarried if they are not, mislead members regarding eligibility for marriage or provide false relationship status information."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may treat marital status deception as a serious trust and safeguarding issue."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Christian Identity and Church Information",
        "id": "christian-identity-church-information"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a Christian platform."
      },
      {
        "type": "paragraph",
        "text": "Members must not intentionally misrepresent Christian faith, church or regular place of Christian fellowship, ministry involvement, spiritual leadership, relationship beliefs or faith commitments."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to complete faith-related and church-related profile information honestly and respectfully."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not require members to use a denominational label unless such a field is introduced later. Where church information is requested, members should provide their church or regular place of Christian fellowship truthfully."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Profile Photographs",
        "id": "profile-photographs"
      },
      {
        "type": "paragraph",
        "text": "Profile photographs should reasonably represent the member, be recent, be clear, be appropriate, be respectful, match the profile owner and support authentic engagement."
      },
      {
        "type": "paragraph",
        "text": "Members must not use another person’s photographs, celebrity photographs, stock images, AI-generated images presented as genuine photographs, heavily misleading edited photographs, organisation logos as primary profile images, deceptive photographs or images that create a false impression of identity."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may request replacement photographs."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Photograph Standards",
        "id": "photograph-standards"
      },
      {
        "type": "paragraph",
        "text": "Profile photographs must not be materially outdated, heavily filtered or altered in a misleading way, primarily feature another person, include children as the focus of the image, include another identifiable person without appropriate consent, display nudity or sexually suggestive content, display luxury items or money in a scam-like manner, include contact details, QR codes or social media handles, or be AI-generated and presented as genuine photographs."
      },
      {
        "type": "paragraph",
        "text": "Photographs must not include illegal, violent, threatening, hateful, discriminatory, harassing, fraud-related or otherwise offensive content."
      },
      {
        "type": "paragraph",
        "text": "Images should be suitable for a Christian relationship and marriage-focused environment."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Profile Biography Standards",
        "id": "profile-biography-standards"
      },
      {
        "type": "paragraph",
        "text": "Profiles should provide a truthful and respectful description of the member."
      },
      {
        "type": "paragraph",
        "text": "Profile biographies may include faith journey, interests, hobbies, values, relationship intentions, career information, ministry involvement, aspirations and other appropriate personal information."
      },
      {
        "type": "paragraph",
        "text": "Biographies must not contain deceptive claims, threats, harassment, discriminatory statements, financial solicitation, scam-related content, false credentials, misleading relationship information or prohibited content."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Relationship Intentions",
        "id": "relationship-intentions"
      },
      {
        "type": "paragraph",
        "text": "Members should describe relationship intentions honestly."
      },
      {
        "type": "paragraph",
        "text": "Members must not intentionally mislead others regarding desire for marriage, relationship readiness, relationship goals, dating intentions or long-term expectations."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is intended to support Christ-centred relationships and marriage-focused connections."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. No Financial or Business Solicitation",
        "id": "no-financial-or-business-solicitation"
      },
      {
        "type": "paragraph",
        "text": "Profiles must not be used to request money, advertise investments, promote business opportunities, solicit donations, sell products, recruit members into schemes or direct users to external financial arrangements."
      },
      {
        "type": "paragraph",
        "text": "Members must not use profile text, images, links or implied status to create financial pressure, promote scams, solicit support or exploit trust within the community."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may remove or restrict profiles that appear to be used for financial exploitation, commercial solicitation, recruitment or improper external promotion."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Prohibited Profile Content",
        "id": "prohibited-profile-content"
      },
      {
        "type": "paragraph",
        "text": "Profiles must not contain false information, fake identities, scam content, financial requests, fundraising requests, investment opportunities, business promotions, misleading claims, intimidation, threats, harassment, bullying, discriminatory content, unlawful content, impersonation, spam, repeated external links, attempts to bypass platform controls or content inconsistent with platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Contact Information and Location Privacy",
        "id": "contact-information-location-privacy"
      },
      {
        "type": "paragraph",
        "text": "Members should avoid publishing unnecessary personal contact information in profile fields."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict publication of personal telephone numbers, personal email addresses, home addresses, workplace addresses, financial information, payment details, social media handles or other sensitive information."
      },
      {
        "type": "paragraph",
        "text": "Members should not publish exact home addresses, workplace addresses, live location information or other precise location details in their profiles."
      },
      {
        "type": "paragraph",
        "text": "This helps protect privacy and safety while still allowing appropriate country and city-level location discovery where platform features permit."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Verification",
        "id": "verification"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may introduce verification processes, including profile reviews, document checks, email verification, telephone verification, identity confirmation, app-based verification or other verification measures."
      },
      {
        "type": "paragraph",
        "text": "Verification may reduce uncertainty but does not guarantee future conduct, character, sincerity, compatibility or relationship readiness."
      },
      {
        "type": "paragraph",
        "text": "Members must not falsely claim to be verified or use badges, language or profile statements to mislead others about verification status."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Profile Reviews and Moderation",
        "id": "profile-reviews-moderation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review profiles after publication, following reports, during moderation checks, during investigations, or where automated or manual checks indicate a possible concern."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not currently require routine moderator review of every profile before publication unless that process is introduced later."
      },
      {
        "type": "paragraph",
        "text": "Profile reviews may be conducted to assess compliance with this Policy, Community Guidelines, Terms of Use, Safeguarding rules and other platform policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Profile Changes",
        "id": "profile-changes"
      },
      {
        "type": "paragraph",
        "text": "Members may update profiles from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updates must remain accurate, truthful, respectful and compliant with platform rules."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may request corrections where information appears inaccurate, misleading or incomplete."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Reporting Profile Concerns",
        "id": "reporting-profile-concerns"
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to report profiles that appear to involve false identity, fake photographs, impersonation, deception, misleading marital status, fraudulent activity, scams, inappropriate content, safeguarding concerns or policy breaches."
      },
      {
        "type": "paragraph",
        "text": "Reports will be assessed in accordance with applicable platform procedures."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Profile Signals Are Not Endorsements",
        "id": "profile-signals-are-not-endorsements"
      },
      {
        "type": "paragraph",
        "text": "A published profile, membership badge, verification badge, course completion badge, profile visibility, recommendation, like or match does not mean that Mentor to Marry endorses the member, verifies compatibility, confirms character, guarantees relationship readiness or approves the member as suitable for courtship or marriage."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for exercising wisdom, discernment and appropriate caution when interacting with others."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Enforcement",
        "id": "enforcement"
      },
      {
        "type": "paragraph",
        "text": "Where a profile breaches this Policy, Mentor to Marry may request edits, remove content, restrict profile visibility, require profile verification, suspend profile functionality, pause matching features, restrict messaging, suspend membership, terminate accounts or take other proportionate action."
      },
      {
        "type": "paragraph",
        "text": "Serious deception, identity fraud, marital status deception, catfishing, financial exploitation or safeguarding concerns may result in immediate action without prior warning."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. No Guarantee",
        "id": "no-guarantee"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry encourages authenticity and may undertake moderation and verification activities."
      },
      {
        "type": "paragraph",
        "text": "However, Mentor to Marry does not guarantee that all profiles are accurate, all profile information is truthful, all photographs are genuine, all members are sincere, all members are compatible or all relationships will be successful."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for exercising wisdom, discernment and appropriate caution."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Changes to This Policy",
        "id": "changes-to-this-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update this Policy from time to time. Revisions may occur due to platform development, safeguarding requirements, operational needs, user feedback, technological developments, legal developments or governance improvements."
      },
      {
        "type": "paragraph",
        "text": "Updated policies may be published on the website or platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions relating to this Policy may be directed to Mentor to Marry through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Profile Standards Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By creating or maintaining a profile, you acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "profiles must be substantially accurate and truthful;"
      },
      {
        "type": "paragraph",
        "text": "profile photographs must represent the profile owner;"
      },
      {
        "type": "paragraph",
        "text": "sex at birth must be provided truthfully where requested;"
      },
      {
        "type": "paragraph",
        "text": "marital status must be disclosed honestly;"
      },
      {
        "type": "paragraph",
        "text": "only Never Married, Divorced or Widowed members may participate in matching services;"
      },
      {
        "type": "paragraph",
        "text": "church or regular place of Christian fellowship information should be truthful;"
      },
      {
        "type": "paragraph",
        "text": "fake profiles, impersonation and catfishing are prohibited;"
      },
      {
        "type": "paragraph",
        "text": "profiles must not be used for financial or business solicitation;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review or moderate profiles after publication, following reports or where concerns arise;"
      },
      {
        "type": "paragraph",
        "text": "verification, badges, profile publication, matches or recommendations do not amount to endorsement by Mentor to Marry;"
      },
      {
        "type": "paragraph",
        "text": "deceptive profiles may be restricted or removed; and"
      },
      {
        "type": "paragraph",
        "text": "members remain responsible for exercising wisdom and caution when interacting with others."
      }
    ]
  },
  {
    "title": "Platform Values & Community Principles",
    "slug": "platform-values-community-principles",
    "description": "Mentor to Marry is a global interdenominational Christian relationship, dating and marriage platform operated by Love, Dating and Marriage Ministries.",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating and marriage platform operated by Love, Dating and Marriage Ministries."
      },
      {
        "type": "paragraph",
        "text": "These Platform Values and Community Principles establish the culture, expectations and standards that underpin every aspect of the platform. They apply to all members, moderators, volunteers, mentors, contributors and representatives of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "These principles should be read alongside the:"
      },
      {
        "type": "paragraph",
        "text": "Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "Terms of Use;"
      },
      {
        "type": "paragraph",
        "text": "Community Guidelines & Code of Conduct;"
      },
      {
        "type": "paragraph",
        "text": "Membership Policies; and"
      },
      {
        "type": "paragraph",
        "text": "Other governance documents of the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Our Purpose",
        "id": "our-purpose"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry exists to help Christians build healthy, Christ-centred relationships and marriages through:"
      },
      {
        "type": "paragraph",
        "text": "Biblical teaching;"
      },
      {
        "type": "paragraph",
        "text": "Mentoring;"
      },
      {
        "type": "paragraph",
        "text": "Community;"
      },
      {
        "type": "paragraph",
        "text": "Accountability;"
      },
      {
        "type": "paragraph",
        "text": "Relationship education; and"
      },
      {
        "type": "paragraph",
        "text": "Meaningful Christian connection."
      },
      {
        "type": "paragraph",
        "text": "We seek to create an environment where members can grow spiritually, emotionally and relationally while pursuing marriage in a manner that honours God."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Christ at the Centre",
        "id": "christ-at-the-centre"
      },
      {
        "type": "paragraph",
        "text": "We believe that Jesus Christ should be at the centre of every aspect of life, including relationships, courtship and marriage."
      },
      {
        "type": "paragraph",
        "text": "Our teaching, community culture, mentoring programmes and matching services are designed to encourage members to pursue Christ first and to build relationships on biblical foundations."
      },
      {
        "type": "paragraph",
        "text": "We encourage members to seek God's wisdom, guidance and direction in all relationship decisions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Biblical Truth",
        "id": "biblical-truth"
      },
      {
        "type": "paragraph",
        "text": "We believe that the Bible provides the foundation for faith, conduct, relationships and marriage."
      },
      {
        "type": "paragraph",
        "text": "While members may come from different Christian traditions, Mentor to Marry seeks to promote principles that are rooted in Scripture and consistent with its Statement of Faith."
      },
      {
        "type": "paragraph",
        "text": "We are committed to applying biblical truth with both conviction and grace."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Christian Character",
        "id": "christian-character"
      },
      {
        "type": "paragraph",
        "text": "We believe that healthy relationships are built upon character."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to demonstrate:"
      },
      {
        "type": "paragraph",
        "text": "Integrity;"
      },
      {
        "type": "paragraph",
        "text": "Honesty;"
      },
      {
        "type": "paragraph",
        "text": "Humility;"
      },
      {
        "type": "paragraph",
        "text": "Faithfulness;"
      },
      {
        "type": "paragraph",
        "text": "Kindness;"
      },
      {
        "type": "paragraph",
        "text": "Respect;"
      },
      {
        "type": "paragraph",
        "text": "Patience;"
      },
      {
        "type": "paragraph",
        "text": "Self-control;"
      },
      {
        "type": "paragraph",
        "text": "Compassion; and"
      },
      {
        "type": "paragraph",
        "text": "Accountability."
      },
      {
        "type": "paragraph",
        "text": "We expect all interactions on the platform to reflect these values."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Integrity and Authenticity",
        "id": "integrity-authenticity"
      },
      {
        "type": "paragraph",
        "text": "Trust is essential in any Christian relationship."
      },
      {
        "type": "paragraph",
        "text": "We expect members to be truthful and authentic in all aspects of their participation."
      },
      {
        "type": "paragraph",
        "text": "Members should accurately represent:"
      },
      {
        "type": "paragraph",
        "text": "Their identity;"
      },
      {
        "type": "paragraph",
        "text": "Their age;"
      },
      {
        "type": "paragraph",
        "text": "Their sex at birth;"
      },
      {
        "type": "paragraph",
        "text": "Their marital status;"
      },
      {
        "type": "paragraph",
        "text": "Their church or regular place of Christian fellowship;"
      },
      {
        "type": "paragraph",
        "text": "Their profession;"
      },
      {
        "type": "paragraph",
        "text": "Their location; and"
      },
      {
        "type": "paragraph",
        "text": "Other material profile information."
      },
      {
        "type": "paragraph",
        "text": "Authenticity builds trust and helps create a safer and healthier community."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Respect for Others",
        "id": "respect-for-others"
      },
      {
        "type": "paragraph",
        "text": "Every person is created in the image of God and must be treated with dignity and respect."
      },
      {
        "type": "paragraph",
        "text": "Members should:"
      },
      {
        "type": "paragraph",
        "text": "Communicate respectfully;"
      },
      {
        "type": "paragraph",
        "text": "Listen graciously;"
      },
      {
        "type": "paragraph",
        "text": "Disagree respectfully;"
      },
      {
        "type": "paragraph",
        "text": "Avoid personal attacks; and"
      },
      {
        "type": "paragraph",
        "text": "Demonstrate Christian love in all interactions."
      },
      {
        "type": "paragraph",
        "text": "Abusive behaviour, bullying, intimidation, manipulation and degrading treatment of others are incompatible with the values of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Christian Community",
        "id": "christian-community"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is more than a matching platform."
      },
      {
        "type": "paragraph",
        "text": "We seek to foster:"
      },
      {
        "type": "paragraph",
        "text": "Fellowship;"
      },
      {
        "type": "paragraph",
        "text": "Friendship;"
      },
      {
        "type": "paragraph",
        "text": "Spiritual growth;"
      },
      {
        "type": "paragraph",
        "text": "Mentorship;"
      },
      {
        "type": "paragraph",
        "text": "Encouragement;"
      },
      {
        "type": "paragraph",
        "text": "Accountability; and"
      },
      {
        "type": "paragraph",
        "text": "Mutual support."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to contribute positively to the community and to help create a safe, welcoming and uplifting environment for others."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Christian Unity",
        "id": "christian-unity"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is an interdenominational Christian platform."
      },
      {
        "type": "paragraph",
        "text": "We welcome members from different churches, traditions and backgrounds who affirm the Christian faith."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to show grace and respect where differences arise on secondary theological matters."
      },
      {
        "type": "paragraph",
        "text": "The platform exists to unite believers around shared faith, healthy relationships and Christ-centred marriage rather than to promote division or denominational disputes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Marriage-Focused Relationships",
        "id": "marriage-focused-relationships"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry exists to support Christians who are seeking meaningful relationships that may lead to marriage."
      },
      {
        "type": "paragraph",
        "text": "We encourage members to pursue relationships:"
      },
      {
        "type": "paragraph",
        "text": "Prayerfully;"
      },
      {
        "type": "paragraph",
        "text": "Wisely;"
      },
      {
        "type": "paragraph",
        "text": "Honestly;"
      },
      {
        "type": "paragraph",
        "text": "Respectfully; and"
      },
      {
        "type": "paragraph",
        "text": "In accordance with biblical principles."
      },
      {
        "type": "paragraph",
        "text": "We believe that marriage is a sacred covenant established by God and intended for the lifelong union of one man and one woman."
      },
      {
        "type": "paragraph",
        "text": "Members should therefore approach relationships with sincerity, integrity and genuine intent."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Purity and Honour",
        "id": "purity-honour"
      },
      {
        "type": "paragraph",
        "text": "We seek to cultivate a culture of honour, purity and respect."
      },
      {
        "type": "paragraph",
        "text": "Members should conduct themselves in a manner that reflects biblical values and appropriate relationship boundaries."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry maintains a zero-tolerance approach towards:"
      },
      {
        "type": "paragraph",
        "text": "Pornography;"
      },
      {
        "type": "paragraph",
        "text": "Sexually explicit content;"
      },
      {
        "type": "paragraph",
        "text": "Nude or explicit images;"
      },
      {
        "type": "paragraph",
        "text": "Sexually explicit messaging;"
      },
      {
        "type": "paragraph",
        "text": "Sexual harassment;"
      },
      {
        "type": "paragraph",
        "text": "Exploitation;"
      },
      {
        "type": "paragraph",
        "text": "Coercive conduct; and"
      },
      {
        "type": "paragraph",
        "text": "Predatory behaviour."
      },
      {
        "type": "paragraph",
        "text": "We encourage members to pursue relationships with honour, self-control and mutual respect."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Accountability",
        "id": "accountability"
      },
      {
        "type": "paragraph",
        "text": "Healthy Christian relationships flourish within a framework of accountability."
      },
      {
        "type": "paragraph",
        "text": "We encourage members to:"
      },
      {
        "type": "paragraph",
        "text": "Remain connected to a local church;"
      },
      {
        "type": "paragraph",
        "text": "Seek pastoral guidance;"
      },
      {
        "type": "paragraph",
        "text": "Seek wise counsel;"
      },
      {
        "type": "paragraph",
        "text": "Maintain godly accountability; and"
      },
      {
        "type": "paragraph",
        "text": "Involve trusted mentors where appropriate."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry provides tools, community and support, but members remain responsible for their personal decisions and conduct."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Relationship Readiness",
        "id": "relationship-readiness"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is founded on the belief that healthy marriages are built upon healthy individuals."
      },
      {
        "type": "paragraph",
        "text": "We believe that successful Christian relationships require spiritual maturity, emotional maturity, personal responsibility and a willingness to grow."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to invest in:"
      },
      {
        "type": "paragraph",
        "text": "Spiritual growth;"
      },
      {
        "type": "paragraph",
        "text": "Christian discipleship;"
      },
      {
        "type": "paragraph",
        "text": "Emotional wellbeing;"
      },
      {
        "type": "paragraph",
        "text": "Personal development;"
      },
      {
        "type": "paragraph",
        "text": "Financial stewardship;"
      },
      {
        "type": "paragraph",
        "text": "Healthy communication skills; and"
      },
      {
        "type": "paragraph",
        "text": "Relationship education."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry's teaching, mentoring and educational resources are designed to support members in becoming relationship-ready and marriage-ready individuals."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Personal Responsibility",
        "id": "personal-responsibility"
      },
      {
        "type": "paragraph",
        "text": "Members are responsible for:"
      },
      {
        "type": "paragraph",
        "text": "Their own behaviour;"
      },
      {
        "type": "paragraph",
        "text": "Their communications;"
      },
      {
        "type": "paragraph",
        "text": "Their profile content;"
      },
      {
        "type": "paragraph",
        "text": "Their relationship decisions; and"
      },
      {
        "type": "paragraph",
        "text": "Their interactions both online and offline."
      },
      {
        "type": "paragraph",
        "text": "While Mentor to Marry provides introductions, matching services and opportunities for connection, members remain responsible for exercising wisdom and discernment in all relationships."
      },
      {
        "type": "paragraph",
        "text": "The platform does not guarantee compatibility, relationship success, engagement or marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Service and Selflessness",
        "id": "service-selflessness"
      },
      {
        "type": "paragraph",
        "text": "We believe that Christian relationships should reflect the servant-hearted example of Jesus Christ."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to pursue relationships characterised by:"
      },
      {
        "type": "paragraph",
        "text": "Humility;"
      },
      {
        "type": "paragraph",
        "text": "Generosity;"
      },
      {
        "type": "paragraph",
        "text": "Sacrifice;"
      },
      {
        "type": "paragraph",
        "text": "Patience;"
      },
      {
        "type": "paragraph",
        "text": "Compassion;"
      },
      {
        "type": "paragraph",
        "text": "Encouragement; and"
      },
      {
        "type": "paragraph",
        "text": "A sincere desire to serve and support others."
      },
      {
        "type": "paragraph",
        "text": "We reject relationship behaviours rooted in manipulation, selfish gain, entitlement or exploitation."
      },
      {
        "type": "paragraph",
        "text": "Healthy Christian relationships flourish where both individuals seek to love and serve one another in a manner consistent with biblical teaching."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Safety",
        "id": "safety"
      },
      {
        "type": "paragraph",
        "text": "The safety and wellbeing of members is a priority."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to:"
      },
      {
        "type": "paragraph",
        "text": "Respect personal boundaries;"
      },
      {
        "type": "paragraph",
        "text": "Use reporting features responsibly;"
      },
      {
        "type": "paragraph",
        "text": "Report inappropriate conduct;"
      },
      {
        "type": "paragraph",
        "text": "Exercise caution when meeting others;"
      },
      {
        "type": "paragraph",
        "text": "Respect moderation decisions; and"
      },
      {
        "type": "paragraph",
        "text": "Help maintain a safe environment for all users."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry reserves the right to investigate alleged misconduct and take appropriate action where necessary."
      },
      {
        "type": "paragraph",
        "text": "Members must not use the platform to:"
      },
      {
        "type": "paragraph",
        "text": "Exploit others emotionally;"
      },
      {
        "type": "paragraph",
        "text": "Solicit money, gifts or financial support;"
      },
      {
        "type": "paragraph",
        "text": "Misrepresent relationship intentions;"
      },
      {
        "type": "paragraph",
        "text": "Engage in fraudulent or deceptive conduct;"
      },
      {
        "type": "paragraph",
        "text": "Manipulate, pressure or coerce other members;"
      },
      {
        "type": "paragraph",
        "text": "Create false expectations for personal gain; or"
      },
      {
        "type": "paragraph",
        "text": "Abuse the trust of members within the community."
      },
      {
        "type": "paragraph",
        "text": "Such conduct is inconsistent with the values of Mentor to Marry and may result in moderation action, suspension or removal from the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Service and Excellence",
        "id": "service-excellence"
      },
      {
        "type": "paragraph",
        "text": "We are committed to pursuing excellence in:"
      },
      {
        "type": "paragraph",
        "text": "Teaching;"
      },
      {
        "type": "paragraph",
        "text": "Mentoring;"
      },
      {
        "type": "paragraph",
        "text": "Community building;"
      },
      {
        "type": "paragraph",
        "text": "Safety;"
      },
      {
        "type": "paragraph",
        "text": "Governance;"
      },
      {
        "type": "paragraph",
        "text": "Member experience; and"
      },
      {
        "type": "paragraph",
        "text": "Christian service."
      },
      {
        "type": "paragraph",
        "text": "We encourage members to pursue excellence in character, communication and relationships."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Stewardship",
        "id": "stewardship"
      },
      {
        "type": "paragraph",
        "text": "We believe that relationships, opportunities, time, talents, finances and influence are gifts entrusted to us by God."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to exercise wisdom and stewardship in the way they:"
      },
      {
        "type": "paragraph",
        "text": "Conduct themselves on the platform;"
      },
      {
        "type": "paragraph",
        "text": "Pursue relationships;"
      },
      {
        "type": "paragraph",
        "text": "Communicate with others;"
      },
      {
        "type": "paragraph",
        "text": "Use platform resources; and"
      },
      {
        "type": "paragraph",
        "text": "Represent the Christian faith."
      },
      {
        "type": "paragraph",
        "text": "Healthy Christian relationships should demonstrate responsibility, maturity, good judgement and a commitment to honouring God in all things."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Platform Commitments",
        "id": "platform-commitments"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is committed to:"
      },
      {
        "type": "paragraph",
        "text": "Faithfulness: remaining rooted in biblical principles."
      },
      {
        "type": "paragraph",
        "text": "Integrity: operating honestly and transparently."
      },
      {
        "type": "paragraph",
        "text": "Safety: providing a safe and respectful environment."
      },
      {
        "type": "paragraph",
        "text": "Accountability: maintaining appropriate governance and oversight."
      },
      {
        "type": "paragraph",
        "text": "Community: building meaningful Christian connections."
      },
      {
        "type": "paragraph",
        "text": "Stewardship: using resources responsibly to advance our mission."
      },
      {
        "type": "paragraph",
        "text": "Excellence: continually improving the platform and member experience."
      },
      {
        "type": "paragraph",
        "text": "Member Commitment"
      },
      {
        "type": "paragraph",
        "text": "By joining Mentor to Marry, members commit to:"
      },
      {
        "type": "paragraph",
        "text": "Respecting the Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "Upholding these Platform Values and Community Principles;"
      },
      {
        "type": "paragraph",
        "text": "Treating others with dignity and respect;"
      },
      {
        "type": "paragraph",
        "text": "Providing truthful information;"
      },
      {
        "type": "paragraph",
        "text": "Participating honestly and in good faith;"
      },
      {
        "type": "paragraph",
        "text": "Developing personal character and relationship readiness in a manner consistent with Christian values;"
      },
      {
        "type": "paragraph",
        "text": "Conducting themselves in a manner consistent with Christian values; and"
      },
      {
        "type": "paragraph",
        "text": "Supporting the mission of Mentor to Marry."
      }
    ]
  },
  {
    "title": "Statement of Faith",
    "slug": "statement-of-faith",
    "description": "Mentor to Marry is a global interdenominational Christian relationship, dating and marriage platform operated by Love, Dating and Marriage Ministries, a non-profit organisation...",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating and marriage platform operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry exists to equip Christians for healthy relationships, wise courtship and Christ-centred marriages through biblical teaching, mentoring, community, accountability and meaningful connection."
      },
      {
        "type": "paragraph",
        "text": "This Statement of Faith establishes the biblical beliefs, values and principles that underpin the platform, its services, community standards, educational content, mentoring programmes and matching services."
      },
      {
        "type": "paragraph",
        "text": "By joining the platform, members acknowledge and agree to respect and abide by this Statement of Faith."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. The Holy Scriptures",
        "id": "the-holy-scriptures"
      },
      {
        "type": "paragraph",
        "text": "We believe that the Holy Bible, consisting of the Old and New Testaments, is the inspired, authoritative and trustworthy Word of God."
      },
      {
        "type": "paragraph",
        "text": "We believe that Scripture is the final authority for Christian faith, conduct, relationships, marriage and discipleship."
      },
      {
        "type": "paragraph",
        "text": "We seek to apply biblical principles faithfully and responsibly throughout Mentor to Marry's teachings, services and community life."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. God",
        "id": "god"
      },
      {
        "type": "paragraph",
        "text": "We believe in one God, eternally existing in three Persons:"
      },
      {
        "type": "paragraph",
        "text": "God the Father;"
      },
      {
        "type": "paragraph",
        "text": "God the Son; and"
      },
      {
        "type": "paragraph",
        "text": "God the Holy Spirit."
      },
      {
        "type": "paragraph",
        "text": "We believe that these three Persons are equal in power, glory and authority and together constitute the one true God."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Jesus Christ",
        "id": "jesus-christ"
      },
      {
        "type": "paragraph",
        "text": "We believe that Jesus Christ is the Son of God, fully God and fully man."
      },
      {
        "type": "paragraph",
        "text": "We believe that:"
      },
      {
        "type": "paragraph",
        "text": "He was conceived by the Holy Spirit;"
      },
      {
        "type": "paragraph",
        "text": "He was born of the Virgin Mary;"
      },
      {
        "type": "paragraph",
        "text": "He lived a sinless life;"
      },
      {
        "type": "paragraph",
        "text": "He died for the sins of humanity;"
      },
      {
        "type": "paragraph",
        "text": "He rose bodily from the dead;"
      },
      {
        "type": "paragraph",
        "text": "He ascended into heaven; and"
      },
      {
        "type": "paragraph",
        "text": "He will return again in glory."
      },
      {
        "type": "paragraph",
        "text": "We believe that Jesus Christ is Lord and Saviour and the only mediator between God and humanity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Salvation",
        "id": "salvation"
      },
      {
        "type": "paragraph",
        "text": "We believe that salvation is the free gift of God, available through faith in Jesus Christ."
      },
      {
        "type": "paragraph",
        "text": "We believe that every person stands in need of God's grace and forgiveness."
      },
      {
        "type": "paragraph",
        "text": "We believe that salvation is received through repentance and faith and not through human effort, merit or works."
      },
      {
        "type": "paragraph",
        "text": "We believe that all believers are called to continual spiritual growth and Christ-like living."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. The Holy Spirit",
        "id": "the-holy-spirit"
      },
      {
        "type": "paragraph",
        "text": "We believe that the Holy Spirit indwells, guides, teaches, equips and empowers believers."
      },
      {
        "type": "paragraph",
        "text": "We believe that the Holy Spirit enables Christians to develop spiritual maturity, wisdom, self-control and Christ-like character."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Human Dignity",
        "id": "human-dignity"
      },
      {
        "type": "paragraph",
        "text": "We believe that every human being is created in the image of God and therefore possesses inherent dignity, worth and value."
      },
      {
        "type": "paragraph",
        "text": "We are committed to treating all people with kindness, respect, compassion and honour."
      },
      {
        "type": "paragraph",
        "text": "Harassment, bullying, intimidation, abuse and degrading treatment of others are inconsistent with Christian teaching and are not permitted within the Mentor to Marry community."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. God's Design for Humanity",
        "id": "god-s-design-for-humanity"
      },
      {
        "type": "paragraph",
        "text": "We believe that God created humanity as male and female."
      },
      {
        "type": "paragraph",
        "text": "We believe that biological sex forms part of God's created design."
      },
      {
        "type": "paragraph",
        "text": "We believe that men and women possess equal dignity, equal value and equal worth before God."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry's educational content, matching framework, community standards and relationship guidance are founded upon this biblical understanding of humanity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. The Church",
        "id": "the-church"
      },
      {
        "type": "paragraph",
        "text": "We believe that the Church is the body of Christ consisting of all believers."
      },
      {
        "type": "paragraph",
        "text": "We encourage members to be actively involved in a Bible-believing local church where they can worship, serve, receive discipleship and be accountable to other Christians."
      },
      {
        "type": "paragraph",
        "text": "As an interdenominational platform, Mentor to Marry welcomes Christians from different church traditions who affirm the essential truths of the Christian faith and engage respectfully with other believers."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Christian Unity",
        "id": "christian-unity"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is an interdenominational Christian platform that welcomes believers from different church traditions and backgrounds."
      },
      {
        "type": "paragraph",
        "text": "We recognise that faithful Christians may hold differing views on certain secondary theological matters, including church governance, baptism, spiritual gifts, communion and other non-essential doctrines."
      },
      {
        "type": "paragraph",
        "text": "While members may differ on such issues, all members are expected to engage with one another in a spirit of Christian love, humility, grace and mutual respect."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not intended to serve as a forum for theological division or denominational disputes but as a community united around the essential truths of the Christian faith and a shared desire to honour God in relationships and marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Relationships, Courtship and Marriage",
        "id": "relationships-courtship-marriage"
      },
      {
        "type": "paragraph",
        "text": "We believe that relationships should honour God and reflect biblical values."
      },
      {
        "type": "paragraph",
        "text": "We believe that healthy Christ-centred relationships are characterised by:"
      },
      {
        "type": "paragraph",
        "text": "Faith;"
      },
      {
        "type": "paragraph",
        "text": "Love;"
      },
      {
        "type": "paragraph",
        "text": "Integrity;"
      },
      {
        "type": "paragraph",
        "text": "Honesty;"
      },
      {
        "type": "paragraph",
        "text": "Commitment;"
      },
      {
        "type": "paragraph",
        "text": "Mutual respect;"
      },
      {
        "type": "paragraph",
        "text": "Self-control;"
      },
      {
        "type": "paragraph",
        "text": "Accountability;"
      },
      {
        "type": "paragraph",
        "text": "Faithfulness; and"
      },
      {
        "type": "paragraph",
        "text": "Emotional maturity."
      },
      {
        "type": "paragraph",
        "text": "We believe that marriage is a sacred covenant established by God and ordained for the lifelong union of one man and one woman."
      },
      {
        "type": "paragraph",
        "text": "We believe that marriage is intended to reflect Gods love, faithfulness, commitment, sacrifice and mutual support."
      },
      {
        "type": "paragraph",
        "text": "We believe that courtship and romantic relationships should be pursued prayerfully, responsibly and in accordance with biblical principles."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry exists to support Christians in developing healthy Christ-centred relationships that may lead to marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Christian Accountability",
        "id": "christian-accountability"
      },
      {
        "type": "paragraph",
        "text": "We believe that healthy Christian relationships flourish within a framework of discipleship, accountability and local church community."
      },
      {
        "type": "paragraph",
        "text": "We encourage members to seek wisdom, prayer, pastoral support and godly counsel throughout the course of their relationships and decision-making."
      },
      {
        "type": "paragraph",
        "text": "While Mentor to Marry provides teaching, mentoring, community and opportunities for connection, members remain responsible for their own decisions and are encouraged to involve trusted spiritual mentors, church leaders and accountability partners where appropriate."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Christian Connection and Matching",
        "id": "christian-connection-matching"
      },
      {
        "type": "paragraph",
        "text": "We believe that meaningful relationships are ultimately guided by God, prayer, wisdom and personal responsibility."
      },
      {
        "type": "paragraph",
        "text": "The matching, recommendation and introduction services provided by Mentor to Marry are intended to facilitate connections between Christians who share similar values, beliefs and relationship goals."
      },
      {
        "type": "paragraph",
        "text": "These tools are designed to support relationship discovery and community engagement but do not guarantee:"
      },
      {
        "type": "paragraph",
        "text": "Compatibility;"
      },
      {
        "type": "paragraph",
        "text": "Mutual interest;"
      },
      {
        "type": "paragraph",
        "text": "Courtship;"
      },
      {
        "type": "paragraph",
        "text": "Engagement;"
      },
      {
        "type": "paragraph",
        "text": "Marriage; or"
      },
      {
        "type": "paragraph",
        "text": "Relationship success."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to exercise wisdom, discernment and prayerful consideration in all interactions and relationship decisions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Christian Character",
        "id": "christian-character"
      },
      {
        "type": "paragraph",
        "text": "We believe that followers of Christ are called to demonstrate:"
      },
      {
        "type": "paragraph",
        "text": "Love;"
      },
      {
        "type": "paragraph",
        "text": "Integrity;"
      },
      {
        "type": "paragraph",
        "text": "Humility;"
      },
      {
        "type": "paragraph",
        "text": "Honesty;"
      },
      {
        "type": "paragraph",
        "text": "Respect;"
      },
      {
        "type": "paragraph",
        "text": "Purity;"
      },
      {
        "type": "paragraph",
        "text": "Compassion;"
      },
      {
        "type": "paragraph",
        "text": "Kindness;"
      },
      {
        "type": "paragraph",
        "text": "Forgiveness;"
      },
      {
        "type": "paragraph",
        "text": "Faithfulness; and"
      },
      {
        "type": "paragraph",
        "text": "Self-control."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to display these qualities in their interactions with other members both online and offline."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Integrity and Truthfulness",
        "id": "integrity-truthfulness"
      },
      {
        "type": "paragraph",
        "text": "We believe that trust is essential to healthy relationships."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to provide truthful and accurate information concerning:"
      },
      {
        "type": "paragraph",
        "text": "Their identity;"
      },
      {
        "type": "paragraph",
        "text": "Their age;"
      },
      {
        "type": "paragraph",
        "text": "Their sex at birth;"
      },
      {
        "type": "paragraph",
        "text": "Their marital status;"
      },
      {
        "type": "paragraph",
        "text": "Their church or regular place of Christian fellowship;"
      },
      {
        "type": "paragraph",
        "text": "Their location; and"
      },
      {
        "type": "paragraph",
        "text": "Other material profile information."
      },
      {
        "type": "paragraph",
        "text": "Impersonation, deception, catfishing, fraudulent conduct and deliberate misrepresentation are incompatible with the values of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Purity and Conduct",
        "id": "purity-conduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry seeks to foster an environment that honours God and promotes healthy Christian relationships."
      },
      {
        "type": "paragraph",
        "text": "The platform maintains a zero-tolerance approach to:"
      },
      {
        "type": "paragraph",
        "text": "Pornography;"
      },
      {
        "type": "paragraph",
        "text": "Explicit sexual content;"
      },
      {
        "type": "paragraph",
        "text": "Nude or sexually explicit images;"
      },
      {
        "type": "paragraph",
        "text": "Sexually explicit messaging;"
      },
      {
        "type": "paragraph",
        "text": "Sexual harassment;"
      },
      {
        "type": "paragraph",
        "text": "Exploitation;"
      },
      {
        "type": "paragraph",
        "text": "Abuse;"
      },
      {
        "type": "paragraph",
        "text": "Fraud;"
      },
      {
        "type": "paragraph",
        "text": "Catfishing; and"
      },
      {
        "type": "paragraph",
        "text": "Predatory behaviour."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to maintain appropriate boundaries and communicate in a manner that reflects Christian values and respect for others."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Membership Principles",
        "id": "membership-principles"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a Christian platform designed for Christians seeking Christ-centred relationships and marriage."
      },
      {
        "type": "paragraph",
        "text": "Participation in the platform is restricted to individuals who:"
      },
      {
        "type": "paragraph",
        "text": "Are at least 25 years of age;"
      },
      {
        "type": "paragraph",
        "text": "Identify as Christians;"
      },
      {
        "type": "paragraph",
        "text": "Agree to respect this Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "Agree to comply with the Terms of Use and Community Guidelines; and"
      },
      {
        "type": "paragraph",
        "text": "Provide accurate profile information and membership details."
      },
      {
        "type": "paragraph",
        "text": "Membership is intended for Christians seeking Christ-centred relationships and marriage. Members must participate honestly, respectfully and in good faith and must not use the platform for casual encounters, deceptive purposes, financial exploitation, harassment or activities inconsistent with the Mission, Values and Statement of Faith of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "For participation in matching services, members must accurately disclose their marital status."
      },
      {
        "type": "paragraph",
        "text": "Permitted marital status categories are:"
      },
      {
        "type": "paragraph",
        "text": "Never Married;"
      },
      {
        "type": "paragraph",
        "text": "Divorced; or"
      },
      {
        "type": "paragraph",
        "text": "Widowed."
      },
      {
        "type": "paragraph",
        "text": "Misrepresentation of marital status or identity may result in suspension or permanent removal from the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Our Mission",
        "id": "our-mission"
      },
      {
        "type": "paragraph",
        "text": "Our mission is to equip Christians worldwide for healthy relationships, wise courtship and Christ-centred marriages by combining:"
      },
      {
        "type": "paragraph",
        "text": "Biblical teaching;"
      },
      {
        "type": "paragraph",
        "text": "Mentoring;"
      },
      {
        "type": "paragraph",
        "text": "Accountability;"
      },
      {
        "type": "paragraph",
        "text": "Christian community;"
      },
      {
        "type": "paragraph",
        "text": "Relationship education; and"
      },
      {
        "type": "paragraph",
        "text": "Meaningful connection opportunities."
      },
      {
        "type": "paragraph",
        "text": "We seek to cultivate a global Christian community where singles can grow in faith, character, emotional maturity and relationship readiness while pursuing marriage in a manner that honours God."
      },
      {
        "type": "paragraph",
        "text": "Through education, mentoring, community and matching services, we aim to help members build relationships founded upon biblical principles, mutual respect, shared faith and Christian commitment."
      },
      {
        "type": "paragraph",
        "text": "Member Affirmation"
      },
      {
        "type": "paragraph",
        "text": "By creating an account, purchasing a membership, enrolling on a course or otherwise participating in Mentor to Marry, members confirm that they:"
      },
      {
        "type": "paragraph",
        "text": "Identify as Christians;"
      },
      {
        "type": "paragraph",
        "text": "Are aged 25 years or over;"
      },
      {
        "type": "paragraph",
        "text": "Have read this Statement of Faith;"
      },
      {
        "type": "paragraph",
        "text": "Agree to respect and uphold its principles;"
      },
      {
        "type": "paragraph",
        "text": "Accept that Mentor to Marry operates from a biblical understanding of relationships, human identity and marriage;"
      },
      {
        "type": "paragraph",
        "text": "Agree that marriage is a covenant between one man and one woman;"
      },
      {
        "type": "paragraph",
        "text": "Will provide truthful information regarding their identity and marital status; and"
      },
      {
        "type": "paragraph",
        "text": "Will comply with all platform policies, terms, guidelines and standards."
      }
    ]
  },
  {
    "title": "Safeguarding & Community Safety Policy",
    "slug": "safeguarding-community-safety-policy",
    "description": "This Safeguarding & Community Safety Policy sets out how Mentor to Marry, operated by Love, Dating and Marriage Ministries, seeks to promote member safety, reduce risk, respond to...",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Safeguarding & Community Safety Policy sets out how Mentor to Marry, operated by Love, Dating and Marriage Ministries, seeks to promote member safety, reduce risk, respond to safeguarding concerns and protect the integrity of its Christian relationship, dating, marriage education, community and matching platform."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian platform for Christians aged 25 and over. The platform may include relationship education, community participation, member profiles, matching features, messaging access, live sessions, courses, mentoring resources, location-based discovery and future app-based services."
      },
      {
        "type": "paragraph",
        "text": "Because Mentor to Marry facilitates interaction between adults who may form personal, romantic or marriage-focused connections, safeguarding and community safety are central to the operation of the platform."
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read alongside the Statement of Faith, Platform Values & Community Principles, Community Guidelines & Code of Conduct, Terms of Use, Privacy Policy, Membership & Subscription Terms, Refund & Cancellation Policy, Profile Standards Policy, Matching Platform Terms, Messaging & Communications Policy, Reporting & Complaints Policy, Account Suspension & Enforcement Policy and any internal safeguarding, moderation or incident procedures adopted by Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of This Policy",
        "id": "purpose-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "The purpose of this Policy is to promote a safe and respectful Christian community, reduce the risk of harm, abuse, exploitation, deception and misconduct, provide a framework for responding to safeguarding concerns, clarify expectations for members and representatives, support responsible moderation and escalation, protect members from fraudulent or predatory conduct, support appropriate responses to reports and complaints, encourage safe online and offline interactions, preserve the integrity of Mentor to Marry and ensure that safety concerns are treated seriously and responsibly."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Scope of This Policy",
        "id": "scope-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "This Policy applies to all users, members, free members, paid members, Premium members, VIP members, moderators, mentors, volunteers, course facilitators, live session hosts, contributors, representatives, contractors, administrators and anyone acting on behalf of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "It applies to conduct occurring through the website, community spaces, member profiles, matching features, likes and recommendations, messaging features, course areas, live sessions, mentoring spaces, comments and discussions, reports and complaints, future app-based services and any other Mentor to Marry service or communication channel."
      },
      {
        "type": "paragraph",
        "text": "It may also apply to off-platform conduct where that conduct affects member safety, concerns another member, creates a safeguarding concern, involves fraud, abuse, harassment, exploitation or coercion, or undermines the trust and integrity of the community."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Safeguarding Principles",
        "id": "safeguarding-principles"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry’s safeguarding approach is based on safety, dignity, prevention, accountability, transparency, proportionality, confidentiality and Christian character."
      },
      {
        "type": "paragraph",
        "text": "The safety and wellbeing of members is a priority. Every person should be treated with dignity, respect and compassion. Preventing harm is better than responding after harm has occurred. Members are responsible for their conduct and must comply with platform rules. Members should understand how to report concerns and what action may be taken. Responses should be appropriate to the nature, seriousness and risk of the concern. Safeguarding information should be handled carefully and shared only where appropriate. Safeguarding responses should reflect integrity, truthfulness, wisdom, justice, compassion and care."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Designated Safety Lead",
        "id": "designated-safety-lead"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may appoint a Designated Safety Lead, Safeguarding Lead or equivalent responsible person to oversee safeguarding and community safety matters."
      },
      {
        "type": "paragraph",
        "text": "The Designated Safety Lead may be responsible for reviewing serious concerns, coordinating internal escalation, advising moderators or volunteers, maintaining safeguarding records, recommending protective action and ensuring concerns are handled in accordance with this Policy and related procedures."
      },
      {
        "type": "paragraph",
        "text": "Where no named Safety Lead has yet been appointed, safeguarding and serious safety concerns may be reviewed by the authorised leadership team of Love, Dating and Marriage Ministries or such persons as may be designated for that purpose."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Adult-Only Platform",
        "id": "adult-only-platform"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is intended only for users aged 25 years and over. Users must not create an account if they are under 25."
      },
      {
        "type": "paragraph",
        "text": "If Mentor to Marry becomes aware that a person under 25 has created an account or is attempting to use the platform, action may be taken, including account restriction, account suspension, account removal, blocking future registration, removal from communities, deletion or retention of data as appropriate under the Privacy Policy and further review if safeguarding concerns arise."
      },
      {
        "type": "paragraph",
        "text": "The platform is not intended for children or persons under 25."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Christian and Marriage-Focused Context",
        "id": "christian-marriage-focused-context"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is an interdenominational Christian platform for Christians seeking Christ-centred relationships and marriage."
      },
      {
        "type": "paragraph",
        "text": "Safety on the platform includes protecting members from deceptive relationship conduct, misuse of spiritual language, manipulation, pressure, harassment, coercion, financial exploitation, fraud, fake profiles, catfishing, inappropriate communication, misuse of mentoring spaces and conduct inconsistent with the Statement of Faith, Platform Values and Community Guidelines."
      },
      {
        "type": "paragraph",
        "text": "Members must not exploit the Christian identity of the platform to pressure, control, shame, deceive or manipulate others."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. What We Mean by Safeguarding",
        "id": "what-we-mean-by-safeguarding"
      },
      {
        "type": "paragraph",
        "text": "For the purposes of this Policy, safeguarding means taking reasonable steps to prevent harm, reduce risk, respond to safety concerns, protect members from abuse, exploitation, deception and misconduct, manage reports responsibly, escalate serious concerns appropriately, support safe use of the platform, protect vulnerable or at-risk members where concerns are identified and preserve a safe and respectful Christian community."
      },
      {
        "type": "paragraph",
        "text": "Safeguarding does not mean that Mentor to Marry can guarantee that every user is safe, truthful, compatible, sincere or suitable for a relationship or marriage. Members remain responsible for exercising wisdom, caution, discernment and personal responsibility."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Community Safety Risks",
        "id": "community-safety-risks"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry recognises that relationship, dating, community and matching platforms may involve risks including fake profiles, misleading identity information, misrepresentation of marital status, harassment, repeated unwanted contact, bullying, coercive or controlling behaviour, emotional manipulation, spiritual manipulation, financial exploitation, romance scams, requests for money, gifts or financial support, inappropriate messages, boundary violations, pressure to move off-platform too quickly, pressure to meet offline, unsafe offline meetings, misuse of screenshots or private information, impersonation, stalking-like behaviour, exploitative use of trust, abuse of moderator, mentor or volunteer influence and retaliation against reporters or complainants."
      },
      {
        "type": "paragraph",
        "text": "This list is not exhaustive."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Member Responsibilities",
        "id": "member-responsibilities"
      },
      {
        "type": "paragraph",
        "text": "Members are expected to treat others with dignity and respect, provide truthful profile information, accurately disclose marital status, respect boundaries, use reporting and blocking tools responsibly, avoid pressuring others, avoid manipulative conduct, avoid financial requests to other members, communicate appropriately, use platform features in good faith, report serious concerns promptly, take care when sharing personal information, exercise caution when moving communication off-platform, exercise caution when arranging offline meetings, comply with moderation decisions and act in accordance with the Statement of Faith, Platform Values and Community Guidelines."
      },
      {
        "type": "paragraph",
        "text": "Members must not assume that Mentor to Marry has verified every aspect of another member’s identity, character, intentions, church involvement, suitability or relationship readiness."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Mentor to Marry’s Safety Commitments",
        "id": "mentor-to-marry-s-safety-commitments"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to provide clear community standards, provide reporting routes, allow blocking where available, review safety concerns, respond proportionately to reports, restrict or remove harmful users where appropriate, address fake profiles and deceptive behaviour, address harassment, fraud and exploitation, support safe community participation, maintain appropriate records, protect confidential information where appropriate, train or guide moderators, mentors and volunteers where relevant, escalate serious concerns where necessary and review safety arrangements as the platform develops."
      },
      {
        "type": "paragraph",
        "text": "These commitments are subject to operational capacity, available evidence, applicable law and the nature of the service being provided."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Internal Escalation Levels",
        "id": "internal-escalation-levels"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may categorise safeguarding and community safety concerns by seriousness to support proportionate action."
      },
      {
        "type": "paragraph",
        "text": "Low-level concerns may include minor discourtesy, unclear profile concerns, mild boundary issues or first-time low-level complaints. Possible action may include reminders, guidance, monitoring or requests for clarification."
      },
      {
        "type": "paragraph",
        "text": "Medium-level concerns may include repeated unwanted contact, inappropriate messaging, misleading profile information or persistent boundary issues. Possible action may include warnings, feature restrictions, profile changes or enhanced monitoring."
      },
      {
        "type": "paragraph",
        "text": "High-level concerns may include harassment, catfishing, financial pressure, suspected fake identity, repeated policy breaches or misuse of spiritual influence. Possible action may include suspension, investigation, safeguarding review, messaging restrictions or profile removal."
      },
      {
        "type": "paragraph",
        "text": "Urgent or serious concerns may include threats, credible risk of harm, exploitation, romance scams, safeguarding emergencies, suspected underage use, serious abuse or coercive conduct. Possible action may include immediate suspension, evidence preservation, internal escalation, contacting affected users where appropriate and referral to relevant authorities where required by law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Reporting Safety Concerns",
        "id": "reporting-safety-concerns"
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to report concerns promptly. Concerns may include harassment, bullying, fake profiles, catfishing, fraud, scam behaviour, misleading profile information, inappropriate messages, repeated unwanted contact, financial requests, coercive behaviour, threatening behaviour, pressure to meet offline, misuse of spiritual language, abuse of trust, safeguarding concerns, suspected underage use, identity concerns, privacy breaches, moderator or mentor misconduct or any conduct that makes a member feel unsafe."
      },
      {
        "type": "paragraph",
        "text": "Reports should be made through the platform’s reporting tools or approved support channels."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Emergency Situations",
        "id": "emergency-situations"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not an emergency service."
      },
      {
        "type": "paragraph",
        "text": "Where a person believes that they or someone else is in immediate danger, they should contact local emergency services or relevant authorities in their location."
      },
      {
        "type": "paragraph",
        "text": "Members should not rely on Mentor to Marry as a substitute for emergency services, police, medical services, mental health crisis services, safeguarding authorities, legal advice, counselling, pastoral care, family support or professional intervention."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take protective action on the platform where it becomes aware of serious safety concerns, but it cannot guarantee immediate emergency intervention."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Serious Safety Concerns",
        "id": "serious-safety-concerns"
      },
      {
        "type": "paragraph",
        "text": "Where Mentor to Marry reasonably believes that a member may pose a risk to another member, the community, themselves or the platform, it may take protective action."
      },
      {
        "type": "paragraph",
        "text": "This may include restricting account access, limiting communication features, pausing messaging, removing content, hiding or restricting a profile, suspending an account, terminating membership, blocking re-registration, initiating safeguarding procedures, conducting enhanced review, preserving relevant records, contacting the affected member where appropriate, requesting further information, escalating internally or referring matters to appropriate authorities where required by law."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may act without prior warning where immediate action is considered necessary."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Evidence Preservation",
        "id": "evidence-preservation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may preserve relevant records, messages, reports, screenshots, account information, moderation notes and technical information where necessary to investigate safeguarding concerns, fraud, harassment, abuse, enforcement issues or legal matters."
      },
      {
        "type": "paragraph",
        "text": "Evidence may be preserved even where a user deletes content, blocks another member, cancels membership or requests account deletion, where retention is necessary for safety, legal, moderation, fraud prevention or safeguarding purposes."
      },
      {
        "type": "paragraph",
        "text": "Records will be handled in accordance with the Privacy Policy, applicable law and relevant data retention arrangements."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Fraud, Scams and Financial Exploitation",
        "id": "fraud-scams-financial-exploitation"
      },
      {
        "type": "paragraph",
        "text": "Members must not use Mentor to Marry to obtain money, gifts, loans, investment, business opportunities, donations, financial assistance or other benefits from other members."
      },
      {
        "type": "paragraph",
        "text": "Members should be cautious of urgent financial requests, emotional pressure, requests to keep matters secret, attempts to move communication off-platform quickly, inconsistent personal stories, refusal to verify identity where reasonably expected, requests for financial details, requests involving third-party accounts, unrealistic offers, investment opportunities and pressure to send money, vouchers, gifts or financial support."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict or remove accounts involved in suspected financial exploitation, romance scams or fraudulent activity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Harassment, Bullying and Boundary Violations",
        "id": "harassment-bullying-boundary-violations"
      },
      {
        "type": "paragraph",
        "text": "Harassment, bullying and boundary violations are prohibited."
      },
      {
        "type": "paragraph",
        "text": "This may include repeated unwanted messages, continued contact after rejection, continued contact after blocking, intimidating conduct, humiliating comments, shaming, threats, manipulation, coercion, aggressive pursuit, misuse of private information, retaliation for reporting, pressuring someone to share private details, pressuring someone to meet, pressuring someone into a relationship or using spiritual language to control, shame or manipulate."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take action where such conduct occurs through the platform or affects the safety and integrity of the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Misrepresentation, Catfishing and Fake Profiles",
        "id": "misrepresentation-catfishing-fake-profiles"
      },
      {
        "type": "paragraph",
        "text": "Members must provide truthful and accurate profile information."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may treat fake profiles, impersonation, use of another person’s photograph, misleading photographs, false age, false marital status, false location, false church or fellowship information, hidden relationship status, deceptive relationship intentions, identity manipulation, repeated creation of new accounts or attempts to evade verification or enforcement as serious safety concerns."
      },
      {
        "type": "paragraph",
        "text": "Misrepresentation may result in suspension, account termination or permanent removal."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Messaging Safety",
        "id": "messaging-safety"
      },
      {
        "type": "paragraph",
        "text": "Messaging must be respectful, appropriate and consistent with the Community Guidelines."
      },
      {
        "type": "paragraph",
        "text": "Members must not use messaging to harass, threaten, manipulate, coerce, solicit money, pressure, deceive, exploit, send inappropriate content, request inappropriate content, shame another member, misuse spiritual language, continue contact after refusal, evade blocking or move members off-platform for unsafe purposes."
      },
      {
        "type": "paragraph",
        "text": "Members should report concerning messages promptly."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review messages where reports, safety concerns, fraud concerns, safeguarding concerns, complaints or policy breaches arise, in accordance with the Privacy Policy and related policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Offline Meeting Safety",
        "id": "offline-meeting-safety"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may facilitate introductions, matching and communication, but members are responsible for their own decisions when meeting offline."
      },
      {
        "type": "paragraph",
        "text": "Members are encouraged to take time before meeting in person, speak within the platform first where appropriate, tell a trusted person where they are going, meet in a public place initially, arrange their own transport, avoid sharing home addresses too early, keep control of personal documents and finances, avoid sending money, maintain personal boundaries, seek wise counsel, listen to concerns from trusted friends or family, leave if they feel unsafe and report concerning behaviour."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not supervise private offline meetings and does not guarantee that any meeting will be safe, appropriate, successful or relationship-forming."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Off-Platform Conduct",
        "id": "off-platform-conduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry recognises that relationships formed through the platform may continue outside the platform."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review or act on off-platform conduct where that conduct affects member safety, concerns another member, creates safeguarding concerns, involves harassment, abuse, fraud, exploitation or coercion, involves threats, involves financial exploitation, undermines community trust, creates legal or reputational risk or is inconsistent with platform policies."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not required to investigate every private or off-platform dispute but may act where safety, trust or community integrity may be affected."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Vulnerable or At-Risk Members",
        "id": "vulnerable-or-at-risk-members"
      },
      {
        "type": "paragraph",
        "text": "Although Mentor to Marry is an adult-only platform for users aged 25 and over, some adults may be more vulnerable or at risk because of personal circumstances."
      },
      {
        "type": "paragraph",
        "text": "Risk factors may include emotional distress, bereavement, isolation, financial pressure, relationship breakdown, disability, health concerns, mental health concerns, immigration or relocation pressures, language barriers, lack of support networks, spiritual manipulation, previous abuse or trauma or dependency on another member."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry cannot identify every vulnerability, but where concerns are raised, it may take steps to reduce risk and protect platform safety."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Safeguarding in Teaching, Courses and Live Sessions",
        "id": "safeguarding-in-teaching-courses-live-sessions"
      },
      {
        "type": "paragraph",
        "text": "Courses, mentoring spaces, community discussions and live sessions should remain safe, constructive and Christ-centred."
      },
      {
        "type": "paragraph",
        "text": "Members, mentors, facilitators and volunteers must not shame or humiliate others, pressure members to disclose private information, misuse spiritual influence, pursue members inappropriately through teaching spaces, make promises about relationship outcomes, encourage dependence on a mentor or facilitator, share private disclosures without proper reason, record sessions without permission, use teaching spaces for manipulation or advantage or ignore serious safety concerns."
      },
      {
        "type": "paragraph",
        "text": "Facilitators, mentors and volunteers must escalate safeguarding or serious safety concerns in accordance with platform procedures."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Moderator, Mentor and Volunteer Duties",
        "id": "moderator-mentor-volunteer-duties"
      },
      {
        "type": "paragraph",
        "text": "Moderators, mentors, volunteers and representatives must uphold high standards of behaviour."
      },
      {
        "type": "paragraph",
        "text": "They must act with integrity, treat members fairly, maintain appropriate boundaries, avoid favouritism, avoid private misuse of influence, avoid conflicts of interest, preserve confidentiality where appropriate, report serious concerns, escalate safeguarding matters, avoid retaliatory conduct, avoid personal exploitation of members, follow platform policies and cooperate with internal reviews."
      },
      {
        "type": "paragraph",
        "text": "Any misuse of authority, trust or influence may result in removal from role and further action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Confidentiality and Information Sharing",
        "id": "confidentiality-information-sharing"
      },
      {
        "type": "paragraph",
        "text": "Safeguarding information should be handled carefully."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may share safeguarding-related information internally or externally where necessary to protect a member, protect the community, prevent harm, investigate concerns, respond to complaints, comply with legal duties, enforce platform policies, manage risk, support moderation, respond to authorities or protect the rights and safety of others."
      },
      {
        "type": "paragraph",
        "text": "Confidentiality cannot be guaranteed where there is a serious safety concern, legal requirement, safeguarding issue, fraud concern or risk of harm."
      },
      {
        "type": "paragraph",
        "text": "Personal information will be handled in accordance with the Privacy Policy and applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Recording Safeguarding Concerns",
        "id": "recording-safeguarding-concerns"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may keep records of safeguarding concerns, reports, complaints, moderation actions, investigations, decisions and outcomes."
      },
      {
        "type": "paragraph",
        "text": "Records may include date of concern, person reporting, member involved, nature of concern, evidence provided, action taken, safety assessment, escalation decision, outcome, review decision and follow-up action."
      },
      {
        "type": "paragraph",
        "text": "Records should be handled securely and retained in accordance with the Privacy Policy, Data Retention Schedule and applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Protective Actions",
        "id": "protective-actions"
      },
      {
        "type": "paragraph",
        "text": "Depending on the concern, Mentor to Marry may take protective action including warning a member, restricting profile visibility, restricting messaging, removing content, pausing matching access, suspending membership, suspending community access, removing a member from a group, cancelling a live session invitation, restricting course community access, requiring verification, requesting clarification, escalating to a safeguarding lead or designated reviewer, terminating an account, blocking re-registration or taking other action considered appropriate."
      },
      {
        "type": "paragraph",
        "text": "Protective action may be taken before a final decision is made where immediate risk management is necessary."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. False, Malicious or Misleading Reports",
        "id": "false-malicious-or-misleading-reports"
      },
      {
        "type": "paragraph",
        "text": "Members must not knowingly submit false, malicious or misleading reports."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry recognises that some reports may be difficult to prove and that genuine concerns may be raised in good faith even where evidence is incomplete."
      },
      {
        "type": "paragraph",
        "text": "Deliberately false or malicious reports may result in moderation or enforcement action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Retaliation",
        "id": "retaliation"
      },
      {
        "type": "paragraph",
        "text": "Retaliation is prohibited."
      },
      {
        "type": "paragraph",
        "text": "Members must not retaliate against any person because they made a report, supported a report, provided information, blocked another member, refused communication, cooperated with an investigation, raised a safeguarding concern or appealed a decision."
      },
      {
        "type": "paragraph",
        "text": "Members must not retaliate against Mentor to Marry, moderators, mentors, volunteers, complainants or affected members because of a safeguarding review, restriction, warning, suspension, report or enforcement decision."
      },
      {
        "type": "paragraph",
        "text": "Retaliation may result in account restriction, suspension or termination."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Safer Use Guidance",
        "id": "safer-use-guidance"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry encourages members to use the platform wisely."
      },
      {
        "type": "paragraph",
        "text": "Members should take time to know others gradually, keep early communication within the platform where possible, avoid sharing sensitive personal information too quickly, avoid sending money or gifts, be cautious of urgent emotional requests, pay attention to inconsistencies, use blocking and reporting tools, seek wise counsel, maintain accountability, meet offline carefully and publicly, tell trusted people about offline meetings, report suspicious behaviour and leave situations that feel unsafe."
      },
      {
        "type": "paragraph",
        "text": "These suggestions do not guarantee safety but are intended to support wise and responsible use of the platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "32. No Guarantee of Safety or Relationship Outcomes",
        "id": "no-guarantee-of-safety-or-relationship-outcomes"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to promote safety and respond to concerns appropriately, but it cannot guarantee that every profile is genuine, every member is truthful, every interaction is safe, every message is appropriate, every report will be proven, every harmful user will be identified immediately, every offline meeting will be safe, every member is suitable for a relationship, every match is compatible, every relationship will succeed or any member will marry."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own decisions, discernment, communications and relationships."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "33. Interaction with Other Policies",
        "id": "interaction-with-other-policies"
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read alongside all related Mentor to Marry policies."
      },
      {
        "type": "paragraph",
        "text": "Where a safeguarding concern overlaps with other policies, Mentor to Marry may apply one or more relevant policies, including Terms of Use, Community Guidelines & Code of Conduct, Profile Standards Policy, Messaging & Communications Policy, Matching Platform Terms, Reporting & Complaints Policy, Account Suspension & Enforcement Policy, Privacy Policy, Data Retention Policy and internal safeguarding procedures."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "34. Review of This Policy",
        "id": "review-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review and update this Policy from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updates may be made to reflect platform development, changes in law, changes in features, safety learning, user reports, moderation experience, safeguarding incidents, app development, emerging risks, operational needs and governance improvements."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the website or platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "35. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions or concerns about this Policy should be directed to Mentor to Marry or Love, Dating and Marriage Ministries through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Urgent danger or emergency situations should be reported to local emergency services or appropriate authorities."
      },
      {
        "type": "paragraph",
        "text": "Safeguarding & Community Safety Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By using Mentor to Marry, members acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry seeks to promote a safe Christian relationship and marriage-focused community;"
      },
      {
        "type": "paragraph",
        "text": "members remain responsible for their own decisions and interactions;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not an emergency service;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry does not supervise private offline meetings;"
      },
      {
        "type": "paragraph",
        "text": "members must report serious concerns promptly;"
      },
      {
        "type": "paragraph",
        "text": "members must not harass, exploit, deceive, pressure or manipulate others;"
      },
      {
        "type": "paragraph",
        "text": "members must not request money, gifts or financial support from other members;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take protective action where safety concerns arise;"
      },
      {
        "type": "paragraph",
        "text": "safeguarding information may be shared where necessary to protect users or comply with law;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may preserve relevant records where necessary for safeguarding, safety, fraud prevention, enforcement or legal purposes; and"
      },
      {
        "type": "paragraph",
        "text": "no platform can guarantee that every interaction, profile, match or offline meeting will be safe or successful."
      }
    ]
  },
  {
    "title": "Data Retention & Deletion Policy",
    "slug": "data-retention-deletion-policy",
    "description": "This Data Retention & Deletion Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, retains, reviews, deletes, anonymises and preserves personal...",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Data Retention & Deletion Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, retains, reviews, deletes, anonymises and preserves personal information and platform records."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating, marriage education, community and matching platform for Christians aged 25 and over."
      },
      {
        "type": "paragraph",
        "text": "This Policy supports the responsible handling of information connected with account registration, member profiles, matching features, messaging features, community participation, course access, live sessions, safeguarding concerns, reports and complaints, moderation, payments and subscriptions, verification, platform security, legal compliance and platform administration."
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read alongside the Privacy Policy, Terms of Use, Membership & Subscription Terms, Refund & Cancellation Policy, Safeguarding & Community Safety Policy, Profile Standards Policy, Matching Platform Terms, Messaging & Communications Policy, Reporting & Complaints Policy, Account Suspension & Enforcement Policy and any internal data protection, safeguarding or moderation procedures adopted by Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of This Policy",
        "id": "purpose-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "The purpose of this Policy is to explain how long information may be kept, support privacy and data protection compliance, reduce unnecessary retention of personal information, support safe deletion or anonymisation, preserve records where needed for safety, safeguarding or legal purposes, support consistent handling of account deletion requests, protect members and the platform from fraud, abuse and misuse, support complaint handling and moderation, support responsible evidence preservation and provide a framework for future internal retention schedules."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry aims to retain information only for as long as reasonably necessary for the purposes for which it was collected, unless a longer period is required or justified by law, safety, safeguarding, fraud prevention, dispute resolution, enforcement, accounting, tax, platform security or legitimate operational needs."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Storage Limitation Principle",
        "id": "storage-limitation-principle"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry recognises that personal information should not be kept indefinitely without a proper reason."
      },
      {
        "type": "paragraph",
        "text": "Where personal information is no longer reasonably needed, Mentor to Marry may delete it, anonymise it, restrict access to it, archive it securely, aggregate it so that individuals are no longer identifiable or retain it only where a lawful or legitimate reason remains."
      },
      {
        "type": "paragraph",
        "text": "Retention decisions may take account of the purpose for which the data was collected, the type of information, member expectations, legal obligations, safety and safeguarding concerns, fraud prevention needs, complaint or dispute history, moderation history, payment and accounting requirements, technical limitations and platform integrity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Information Covered by This Policy",
        "id": "information-covered-by-this-policy"
      },
      {
        "type": "paragraph",
        "text": "This Policy may apply to account information, registration information, login and security information, profile information, profile photographs, sex at birth, marital status, church or regular place of Christian fellowship, location information, matching preferences, likes and matches, recommendation information, messaging data, message metadata, community posts, course progress, live session participation, membership and subscription information, payment and transaction records, refund and cancellation records, verification information, reports and complaints, safeguarding records, moderation notes, enforcement decisions, appeals, technical logs, cookie and analytics information, support correspondence and legal or administrative records."
      },
      {
        "type": "paragraph",
        "text": "This list is not exhaustive."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Retention Principles",
        "id": "retention-principles"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to apply the principles of necessity, purpose, proportionality, safety, accountability, security, review, deletion and anonymisation."
      },
      {
        "type": "paragraph",
        "text": "Information should be retained only for as long as reasonably necessary and retention should be linked to the purpose for which information is used. Retention should be proportionate to the sensitivity and risk of the information. Information may be retained where necessary to protect users, investigate concerns or prevent harm. Retention decisions should be capable of explanation and review. Retained information should be protected by reasonable technical and organisational measures. Information should be reviewed periodically where appropriate. Information no longer needed should be deleted, anonymised or otherwise handled appropriately."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Data Retention Schedule",
        "id": "data-retention-schedule"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may maintain a separate internal Data Retention Schedule."
      },
      {
        "type": "paragraph",
        "text": "The Data Retention Schedule may set out categories of information, reasons for retention, standard retention periods, review points, deletion methods, anonymisation methods, exceptions, responsible persons and escalation requirements."
      },
      {
        "type": "paragraph",
        "text": "The Data Retention Schedule may be updated from time to time to reflect legal requirements, operational needs, safeguarding learning, complaints experience, platform growth, new features, payment provider requirements, verification systems, security needs and technical arrangements."
      },
      {
        "type": "paragraph",
        "text": "Where this Policy gives a general principle and the Data Retention Schedule gives more detailed operational guidance, the Data Retention Schedule may be used internally to guide practical retention decisions."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Indicative Retention Table",
        "id": "indicative-retention-table"
      },
      {
        "type": "paragraph",
        "text": "The following table is an indicative operational guide only. It does not create fixed legal retention periods. Actual retention may vary depending on applicable law, user location, payment provider requirements, safeguarding requirements, legal obligations, operational needs and the circumstances of the record."
      },
      {
        "type": "table",
        "rows": [
          [
            "Category of information",
            "Indicative retention approach"
          ],
          [
            "Active account information",
            "Retained while the account is active and for as long as needed for account administration, security and platform operation."
          ],
          [
            "Closed or deleted account information",
            "Retained only where needed for legal, security, safeguarding, complaint, moderation, payment or operational reasons."
          ],
          [
            "Profile information",
            "Retained while the profile is active; previous versions may be retained where safety, fraud, complaint or enforcement issues arise."
          ],
          [
            "Messages and message metadata",
            "Retained as needed for service delivery, safety, safeguarding, moderation, complaint handling, fraud prevention or legal reasons."
          ],
          [
            "Payment and subscription records",
            "Retained as needed for accounting, tax, chargeback, refund, payment dispute and legal purposes."
          ],
          [
            "Refund and cancellation records",
            "Retained as needed for dispute resolution, fraud prevention, policy compliance and account administration."
          ],
          [
            "Reports and complaints",
            "Retained as needed to investigate, respond, protect users, identify repeated conduct and preserve evidence."
          ],
          [
            "Safeguarding records",
            "Retained for as long as reasonably necessary for safety, safeguarding, legal, complaint or risk-management purposes."
          ],
          [
            "Moderation and enforcement records",
            "Retained as needed to prevent repeat misconduct, handle appeals, identify evasion and defend platform decisions."
          ],
          [
            "Technical and security logs",
            "Retained as needed for security, fraud prevention, troubleshooting, cyber protection and platform integrity."
          ],
          [
            "Cookie and analytics data",
            "Retained in accordance with the Cookie Policy, Privacy Policy, platform settings and applicable law."
          ],
          [
            "Anonymised or aggregated data",
            "May be retained for platform improvement, governance, safety trend analysis and statistical purposes."
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "This table is intended to support consistent administration and should be read alongside the Privacy Policy, this Policy and any internal Data Retention Schedule."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Account Information",
        "id": "account-information"
      },
      {
        "type": "paragraph",
        "text": "Account information may be retained while an account remains active. This may include name, email address, phone number, login credentials, account settings, membership status, subscription status, account creation date, communication preferences, security information and account activity."
      },
      {
        "type": "paragraph",
        "text": "After account closure or deletion, some account information may be retained where necessary for legal compliance, fraud prevention, safeguarding, complaint handling, moderation records, enforcement records, payment records, dispute resolution, security or legitimate operational purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Profile Information",
        "id": "profile-information"
      },
      {
        "type": "paragraph",
        "text": "Profile information may be retained while a profile is active. This may include first name, age, sex at birth, marital status, country, city, church or regular place of Christian fellowship, profile photograph, biography content, relationship intentions, preferences and other profile fields."
      },
      {
        "type": "paragraph",
        "text": "Where a member updates or deletes profile information, Mentor to Marry may still retain previous versions where necessary for safety, safeguarding, fraud prevention, moderation, complaint handling, evidence preservation, dispute resolution or legal compliance."
      },
      {
        "type": "paragraph",
        "text": "For example, previous profile information may be retained where there are concerns about catfishing, marital status deception, fake profiles, harassment, safeguarding or fraud."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Profile Photographs and Identity-Related Information",
        "id": "profile-photographs-identity-related-information"
      },
      {
        "type": "paragraph",
        "text": "Profile photographs and identity-related information may be retained while needed for profile display, verification, safety, moderation or fraud prevention."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain photographs or identity-related information where necessary to investigate impersonation, fake profiles, catfishing, use of another person’s image, misleading profile activity, verification misuse, safeguarding concerns or enforcement matters."
      },
      {
        "type": "paragraph",
        "text": "Where identity verification is introduced, verification-related records may be retained for as long as necessary for safety, fraud prevention, identity review, dispute handling, compliance or moderation purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Matching and Recommendation Information",
        "id": "matching-recommendation-information"
      },
      {
        "type": "paragraph",
        "text": "Matching and recommendation information may include likes, matches, profile views, preferences, visibility information, recommendation signals, blocked profiles, reported profiles, safety settings, membership tier, course completion status, verification status and interaction patterns."
      },
      {
        "type": "paragraph",
        "text": "This information may be retained for purposes including providing matching services, improving recommendations, enforcing platform rules, preventing misuse, investigating reports, managing safety risks and maintaining platform integrity."
      },
      {
        "type": "paragraph",
        "text": "Where information is no longer needed in identifiable form, Mentor to Marry may delete or anonymise it."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Messaging and Communication Records",
        "id": "messaging-communication-records"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain messages, message metadata, reports, moderation notes and communication records where necessary for service delivery, safety, safeguarding, fraud prevention, complaint handling, moderation, enforcement, dispute resolution, legal compliance, security or platform integrity."
      },
      {
        "type": "paragraph",
        "text": "Deleting a message, conversation or account may not immediately delete all communication records where retention is necessary and lawful."
      },
      {
        "type": "paragraph",
        "text": "Messages may be preserved where they relate to harassment, threats, abuse, fraud, financial requests, spiritual manipulation, safeguarding concerns, inappropriate content, repeated unwanted contact, account misuse or enforcement action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Community, Course and Live Session Records",
        "id": "community-course-live-session-records"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain information relating to community posts, course participation, course progress, lesson completion, live session attendance, event participation, comments, group discussions, moderation history and user contributions."
      },
      {
        "type": "paragraph",
        "text": "Such records may be retained for providing course access, confirming completion, issuing badges, managing community spaces, responding to complaints, safeguarding, moderation, platform improvement, legal or operational purposes."
      },
      {
        "type": "paragraph",
        "text": "Where a user deletes an account, some community content, comments, discussion records or replies may be retained, removed, anonymised or attributed differently depending on platform functionality, legal requirements, safety needs and moderation considerations."
      },
      {
        "type": "paragraph",
        "text": "Where appropriate, inactive or outdated community content may be archived, removed or anonymised."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Payment, Subscription and Refund Records",
        "id": "payment-subscription-refund-records"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain payment, subscription, refund and cancellation records where necessary for billing, subscription management, accounting, tax, fraud prevention, chargebacks, payment disputes, refund assessment, legal compliance, financial records and audit purposes."
      },
      {
        "type": "paragraph",
        "text": "Payment card details may be handled by third-party payment providers and may not be stored by Mentor to Marry unless expressly stated."
      },
      {
        "type": "paragraph",
        "text": "Refund and cancellation records may be retained to support dispute resolution, fraud prevention, account administration, chargeback handling and compliance with the Refund & Cancellation Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Reports, Complaints and Safeguarding Records",
        "id": "reports-complaints-safeguarding-records"
      },
      {
        "type": "paragraph",
        "text": "Reports, complaints and safeguarding records may be retained for longer than ordinary account information where necessary."
      },
      {
        "type": "paragraph",
        "text": "This may include records relating to harassment, bullying, fake profiles, catfishing, financial exploitation, romance scams, safeguarding concerns, suspected underage use, threats, abuse, coercion, misconduct, privacy breaches, moderator or volunteer misconduct, enforcement decisions, appeals and protective actions."
      },
      {
        "type": "paragraph",
        "text": "Retention may be necessary to protect members, prevent repeat harm, identify patterns of behaviour, respond to complaints, support investigations, preserve evidence, defend legal claims, comply with law and maintain platform integrity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Moderation and Enforcement Records",
        "id": "moderation-enforcement-records"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain moderation and enforcement records, including warnings, restrictions, suspensions, terminations, appeal outcomes, internal notes, evidence, investigation records and risk assessments."
      },
      {
        "type": "paragraph",
        "text": "Such records may be retained where necessary to prevent repeat offences, identify evasion attempts, manage banned users, protect members, respond to appeals, support safeguarding, investigate fraud, maintain consistency and defend platform decisions."
      },
      {
        "type": "paragraph",
        "text": "Account deletion or data deletion requests do not automatically reverse moderation decisions, suspensions, restrictions, bans or enforcement outcomes."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain limited information about suspended, banned or removed users where necessary to prevent re-registration, evasion of enforcement or repeated harm."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Technical Logs, Security and Fraud Prevention",
        "id": "technical-logs-security-fraud-prevention"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain technical and security information such as IP addresses, login records, device information, error logs, security logs, cookie identifiers, suspicious activity signals, blocked activity and platform usage records."
      },
      {
        "type": "paragraph",
        "text": "Such information may be retained for account security, fraud prevention, abuse detection, platform integrity, troubleshooting, cyber security, moderation, legal compliance and safeguarding."
      },
      {
        "type": "paragraph",
        "text": "Technical logs may be retained for shorter or longer periods depending on the type of log, security purpose and technical configuration."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Cookies and Analytics Information",
        "id": "cookies-analytics-information"
      },
      {
        "type": "paragraph",
        "text": "Cookie and analytics information may be retained in accordance with the Cookie Policy, Privacy Policy, platform settings and applicable law."
      },
      {
        "type": "paragraph",
        "text": "Where cookie or analytics information identifies or may identify a user, it should be handled as personal information."
      },
      {
        "type": "paragraph",
        "text": "Where reasonably appropriate, analytics data may be aggregated or anonymised."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Account Deletion Requests",
        "id": "account-deletion-requests"
      },
      {
        "type": "paragraph",
        "text": "Users may request account deletion through available platform processes or by contacting Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Account deletion may result in loss of access to profile features, membership benefits, course progress, messages, matches, badges, community spaces, subscriptions and platform services."
      },
      {
        "type": "paragraph",
        "text": "However, account deletion does not necessarily delete all information immediately."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain information where necessary for legal compliance, payment records, fraud prevention, safeguarding, complaint handling, moderation records, enforcement records, dispute resolution, security, legitimate operational purposes or protection of another person’s rights."
      },
      {
        "type": "paragraph",
        "text": "Users should cancel any recurring subscription before deleting their account."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Deletion of Inactive Accounts",
        "id": "deletion-of-inactive-accounts"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may introduce processes to review, restrict, archive or delete inactive accounts."
      },
      {
        "type": "paragraph",
        "text": "An account may be treated as inactive based on factors such as lack of login activity, expired membership, prolonged non-use, unverified status, incomplete registration, unpaid subscription or platform rules."
      },
      {
        "type": "paragraph",
        "text": "Before deleting inactive accounts, Mentor to Marry may provide notice where appropriate, unless immediate deletion, restriction or preservation is required for legal, safety, security or operational reasons."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Archived, Restricted and Suspended Accounts",
        "id": "archived-restricted-suspended-accounts"
      },
      {
        "type": "paragraph",
        "text": "Some accounts may be archived, restricted or suspended rather than immediately deleted."
      },
      {
        "type": "paragraph",
        "text": "This may occur where a member is under investigation, safeguarding concerns exist, fraud is suspected, payment disputes are active, moderation action is pending, legal issues exist, account recovery is possible or deletion would undermine safety or evidence preservation."
      },
      {
        "type": "paragraph",
        "text": "Archived or restricted accounts may have limited visibility or access."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Legal Holds and Evidence Preservation",
        "id": "legal-holds-evidence-preservation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may place information on legal hold or safety hold where deletion should be paused."
      },
      {
        "type": "paragraph",
        "text": "This may occur where information is relevant to safeguarding concerns, harassment, fraud, financial exploitation, catfishing, identity deception, disputes, chargebacks, investigations, complaints, enforcement, legal claims, regulatory requests or law enforcement requests."
      },
      {
        "type": "paragraph",
        "text": "Where a legal hold or safety hold applies, information may be retained until the matter is resolved or retention is no longer necessary."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Deletion, Anonymisation and Aggregation",
        "id": "deletion-anonymisation-aggregation"
      },
      {
        "type": "paragraph",
        "text": "Where information is no longer needed in identifiable form, Mentor to Marry may delete it, anonymise it, aggregate it, restrict access, archive it securely or remove identifying elements."
      },
      {
        "type": "paragraph",
        "text": "Anonymised or aggregated information may be retained for statistical analysis, platform improvement, safety trend analysis, service development, reporting, governance or research-style internal learning."
      },
      {
        "type": "paragraph",
        "text": "Information is not treated as personal information if it has been properly anonymised so that individuals are no longer identifiable."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. User Rights and Deletion Requests",
        "id": "user-rights-deletion-requests"
      },
      {
        "type": "paragraph",
        "text": "Depending on applicable law, users may have rights to request deletion, access, correction, restriction, objection, portability or withdrawal of consent."
      },
      {
        "type": "paragraph",
        "text": "Requests may be subject to identity verification."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may refuse or limit deletion requests where retention remains necessary for legal compliance, fraud prevention, safeguarding, safety, complaint handling, dispute resolution, moderation records, enforcement records, security or protection of another person’s rights."
      },
      {
        "type": "paragraph",
        "text": "Further information is set out in the Privacy Policy."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Backups and Technical Limitations",
        "id": "backups-technical-limitations"
      },
      {
        "type": "paragraph",
        "text": "Deleted information may remain temporarily in backups, logs or technical systems before being fully overwritten or removed."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may not be able to remove all copies immediately from backup systems."
      },
      {
        "type": "paragraph",
        "text": "Where information remains in backups, Mentor to Marry will seek to ensure that it is protected and not actively used except where restoration, security, legal, safeguarding or operational needs require it."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Third-Party Service Providers",
        "id": "third-party-service-providers"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may use third-party providers for hosting, payments, course delivery, email, analytics, verification, community tools, customer support, video hosting, mobile app services, security and other operational purposes."
      },
      {
        "type": "paragraph",
        "text": "Third-party providers may have their own retention practices, legal obligations and technical processes."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to use providers that support responsible data handling, but some deletion, retention or backup processes may depend on the relevant provider’s systems and terms."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Security of Retained Information",
        "id": "security-of-retained-information"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to protect retained information using reasonable technical and organisational measures. These may include access controls, password protection, role-based access, secure hosting, confidentiality expectations, restricted access to sensitive records, secure recordkeeping, incident response processes and review of access where appropriate."
      },
      {
        "type": "paragraph",
        "text": "Access to retained safeguarding, complaint, moderation and enforcement records should be limited to authorised persons who need access for safety, governance, legal, operational or platform-integrity purposes."
      },
      {
        "type": "paragraph",
        "text": "No system can guarantee absolute security."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Retention Reviews",
        "id": "retention-reviews"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review retained information periodically to determine whether it remains necessary."
      },
      {
        "type": "paragraph",
        "text": "Reviews may consider whether the purpose still exists, whether legal obligations remain, whether safeguarding concerns remain, whether complaints or disputes are active, whether fraud prevention requires retention, whether data can be anonymised, whether records can be securely deleted and whether access should be restricted."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Responsibility for Retention Decisions",
        "id": "responsibility-for-retention-decisions"
      },
      {
        "type": "paragraph",
        "text": "Responsibility for retention decisions may sit with authorised leadership, a privacy contact, a safeguarding lead, platform administrators, legal or governance advisers or other persons designated by Love, Dating and Marriage Ministries."
      },
      {
        "type": "paragraph",
        "text": "Where a decision involves safeguarding, serious complaints, enforcement or legal risk, the matter may be escalated to appropriate internal decision-makers."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. International Users and Cross-Border Storage",
        "id": "international-users-cross-border-storage"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry serves users internationally."
      },
      {
        "type": "paragraph",
        "text": "Information may be stored, processed or accessed in different countries depending on hosting arrangements, service providers, payment systems, learning platforms, app services and operational needs."
      },
      {
        "type": "paragraph",
        "text": "Retention periods and deletion processes may vary depending on applicable law, user location, payment provider requirements, safeguarding requirements, legal obligations and operational needs."
      },
      {
        "type": "paragraph",
        "text": "Cross-border processing will be handled in accordance with the Privacy Policy and applicable data protection requirements."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Policy Conflicts",
        "id": "policy-conflicts"
      },
      {
        "type": "paragraph",
        "text": "Where this Policy overlaps with another Mentor to Marry policy, Mentor to Marry may apply the policy or provision most relevant to the issue."
      },
      {
        "type": "paragraph",
        "text": "For example, safeguarding concerns may require longer retention than ordinary account records, fraud concerns may require retention of payment and technical records, account deletion requests may be limited by unresolved complaints or investigations and legal obligations may override standard deletion timeframes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "32. No Immediate Deletion Guarantee",
        "id": "no-immediate-deletion-guarantee"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to handle deletion requests responsibly."
      },
      {
        "type": "paragraph",
        "text": "However, Mentor to Marry does not guarantee immediate deletion of all data where legal requirements apply, safeguarding records are required, complaints remain unresolved, moderation records are needed, fraud prevention requires retention, payment disputes remain active, backup systems are involved or technical limitations apply."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "33. Changes to This Policy",
        "id": "changes-to-this-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update this Data Retention & Deletion Policy from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updates may be made to reflect legal developments, platform changes, safeguarding learning, new systems, retention schedule updates, service provider changes, data protection guidance or operational needs."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the website or platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "34. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about this Policy or requests relating to retention or deletion should be directed to Mentor to Marry through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Urgent safeguarding or safety concerns should be reported through the appropriate reporting or safety channels."
      },
      {
        "type": "paragraph",
        "text": "Data Retention & Deletion Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By using Mentor to Marry, members acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may retain information for as long as reasonably necessary for the purposes described in this Policy;"
      },
      {
        "type": "paragraph",
        "text": "account deletion does not automatically remove all records immediately;"
      },
      {
        "type": "paragraph",
        "text": "some records may be retained for legal, safeguarding, complaint handling, fraud prevention, enforcement or security reasons;"
      },
      {
        "type": "paragraph",
        "text": "messages, reports and moderation records may be preserved where necessary;"
      },
      {
        "type": "paragraph",
        "text": "payment and subscription records may be retained for accounting, refund, chargeback or legal purposes;"
      },
      {
        "type": "paragraph",
        "text": "information may remain temporarily in backups or technical systems;"
      },
      {
        "type": "paragraph",
        "text": "anonymised or aggregated information may be retained for platform improvement or governance purposes;"
      },
      {
        "type": "paragraph",
        "text": "third-party providers may have their own retention processes;"
      },
      {
        "type": "paragraph",
        "text": "deletion requests may be refused or limited where retention remains necessary and lawful;"
      },
      {
        "type": "paragraph",
        "text": "account deletion or data deletion requests do not automatically reverse moderation decisions or enforcement outcomes;"
      },
      {
        "type": "paragraph",
        "text": "limited records may be retained to prevent re-registration, enforcement evasion or repeated harm; and"
      },
      {
        "type": "paragraph",
        "text": "users should cancel recurring subscriptions before deleting their accounts."
      }
    ]
  },
  {
    "title": "Account Suspension & Enforcement Policy",
    "slug": "account-suspension-enforcement-policy",
    "description": "This Account Suspension & Enforcement Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, may respond where a member, user, volunteer, moderator,...",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Account Suspension & Enforcement Policy explains how Mentor to Marry, operated by Love, Dating and Marriage Ministries, may respond where a member, user, volunteer, moderator, mentor or representative breaches platform rules, creates safety concerns, misuses platform features or acts inconsistently with the Christian identity and marriage-focused purpose of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating, marriage education, community and matching platform for Christians aged 25 and over."
      },
      {
        "type": "paragraph",
        "text": "This Policy should be read alongside the Statement of Faith, Platform Values & Community Principles, Community Guidelines & Code of Conduct, Terms of Use, Privacy Policy, Membership & Subscription Terms, Refund & Cancellation Policy, Safeguarding & Community Safety Policy, Profile Standards Policy, Matching Platform Terms, Messaging & Communications Policy, Data Retention & Deletion Policy, Reporting & Complaints Policy and any internal safeguarding, moderation, investigation or complaints procedure adopted by Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of This Policy",
        "id": "purpose-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "The purpose of this Policy is to protect members and users, preserve the safety and integrity of the platform, provide a fair and proportionate enforcement framework, explain possible moderation and enforcement actions, respond to misconduct, deception, fraud, harassment and safety concerns, support consistency in decision-making, prevent repeat misconduct, support safeguarding and community safety, explain when accounts may be restricted, suspended or terminated, explain when appeals may be available and reinforce that platform access is conditional on compliance with Mentor to Marry’s Terms and policies."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Scope of This Policy",
        "id": "scope-of-this-policy"
      },
      {
        "type": "paragraph",
        "text": "This Policy applies to free members, paid members, Premium members, VIP members, course participants, community participants, profile users, matching users, messaging users, moderators, mentors, volunteers, contributors, facilitators, administrators, contractors, representatives and any person using or acting on behalf of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "It applies to conduct occurring on the website, in member profiles, matching features, messaging features, community spaces, course areas, live sessions, comments, reports or complaints, support communications, app-based services where introduced and any other Mentor to Marry service or communication channel."
      },
      {
        "type": "paragraph",
        "text": "It may also apply to off-platform conduct where that conduct affects member safety, concerns another member, involves fraud, harassment, abuse, exploitation, coercion, safeguarding concerns or undermines the trust and integrity of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Enforcement Principles",
        "id": "enforcement-principles"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry’s enforcement approach is guided by safety, fairness, proportionality, accountability, prevention, integrity, confidentiality and flexibility."
      },
      {
        "type": "paragraph",
        "text": "Member safety and community protection are central. Concerns should be considered fairly based on available information. Action should be proportionate to the seriousness, risk and context of the conduct. Members are responsible for their behaviour, profile information, communications and use of platform features. Enforcement should prevent further harm, misuse or risk where possible. Mentor to Marry must be able to protect its Christian identity, mission, platform values and marriage-focused purpose."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Types of Enforcement Action",
        "id": "types-of-enforcement-action"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take one or more enforcement actions, including informal guidance, reminder of rules, written warning, request for profile amendment, content removal, message removal, comment removal, profile visibility restriction, messaging restriction, matching restriction, community access restriction, course community restriction, live session removal, temporary feature restriction, temporary account suspension, temporary membership suspension, permanent feature removal, permanent account termination, permanent membership termination, prevention of re-registration, withdrawal of badges, withdrawal of verification status, escalation to safeguarding review, escalation to leadership review, referral to payment provider, app store or authorities where appropriate, or any other action considered necessary and proportionate."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may apply more than one action at the same time."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Enforcement Matrix",
        "id": "enforcement-matrix"
      },
      {
        "type": "paragraph",
        "text": "The following matrix is an indicative guide only. Mentor to Marry may choose a different response depending on evidence, seriousness, urgency, safety risk, member history and operational context."
      },
      {
        "type": "table",
        "rows": [
          [
            "Concern level",
            "Examples",
            "Possible response"
          ],
          [
            "Low",
            "Minor discourtesy; unclear wording; accidental policy breach; first-time low-level issue",
            "Reminder; guidance; clarification; profile correction; monitoring"
          ],
          [
            "Medium",
            "Repeated unwanted contact; inappropriate messages; misleading profile details; repeated low-level breaches",
            "Warning; content removal; feature restriction; profile restriction; enhanced monitoring"
          ],
          [
            "High",
            "Harassment; catfishing; financial pressure; suspected fake identity; serious profile deception; repeated breaches; misuse of spiritual influence",
            "Temporary suspension; investigation; safeguarding review; messaging/matching restriction; profile removal; account suspension"
          ],
          [
            "Urgent / Serious",
            "Threats; credible risk of harm; exploitation; romance scam; safeguarding emergency; suspected underage use; serious abuse; coercive conduct; fraud",
            "Immediate suspension; evidence preservation; safety review; internal escalation; authority referral where required; re-registration block"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The matrix is a guide only. Mentor to Marry may escalate, reduce, combine or vary responses depending on the full circumstances."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Informal Guidance, Warnings and Restrictions",
        "id": "informal-guidance-warnings-restrictions"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may issue informal guidance, reminders or warnings where a concern appears minor, accidental, unclear or capable of correction."
      },
      {
        "type": "paragraph",
        "text": "Warnings may relate to inappropriate messages, boundary issues, misleading profile information, repeated low-level complaints, disrespectful communication, misuse of community spaces, minor harassment concerns, failure to comply with moderation guidance or other policy breaches."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict, hide, pause or remove profiles, messaging access, matching access, community access, course spaces, live sessions or other features where there are concerns about safety, accuracy, conduct, fraud, harassment, deception or policy breach."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Temporary Suspension and Immediate Protective Action",
        "id": "temporary-suspension-immediate-protective-action"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may temporarily suspend an account, membership or specific feature access where further review is needed."
      },
      {
        "type": "paragraph",
        "text": "Temporary suspension may be appropriate where a serious report has been made, safeguarding concerns arise, fraud is suspected, identity concerns arise, marital-status deception is alleged, harassment is reported, financial exploitation is suspected, payment abuse or chargeback abuse occurs, account compromise is suspected, evidence needs to be preserved or immediate risk management is required."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take immediate protective action without prior warning where it reasonably considers this necessary to protect members, the community, the platform or legal interests. This may occur before a member is invited to respond where urgency, safety, evidence preservation or risk management requires it."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Permanent Account Termination",
        "id": "permanent-account-termination"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may permanently terminate an account where the conduct is serious, repeated, dishonest, unsafe or incompatible with platform membership."
      },
      {
        "type": "paragraph",
        "text": "Permanent termination may occur for fake profiles, impersonation, catfishing, marital-status deception, creating a profile while married for matching purposes, harassment, threats, financial exploitation, romance fraud, requests for money or gifts, inappropriate content, repeated boundary violations, spiritual manipulation, safeguarding concerns, enforcement evasion, payment abuse, fraudulent information, serious or repeated policy breaches, or conduct that undermines member safety, trust or platform integrity."
      },
      {
        "type": "paragraph",
        "text": "Permanent termination may result in loss of access to profile features, matching, messaging, paid membership, communities, course communities, badges and platform services."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Prevention of Re-Registration",
        "id": "prevention-of-re-registration"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may take steps to prevent a suspended, terminated or banned user from re-registering."
      },
      {
        "type": "paragraph",
        "text": "This may include retaining limited information necessary to identify repeat account creation, prevent evasion of enforcement, protect members, preserve safeguarding records, prevent fraud, prevent harassment, maintain platform integrity and comply with applicable law."
      },
      {
        "type": "paragraph",
        "text": "Creating a new account to evade restriction, suspension or termination is prohibited."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. Reasons Enforcement Action May Be Taken",
        "id": "reasons-enforcement-action-may-be-taken"
      },
      {
        "type": "paragraph",
        "text": "Enforcement action may be taken where Mentor to Marry reasonably believes that a person has breached platform policies, provided false information, misrepresented identity, marital status or sex at birth where required, harassed or bullied another person, manipulated or coerced another person, used spiritual language abusively, requested money or financial support, engaged in fraud or attempted fraud, created safety or safeguarding concerns, abused platform features, evaded enforcement, submitted false reports, retaliated against another member, misused private information, breached privacy expectations, disrupted community or course spaces, engaged in unlawful activity, or acted inconsistently with the Christian identity, values or purpose of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Investigations and Member Cooperation",
        "id": "investigations-member-cooperation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may investigate alleged breaches of platform rules. An investigation may include reviewing reports, profile information, messages where permitted, screenshots or evidence, payment or account activity, technical information, contacting relevant users, consulting moderators or safety leads, preserving relevant records and applying relevant policies."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not required to conduct a formal legal process and may make decisions based on the information reasonably available."
      },
      {
        "type": "paragraph",
        "text": "Members are expected to cooperate honestly and in good faith with reasonable investigations. Failure to cooperate may itself result in enforcement action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Evidence Preservation",
        "id": "evidence-preservation"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may preserve messages, reports, screenshots, profile information, account data, payment records, moderation notes, technical logs and related information where necessary for safeguarding, safety, fraud prevention, harassment investigations, abuse investigations, payment disputes, enforcement, legal compliance, dispute resolution or protection of members."
      },
      {
        "type": "paragraph",
        "text": "Evidence may be preserved even where a user deletes messages, deletes a profile, blocks another member, cancels membership or requests account deletion, where retention is necessary and lawful."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Off-Platform Conduct",
        "id": "off-platform-conduct"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may consider conduct outside the platform where that conduct affects member safety, concerns another member, creates safeguarding concerns, involves harassment, abuse, exploitation, coercion or fraud, involves threats, involves financial exploitation, undermines community trust, creates legal or reputational risk or is inconsistent with platform policies."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not required to investigate every off-platform dispute, but it may act where safety, trust or platform integrity may be affected."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Confidentiality of Enforcement Decisions",
        "id": "confidentiality-of-enforcement-decisions"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will handle enforcement records carefully."
      },
      {
        "type": "paragraph",
        "text": "Information about reports, investigations, moderation decisions, safeguarding concerns and enforcement outcomes may be shared internally or externally where necessary for safety, safeguarding, fraud prevention, legal compliance, member protection, investigation, appeal review, platform integrity, payment dispute handling or protection of rights."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may not disclose full details of enforcement decisions to all parties, particularly where doing so would compromise privacy, safety, safeguarding, evidence, internal processes or legal obligations."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. Effect on Paid Membership and Connected Features",
        "id": "effect-on-paid-membership-connected-features"
      },
      {
        "type": "paragraph",
        "text": "Enforcement action may affect related features, including profile visibility, messaging, matching, badges, membership benefits, community access, course communities, live session access, app-based features and future services."
      },
      {
        "type": "paragraph",
        "text": "Where a member is restricted, suspended or terminated for breach of platform policies, misconduct, fraud, harassment, safeguarding concerns, deception, financial exploitation or serious misuse, refunds may be refused where permitted by law and the Refund & Cancellation Policy."
      },
      {
        "type": "paragraph",
        "text": "Paying for membership does not exempt a member from platform rules. Premium, VIP, paid or verified status does not prevent enforcement action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. No Automatic Compensation or Refund",
        "id": "no-automatic-compensation-or-refund"
      },
      {
        "type": "paragraph",
        "text": "Where access is restricted, suspended or terminated because of breach of platform rules, misconduct, fraud, safeguarding concerns, harassment, deception or misuse, the member will not automatically be entitled to compensation, credit, extension of membership or refund."
      },
      {
        "type": "paragraph",
        "text": "Refunds, if any, will be governed by the Refund & Cancellation Policy and applicable law."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Effect on Badges, Verification and Course Completion",
        "id": "effect-on-badges-verification-course-completion"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may withdraw, hide, suspend or amend badges, verification status, membership labels or course completion indicators where they were issued in error, information becomes inaccurate, the member breached platform rules, safety concerns arise, identity concerns arise, the member is suspended or terminated, or continued display would be misleading."
      },
      {
        "type": "paragraph",
        "text": "Badges and verification are platform signals only and do not guarantee character, intentions, compatibility, relationship readiness or suitability for marriage."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Appeals",
        "id": "appeals"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may allow appeals against certain enforcement decisions. Appeals are discretionary and may not be available for every enforcement decision."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may decline or limit an appeal where urgent safety, safeguarding, fraud prevention, legal compliance, repeated misconduct or platform integrity requires final action."
      },
      {
        "type": "paragraph",
        "text": "Appeals may be available where an account is suspended, matching access is removed, messaging access is removed, a profile is removed, membership is terminated or other significant enforcement action is taken."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. How to Appeal and Appeal Review",
        "id": "how-to-appeal-appeal-review"
      },
      {
        "type": "paragraph",
        "text": "Where an appeal is available, the member should follow the appeal process published by Mentor to Marry or contact Mentor to Marry through approved support channels."
      },
      {
        "type": "paragraph",
        "text": "An appeal should include the decision being challenged, the reason for appeal, any relevant evidence, any explanation or correction and the outcome requested. Appeals must be submitted honestly, respectfully and in good faith."
      },
      {
        "type": "paragraph",
        "text": "An appeal may be reviewed by an authorised administrator, a moderator not involved in the original decision, a designated safety lead, the leadership team or another appropriate reviewer designated by Mentor to Marry. Submitting an appeal does not automatically restore access while the appeal is pending."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Correction or Variation of Enforcement Action",
        "id": "correction-or-variation-of-enforcement-action"
      },
      {
        "type": "paragraph",
        "text": "Where Mentor to Marry later determines that an enforcement action was taken in error or should be varied, it may restore access, amend restrictions, provide clarification or take another appropriate corrective step."
      },
      {
        "type": "paragraph",
        "text": "A corrective step does not automatically create an entitlement to compensation, refund, credit or membership extension unless required by law or expressly agreed by Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Repeat Breaches, False Reports and Retaliation",
        "id": "repeat-breaches-false-reports-retaliation"
      },
      {
        "type": "paragraph",
        "text": "Repeated breaches may result in stronger enforcement action. A pattern of low-level breaches may be treated as a serious concern where it shows disregard for platform rules, repeated boundary issues, continued disrespect, manipulative behaviour, unwillingness to comply or risk to other members."
      },
      {
        "type": "paragraph",
        "text": "Members must not knowingly submit false, malicious or misleading reports. Deliberately false, malicious or abusive reporting may result in enforcement action."
      },
      {
        "type": "paragraph",
        "text": "Retaliation is prohibited. Members must not retaliate against reporters, affected members, witnesses, moderators, mentors, volunteers or Mentor to Marry because of a report, safeguarding review, restriction, warning, suspension, appeal or enforcement decision."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. No Guarantee of Enforcement Outcome",
        "id": "no-guarantee-of-enforcement-outcome"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry will seek to respond appropriately to concerns, but it does not guarantee that every report will result in action, every report will be upheld, every concern can be proven, every harmful user will be identified immediately, every investigation will reach a clear conclusion, every member will agree with the outcome or every safety concern can be fully resolved by platform action alone."
      },
      {
        "type": "paragraph",
        "text": "Members remain responsible for their own safety, choices and conduct."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Relationship with Data Retention",
        "id": "relationship-with-data-retention"
      },
      {
        "type": "paragraph",
        "text": "Enforcement records may be retained in accordance with the Data Retention & Deletion Policy."
      },
      {
        "type": "paragraph",
        "text": "Account deletion or data deletion requests do not automatically reverse enforcement decisions, remove safeguarding records, remove moderation records, cancel legal holds or prevent Mentor to Marry from retaining limited information necessary to prevent re-registration, enforcement evasion or repeated harm."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. Changes to This Policy",
        "id": "changes-to-this-policy"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may update this Account Suspension & Enforcement Policy from time to time. Updates may reflect platform development, safeguarding learning, legal developments, moderation experience, user reports, new features, internal governance development or operational needs."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published on the website or platform."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about this Policy should be directed to Mentor to Marry through the contact details published on the website or platform."
      },
      {
        "type": "paragraph",
        "text": "Urgent danger or emergency situations should be reported to local emergency services or appropriate authorities."
      },
      {
        "type": "paragraph",
        "text": "Account Suspension & Enforcement Acknowledgement"
      },
      {
        "type": "paragraph",
        "text": "By using Mentor to Marry, members acknowledge that:"
      },
      {
        "type": "paragraph",
        "text": "access to Mentor to Marry is conditional on compliance with platform rules;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict, suspend or terminate accounts where concerns arise;"
      },
      {
        "type": "paragraph",
        "text": "enforcement action may affect connected features including profile visibility, messaging, matching, badges, membership benefits and community access;"
      },
      {
        "type": "paragraph",
        "text": "paid membership, Premium status, VIP status, badges or verification do not prevent enforcement action;"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may act immediately where safety, safeguarding, fraud or platform integrity requires it;"
      },
      {
        "type": "paragraph",
        "text": "account deletion does not automatically erase enforcement records or reverse enforcement decisions;"
      },
      {
        "type": "paragraph",
        "text": "enforcement records may be retained to prevent repeated harm or evasion;"
      },
      {
        "type": "paragraph",
        "text": "members must cooperate honestly with investigations;"
      },
      {
        "type": "paragraph",
        "text": "appeals may be available for some decisions but are discretionary and not guaranteed in every case;"
      },
      {
        "type": "paragraph",
        "text": "retaliation, false reports and enforcement evasion are prohibited;"
      },
      {
        "type": "paragraph",
        "text": "restriction, suspension or termination for breach does not automatically create compensation, credit, extension or refund rights; and"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may protect its members, community, Christian identity and platform integrity through proportionate enforcement action."
      }
    ]
  },
  {
    "title": "Moderator, Mentor & Volunteer Code of Conduct",
    "slug": "moderator-mentor-volunteer-code-of-conduct",
    "description": "This Moderator, Mentor & Volunteer Code of Conduct sets out the standards of behaviour expected from moderators, mentors, volunteers, facilitators, contributors, administrators and...",
    "featured": false,
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Introduction",
        "id": "introduction"
      },
      {
        "type": "paragraph",
        "text": "This Moderator, Mentor & Volunteer Code of Conduct sets out the standards of behaviour expected from moderators, mentors, volunteers, facilitators, contributors, administrators and representatives who support Mentor to Marry, operated by Love, Dating and Marriage Ministries, a non-profit organisation registered in Nigeria."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is a global interdenominational Christian relationship, dating, marriage education, community and matching platform for Christians aged 25 and over."
      },
      {
        "type": "paragraph",
        "text": "Because Mentor to Marry involves Christian relationship education, community interaction, profiles, matching, messaging, safeguarding concerns and possible offline relationship-building, moderators, mentors and volunteers occupy positions of trust."
      },
      {
        "type": "paragraph",
        "text": "This Code exists to protect members, volunteers, mentors, moderators, the wider community, the Christian witness of Mentor to Marry, the integrity of Love, Dating and Marriage Ministries and the safety, trust and credibility of the platform."
      },
      {
        "type": "paragraph",
        "text": "This Code should be read alongside the Statement of Faith, Platform Values & Community Principles, Community Guidelines & Code of Conduct, Terms of Use, Privacy Policy, Safeguarding & Community Safety Policy, Profile Standards Policy, Matching Platform Terms, Messaging & Communications Policy, Data Retention & Deletion Policy, Account Suspension & Enforcement Policy, Reporting & Complaints Policy, Conflict of Interest Policy where adopted, Confidentiality Policy where adopted and any internal safeguarding, moderation, volunteer or incident procedures adopted by Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Purpose of This Code",
        "id": "purpose-of-this-code"
      },
      {
        "type": "paragraph",
        "text": "The purpose of this Code is to establish clear conduct standards, protect members from harm, exploitation, favouritism and abuse of influence, guide moderators, mentors and volunteers in their responsibilities, promote safe, respectful and Christ-centred service, prevent misuse of authority or access, preserve confidentiality, support safeguarding and community safety, reduce conflicts of interest, protect the reputation of Mentor to Marry, support fair and consistent moderation and ensure that everyone serving through the platform understands the seriousness of their role."
      },
      {
        "type": "paragraph",
        "text": "This Code applies whether a person serves in a paid, unpaid, voluntary, informal, official, temporary, trial or ad hoc capacity."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Who This Code Applies To",
        "id": "who-this-code-applies-to"
      },
      {
        "type": "paragraph",
        "text": "This Code applies to anyone who acts for, represents, supports or assists Mentor to Marry in any capacity, including moderators, mentors, volunteers, course facilitators, live session hosts, community hosts, administrators, safeguarding leads, safety reviewers, event helpers, prayer or pastoral support volunteers, technical support volunteers, content contributors, social media contributors, trustees or leaders acting in an operational role, contractors, consultants, representatives and anyone given access to member, moderation, safeguarding, complaint, community or platform information."
      },
      {
        "type": "paragraph",
        "text": "For ease of reference, this Code uses “representatives” to refer collectively to moderators, mentors, volunteers and others covered by this Code."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Christian Foundation",
        "id": "christian-foundation"
      },
      {
        "type": "paragraph",
        "text": "Representatives of Mentor to Marry are expected to conduct themselves in a way that reflects Christian character, including integrity, humility, honesty, patience, self-control, compassion, fairness, wisdom, respect, accountability, purity, confidentiality, diligence, servant leadership and care for others."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not use Christian language, ministry status, prayer, prophecy, spiritual authority or personal influence to control, pressure, shame, manipulate or exploit members."
      },
      {
        "type": "paragraph",
        "text": "Serving with Mentor to Marry is not an opportunity to gain personal influence, romantic advantage, social status, money, gifts or private access to members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Role Suitability and Checks",
        "id": "role-suitability-checks"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may assess suitability before appointing a moderator, mentor, volunteer, facilitator or representative."
      },
      {
        "type": "paragraph",
        "text": "Suitability checks may include application information, references, interview or conversation, review of experience, safeguarding considerations, identity checks, conflict checks, policy acknowledgement, training completion or other checks considered appropriate for the role."
      },
      {
        "type": "paragraph",
        "text": "Appointment to a role is at the discretion of Mentor to Marry and may be refused, delayed, restricted or withdrawn where suitability concerns arise."
      },
      {
        "type": "paragraph",
        "text": "Representatives must provide truthful information during recruitment, appointment, onboarding and review processes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Supervision and Accountability",
        "id": "supervision-accountability"
      },
      {
        "type": "paragraph",
        "text": "Representatives may be subject to supervision, review, feedback, role monitoring, access review, safeguarding oversight or performance-related discussion appropriate to their role."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review whether a representative remains suitable for a role and may change, restrict or end the role where appropriate."
      },
      {
        "type": "paragraph",
        "text": "Representatives must accept reasonable guidance, correction, safeguarding direction, access limitations, role boundaries and governance requirements issued by Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Role Suspension Pending Review",
        "id": "role-suspension-pending-review"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may temporarily suspend a representative’s duties, access or role while concerns are reviewed."
      },
      {
        "type": "paragraph",
        "text": "Suspension pending review does not mean a final decision has been made. It may be used where safeguarding, confidentiality, data protection, member safety, conflict of interest, misconduct, complaint, role suitability or platform integrity concerns arise."
      },
      {
        "type": "paragraph",
        "text": "During any suspension pending review, the representative must not access platform systems, contact members in an official capacity, handle confidential information or present themselves as acting for Mentor to Marry unless expressly authorised."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "8. Role of Moderators",
        "id": "role-of-moderators"
      },
      {
        "type": "paragraph",
        "text": "Moderators may assist with community safety, profile review, discussion oversight, report handling, content review, messaging concerns or other platform functions."
      },
      {
        "type": "paragraph",
        "text": "Moderators must act fairly, apply platform rules consistently, avoid favouritism, avoid personal bias, respect confidentiality, escalate safeguarding concerns, avoid unnecessary interference in personal relationships, document concerns where required, follow internal procedures and act only within the authority given to them."
      },
      {
        "type": "paragraph",
        "text": "Moderators must not use moderation access to monitor, pursue, favour, embarrass, intimidate or disadvantage any member."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "9. Role of Mentors",
        "id": "role-of-mentors"
      },
      {
        "type": "paragraph",
        "text": "Mentors may support relationship education, discussion, discipleship-style encouragement, group learning, course facilitation or general guidance."
      },
      {
        "type": "paragraph",
        "text": "Mentors must maintain appropriate boundaries, avoid dependency relationships, avoid presenting personal opinion as binding direction, avoid making promises about marriage outcomes, avoid pressuring members to enter or leave relationships, avoid private emotional entanglement with members, avoid giving professional advice unless properly qualified and authorised, escalate safeguarding concerns and ensure mentoring remains consistent with Mentor to Marry’s Christian values and policies."
      },
      {
        "type": "paragraph",
        "text": "Mentorship on Mentor to Marry is not counselling, psychotherapy, legal advice, financial advice, medical advice or pastoral control."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "10. Role of Volunteers",
        "id": "role-of-volunteers"
      },
      {
        "type": "paragraph",
        "text": "Volunteers may support community engagement, administration, member support, events, content, communications, moderation assistance or other platform activities."
      },
      {
        "type": "paragraph",
        "text": "Volunteers must perform their role responsibly, follow instructions and policies, complete any required induction or training, ask for guidance where unsure, treat members and other volunteers respectfully, maintain confidentiality, avoid conflicts of interest, report concerns promptly and act in a way that supports the mission and reputation of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Volunteers must not act beyond their assigned role or represent themselves as having authority they do not have."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "11. General Conduct Standards",
        "id": "general-conduct-standards"
      },
      {
        "type": "paragraph",
        "text": "Representatives must act with integrity and honesty, treat members fairly and respectfully, comply with Mentor to Marry policies, uphold the Statement of Faith and Platform Values, preserve confidentiality, maintain appropriate boundaries, avoid favouritism, avoid abuse of role or influence, avoid discrimination, harassment and bullying, report safeguarding and serious safety concerns, use platform access responsibly, protect member privacy, cooperate with internal reviews, complete required training where applicable and support a culture of safety, accountability and trust."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not exploit members, manipulate members emotionally or spiritually, pursue members through their role, misuse private information, solicit money or gifts, create dependency, ignore safety concerns, interfere in relationships inappropriately, share confidential information, use access for personal benefit or act in a way that brings Mentor to Marry into disrepute."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "12. Safeguarding Responsibilities",
        "id": "safeguarding-responsibilities"
      },
      {
        "type": "paragraph",
        "text": "Representatives must take safeguarding and community safety seriously."
      },
      {
        "type": "paragraph",
        "text": "They must promptly report or escalate concerns involving harassment, bullying, threats, suspected fake profiles, catfishing, financial exploitation, romance scams, safeguarding concerns, spiritual manipulation, coercion, suspected underage use, abuse of trust, moderator or mentor misconduct, repeated unwanted contact, privacy breaches, retaliation, self-harm concerns, credible risk of harm or any conduct that may place a member at risk."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not attempt to privately resolve serious safeguarding concerns without appropriate escalation."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry is not an emergency service. Where there is immediate danger, emergency services or appropriate local authorities should be contacted."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "13. Duty to Report Concerns",
        "id": "duty-to-report-concerns"
      },
      {
        "type": "paragraph",
        "text": "Representatives must report concerns promptly through the appropriate internal channel."
      },
      {
        "type": "paragraph",
        "text": "Concerns may relate to member conduct, volunteer conduct, moderator conduct, mentor conduct, platform safety, fraud, safeguarding, privacy, harassment, boundary concerns, conflict of interest, misuse of access, data protection, financial exploitation or breach of platform policies."
      },
      {
        "type": "paragraph",
        "text": "Failure to report a serious concern may itself be treated as misconduct."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not discourage, suppress, ignore or conceal reports."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "14. Boundaries with Members",
        "id": "boundaries-with-members"
      },
      {
        "type": "paragraph",
        "text": "Representatives must maintain clear and appropriate boundaries with members."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not use their role to pursue romantic interest, use privileged access to contact members privately, pressure members into emotional closeness, invite dependency, create exclusive private relationships through their role, ask intrusive personal questions outside role needs, use spiritual language to influence personal decisions, make members feel obligated to communicate, encourage secrecy, favour one member over another or blur the line between support and personal attachment."
      },
      {
        "type": "paragraph",
        "text": "Where a representative already has a personal relationship, friendship, family connection, church connection or romantic interest involving a member, they must disclose this where it may affect impartiality or role responsibilities."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "15. Romantic or Personal Interest in Members",
        "id": "romantic-or-personal-interest-in-members"
      },
      {
        "type": "paragraph",
        "text": "A representative must not misuse their role to initiate, pursue or influence a romantic or personal relationship with a member."
      },
      {
        "type": "paragraph",
        "text": "If a representative develops a romantic interest in a member, or a member expresses romantic interest in the representative, the representative must avoid using their role to influence the member, avoid accessing confidential information about the member, avoid moderating, mentoring or reviewing that member, disclose the conflict or potential conflict to the appropriate internal lead and follow any direction given by Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict, reassign or remove a representative from duties where a personal interest creates a conflict, perception of bias or safeguarding concern."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "16. No Misuse of Spiritual Influence",
        "id": "no-misuse-of-spiritual-influence"
      },
      {
        "type": "paragraph",
        "text": "Representatives must not misuse Christian language, Scripture, prayer, prophecy, pastoral influence, ministry title, mentoring status or perceived spiritual authority."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not tell a member that God requires them to pursue a relationship, pressure a member to accept or reject another member, use prayer or prophecy to create dependency, shame a member for setting boundaries, imply that disagreement is spiritual rebellion, suggest that refusal to comply is disobedience to God, silence concerns using spiritual language or use faith to obtain emotional, romantic, financial or social advantage."
      },
      {
        "type": "paragraph",
        "text": "Christian support must be humble, wise, respectful and non-coercive."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "17. Confidentiality",
        "id": "confidentiality"
      },
      {
        "type": "paragraph",
        "text": "Representatives may have access to sensitive information, including member profiles, reports, complaints, messages, safeguarding records, moderation notes, identity concerns, payment concerns, personal disclosures, community discussions, technical information and internal decisions."
      },
      {
        "type": "paragraph",
        "text": "Representatives must keep confidential information confidential. They must not share member information with unauthorised persons, discuss reports casually, disclose private messages, reveal safeguarding concerns unnecessarily, share screenshots, export records without permission, use member information for personal purposes or retain confidential information outside approved systems."
      },
      {
        "type": "paragraph",
        "text": "Confidentiality may be overridden where disclosure is necessary for safeguarding, legal compliance, safety, fraud prevention, internal escalation or protection of others."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "18. Data Protection and Privacy",
        "id": "data-protection-privacy"
      },
      {
        "type": "paragraph",
        "text": "Representatives must handle personal information responsibly and only for authorised platform purposes."
      },
      {
        "type": "paragraph",
        "text": "They must access only information needed for their role, avoid unnecessary downloads, avoid personal storage of member information, use approved systems where provided, protect passwords and login details, report data breaches or suspected breaches promptly, avoid sharing personal data through insecure channels and comply with the Privacy Policy and Data Retention & Deletion Policy."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not search, view, copy, disclose or use member information out of curiosity, personal interest or unrelated purposes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "19. Conflicts of Interest",
        "id": "conflicts-of-interest"
      },
      {
        "type": "paragraph",
        "text": "Representatives must avoid conflicts of interest and must disclose actual, potential or perceived conflicts."
      },
      {
        "type": "paragraph",
        "text": "Conflicts may include personal friendship with a member, family relationship with a member, church leadership relationship with a member, romantic interest in a member, business relationship with a member, financial interest, involvement in a complaint, previous disagreement with a member or any situation that may affect impartiality."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may reassign duties, restrict access, exclude a representative from a decision or take other steps to manage conflicts."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "20. Fairness and Non-Favouritism",
        "id": "fairness-non-favouritism"
      },
      {
        "type": "paragraph",
        "text": "Representatives must treat members fairly."
      },
      {
        "type": "paragraph",
        "text": "They must not favour friends, disadvantage members they dislike, give special treatment to VIP members, allow personal views to affect moderation decisions, use role access to help particular members gain attention, manipulate profile visibility, influence matching unfairly or treat members differently because of personal connections."
      },
      {
        "type": "paragraph",
        "text": "Premium, VIP, verified or high-profile members remain subject to the same standards as all other members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "21. Use of Platform Access",
        "id": "use-of-platform-access"
      },
      {
        "type": "paragraph",
        "text": "Representatives may receive access to systems, records, groups, reports, moderation tools, community spaces or member information. Such access must be used only for authorised purposes."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not access information unnecessarily, browse member data out of curiosity, use moderation tools for personal reasons, change records without authority, delete evidence, alter reports, share login credentials, allow others to use their access or bypass platform rules."
      },
      {
        "type": "paragraph",
        "text": "Access may be removed at any time."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "22. Communications by Representatives",
        "id": "communications-by-representatives"
      },
      {
        "type": "paragraph",
        "text": "Representatives must communicate professionally, respectfully and clearly."
      },
      {
        "type": "paragraph",
        "text": "They must not harass members, shame members, argue aggressively, send inappropriate messages, use rude or dismissive language, make promises outside their authority, provide misleading assurances, give legal, financial, medical or therapeutic advice unless authorised and qualified or create confusion about official platform decisions."
      },
      {
        "type": "paragraph",
        "text": "Where communicating in an official capacity, representatives should make clear when they are acting on behalf of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "23. Social Media and External Communications",
        "id": "social-media-external-communications"
      },
      {
        "type": "paragraph",
        "text": "Representatives must not speak publicly on behalf of Mentor to Marry unless authorised."
      },
      {
        "type": "paragraph",
        "text": "They must not disclose internal matters, identify members without permission, discuss complaints publicly, disclose safeguarding concerns, criticise members online, publish private communications, reveal internal policies not intended for publication or make statements that may damage the reputation or witness of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Personal social media use must not undermine member safety, confidentiality, safeguarding, trust or the reputation of Mentor to Marry."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "24. Gifts, Money and Benefits",
        "id": "gifts-money-benefits"
      },
      {
        "type": "paragraph",
        "text": "Representatives must not request or accept inappropriate gifts, money, loans, favours, hospitality or benefits from members."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not use their role to obtain donations for themselves, business opportunities, employment, romantic attention, personal favours, gifts, travel, accommodation, financial help or private advantage."
      },
      {
        "type": "paragraph",
        "text": "Any gift, benefit or financial approach that may create a conflict of interest or appearance of impropriety should be disclosed."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "25. No Private Counselling or Unauthorised Advice",
        "id": "no-private-counselling-or-unauthorised-advice"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may provide education, mentoring and community support, but representatives must not present themselves as providing professional counselling, psychotherapy, mental health support, legal advice, financial advice, medical advice or pastoral authority unless expressly authorised and appropriately qualified."
      },
      {
        "type": "paragraph",
        "text": "Representatives should not attempt to manage serious mental health, abuse, trauma, domestic violence, safeguarding or crisis situations alone."
      },
      {
        "type": "paragraph",
        "text": "Such concerns should be escalated through appropriate channels."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "26. Training and Induction",
        "id": "training-induction"
      },
      {
        "type": "paragraph",
        "text": "Representatives may be required to complete induction, safeguarding training, data protection orientation, moderation guidance, platform policy training or role-specific training."
      },
      {
        "type": "paragraph",
        "text": "Representatives must attend required training, read relevant policies, ask questions where unsure, apply the training in their role and complete refresher training where required."
      },
      {
        "type": "paragraph",
        "text": "Failure to complete required training may result in restriction or removal from role."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "27. Record-Keeping",
        "id": "record-keeping"
      },
      {
        "type": "paragraph",
        "text": "Representatives may be required to keep or submit records of safeguarding concerns, reports, moderation actions, member complaints, incident responses, decisions, communications, volunteer activity or other role-related matters."
      },
      {
        "type": "paragraph",
        "text": "Records must be accurate, timely, factual and stored only in approved ways."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not create secret records, unofficial databases or personal files about members."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "28. Working with Other Representatives",
        "id": "working-with-other-representatives"
      },
      {
        "type": "paragraph",
        "text": "Representatives must treat one another with respect."
      },
      {
        "type": "paragraph",
        "text": "They must cooperate constructively, avoid gossip, avoid factional behaviour, respect leadership decisions, raise concerns appropriately, maintain confidentiality, support safe teamwork and resolve disagreements respectfully."
      },
      {
        "type": "paragraph",
        "text": "Bullying, intimidation, undermining, discrimination or harassment of other representatives is prohibited."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "29. Reporting Concerns About Representatives",
        "id": "reporting-concerns-about-representatives"
      },
      {
        "type": "paragraph",
        "text": "Concerns about a moderator, mentor, volunteer, facilitator, administrator or representative should be reported through the approved internal channel."
      },
      {
        "type": "paragraph",
        "text": "Concerns may include misuse of authority, boundary breaches, confidentiality breaches, safeguarding concerns, discrimination, harassment, favouritism, romantic pursuit of members, spiritual manipulation, misuse of platform access, conflicts of interest, fraud or breach of this Code."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may restrict or remove a representative from duties while concerns are reviewed."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "30. Investigations and Cooperation",
        "id": "investigations-cooperation"
      },
      {
        "type": "paragraph",
        "text": "Representatives must cooperate honestly with internal reviews, safeguarding reviews, complaints, data protection enquiries and misconduct investigations."
      },
      {
        "type": "paragraph",
        "text": "They must not conceal information, delete evidence, influence witnesses, retaliate, provide false information, discourage reporting or obstruct review processes."
      },
      {
        "type": "paragraph",
        "text": "Failure to cooperate may result in removal from role or further action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "31. Enforcement and Removal from Role",
        "id": "enforcement-removal-from-role"
      },
      {
        "type": "paragraph",
        "text": "A breach of this Code may result in action, including guidance, warning, additional training, supervision, restriction of duties, removal of access, removal from moderation duties, removal from mentoring duties, removal from volunteer role, termination of representative status, account restriction, account suspension, referral to safeguarding review or referral to appropriate authorities where required."
      },
      {
        "type": "paragraph",
        "text": "Serious misconduct may result in immediate removal from role."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "32. No Employment or Ownership Rights",
        "id": "no-employment-or-ownership-rights"
      },
      {
        "type": "paragraph",
        "text": "Serving as a volunteer, moderator, mentor or representative does not create employment rights, trustee rights, governance rights, ownership rights, partnership rights, agency rights, entitlement to payment, entitlement to organisational assets or authority to bind Mentor to Marry or Love, Dating and Marriage Ministries unless expressly authorised."
      },
      {
        "type": "paragraph",
        "text": "Volunteer involvement may be ended by either party, subject to any applicable role agreement or internal procedure."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "33. Continuing Obligations After Leaving",
        "id": "continuing-obligations-after-leaving"
      },
      {
        "type": "paragraph",
        "text": "Confidentiality, data protection, safeguarding and non-disclosure obligations may continue after a representative leaves their role."
      },
      {
        "type": "paragraph",
        "text": "Former representatives must not use member information, disclose confidential matters, retain platform records, contact members using information obtained through their role, present themselves as still authorised or misuse their former status."
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may require return, deletion or confirmation of deletion of confidential information or platform materials."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "34. No Retaliation",
        "id": "no-retaliation"
      },
      {
        "type": "paragraph",
        "text": "Retaliation is prohibited."
      },
      {
        "type": "paragraph",
        "text": "Representatives must not retaliate against any person because they made a report, raised a concern, questioned conduct, cooperated with an investigation, refused inappropriate contact, set boundaries, challenged misconduct or escalated safeguarding concerns."
      },
      {
        "type": "paragraph",
        "text": "Retaliation may result in removal from role and further enforcement action."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "35. Review of This Code",
        "id": "review-of-this-code"
      },
      {
        "type": "paragraph",
        "text": "Mentor to Marry may review and update this Code from time to time."
      },
      {
        "type": "paragraph",
        "text": "Updates may reflect platform development, safeguarding learning, volunteer experience, legal developments, governance improvements, user feedback, operational needs or changes in services."
      },
      {
        "type": "paragraph",
        "text": "Updated versions may be published or issued to representatives."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "36. Contact",
        "id": "contact"
      },
      {
        "type": "paragraph",
        "text": "Questions about this Code should be directed to Mentor to Marry or Love, Dating and Marriage Ministries through the contact details provided to representatives or published on the platform."
      },
      {
        "type": "paragraph",
        "text": "Urgent safeguarding or safety concerns should be escalated using the relevant safeguarding or reporting channel."
      },
      {
        "type": "paragraph",
        "text": "Moderator, Mentor & Volunteer Commitment"
      },
      {
        "type": "paragraph",
        "text": "By serving with Mentor to Marry, I acknowledge and agree that:"
      },
      {
        "type": "paragraph",
        "text": "I will act with integrity, honesty and Christian character;"
      },
      {
        "type": "paragraph",
        "text": "I will comply with Mentor to Marry policies and procedures;"
      },
      {
        "type": "paragraph",
        "text": "I will maintain appropriate boundaries with members;"
      },
      {
        "type": "paragraph",
        "text": "I will not misuse my role, access or influence;"
      },
      {
        "type": "paragraph",
        "text": "I will preserve confidentiality and protect personal information;"
      },
      {
        "type": "paragraph",
        "text": "I will report safeguarding, safety, fraud or serious conduct concerns promptly;"
      },
      {
        "type": "paragraph",
        "text": "I will not use spiritual language, mentoring status or platform role to pressure or manipulate members;"
      },
      {
        "type": "paragraph",
        "text": "I will avoid and disclose conflicts of interest;"
      },
      {
        "type": "paragraph",
        "text": "I will not request money, gifts, favours or personal benefits from members;"
      },
      {
        "type": "paragraph",
        "text": "I will not pursue members through my role or misuse privileged access;"
      },
      {
        "type": "paragraph",
        "text": "I will cooperate honestly with reviews or investigations;"
      },
      {
        "type": "paragraph",
        "text": "I understand that breach of this Code may result in restriction, removal from role or further enforcement action;"
      },
      {
        "type": "paragraph",
        "text": "I understand that my role does not create employment, ownership, governance or trustee rights; and"
      },
      {
        "type": "paragraph",
        "text": "I will serve in a manner that protects members, honours God and supports the mission of Mentor to Marry."
      },
      {
        "type": "paragraph",
        "text": "Signature / Acknowledgement Block"
      },
      {
        "type": "paragraph",
        "text": "I confirm that I have read, understood and agree to comply with this Moderator, Mentor & Volunteer Code of Conduct."
      },
      {
        "type": "paragraph",
        "text": "Name, role, signature and date fields may be completed separately where acknowledgement is required."
      }
    ]
  }
];

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug);
}
