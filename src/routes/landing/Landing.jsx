import React from 'react'
import './landing.css'
import LandingImg from '../../assets/landing-illustration.svg'

const Landing = () => {
    return (
        <section className="landing-container">
            <div className="landing-header">
                <div className="landing-text-wrapper">
                    <h1 className='landing-title'>Welcome to Taskly</h1>
                    <p className='landing-subtitle'>Your productivity, reimagined.</p>
                    <p className='landing-description'>
                        <b>Plan smarter. Achieve more.</b> Effortlessly organize your day, collaborate with your team, and never miss a deadline. <br />
                        <span style={{color: '#16a085'}}>New: AI-powered suggestions, beautiful analytics, and instant reminders!</span>
                    </p>
                    <div className="landing-cta">
                        <button className="cta-button">Get Started</button>
                        <button className="cta-button secondary">See Features</button>
                    </div>
                </div>
                <img src={LandingImg} alt="Landing Illustration" className="landing-illustration" />
            </div>
            <div className="landing-content">
                <div className="landing-feature">
                    <h2>✨ Smart Task Tracking</h2>
                    <p>Visualize your progress with interactive charts and daily streaks.</p>
                </div>
                <div className="landing-feature">
                    <h2>🤝 Team Collaboration</h2>
                    <p>Assign tasks, chat, and share files in real time.</p>
                </div>
                <div className="landing-feature">
                    <h2>🔔 Instant Reminders</h2>
                    <p>Get notified before deadlines and important events.</p>
                </div>
                <div className="landing-feature">
                    <h2>📊 Analytics Dashboard</h2>
                    <p>Track your productivity trends and set personal goals.</p>
                </div>
            </div>
            <div className="landing-testimonials">
                <h3>What our users say:</h3>
                <div className="testimonial">
                    <p>“Taskly helped me stay on top of my work and collaborate with my team seamlessly!”</p>
                    <span>- Alex, Project Lead</span>
                </div>
                <div className="testimonial">
                    <p>“The reminders and analytics are game-changers. My productivity has doubled!”</p>
                    <span>- Priya, Designer</span>
                </div>
            </div>
            <div className="landing-footer">
                <p>© 2025 Taskly. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Landing