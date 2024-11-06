import { Link } from 'react-router-dom';
export default function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Landing Page</h1>
            <p>
                <strong>Full Name:</strong> Tinghao Li <br />
                <strong>Section:</strong> CS5610 Web Development
            </p>

            <h2>Lab Assignments</h2>
            <Link to="/Labs">Labs</Link>


            <h2>Kanbas</h2>
            <Link to="/Kanbas">Kanbas</Link>


            <h2>Source Code Repositories</h2>
            <a href="https://github.com/HenryeeL/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">Kanbas React Web App</a>

        </div>
    );
}