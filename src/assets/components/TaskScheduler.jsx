import React, { useEffect } from 'react';
import TaskSchedulerDatabase from "../img/TaskSchedulerDatabase.png";
import DashboardTask from "../img/DashboardTask.png";
import TwilioNotification from "../img/TwilioNotification.jpeg";
import DashboardTaskAssigned from "../img/DashboardTaskAssigned.png";
import DashboardDateSelect from "../img/DashboardDateSelect.png";
import test from "../img/test.png";
import Task1 from "../img/Task1.png";
import Task2 from "../img/Task2.png";
import Task3 from "../img/Task3.png";
import Task4 from "../img/Task4.png";
import './CivicsApp';


export const TaskSchedulerApp = () => { 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="civics-container">
            <h1 className="main-heading">Task Scheduler Web App</h1>
            <div className="content-wrapper">
                <div className="text-content">
                    <h2 className="section-heading">Introduction</h2>
                    <p className="intro-paragraph">
                        The Task Scheduler Web App allows users to create, organize, and schedule tasks seamlessly.
                        With built-in reminders powered by Twilio, users stay on top of their commitments. The app is
                        designed for simplicity and effectiveness, providing an intuitive interface for task management.
                    </p>
                </div>
                <div className="civics-image">
                    <img src={DashboardTask} alt="Task Scheduler homepage" className="task-image" />
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
                <p>Twilio API for SMS reminders</p>
            </div>

            <div className="task-problem-content-wrapper">
                <div className="task-problem-text-content">
                    <h2 className="task-problem-section-heading">Problem</h2>
                    <p className="task-problem-paragraph">
                        Managing tasks and deadlines can be overwhelming, especially without a centralized system.
                        Many users struggle to stay organized, leading to missed deadlines or forgotten tasks.
                    </p>
                </div>
                <div className="dashboard-image-content">
                    <img src={DashboardDateSelect} alt="study" />
                </div>
            </div>
            <div className="technical-challenges">
                <h3 className="section-heading">Key Technical Challenges</h3>
                <ul className="list">
                    <li><strong>Task Scheduling:</strong> Ensuring tasks are aligned with strict time slots.</li>
                    <li><strong>Twilio Integration:</strong> Sending timely SMS reminders for scheduled tasks.</li>
                    <li><strong>Database Efficiency:</strong> Designing relationships to handle user accounts, tasks, and reminders effectively.</li>
                    <li><strong>Frontend Responsiveness:</strong> Creating a UI that adapts well to different screen sizes.</li>
                </ul>
            </div>
            <div className="testing-content">
                <div className="skills-image">
                    <img src={DashboardTaskAssigned} alt="test" />
                </div>
                <div className="test-image">
                    <img src={TwilioNotification} alt="twilio notification" />
                </div>
            </div>
            <h2 className="section-heading">Strategy and Goals</h2>
            <p className="paragraph">
            The core strategy was to design a Minimum Viable Product that provides a foundation for efficient task management while establishing a scalable and extensible architecture. Key goals for this MVP included:
            </p>
            <div className="resources-images">
                <img src={Task1} alt="resources" />
                <img src={Task2} alt="resources" />
                <img src={Task3} alt="resources" />
                <img src={Task4} alt="resources" />
            </div>
            <div className="conclusion">
                <h2 className="section-heading">Key Learnings</h2>
                <p className="paragraph">
                    The development of the Task Scheduler App provided insights into full-stack engineering.
                </p>
                <div className="schema-grid-outline">
                    <h1 className="schema-section-title">Database Schema and Backend Design</h1>
                    <img src={TaskSchedulerDatabase} alt="schema" className="task-schema-image" /> 

               {/* Database Schema Section */}
               <section className="database-schema">
                   <p className="schema-intro-text">
                       The app's backend uses PostgreSQL to handle data storage, leveraging Flask and SQLAlchemy ORM for efficient database interactions.
                       The core tables in the database schema include User, Task, and Notification to support modularity and allow for future scalability.
                   </p>
                   <h2 className="database-section-heading">Database Schema</h2>
                   <div className="database-schema-section">
                       <div className="schema-section">
                           <h3 className="subheading">User Table</h3>
                           <p className="description">
                               Stores user information, including ID, username, email, password and phone number.
                           </p>
                           <ul className="fields-list">
                               <li>Fields: id, username, email, password, phone number
                                </li>
                               <li>Relationship: One-to-many relationship with the Tasks table, linking each user to their tasks.
                                </li>
                           </ul>
                       </div>
                       <div className="schema-section">
                           <h3 className="subheading">Task Table</h3>
                           <p className="description">
                               Tracks individual tasks, including the task name, description, scheduled due date, and completion status.
                           </p>
                           <ul className="fields-list">
                               <li>Fields: task_id, user_id, title, description, due date, priority, status, created and updated at
                                </li>
                               <li>Relationships: Many-to-one relationship with the Users table, linking each task to its owner.
                                </li>
                           </ul>
                       </div>
                       <div className="schema-section">
                           <h3 className="subheading">Notification Table</h3>
                           <p className="description">
                               Manages SMS reminders sent via Twilio, linked to specific tasks.
                           </p>
                           <ul className="fields-list">
                               <li>Fields: reminder_task, sent
                                </li>
                               <li>Relationships: Many-to-one relationship with the Tasks table, linking each reminder to a specific task.
                                </li>
                           </ul>
                       </div>
                   </div>
               </section>
                </div>
            </div>

             {/* <!-- Backend Implementation Section --> */}
           <section className="backend-implementation">
               <h2 className="section-heading">Backend Implementation</h2>
               <p className="description">
                   The backend, built with Flask, serves as an API provider to the React frontend, managing user authentication, session handling, task management, and notifications using Twilio.
               </p>
               <div className="backend-sections">
               <div className="backend-feature">
                   <h3 className="subheading">Session Management</h3>
                   <p className="feature-description">
                      Flask's session mechanism is used to maintain user login status. The <code>/register</code>, <code>/login</code>, and <code>/logout</code> routes handle user registration, authentication, and session clearing.
                   </p>
               </div>
               <div className="backend-feature">
               <h3 className="subheading">API Endpoints</h3>
                   <p className="feature-description">
                       RESTful endpoints were developed to handle the core functionalities of the Task Scheduler Web App:
                   </p>
                   <ul className="api-endpoints">
                       <li><strong>Create Task:</strong> POST <code>/tasks</code> allows users to create a new task with a title, description, due date, and priority.
                        </li>
                       <li><strong>Get Tasks:</strong> GET <code>/task/&lt;user_id&gt;</code> retrieves all tasks for a specific user.
                        </li>
                       <li><strong>Update Task:</strong> PUT <code>/tasks/&lt;task_id&gt;</code> updates the details of a task.</li>
                               <li><strong>Delete Task:</strong> DELETE <code>/tasks/&lt;task_id&gt;</code> removes a task from the database.</li>
                               <li><strong>Send Notification:</strong> POST <code>/notify/&lt;task_id&gt;</code> sends an SMS notification for a task using Twilio.</li>
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
                   <li><strong>Task Management:</strong> The dashboard dynamically fetches tasks and displays them in real-time, allowing users to interact with their schedules seamlessly.
                    </li>
                   <li><strong>Error Handling:</strong> Simplified error handling ensures users receive clear feedback for invalid actions or server issues.
                </li>
               </ul>  
           </section>
        

            {/* <!-- Key Takeaways Section --> */}
            <section className="key-takeaways">
               <h2 className="section-heading">Key Takeaways</h2>
               <ul className="takeaways-list">
                  <li><strong>Database Design Principles:</strong> Structuring the database with clear relationships facilitated task and reminder management.</li>
                   <li><strong>API Design:</strong> Effective endpoint design ensured smooth communication between frontend and backend.</li>
                   <li><strong>Twilio Integration:</strong> Gained valuable experience implementing third-party APIs to solve real-world challenges.</li>                </ul>
           </section>
           </div>
        </div>
    );
};

export default TaskSchedulerApp;
