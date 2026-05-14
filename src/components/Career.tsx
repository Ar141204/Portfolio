import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Division Lead (Intern)</h4>
                <h5>Kutty Pixel Inc.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Leading the AI division at an early-stage startup, architecting core AI infrastructure, automation workflows, and deployment-ready systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chief Advisor</h4>
                <h5>Blue Screen Programming Club</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Providing technical mentorship and strategic guidance for student-led programming initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Database Intern</h4>
                <h5>Tamil Nadu Newsprint and Papers Limited</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed and optimized SQL databases to support critical enterprise ERP systems, improving data reliability for core operations. Assisted in IT infrastructure enhancements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>Hindustan Institute of Technology and Science</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              CGPA: 8.4/10. Runner Up at Hindustan University Intellithon 2025. Certifications: Edunet Cybersecurity Internship, GUVI Python, HackerRank SQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary</h4>
                <h5>Raj Matriculation Higher Secondary School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Higher Secondary Education with 79.8%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
