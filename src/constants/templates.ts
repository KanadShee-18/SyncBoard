// export const templates = [
//   {
//     id: "blank",
//     label: "Blank Document",
//     imageUrl: "/blank-img.svg",
//   },
//   {
//     id: "Software Proposal",
//     label: "Software Development Proposal",
//     imageUrl: "/software-proposal.svg",
//   },
//   {
//     id: "Project Proposal",
//     label: "Project Proposal",
//     imageUrl: "/project-proposal.svg",
//   },
//   {
//     id: "business-letter",
//     label: "Business Letter",
//     imageUrl: "/business-letter.svg",
//   },
//   {
//     id: "resume",
//     label: "Resume",
//     imageUrl: "/resume.svg",
//   },
//   {
//     id: "letter",
//     label: "Letter",
//     imageUrl: "/letter.svg",
//   },
// ];

export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-img.svg",
    initialContent: "",
  },
  {
    id: "Software Proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `<h1 style="font-size:24px; color:#333333;">Software Development Proposal</h1>
      <p style="font-size:16px; color:#666666;">This document outlines the scope, timeline, and deliverables for the proposed software development project.</p>
      <h2 style="font-size:20px; color:#333333;">Project Overview</h2>
      <p style="font-size:16px; color:#666666;">The project aims to build a scalable and efficient software solution to meet client requirements.</p>
      <h2 style="font-size:20px; color:#333333;">Technologies Used</h2>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
      </ul>
      <h2 style="font-size:20px; color:#333333;">Timeline</h2>
      <p style="font-size:16px; color:#666666;">The estimated project duration is 3 months, including development and testing phases.</p>`,
  },
  {
    id: "Project Proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `<h1 style="font-size:24px; color:#333333;">Project Proposal</h1>
      <p style="font-size:16px; color:#666666;">This proposal outlines the goals, scope, and execution strategy for the project.</p>
      <h2 style="font-size:20px; color:#333333;">Objectives</h2>
      <p style="font-size:16px; color:#666666;">Our main objective is to streamline processes and enhance efficiency.</p>
      <h2 style="font-size:20px; color:#333333;">Budget</h2>
      <p style="font-size:16px; color:#666666;">The estimated budget is $50,000, covering development, testing, and deployment.</p>`,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `<h1 style="font-size:24px; color:#333333;">Business Letter</h1>
      <p style="font-size:16px; color:#666666;">[Your Name]</p>
      <p style="font-size:16px; color:#666666;">[Your Address]</p>
      <p style="font-size:16px; color:#666666;">[Date]</p>
      <p style="font-size:16px; color:#666666;">Dear [Recipient's Name],</p>
      <p style="font-size:16px; color:#666666;">I am writing to discuss an important matter regarding our recent collaboration.</p>
      <p style="font-size:16px; color:#666666;">Sincerely,</p>
      <p style="font-size:16px; color:#666666;">[Your Name]</p>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `<h1 style="font-size:24px; color:#333333;">Your Name</h1>
      <p style="font-size:16px; color:#666666;">[Your Contact Information]</p>
      <h2 style="font-size:20px; color:#333333;">Experience</h2>
      <p style="font-size:16px; color:#666666;">[Job Title] at [Company Name]</p>
      <h2 style="font-size:20px; color:#333333;">Education</h2>
      <p style="font-size:16px; color:#666666;">[Degree] from [University]</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<h1 style="font-size:24px; color:#333333;">Formal Letter</h1>
      <p style="font-size:16px; color:#666666;">Dear [Recipient's Name],</p>
      <p style="font-size:16px; color:#666666;">I hope this letter finds you well. I am reaching out regarding...</p>
      <p style="font-size:16px; color:#666666;">Best Regards,</p>
      <p style="font-size:16px; color:#666666;">[Your Name]</p>`,
  },
];
