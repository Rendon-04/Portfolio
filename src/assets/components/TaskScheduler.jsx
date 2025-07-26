import React, { useEffect } from 'react';
import TaskSchedulerDatabase from "../img/carescribedb.png";
import DashboardTask from "../img/ScribeLogo.png";
import TwilioNotification from "../img/ScribePatientDashboard.png";
import DashboardTaskAssigned from "../img/ScirbeRecording.png";
import DashboardDateSelect from "../img/ScribeHome.png";
import test from "../img/test.png";
import Task1 from "../img/cs-user-focus.png";
import Task2 from "../img/clinicianexperience.png";
import Task3 from "../img/cs-scale.png";
import Task4 from "../img/cs-ai-workflows.png";
import './CivicsApp.css'


export const TaskSchedulerApp = () => { 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="civics-container">
            <h1 className="main-heading">CareScribe: An Agentic Healthcare Companion</h1>
            <div className="content-wrapper">
                <div className="text-content">
                    <h2 className="section-heading">Introduction</h2>
                    <p className="intro-paragraph">
                    CareScribe is an AI-powered clinical companion designed to support healthcare providers during patient rounds. 
                    The platform enables clinicians to record, review, and summarize patient encounters using real-time speech-to-text 
                    transcription and GPT-driven summaries. By centralizing patient data, transcripts, and assistant-guided interactions into a 
                    streamlined dashboard, CareScribe enhances documentation, reduces cognitive load, and improves clinical efficiency.

                    </p>
                </div>
                <div className="civics-image">
                    <img src={DashboardTask} alt="Task Scheduler homepage" className="task-image" />
                </div>
            </div>
            <h2 className="section-heading">Technologies Used</h2>
            <p className="paragraph">The app leverages a full-stack architecture</p>
            <div className="tech-list">
                <p>React</p>
                <p>|</p>
                <p>TypeScript</p>
                <p>|</p>
                <p>FastAPI</p>
                <p>|</p>
                <p>PostgreSQL</p>
                <p>|</p>
                <p>Azure Speech-to-Text</p>
                <p>|</p>
                <p>OpenAI GPT-4</p>
            </div>

            <div className="task-problem-content-wrapper">
                <div className="task-problem-text-content">
                    <h2 className="task-problem-section-heading">Problem</h2>
                    <p className="task-problem-paragraph">
                        Clinicians often take handwritten notes or manually input data into EMR systems during rounds, resulting in lost time, fragmented workflows, and context switiching.
                        CareScribe creates a streamlined process by providing a centralized dashboard with AI-powered transcription and summarization features to improve clarity, effecience, and decision-making during rounds.
                    </p>
                </div>
                <div className="dashboard-image-content">
                    <img src={DashboardDateSelect} alt="study" />
                </div>
            </div>
            <div className="technical-challenges">
                <h3 className="section-heading">Key Technical Challenges</h3>
                <ul className="list">
                    <li><strong>Modular Dashboard:</strong> Dashboard that dynamically updates with selected patient data.</li>
                    <li><strong>AI Interactions:</strong> Implementing AI to summarize/chat in a seamless and reactive interface.</li>
                    <li><strong>Integration:</strong> Integrating Azure Speech-to-Text and OpenAI while handling failures and delays.</li>
                    <li><strong>APIs:</strong> Structuring scalable and RESTful APIs that support agentic behavior.</li>
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
            The core strategy behind CareScribe was to create an AI-powered clinical companion that supports providers during patient rounds by simplifying documentation, surfacing context, and enabling intelligent conversations, all while ensuring performance, reliability, and extensibility.
            </p>
            <div className="resources-images">
                <img src={Task1} alt="resources" />
                <img src={Task2} alt="resources" />
                <img src={Task3} alt="resources" />
                <img src={Task4} alt="resources" />
            </div>
            <div className="conclusion">
                <h2 className="section-heading">Key Learnings</h2>
                <ul className="list">
                    <li>Learned how to design an AI-augmented user interface for real-time clinical use cases.</li>
                    <li>Developed a deeper understanding of FastAPI design patterns, API security, and session-based workflows.</li>
                    <li>Understood tradeoffs between latency vs. accuracy when integrating AI services like GPT and Azure.</li>
                    <li>Collaborated across roles (frontend, backend, product design) to deliver a coherent user experience.</li>
                </ul>
               
                <div className="schema-grid-outline">
                    <h1 className="schema-section-title">Database Schema and Backend Design</h1>
                    <img src={TaskSchedulerDatabase} alt="schema" className="task-schema-image" /> 

               {/* Database Schema Section */}
               <section className="database-schema">
                   <p className="schema-intro-text">
                   CareScribe’s backend uses PostgreSQL with FastAPI and Pydantic for schema validation, enabling structured, modular, and scalable interactions across patients, 
                   recordings, and AI-generated transcripts. Key tables are shown below:
                   </p>
                   <h2 className="database-section-heading">Database Schema</h2>
                   <div className="database-schema-section">
                       <div className="schema-section">
                           <h3 className="subheading">Patient Table</h3>
                           <p className="description">
                           Stores personal and contextual information for each patient, including latest vitals and lab results.
                           </p>
                           <ul className="fields-list">
                           <li><strong>Fields:</strong> patient_id, first_name, last_name, dob, gender, room, created_at, updated_at</li>
                           <li><strong>Relationship:</strong> One-to-many with Encounters and Transcriptions</li>
                           </ul>
                       </div>
                       <div className="schema-section">
                           <h3 className="subheading">Encounter Table</h3>
                           <p className="description">
                           Captures patient-specific transcript entries from each clinical round, along with AI-generated summaries.
                           </p>
                           <ul className="fields-list">
                           <li><strong>Fields:</strong> encounter_id, patient_id, summary, created_at</li>
                           <li><strong>Relationship:</strong> One-to-many with Transcript Entries</li>
                           </ul>
                       </div>
                       <div className="schema-section">
                           <h3 className="subheading">Transcript Entry Table</h3>
                           <p className="description">
                           Stores individual lines of dialogue or notes from a clinical encounter, timestamped for accuracy.
                           </p>
                           <ul className="fields-list">
                           <li><strong>Fields:</strong> id, encounter_id, timestamp, text</li>
                           <li><strong>Relationship:</strong> Belongs to an Encounter</li>
                           </ul>
                       </div>
                       <div className="schema-section">
                           <h3 className="subheading">Transcription Table</h3>
                           <p className="description">
                           Holds raw audio transcription data for patient-clinician conversations, linked to a patient and clinician.
                           </p>
                           <ul className="fields-list">
                           <li><strong>Fields:</strong> id, patient_id, clinician_id, transcriptions, timestamp</li>
                           <li><strong>Relationship:</strong> Many-to-one with Patient</li>
                           </ul>
                       </div>
                       <div className="schema-section">
                           <h3 className="subheading">Vitals Table</h3>
                           <p className="description">
                           Stores recent vitals such as temperature, blood pressure, and pulse.
                           </p>
                           <ul className="fields-list">
                           <li><strong>Fields:</strong> id, patient_id, timestamp, temperature, bp, pulse</li>
                           <li><strong>Relationship:</strong> One-to-one with Patient</li>
                           </ul>
                       </div>
                       <div className="schema-section">
                           <h3 className="subheading">Vitals Table</h3>
                           <p className="description">
                           Lab Panels Table.
                           </p>
                           <ul className="fields-list">
                           <li><strong>Fields:</strong> id, patient_id, CBC (WBC, Hemoglobin, Platelets), BMP (some_fields)</li>
                           <li><strong>Relationship:</strong> One-to-one with Patient</li>
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
               The backend is built with Flask and connects to MongoDB to store patient data, transcripts, and summaries. 
               It also integrates with Azure for speech-to-text and OpenAI for generating clinical summaries and assistant responses. 
               A RESTful API connects everything to the React frontend, allowing secure and smooth communication between the app and the AI services.               </p>
               <div className="backend-sections">
               <div className="backend-feature">
               <h3 className="subheading">Encounter and Transcript API</h3>
                   <p className="feature-description">
                   The backend allows clinicians to create and update encounters with timestamped transcript entries. If an encounter exists for a patient, new transcripts are appended.
                   </p>
                   <ul className="api-endpoints">
                   <li><strong>Create Encounter:</strong> POST logic with append-or-create strategy</li>
                   <li><strong>Update Summary:</strong> Sets GPT-generated summary after AI processing</li>
                   <li><strong>Fetch Transcripts:</strong> Based on latest patient interaction</li>
                  </ul>
               </div>
               <div className="backend-feature">
               <h3 className="subheading">AI Summarization & Assistant Threads</h3>
                   <p className="feature-description">
                   The backend uses GPT (via OpenAI’s API) to:
                   </p>
                   <ul className="api-endpoints">
                   <li>Summarize encounter transcripts into clinical notes</li>
                   <li>Detect navigation intent from speech (e.g., "show me John Smith")</li>
                   <li>Create and manage assistant chat threads tied to a patient</li>
                  </ul>
               </div>
               <div className="backend-feature">
               <h3 className="subheading">Patient Record & Vitals Monitoring</h3>
                   <p className="feature-description">
                   Patient data is stored in MongoDB with utilities for:
                   </p>
                   <ul className="api-endpoints">
                   <li>Searching by full name with regex</li>
                   <li>Identifying abnormal vitals (e.g., high BP, low temp)</li>
                   <li>Returning summarized patient info on request</li>
                  </ul>
               </div>
               <div className="backend-feature">
               <h3 className="subheading">Azure Speech-to-Text</h3>
                   <p className="feature-description">
                   Audio recordings (.webm) are converted to .wav using FFmpeg, then passed to Azure’s Speech SDK for transcription. The resulting text is added to the patient's encounter log.
                   </p>
               </div>
               </div>
           </section>

           {/* <!-- Frontend-Backend Communication Section --> */}
           <div className="frontend-backend">
           <section className="frontend-backend-communication">
              
               <h2 className="section-heading">Key API Endpoints</h2>
               <p className="description">
                   The frontend, built with React, leverages axios for API calls to the Flask backend. Key technical design decisions on the frontend include:
               </p>
               <ul className="frontend-features">
               <li><strong>POST</strong> <code>/encounter</code> – create or append to a transcript</li>
               <li><strong>GET</strong> <code>/summary/&lt;patient_id&gt;</code> – retrieve latest summary</li>
               <li><strong>POST</strong> <code>/generate-summary</code> – run GPT summary</li>
               <li><strong>POST</strong> <code>/assistant-thread</code> – create assistant thread</li>
               <li><strong>POST</strong> <code>/send-message</code> – send chat message to AI</li>
               <li><strong>GET</strong> <code>/patients/abnormal</code> – get patients with abnormal vitals</li>
               </ul>  
           </section>
        

            {/* <!-- Key Takeaways Section --> */}
            <section className="key-takeaways">
               <h2 className="section-heading">Key Takeaways</h2>
               <ul className="takeaways-list">
                <li>
                <strong>Modular API Design:</strong> Designed RESTful endpoints that allowed real-time updates between patient data, encounters, and AI insights, keeping frontend and backend loosely coupled but tightly integrated.
                </li>
                <li>
                <strong>AI Workflow Integration:</strong> Learned how to orchestrate clinical data into GPT-powered summaries and assistant interactions using OpenAI's multi-threaded architecture and prompt engineering.
                </li>
                <li>
                <strong>Cloud-Based Transcription:</strong> Gained hands-on experience integrating Azure Speech-to-Text with custom audio preprocessing to transcribe real-world clinical audio data.
                </li>
                <li>
                <strong>NoSQL Schema Strategy:</strong> Applied document-based modeling in MongoDB to support nested transcript entries, flexible patient vitals, and dynamic AI-generated content.
                </li>
                <li>
                <strong>Clinical Context Awareness:</strong> Developed functionality to detect abnormal vitals and intelligently surface key patient information to aid clinical decision-making.
                </li>              </ul>
           </section>
           </div>
        </div>
    );
};

export default TaskSchedulerApp;
