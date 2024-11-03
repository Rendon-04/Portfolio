import React from "react";
import './CivicsApp.css'

export const CivicsApp = () => {
    return (
        <div className="civics-container">
            <h1 className="main-heading">US Civics Test App</h1>
    <div className="content-wrapper">
        <div className="text-content">
            <h2 className="section-heading">Introduction</h2>
            <p className="intro-paragraph">The U.S. Civic Test App is a web application designed to help individuals prepare for 
                the U.S. naturalization civics test. Built with a focus on accessibility and an intuitive user experience, 
                the app serves users with tools to study, practice, and track their progress, as well as additional resources 
                related to the naturalization process.</p>
                </div>
                <div className="civics-image">
                <img  src="src/assets/img/civicsImage.png" alt="homepage" />
            </div>
        </div>
            <h2 className="section-heading">Technologies Used</h2>
            <p className="paragraph">The app leverages a full-stack architecture</p>
            <div className="tech-list">
                <p>React for the frontend</p>
                <p>|</p>
                <p>Flask for the backend</p>
                <p>|</p>
                <p>PostgreSQL for the database</p>
                <p>|</p>
                <p>AWS Lightsail for deployment</p>
            </div>
            
            <div className="problem-content-wrapper">
                <div className="-problem-text-content">
                    <h2 className="problem-section-heading">Problem</h2>
                    <p className="problem-paragraph">
                        Preparing for the U.S. naturalization civics test can be challenging, especially for users who are unfamiliar with online study tools. 
                        Many rely on printed study sheets and limited resources, which can be overwhelming. My goal was to build a scalable, intuitive platform 
                        that could replace boring study materials with a responsive, interactive web app that also improves the accuracy and personalization of 
                        studying for the civics test.
                    </p>
                </div>

                <div className="study-image-content">
                    <img  src="src/assets/img/study.png" alt="study" />
                </div>
            </div>
            
            <h3 className="section-heading">Key Technical Challenges</h3>
            <ul className="list">
                <li>Data Management: Efficiently managing a dataset of 100 questions and dynamically serving them to users.</li>
                <li>User Authentication and Session Management: Creating a smooth, secure user experience that persists user sessions.</li>
                <li>Performance: Ensuring quick load times and responsiveness, particularly with randomized test generation.</li>
                <li>Frontend Flexibility: Building a React interface that adapts to different devices and optimizes user engagement.</li>
                <li>Deployment and Scalability: Deploying on AWS Lightsail with continuous integration to streamline updates.</li>
            </ul>
            <div className="testing-content">
            <div className="skills-image">
                <img  src="src/assets/img/skills.png" alt="test" />
            </div>
            <div className="test-image">
                <img  src="src/assets/img/test.png" alt="test" />
            </div>
            </div>
            
            <h2 className="section-heading">Strategy and Goals</h2>
            <p className="paragraph">The core strategy was to design a Minimum Viable Product that would provide a foundation for interactive learning 
                while establishing an iterable architecture. Key goals for this MVP included:</p>
            <ul className="list">
                <li>User-Focused Experience: Ensure that each study tool is approachable and can function seamlessly.</li>
                <li>Randomized Practice Tests: Develop functionality to generate unique, randomized 10-question practice tests.</li>
                <li>Secure and Reliable Session Handling: Use Flask sessions for user authentication and session management, providing a consistent experience across sessions.</li>
                <li>Scalability and Efficiency: Build for the future by making the architecture extensible, accommodating potential growth in user base and content.</li>
            </ul>
            <div className="resources-image">
                <img  src="src/assets/img/resources.png" alt="resources" />
            </div>
            
            <h2 className="section-heading">Vision for Future Iterations</h2>
            <p className="paragraph">Looking ahead, I envision future iterations that expand the app's capabilities.</p>
            <ul className="list">
                <li>Enhanced Personalization: Enable personalized study recommendations based on user performance in specific question categories.</li>
                <li>Analytics and Insights: Implement analytics tools to provide insights on frequently missed questions, helping users better target their weak areas.</li>
                <li>Extended Question Database: Add more practice questions and integrate dynamic difficulty adjustment.</li>
                <li>Localization: Incorporate multi-language support to increase accessibility for non-native English speakers.</li>
                <li>Progressive Web App: Transform the app into a PWA for better mobile compatibility and offline use.</li>
            </ul>
            
            <h2 className="section-heading">Key Learnings</h2>
            <p className="paragraph">This project taught me valuable lessons about full-stack development and iterative improvement:</p>
            <ul className="list">
                <li>Frontend-Backend Data Flow: Designing data flows between React and Flask reinforced my understanding of REST APIs and JSON handling.</li>
                <li>Session Management: Working through session persistence and authentication with Flask taught me the importance of secure session handling in web apps.</li>
                <li>Deployment Process: Deploying on AWS Lightsail and managing updates with version control provided a practical foundation in DevOps practices.</li>
                <li>Performance Optimization: Implementing randomized question generation on the frontend minimized server load and response times.</li>
                <li>Importance of MVP Focus: Maintaining a narrow focus on core functionalities helped prevent feature creep and allowed for a more streamlined, achievable product.</li>
            </ul>
        </div>
    );
};

export default CivicsApp;