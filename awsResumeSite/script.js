const jobs = [
  {
    title: "Mechanical & Robitics Technican",
    company: "C&W Services",
    years: "2022–Present",
    details:
      "Worked on maintaining and improving automated machines and robotics in a fast-paced environment. Helped connect equipment to cloud-based tools for real-time monitoring and alerts. Troubleshooted technical issues, followed safety and system best practices, and supported reliable operations.",
  },
  {
    title: "Security System Technican",
    company: "DGA Security",
    years: "2021–2022",
    details:
      "Installed, configured, and maintained security systems and network-connected devices across commercial sites. Troubleshot hardware and software issues, ensured system uptime, and followed strict security protocols. Gained hands-on experience with networking, system integration, and secure infrastructures.",
  },
  {
    title: "Electrican",
    company: "Voltage Soutions",
    years: "2021–2022",
    details:
      "Installed and maintained residential and commercial electrical systems, including lighting infrastructure and commercial-grade audio equipment. Used blueprints and technical diagrams, followed safety and compliance protocols, and collaborated with teams to complete projects on time. Developed strong problem-solving skills, system integration experience, and attention to technical detail.",
  },
];

const timeline = document.getElementById("timeline");

jobs.forEach((job) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${job.title}</strong> at ${job.company} <br />
    <em>${job.years}</em>
    <p>${job.details}</p>
  `;
  timeline.appendChild(li);
});
