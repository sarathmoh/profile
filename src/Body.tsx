"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun, Mail, Github, Linkedin } from "lucide-react";
import EDUCATION from "./assets/undraw_education_f8ru.svg";
import EXP1 from "./assets/undraw_feeling_proud_qne1.svg";
import EXP2 from "./assets/undraw_programming_re_kg9v.svg";
import Swiggy from "./assets/swiggy.png";
import NETFLIX from "./assets/NETFLIX.png";
import YOUTUBE from "./assets/youtube.png";
import EXPENSE from "./assets/expense.png";
import PRODUCT from "./assets/product.png";
import HOSPITAL from "./assets/Hospital.jpg";
import CHAT from "./assets/chat.png";

export default function Body() {
  const [showDetails, setShowDetails] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const personalInfo = {
    name: "Sarath Mohan E",
    title: "Software Developer",
    shortBio:
      "I'm a React.js Developer skilled in building dynamic, responsive web applications. I focus on creating user-friendly interfaces and optimizing performance while adhering to best coding practices.",
    detailedBio:
      "Passionate React.js developer with 2 years of experience in building dynamic and responsive web applications. Skilled in leveraging the latest technologies and best practices to create user-friendly interfaces and seamless user experiences. Proficient in state management tools like Redux and Context API, and experienced in integrating RESTful APIs. Committed to writing clean, maintainable code and continuously improving through collaboration and feedback. Always eager to learn and explore new trends in the React ecosystem.",
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Angular",
      "HTML",
      "CSS",
      "BootStrap",
      "Tailwind css",
      "Git",
      "MongoDb",
      "Redux-toolkit",
      "Jest",
      "Firebase",
      "Webpack",
      "Parcel",
    ],

    projects: [
      {
        name: "Evise-chat",
        description:
          "A real-time chat application that connects users with subject matter experts (SMEs) across various fields. The platform allows users to ask questions, get expert advice through chat or audio calls, and offers a pricing structure for services.",
        image: CHAT,
      },

      {
        name: "Honeywell",
        description:
          "Hospital management application that improved the management of assets and resources across multiple hospitals.Tracking the assets effectively",
        image: HOSPITAL,
      },

      {
        name: "NetflixGPT clone",
        description:
          "A netflix clone implemented with authentication using firebase and GPT search using GPT 3.5 Turbo API ",
        image: NETFLIX,
      },
      {
        name: "Swiggy Clone",
        description:
          "Deep drive into jsx and core react feature and handled with real live API data effectively.Integration of redux toolkit",
        image: Swiggy,
      },
      {
        name: "Youtube Clone",
        description:
          "Live youtube search and auto complete functionality,shimmer UI and live chat with anonymous chat feature ",
        image: YOUTUBE,
      },
      {
        name: "Expense Tracker",
        description:
          "Basic implementation of an expense tracker application with the help of chratjs and filtering the expenses",
        image: EXPENSE,
      },
      {
        name: "Productify",
        description:
          "CRUD operation by adding a products.Back-end integrated using Nodejs and Mongodb.JWT authentication implemented",
        image: PRODUCT,
      },
    ],
    education: [
      {
        degree: "Btech in computer science",
        institution: "Nss college of engineering palakkad",
        year: "2017-2020 (Lateral Entry)",
      },
      {
        degree: "Diploma in computer science",
        institution: "AKNM GPTC Tirurangadi",
        year: "2013-2016",
      },
    ],
    experience: [
      {
        title: "Software Engineer(ReactJs)",
        company: "Sayone technologies kochi",
        period: "Augest 2022 - Present",
        description:
          "As a React.js Developer, I designed and built dynamic web applications using React.js, ensuring optimal performance and a seamless user experience. I collaborated with cross-functional teams to implement new features, integrated RESTful APIs for data management, and optimized components for various devices and browsers. Committed to best practices, I wrote clean, maintainable code and conducted code reviews, all while participating in Agile methodologies to enhance project delivery and team efficiency.",
      },
      {
        title: "MEARN Intern",
        company: "Luminar technolab kochi",
        period: " Jan 2022 - Apr 2022",
        description:
          "Developed a product management application with basic CRUD operations. Worked on user interface elements for product creation, modification, and deletion.",
      },
    ],

    contact: {
      email: "esarathmohan@gmail.com",
      github: "https://github.com/sarathmoh",
      linkedin: "https://linkedin.com/in/sarath-mohan-elayo",
    },
    certification: [
      {
        title: "Namaste React",
        company: "Namastedev",
        description: "React applications from scratch",
      },
      {
        title: "Front-end development",
        company: "Luminar technolab",
        description: "MEARN Stack",
      },
    ],
  };

  return (
    <div
      className={`min-h-screen w-full ${
        darkMode ? "bg-black text-violet-300" : "bg-violet-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-end mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full ${
              darkMode
                ? "bg-violet-900 text-violet-100"
                : "bg-violet-200 text-violet-900"
            }`}
          >
            {darkMode ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </Button>
        </div>

        <main className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 w-full"
          >
            <h1
              className={`text-4xl font-bold mb-2 ${
                darkMode ? "text-violet-300" : "text-violet-900"
              }`}
            >
              {personalInfo.name}
            </h1>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                darkMode ? "text-violet-400" : "text-violet-700"
              }`}
            >
              {personalInfo.title}
            </h2>
            <p
              className={`text-lg mb-6 text-justify ${
                darkMode ? "text-violet-200" : "text-violet-800"
              } max-w-3xl mx-auto`}
            >
              {personalInfo.shortBio}
            </p>
            <Button
              onClick={() => setShowDetails(!showDetails)}
              className={`${
                darkMode
                  ? "bg-violet-700 hover:bg-violet-600"
                  : "bg-violet-600 hover:bg-violet-700"
              } text-white`}
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </Button>
          </motion.div>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="w-full space-y-8"
              >
                <Card
                  className={`${
                    darkMode
                      ? "bg-violet-900 text-violet-100"
                      : "bg-white text-violet-900"
                  } shadow-lg`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl font-semibold ${
                        darkMode ? "text-violet-300" : "text-violet-700"
                      } text-justify`}
                    >
                      About Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-justify">
                      {personalInfo.detailedBio}
                    </p>
                    <h3
                      className={`text-xl font-semibold mb-4 ${
                        darkMode ? "text-violet-300" : "text-violet-700"
                      }`}
                    >
                      Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {personalInfo.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-violet-800 text-violet-200"
                              : "bg-violet-200 text-violet-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`${
                    darkMode
                      ? "bg-violet-900 text-violet-100"
                      : "bg-white text-violet-900"
                  } shadow-lg`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl font-semibold ${
                        darkMode ? "text-violet-300" : "text-violet-700"
                      } text-justify`}
                    >
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start">
                    <div className="md:w-2/3 pr-4">
                      {personalInfo.experience.map((edu, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h4
                            className={`text-xl font-semibold ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify`}
                          >
                            {edu.title}
                          </h4>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify font-bold`}
                          >
                            {edu.company} && {edu.period}
                          </p>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify`}
                          >
                            {edu.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                      <img
                        src={EXP1}
                        alt="Education"
                        className="h-[200px] w-full rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`${
                    darkMode
                      ? "bg-violet-900 text-violet-100"
                      : "bg-white text-violet-900"
                  } shadow-lg`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl font-semibold ${
                        darkMode ? "text-violet-300" : "text-violet-700"
                      } text-justify`}
                    >
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start">
                    <div className="md:w-2/3 pr-4">
                      {personalInfo.education.map((edu, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h4
                            className={`text-xl font-semibold ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify`}
                          >
                            {edu.degree}
                          </h4>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify`}
                          >
                            {edu.institution} | {edu.year}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                      <img
                        src={EDUCATION}
                        alt="Education"
                        className="h-[200px] w-full rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className={`${
                    darkMode
                      ? "bg-violet-900 text-violet-100"
                      : "bg-white text-violet-900"
                  } shadow-lg`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl font-semibold ${
                        darkMode ? "text-violet-300" : "text-violet-700"
                      } text-justify`}
                    >
                      Certification
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start">
                    <div className="md:w-2/3 pr-4">
                      {personalInfo.certification.map((edu, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h4
                            className={`text-xl font-semibold ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify`}
                          >
                            {edu.title}
                          </h4>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify`}
                          >
                            {edu.company}
                          </p>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-white" : "text-violet-900"
                            } text-justify`}
                          >
                            {edu.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                      <img
                        src={EXP2}
                        alt="Education"
                        className="h-[200px] w-full rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3
                    className={`text-2xl font-semibold mb-6 ${
                      darkMode ? "text-violet-300" : "text-violet-700"
                    }`}
                  >
                    Projects
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {personalInfo.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card
                          className={`${
                            darkMode
                              ? "bg-violet-900 text-violet-100"
                              : "bg-white text-violet-900"
                          } overflow-hidden h-full`}
                        >
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                          />
                          <CardContent className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                            <h4
                              className={`font-semibold text-lg mb-2 ${
                                darkMode ? "text-violet-300" : "text-violet-700"
                              }`}
                            >
                              {project.name}
                            </h4>
                            <p
                              className={`text-sm ${
                                darkMode ? "text-violet-200" : "text-violet-600"
                              }`}
                            >
                              {project.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Card
                  className={`${
                    darkMode
                      ? "bg-violet-900 text-violet-100"
                      : "bg-white text-violet-900"
                  } shadow-lg`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl font-semibold ${
                        darkMode ? "text-violet-300" : "text-violet-700"
                      }`}
                    >
                      Contact Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="flex space-x-4 mb-4">
                      <a
                        href={`mailto:${personalInfo.contact.email}`}
                        className={`${
                          darkMode
                            ? "text-violet-300 hover:text-violet-400"
                            : "text-violet-600 hover:text-violet-700"
                        }`}
                      >
                        <Mail className="h-6 w-6" />
                      </a>
                      <a
                        href={personalInfo.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          darkMode
                            ? "text-violet-300 hover:text-violet-400"
                            : "text-violet-600 hover:text-violet-700"
                        }`}
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href={personalInfo.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          darkMode
                            ? "text-violet-300 hover:text-violet-400"
                            : "text-violet-600 hover:text-violet-700"
                        }`}
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-violet-200" : "text-violet-600"
                      }`}
                    >
                      Feel free to reach out for collaborations or just a
                      friendly chat!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
