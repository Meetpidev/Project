import React, { useState } from "react";

const TABS = [
  { label: "Cloud & Devops", key: "cloud" },
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Mobile", key: "mobile" },
  { label: "Microsoft", key: "microsoft" },
  { label: "Database", key: "database" },
  { label: "Testing", key: "testing" },
];

const TAB_CONTENT = {
  cloud: {
    title: "Cloud & Devops",
    description: `Both cloud and DevOps engineers are essential and complementary components of contemporary
infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).`,
    tools: [
      { name: "AWS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy2tVx2wxmi3eKsYkuaxWa-hlY-4NhDdtaw&s" },
      { name: "Google Cloud", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-6FO0d6dcNiXCNWfir0r20dV9g4wnEqKTA&s" },
      { name: "Docker", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUuylVvTEj0VFID0lk7iFpD2NOarBbnX60g&s" },
      { name: "Kubernetes", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAUkLhdckLDiZaEgz1nxE7tvCxDbIYz5H7g&s" },
      { name: "Jenkins", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_S6Pj6tPYg3UrirWqCoN01x1xGUU97FFIHg&s" },
      { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
    ],
  },
  frontend: {
    title: "Frontend",
    description: "We use front-end technologies like HTML, CSS, and JavaScript because they are flexible, user-friendly, and provide a wealth of tools and support. Our team of experts will assist you at every level of front-end development. Our Certified Front-end developers can provide beautiful user-centric solutions by utilizing the newest front-end frameworks and technological developments.",
    tools: [
      { name: "Angular Js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0zU4ogT34koY9NaOok1UCky1gL5kJt-ZGA&s" },
      { name: "React Js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCMS5dKOhb5ku0srvEaKlFhxDU51SIpW_Xg&s" },
      { name: "Vue Js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" },
      { name: "Vue Js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" },
      { name: "Vue Js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" },
      { name: "Vue Js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" },
      
    ],
  },
  backend: {
    title: "Backend",
    description: "We strengthen the app landscape using tried-and-true back-end development options. Our extraordinary expertise as a backend app development firm creates strong, scalable, and high-performing backend layers specifically suited to your project's needs. Our skilled backend development services in .NET, PHP, Python, Java, and other languages transform your company.",
    tools: [
      { name: "Node.js", icon: "/nodejs_icon.svg" },
      { name: "Python", icon: "/python_icon.svg" },
      { name: "Java", icon: "/java_icon.svg" },
    ],
  },
  mobile: {
    title: "Mobile",
    description: "We use key technologies to create expressive and feature-rich native iOS / Android, cross-platform that will wow your users. For example, Kotlin and Java are the primary programming languages for Android apps, whereas Swift and Objective-C are frequently used for iOS development. The UI/UX design, prototyping, and collaboration are commonly done with tools like Adobe XD, Sketch, and Figma.",
    tools: [
      { name: "React Native", icon: "/react_native_icon.svg" },
      { name: "Flutter", icon: "/flutter_icon.svg" },
      { name: "Swift", icon: "/swift_icon.svg" },
    ],
  },
  microsoft: {
    title: "Microsoft",
    description: "Within the Microsoft ecosystem, SQL Server is a crucial database technology that offers a relational database management system for enterprise-level applications. Microsoft provides the Power Platform, which consists of Power Apps for creating unique business apps, Power Automate for automating workflows, and Power BI for data analytics and visualization in automation and low-code development.",
    tools: [
      { name: "Azure", icon: "/azure_icon.svg" },
      { name: "Power BI", icon: "/powerbi_icon.svg" },
    ],
  },
  database: {
    title: "Database",
    description: "Azure SQL Database is a fully managed, scalable cloud database solution that effortlessly connects with other Azure services. MongoDB is a popular choice for NoSQL database systems, especially for applications needing scalability and flexibility. We utilize MongoDB because of its document-oriented data model, which enables data to be stored in a format similar to JSON.",
    tools: [
      { name: "MongoDB", icon: "/mongodb_icon.svg" },
      { name: "MySQL", icon: "/mysql_icon.svg" },
      { name: "PostgreSQL", icon: "/postgresql_icon.svg" },
    ],
  },
  testing: {
    title: "Testing",
    description: "We test web applications on multiple browsers and platforms using Selenium, an open-source framework for automating web browsers that lets developers create scripts in languages like Python, Java, and C#. We also utilize Postman for API testing, which provides an easy-to-use interface for developing, testing, and documenting APIs, and LoadRunner, a complete enterprise-grade solution for testing.",
    tools: [
      { name: "Selenium", icon: "/selenium_icon.svg" },
      { name: "Jest", icon: "/jest_icon.svg" },
    ],
  },
};

export default function TechnologiesTabs() {
  const [activeTab, setActiveTab] = useState("cloud");
  const tabContent = TAB_CONTENT[activeTab];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Technologies We Work With</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        We work on wide range of tools and technologies to cater client business requirement for existing project or new application.
      </p>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 text-lg font-semibold rounded transition bg-[#005D89]-200 hover:bg-blue-200 ${
              activeTab === tab.key ? "bg-blue-900 text-white" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="md:w-2/5">
          <h2 className="text-3xl font-bold mb-4">{tabContent.title}</h2>
          <p className="text-gray-700">{tabContent.description}</p>
        </div>
        <div className="md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-6">
          {tabContent.tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
            >
              {/* Replace src with your icon image path */}
              <img src={tool.icon} alt={tool.name} className="h-12 w-12 mb-3" />
              <span className="font-semibold text-lg">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
