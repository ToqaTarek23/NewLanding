import React from 'react'
import '../index.css'
import icon1 from '../assets/Icon(1).png'
import icon2 from '../assets/Icon(2).png'
import icon3 from '../assets/Icon(3).png'
import icon4 from '../assets/Icon(4).png'
import icon5 from '../assets/Icon(5).png'
import icon6 from '../assets/Icon(6).png'


function Home() {
    return (
        <>
        <section className="home">
        <div className="home-inner">
            <div className="home-badge">
            <img src={icon1} alt="security icon" width={20} height={20} />
            <span>Trusted Security Solutions</span>
            </div>
            <h2 className="home-title">
            We&apos;re The Experts In <span className='text'><br /> Security Vetting</span>
            </h2>

            <p className="home-subtitle">
            Comprehensive security solutions designed to protect your organization from evolving cyber
            threats. Trust our expertise to safeguard your digital assets.
            </p>

            <div className="home-actions">
            <button className="get-btn">Get Started <i className="arrow fa-solid fa-arrow-right"></i></button>
            <button className="ghost-btn">Learn More</button>
            </div>
                <div className="mouse">
                    <div className="mouse-wheel"></div>
                </div>
        </div>
        
        </section>
        <section className='extension-section'>
        <div className='extension-download-section'>
            <div className="ExtensionDownloadSection">
                <div className="extension-container">
                    <div className="extension-left">
                        <div className="home-badge">
                            <img src={icon2} alt="security icon" width={20} height={20} />
                            <span>New Release</span>
                        </div>
                        <div className="text-sec2">
                            <h2>Download Our Browser Extension</h2>
                            <p>Install the Baseera extension to scan websites instantly and detect vulnerabilities in real time. Stay protected while browsing with automatic security analysis.</p>
                        </div>
                        <div className="small-icon">
                            <div className="feature-item">
                                <img src={icon3} alt="security icon" width={20} height={20} />
                                <h6>Real-time vulnerability scanning</h6>
                            </div>
                            <div className="feature-item">
                                <img src={icon3} alt="security icon" width={20} height={20} />
                                <h6>Instant security alerts & notifications</h6>
                            </div>
                            <div className="feature-item">
                                <img src={icon3} alt="security icon" width={20} height={20} />
                                <h6>Comprehensive vulnerability reports</h6>
                            </div>
                        </div>
                        <div className="Download-Extension">
                            <button className='btn-download'>
                                <img src={icon4} alt="download" width={24} height={24} />
                                <span>Download Extension</span>
                            </button>
                        </div>
                        <div className="footer-text">
                            <h6> <img src={icon5} alt="" width={20} height={20} />Compatible with Chrome, Edge, and Brave</h6>
                        </div>
                    </div>

                    <div className="extension-right">
                        <div className="extension-card">
                            <div className="card-browser-header">
                                <div className="browser-dots">
                                    <div className="browser-dot red"></div>
                                    <div className="browser-dot yellow"></div>
                                    <div className="browser-dot green"></div>
                                </div>
                                <div className="browser-url-bar">
                                    <img src={icon1} alt="shield icon" />
                                    <span>Baseera Security</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-icon-wrapper">
                                    <div className="card-icon">
                                        <img src={icon1} alt="security icon" />
                                    </div>
                                </div>
                                <h3 className="card-title">Baseera Security</h3>
                                <p className="card-subtitle">Real-time web vulnerability scanner</p>
                                <div className="card-stats">
                                    <div className="stat-item">
                                        <span className="stat-number">247</span>
                                        <span className="stat-label">Scans</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">12</span>
                                        <span className="stat-label">Critical</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">4.9</span>
                                        <span className="stat-label">Rating</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-lightning top-right">
                                <img src={icon4} alt="lightning icon" />
                            </div>
                        </div>
                        <div className="extension-lightning bottom-left">
                            <img src={icon6} alt="lightning icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Home
