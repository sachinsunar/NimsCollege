import React from 'react';
import './MeetOurTeam.css';
import team1 from '../../assets/img/5.png';
import team2 from '../../assets/img/4.png';
import team3 from '../../assets/img/2.png';


const MeetOurTeam = () => {
    return (

        <section className="meet-our-team">
            <div className="container">
                {/* <div className="section-header">
                    <h2>Meet Our Team</h2>
                    <p>Meet the outstanding performers in our industry—award-winning team of professionals</p>
                </div> */}
                <div className="team-grid">
                    {/* Team Member 1 */}
                    <div className="team-member">
                        <div className="team-img">
                            <img className="img-fluid" src={team1} alt="Mellissa Doe" />
                        </div>
                        <div className="team-info">
                            <h3 className="team-name">Bidhya Shrestha </h3>
                            <p className="team-role">Chairperson</p>
                            <ul className="social-links">
                                <li><a href="#"><i class="fa-solid fa-phone"></i></a></li>
                                <li>9821342342</li>
                            </ul>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="team-member">
                        <div className="team-img">
                            <img className="img-fluid" src={team2} alt="Ora Bryan" />
                        </div>
                        <div className="team-info">
                            <h3 className="team-name">Dr. Mani Ram Banjade</h3>
                            <p className="team-role">Principal</p>
                            <ul className="social-links">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="team-member">
                        <div className="team-img">
                            <img className="img-fluid" src={team3} alt="Gwen Bass" />
                        </div>
                        <div className="team-info">
                            <h3 className="team-name">Buddhi Ram Banjade</h3>
                            <p className="team-role">Vice-Principal</p>
                            <ul className="social-links">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;