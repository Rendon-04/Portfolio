import React from "react";
import { useEffect } from "react";
import FlowHomePage from "../img/FlowHomePage.png";
import FlowNews from "../img/FlowNews.png";
import FlowFacts from "../img/FlowFacts.png";
import FlowProgress from "../img/FlowProgress.png";
import NewsAPI from "../img/NewsAPI.png";
import FactCheck from "../img/FactCheck.png";
import Security from "../img/Security.png";
import GoalSetting from "../img/GoalSetting.png";
import FlowDB from "../img/FlowDB.png";

export const NewsApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="civics-container">
            <h1 className="main-heading">Flow Innovation News App</h1>
    <div className="content-wrapper">
        <div className="text-content">
            <h2 className="section-heading">Introduction</h2>
            <p className="intro-paragraph">Flow Innovation is a web application designed to empower users to uncover the truth and explore innovation 
                through fact-checking and discovery tools. I collaborated with another Engineer on this project. <br></br><a href="https://github.com/Rendon-04/flow_innovation" target="_blank" class="custom-link">Check it out the Github repo here!</a></p>
                </div>
                <div className="civics-image">
                <img src={FlowHomePage} alt="homepage" />
            </div>
        </div>
            <h2 className="section-heading">Technologies Used</h2>
            <p className="paragraph">The app leverages a full-stack architecture</p>
            <div className="tech-list">
                <p>React for the frontend</p>
                <p>|</p>
                <p>Flask for handling API endpoints and server-side logic</p>
                <p>|</p>
                <p>SQLite for lightweight and efficient data storage</p>
            </div>
            
            <div className="problem-content-wrapper">
                <div className="-problem-text-content">
                    <h2 className="problem-section-heading">Problem</h2>
                    <p className="problem-paragraph">
                    Today, misinformation is rampant, and innovation often goes unnoticed. People need tools to allow them to combat misinformation and explore what is occurring around the world.
                    </p>
                </div>

                <div className="study-image-content">
                    <img  src={FlowNews} alt="study" />
                </div>
            </div>
            
            <div className="technical-challenges">
            <h3 className="section-heading">Key Challenges</h3>
            <ul className="list">
                <li>Efficiently managing a dataset of 100 questions and dynamically serving them to users.</li>
                <li><strong> Balancing scope and execution:</strong> Initially, we considered integrating goal tracking but had to evaluate whether it aligned with our core mission. Over time, we realized that fostering an innovation mindset naturally ties into goal-setting and progress tracking, making it a valuable addition</li>
                <li><strong>Optimizing fact-checking performance:</strong> We didn’t want every claim to hit an external API, so we implemented NLP-based similarity detection to reduce redundant checks.</li>
                <li><strong>Frontend Flexibility:</strong> Presenting fact-checking results in a way that is clear and actionable was a challenge. We iterated on the UI to make insights digestible.</li>
            </ul>
            </div>
            <div className="testing-content">
            <div className="skills-image">
                <img  src={FlowFacts} alt="test" />
            </div>
            <div className="test-image">
                <img  src={FlowProgress} alt="test" />
            </div>
            </div>
            
            <h2 className="section-heading">Strategy and Goals</h2>
            <p className="paragraph">The core strategy was to design a Minimum Viable Product that would provide a user the ability to browse through news articles 
                and allow them to fact check any news source or topic they find. Key goals for this MVP included:</p>
           
            <div className="resources-images">
                <img  src={NewsAPI} alt="resources" />
                <img  src={FactCheck} alt="resources" />
                <img  src={Security} alt="resources" />
                <img  src={GoalSetting} alt="resources" />
            </div>
            
            <div className="conclusion">
            <h2 className="section-heading">Key Learnings</h2>
            <p className="paragraph">The development of Flow Innovation provided insights into full-stack engineering, integrating NLP, machine learning, and external APIs for fact-checking and progress tracking.</p>
            <div className="schema-grid-outline">
                <h1 className="schema-section-title">Database Schema and Backend Design</h1>
                <img src={FlowDB} alt="schema" className="schema-image" />

                {/* Database Schema Section */}
                <section className="database-schema">
                    <p className="schema-intro-text">
                        The app's backend is built using Flask and PostgreSQL, leveraging SQLAlchemy ORM for efficient database interactions. JWT authentication ensures secure user sessions, while the schema is structured to track user progress, goals, and community contributions.
                        Core tables in the database schema include Users, Progress, Goals, and Community Progress, ensuring modularity and future scalability.
                    </p>

                    <h2 className="database-section-heading">Database Schema</h2>
                    
                    <div className="database-schema-section">
                        <div className="schema-section">
                            <h3 className="subheading">User Table</h3>
                            <p className="description">
                                Stores user authentication details and associations with progress, goals, and community contributions.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: id, username, password</li>
                                <li>Relationships: One-to-many relationship with Progress, Goals, and CommunityProgress tables.</li>
                            </ul>
                        </div>

                        <div className="schema-section">
                            <h3 className="subheading">Progress Table</h3>
                            <p className="description">
                                Tracks user progress achievements over time.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: id, achievement, user_id, created_at</li>
                                <li>Relationships: Many-to-one relationship with the Users table.</li>
                            </ul>
                        </div>

                        <div className="schema-section">
                            <h3 className="subheading">Goals Table</h3>
                            <p className="description">
                                Stores user-defined goals along with target completion dates.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: id, goal, target_date, user_id, created_at</li>
                                <li>Relationships: Many-to-one relationship with the Users table.</li>
                            </ul>
                        </div>

                        <div className="schema-section">
                            <h3 className="subheading">Community Progress Table</h3>
                            <p className="description">
                                Captures community-shared progress stories to encourage engagement and collaboration.
                            </p>
                            <ul className="fields-list">
                                <li>Fields: id, progress_story, user_id, created_at</li>
                                <li>Relationships: Many-to-one relationship with the Users table.</li>
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
                                <li><strong>Check Claim:</strong> GET <code>/check_claim</code> verifies user-submitted claims using NLP and fact-checking APIs.</li>
                                <li><strong>Innovation News:</strong> GET <code>/innovation_news</code> fetches recent news articles on innovation and technology.</li>
                                <li><strong>Track Progress:</strong> POST <code>/progress</code> allows users to log and track progress milestones.</li>
                                <li><strong>Set Goals:</strong> POST <code>/goal</code> enables users to define personal learning goals.</li>
                                <li><strong>Community Progress:</strong> GET <code>/progress/community</code> retrieves user-shared progress stories.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* <!-- Frontend-Backend Communication Section --> */}
            <div className="frontend-backend">
                    <section className="frontend-backend-communication">
                        <h2 className="section-heading">Frontend-Backend Communication</h2>
                        <p className="description">
                            The frontend, built with React, leverages axios for API calls to the Flask backend. Key technical design decisions on the frontend include:
                        </p>

                        <ul className="frontend-features">
                            <li><strong>Data Fetching and State Management:</strong> API calls retrieve user progress, goals, and fact-checking results, dynamically updating the UI.</li>
                            <li><strong>Session and Error Handling:</strong> JWT authentication secures requests, and error handling ensures a smooth user experience.</li>
                            <li><strong>News API Integration:</strong> Users can fetch real-time innovation news via the backend and display relevant articles on the frontend.</li>
                        </ul>
                    </section>

            {/* <!-- Key Takeaways Section --> */}
            <section className="key-takeaways">
                    <h2 className="section-heading">Key Takeaways</h2>
                    <ul className="takeaways-list">
                        <li><strong>Database Design Principles:</strong> Structuring the database for modularity, scalability, and clear relationships enabled efficient data management.</li>
                        <li><strong>Data Flow and API Design:</strong> Designing structured API endpoints allowed seamless communication between the frontend and backend.</li>
                        <li><strong>Session and Security Management:</strong> Implementing JWT authentication provided a secure and reliable user experience.</li>
                        <li><strong>AI-Powered Insights:</strong> Leveraging NLP and machine learning enhanced fact-checking accuracy and user progress tracking.</li>
                        <li><strong>Continuous Deployment:</strong> Managing deployment through AWS Lightsail and version control reinforced best DevOps practices.</li>
                    </ul>
            </section>
        </div>        
    </div>
        
    );
};

export default NewsApp;