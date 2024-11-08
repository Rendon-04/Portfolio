import React from "react";
import { useEffect } from "react";
import civicsImage from "../img/civicsImage.png";
import study from "../img/study.png";
import skills from "../img/skills.png";
import test from "../img/test.png";
import UX from "../img/UX.png";
import scale from "../img/scale.png";
import Qs from "../img/Qs.png";
import handling from "../img/handling.png";
import './CivicsApp.css'

export const CivicsApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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
                <img src={civicsImage} alt="homepage" />
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
                        Many rely on printed study sheets and limited resources, which can be overwhelming. 
                    </p>
                </div>

                <div className="study-image-content">
                    <img  src={study} alt="study" />
                </div>
            </div>
            
            <div className="technical-challenges">
            <h3 className="section-heading">Key Technical Challenges</h3>
            <ul className="list">
                <li>Efficiently managing a dataset of 100 questions and dynamically serving them to users.</li>
                <li><strong> User Authentication and Session Management:</strong> Creating a smooth, secure user experience that persists user sessions.</li>
                <li><strong>Performance:</strong> Ensuring quick load times and responsiveness, particularly with randomized test generation.</li>
                <li><strong>Frontend Flexibility:</strong> Building a React interface that adapts to different devices and optimizes user engagement.</li>
                <li><strong>Deployment and Scalability:</strong>  Deploying on AWS Lightsail with continuous integration to streamline updates.</li>
            </ul>
            </div>
            <div className="testing-content">
            <div className="skills-image">
                <img  src={skills} alt="test" />
            </div>
            <div className="test-image">
                <img  src={test} alt="test" />
            </div>
            </div>
            
            <h2 className="section-heading">Strategy and Goals</h2>
            <p className="paragraph">The core strategy was to design a Minimum Viable Product that would provide a foundation for interactive learning 
                while establishing an iterable architecture. Key goals for this MVP included:</p>
           
            <div className="resources-images">
                <img  src={UX} alt="resources" />
                <img  src={scale} alt="resources" />
                <img  src={Qs} alt="resources" />
                <img  src={handling} alt="resources" />
            </div>
            
            <div className="conclusion">
            <h2 className="section-heading">Key Learnings</h2>
            <p className="paragraph">The development of the USCT App provided insights into full-stack engineering</p>
            <div className="schema-grid-outline">
                <h1 className="schema-section-title">Database Schema and Backend Design</h1>
                <img src="src/assets/img/schema.png" alt="schema" className="schema-image" />

                {/* Database Schema Section */}
                <section className="database-schema">
                    <p className="schema-intro-text">
                        The app's backend uses PostgreSQL to handle data storage, leveraging Flask and SQLAlchemy ORM for efficient database interactions.
                        The core tables in the database schema include Users, Scores, Question & Answers, and Test Results to support modularity and allow for future scalability.
                    </p>

                    <h2 className="database-section-heading">Database Schema</h2>
                    
                    <div className="database-schema-section">
                        <div className="schema-section">
                            <h3 className="subheading">Users Table</h3>
                            <p className="description">
                                Stores user information, including ID, username, email, and password.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: id, username, email, password</li>
                                <li>Relationship: One-to-many relationship with the Score table, linking each user to their test scores.</li>
                            </ul>
                        </div>

                        <div className="schema-section">
                            <h3 className="subheading">Scores Table</h3>
                            <p className="description">
                                Tracks individual test scores, associating each score with a specific user and test result. This table allows users to track their progress over time.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: score_id, user_score, user_id, test_result</li>
                                <li>Relationships: Many-to-one relationship with the User table & Many-to-one relationship with the TestResult table, linking each score with its related test result.</li>
                            </ul>
                        </div>

                        <div className="schema-section">
                            <h3 className="subheading">QuestionAnswer Table</h3>
                            <p className="description">
                                Stores each civics test question along with the answer choices and correct answer, allowing the app to generate multiple-choice quizzes.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: question_answer_id, question, answer, options</li>
                                <li>Relationships: One-to-many relationship with the TestResult table, linking each question to multiple test results for answer validation.</li>
                            </ul>
                        </div>

                        <div className="schema-section">
                            <h3 className="subheading">TestResult Table</h3>
                            <p className="description">
                                Records whether each answer was correct or incorrect, supporting detailed tracking of user performance on individual questions.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: test_result_id, is_correct, question_answer_id</li>
                                <li>Relationships: Many-to-one relationship with the QuestionAnswer table. One-to-many relationship with the Score table, linking each test result to the user's overall score.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            
            {/* <!-- Backend Implementation Section --> */}
            <section className="backend-implementation">
                <h2 className="section-heading">Backend Implementation</h2>
                <p className="description">
                    The backend, built with Flask, serves as an API provider to the React frontend, managing user authentication, session handling, and data retrieval.
                </p>
                <div className="backend-sections">
                <div className="backend-feature">
                    <h3 className="subheading">Session Management</h3>
                    <p className="feature-description">
                        Flask’s session mechanism was used to maintain user login status across sessions. The <code>/login</code>, <code>/register</code>, and <code>/logout</code> routes handle user authentication, with hashed passwords for security.
                    </p>
                </div>

                <div className="backend-feature">
                <h3 className="subheading">API Endpoints</h3>
                    <p className="feature-description">
                        RESTful endpoints were developed to handle core functionalities:
                    </p>
                    <ul className="api-endpoints">
                        <li><strong>Practice Test:</strong> GET <code>/practice_test</code> fetches 10 random questions for the user’s practice test session.</li>
                        <li><strong>Submit Practice Test:</strong> POST <code>/submit_practice_test</code> records the user’s score and saves it to the database after comparing answers.</li>
                        <li><strong>Study Pages:</strong> GET <code>/study_for_the_test</code> renders the main study page; GET <code>/overview_study_page</code> loads study data for detailed topic reviews.</li>
                        <li><strong>View Scores:</strong> GET <code>/view_scores</code> retrieves the user’s score history, accessible only when logged in.</li>
                    </ul>
                </div>
                </div>
            </section>

            {/* <!-- Frontend-Backend Communication Section --> */}
            <div className="frontend-backend">
            <section className="frontend-backend-communication">
                
                <h2 className="section-heading">Frontend-Backend Communication</h2>
                <p className="description">
                    The frontend, built with React, leverages axios for API calls to the Flask backend. Key technical design decisions on the frontend include:
                </p>

                <ul className="frontend-features">
                    <li><strong>Data Fetching and State Management:</strong> The Test component fetches questions, shuffles them on the frontend, and dynamically renders each question as a multiple-choice format.</li>
                    <li><strong>Session and Error Handling:</strong> Simplified error handling was implemented to guide users without overwhelming them with error messages.</li>
                </ul>
               
            </section>

            {/* <!-- Deployment and Version Control Section --> */}
            <section className="deployment-version-control">
                <h2 className="section-heading">Deployment and Version Control</h2>
                <p className="description">
                    The app is deployed on AWS Lightsail, with PostgreSQL hosted on the same instance for simpler configuration. Deployment follows CI/CD practices, enabling streamlined updates.
                </p>

                <ul className="deployment-features">
                    <li><strong>Git Integration:</strong> Version control is handled through Git, with commits pushed to GitHub and updates pulled by the server.</li>                 </ul>
            </section>
            </div>
            {/* <!-- Key Takeaways Section --> */}
            <section className="key-takeaways">
                <h2 className="section-heading">Key Takeaways</h2>
                <ul className="takeaways-list">
                    <li><strong>Database Design Principles:</strong> Structuring the database for expansion, normalization, and clear relationships enabled smoother data management.</li>
                    <li><strong>Data Flow and API Design:</strong> Effective communication between frontend and backend facilitated a cohesive user experience.</li>
                    <li><strong>Session and State Management:</strong> Developing secure session handling with Flask ensured consistent state across user sessions.</li>
                    <li><strong>Continuous Deployment:</strong> Setting up AWS Lightsail and managing deployment with Git reinforced the value of version control and CI/CD pipelines.</li>
                </ul>
            </section>
        </div>        
    </div>
        
    );
};

export default CivicsApp;