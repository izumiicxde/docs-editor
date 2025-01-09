export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Proposal</h1>
      <h2>Introduction</h2>
      <p>Provide an overview of the software proposal, including its purpose and benefits.</p>
      <h2>Objectives</h2>
      <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
      </ul>
      <h2>Scope</h2>
      <p>Describe the scope of the software project.</p>
      <h2>Timeline</h2>
      <p>Include a timeline with major milestones.</p>
      <h2>Budget</h2>
      <p>Outline the budget requirements.</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>Your Name</h1>
      <h2>Contact Information</h2>
      <ul>
        <li>Phone: [Your Phone Number]</li>
        <li>Email: [Your Email Address]</li>
        <li>LinkedIn: [Your LinkedIn Profile]</li>
      </ul>
      <h2>Summary</h2>
      <p>A brief professional summary or objective statement.</p>
      <h2>Experience</h2>
      <ul>
        <li><strong>Position</strong> - Company, Duration</li>
        <li>Achievements/Responsibilities</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>Degree - Institution, Graduation Year</li>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Project Title</h2>
      <h2>Objective</h2>
      <p>State the goal of the project.</p>
      <h2>Background</h2>
      <p>Provide context or background information.</p>
      <h2>Methodology</h2>
      <p>Explain the methods and steps to execute the project.</p>
      <h2>Deliverables</h2>
      <p>List the expected outcomes.</p>
      <h2>Timeline</h2>
      <p>Include key phases and deadlines.</p>
      <h2>Budget</h2>
      <p>Provide an estimated budget breakdown.</p>
    `,
  },
  {
    id: "business letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>[Date]</p>
      <p>Recipient's Name</p>
      <p>Recipient's Title</p>
      <p>Recipient's Company</p>
      <p>Recipient's Address</p>
      <p>City, State, ZIP Code</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Opening Paragraph: Introduce yourself and the purpose of the letter.]</p>
      <p>[Body Paragraph: Provide details supporting your purpose.]</p>
      <p>[Closing Paragraph: Restate your request or purpose and provide contact information.]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "cover letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>Dear [Hiring Manager's Name],</p>
      <p>I am writing to express my interest in the [Position Title] position at [Company Name]. With my [specific skills or experience], I am confident in my ability to contribute to your team.</p>
      <p>[Paragraph 1: Discuss your relevant experience and accomplishments.]</p>
      <p>[Paragraph 2: Explain why you are a great fit for the role.]</p>
      <p>[Paragraph 3: Conclude with a call to action or thank you.]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>[Date]</p>
      <p>Recipient's Name</p>
      <p>Recipient's Address</p>
      <p>City, State, ZIP Code</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body Paragraph: Provide the main content of the letter.]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
];
