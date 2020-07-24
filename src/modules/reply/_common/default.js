import { fieldType } from "./constans";

// IF YOU’RE INTERESTED IN THE OPPORTUNITY:
const interestedText = `Hi $$recruiterName,

$$commonality !

I’m interested in $$recruiterCompany open $$jobTitle role, would be interested in $$interesting. I’d love to get your thoughts on $$thought. Would you be open to $$action? It would be so appreciated.

Thank you,

$$name
$$signature

`;

export const interested = {
  value: interestedText,
  fields: {
    recruiterName: {
      type: fieldType.TEXT,
      value: ""
    },
    recruiterCompany: {
      type: fieldType.TEXT,
      value: ""
    },
    name: {
      type: fieldType.TEXT,
      value: ""
    },
    signature: {
      type: fieldType.TEXT,
      value: ""
    },
    jobTitle: {
      type: fieldType.TEXT,
      value: ""
    },
    commonality: {
      type: fieldType.RADIO,
      value: [
        {
          isSelected: false,
          text: "Thank you for reaching out with this awesome opportunity"
        },
        {
          isSelected: true,
          text:
            "It's great to connect with someone at $$recruiterCompany company — I’ve admired your work"
        }
      ]
    },
    interesting: {
      type: fieldType.RADIO,
      value: [
        { isSelected: false, text: "hearing more about the opportunity" },
        { isSelected: true, text: "learning the specifics of the role" },
        { isSelected: false, text: "applying formally" }
      ]
    },
    thought: {
      type: fieldType.RADIO,
      value: [
        { isSelected: false, text: "your experience at the company" },
        {
          isSelected: false,
          text: "what the team is specifically looking for"
        },
        { isSelected: false, text: "why you felt I’d be a great fit" }
      ]
    },
    action: {
      type: fieldType.RADIO,
      value: [
        { isSelected: false, text: "hopping on a call" },
        { isSelected: false, text: "answering 3-5 quick questions" }
      ]
    }
  },
  information:
    "With this response, you show genuine interest in both the company and the role and show that you are proactive about suggesting next steps. Sure, it’s a job seekers’ market, but there’s no need to play hard to get. If you’re interested, then show it and don’t hesitate to share your interest and preferred mode of communication."
};

// IF YOU’RE ON THE FENCE:
const fence = `
Hi $$recruiterName,

Thank you for your InMail.

I’m pretty happy in my current role at [company name], but I’d be open to discussing this opportunity with you. This role and company look to have some exciting potential, and I never turn down a chance to chat about [insert compelling aspect of the jobs/company/industry].

Would it be possible for us to connect via phone next week?

I look forward to speaking!

Best,

[Your name]

Why this works: Sure you’re satisfied in your current job, but if you’re open to the right opportunity, this response allows you to be both honest about your current feelings and leaves room for the possibility of a new role. It signals to a recruiter that you’re open to being sold on the role and considering a new company.
`;
// IF YOU’RE INTERESTED IN THE COMPANY, BUT NOT THE ROLE:
const companyInterested = `Hi [Name],

Thanks for reaching out to me for this role! I am actively exploring new opportunities, but would ideally like to find a position that would allow me to [work from home, expand on my marketing experience, step into the nonprofit space, earn at least $X annually, etc.]. It sounds like this particular role isn’t quite what I’m looking for, but do you happen to know of any other opportunities that may be a better fit? If so, I’d love to connect! [Or include a sentence with a link to another job opening at the company.]

I’ve attached my resume for your review and can be reached directly at [your email address and/or phone number] moving forward.

Best,

[Your name]

Why this works: If your dream company reaches out to you for a role that’s less than ideal, get your foot in the door by sharing exactly what you’re looking for. Don’t be shy about telling them you’re interested in the company and use the introduction as a way to explore alternative opportunities.
`;
// IF THE COMPANY & ROLE ARE NOT INTERESTING:
const notInterested = `Hi [Name],

Thank you for your note about [insert job title]. While the role seems interesting and the work your company is doing is impressive, I really love the company I currently work for. That said, if I am looking to make a change in the future, I will certainly be in touch.

Thanks again,

[Your name]

Why this works: For the sake of your professional brand and to show common courtesy, do not just ignore the recruiter. Even if the opportunity isn’t a right fit now, being humble and thankful are important traits when turning a recruiter down. There’s no need to dwell on why you’re not interested, or to provide excuses. Be direct and clear with your position, and like any smart professional, leave room for continuing the relationship down the line.
`;
// IF YOUR DREAM JOB AND COMPANY PRESENT THEMSELVES:
const dreamJobCompany = `Hi [Name],

Thank you for your note. Based on your description of the role, it sounds like a great job and aligns with where I’d like to take my career. I’m eager to learn more.

As you may have seen on my profile [or resume], I have [number of years] experience in [field/industry]. I’ve been consistently committed to [specific goal, skill or trait the new job entails]. In my current role at [Name of current employer], I recently [impressive accomplishment that relates to the new job] and [add mention of management experience or soft skills.]

Could we discuss this opportunity in more detail? I’d welcome the opportunity to learn more about the role and share how my skills and experiences would benefit [Name of potential employer].

I’m available to talk by phone on [list of dates and times you’re available]. I look forward to speaking with you.

Best,
[Your name]

Why this works: While you may be jumping up and down with excitement because your dream company and job appeared in your inbox, there are better ways to convey your excitement than by sending a response full of exclamation marks and smiley-face emojis. Demonstrate your enthusiasm for the role by responding with a carefully crafted note that reflects both your skills as well as your understanding of the company’s business needs. This combo will show the recruiter that you’re absolutely worth an initial interview.
`;
