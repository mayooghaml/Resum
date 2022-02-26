import React from 'react';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import Pic01 from '../images/pic01.jpg';
import Pic02 from '../images/pic02.jpg';
import Pic03 from '../images/pic03.jpg';


function Home(props) {
    return (
        <div>

            {/* Page Wrapper */}
            <div id="page-wrapper">
			<div class="content">
                {/* Banner */}
                <section id="banner">
					<div class="content">
						<header>
							<h2>Create your resume now</h2>
							<p>Effortlessly make a job-worthy resume <br>
							</br>that gets you hired faster</p> 
						</header>
						<span class="image"><img src={Pic01} alt="" /></span>
					</div>
					
					<a href="#one" class="goto-next scrolly">Next</a>
				</section>
</div>

                {/* One */}
                <section id="one" class="spotlight style1 bottom">
					<span class="image"><img src={Pic02}  alt="" /></span>
					<div class="content">
						<div class="container">
							<div class="row">
								<div class="col-4 col-12-medium">
									<header>
										<h2>Digital resume builder
											</h2>
										<p>Build a Professional Resume in Minutes</p>
									</header>
								</div>
								<div class="col-4 col-12-medium">
									<p>Creating a resume is a daunting task. Nothing but stress, confusion, and wasting precious hours on making a good-looking template,Let us take over.</p>
								</div>
								<div class="col-4 col-12-medium">
									<p>Who have you always dreamt of becoming? We bet a resume writer didn’t make it to that list. So don’t let a piece of paper turn your dreams into nightmares. With  Digital resume builder, we take care of the details, so you can focus on what really matters: your career..</p>
								</div>
							</div>
						</div>
					</div>
					<a href="#two" class="goto-next scrolly">Next</a>
				</section>


                {/* Two */}
                <section id="two" class="spotlight style2 right">
					<div className="image"><img src={Pic03} alt="" /></div>
					<div class="content">
						<header>
							<h2>Digital resume builder</h2>
							
						</header>
					<ul>
						<li>Pick a template</li>
						<li>Fill in the blanks.</li>
						<li> Personalise your document.</li>
					</ul>
						<ul class="actions">
						
						</ul>
					</div>
					<a href="#three" class="goto-next scrolly">Next</a>
				</section>

                {/* Three */}
                <section id="three" class="spotlight style3 left">
					{/* <span class="image"><img src={Pic04}  alt="" /></span> */}
					<div class="content">
						<header>
							<h2>Make your Resume
								picture-perfect
								and win that job!</h2>
							
						</header>
						<p></p>
						<ul class="actions">
						
						</ul>
					</div>
                </section>


                

                {/* Footer */}
                <footer id="footer">
                    <ul className="icons">
                        <li><Link to="#" class="icon brands fa-twitter"><span class="label">Twitter</span></Link></li>
                        <li><Link to="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></Link></li>
                        <li><Link to="#" class="icon brands fa-instagram"><span class="label">Instagram</span></Link></li>
                        <li><Link to="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></Link></li>
                        <li><Link to="#" class="icon solid fa-envelope"><span class="label">Email</span></Link></li>
                    </ul>
                    <ul className="copyright">
                        <li>Ictk</li>
                    </ul>
                </footer>

            </div>
        </div>
    );
}

export default Home;