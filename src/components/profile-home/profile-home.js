import './profile-home.css';
import { Link } from 'react-router-dom';
import devImg from './coding.png';
export function ProfileHomeComponent(){

    return(
        <div className='mt-5 mb-5 user-select-none'>
            <div className='text-center'>
                <img src={devImg} className='devImage' alt='devlogo'/> 
                <h6>@pro_doubts</h6>
                
                <div className='mt-4'>
                    <Link to="contact" className='btn btn-sm btn-outline-dark me-4'>Get in touch</Link>
                    <Link to="about" className='btn btn-sm btn-outline-dark'>Resume/CV</Link>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center text-center w-100 mt-5'>
                <span className='bi bi-quote'/> Hello! I'm @pro_doubts a Software Developer.
            </div>
            <div className='align-items-center justify-content-center d-flex'>
                <div className='d-flex justify-content-left align-items-center text-left w-50 mt-5'>
                    <span className='bi bi-balloon-heart-fill'> Hey! welcome to my profile, I'm @pro_doubts i'm a software developer and i've been learning and exploring my skill's from past 7 year's in this field.
                    I like to work with some innovative projects where i can learn something new and also can improve my skills. I always try to improve my skill by learning and exploring new things from the various resources and try to solve some real world
                    softwrae problems. In this field explored a lot of content related to <strong>computer science</strong> and <strong>programming</strong>.
                    </span>
                </div>
            </div>
           
            <div className='align-items-center justify-content-center d-flex'>
                
                <div className='p-3 border border-1 rounded rounded-3 mt-4 w-50 '>
                    <h6><span className='bi bi-bookmark-fill'/> My key skill's</h6>
                    <div>
                        <div className='ms-3'>
                            <span className='bi bi-1-circle-fill'> Front End Web Development</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-2-circle-fill'> Back End Integration</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-3-circle-fill'> Database Management</span>
                        </div>
                        <div className='mt-3 ms-5'>
                            <Link to="about" className='btn btn-sm btn-outline-secondary'>Know more</Link>
                        </div>
                    </div>
                </div> 
            </div>
            
            <div className='align-items-center justify-content-center d-flex'>
                
                <div className='p-3 border border-1 rounded rounded-3 mt-4 w-50 '>
                    <h6><span className='bi bi-bookmark-fill'/> Technologies knowledge  </h6>
                    <div>
                        <div className='ms-3'>
                            <span className='bi bi-1-circle-fill'> React JS</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-2-circle-fill'> JavaScript</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-3-circle-fill'> ASP.NET</span>
                        </div>
                        <div className='mt-3 ms-5'>
                            <Link to="about" className='btn btn-sm btn-outline-secondary'>Know more</Link>
                        </div>
                    </div>
                </div> 
            </div>


            <div className='align-items-center justify-content-center d-flex'>
                
                <div className='p-3 border border-1 rounded rounded-3 mt-4 w-50 '>
                    <h6><span className='bi bi-bookmark-fill'/> My Projects  </h6>
                    <div>
                        <div className='ms-3'>
                            <span className='bi bi-1-circle-fill'> Shopping Site Template</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-2-circle-fill'> Genius Computer (E-Commerce Site)</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-3-circle-fill'> Personal Profile Site</span>
                        </div>
                        <div className='mt-3 ms-5'>
                            <Link to="project" className='btn btn-sm btn-outline-secondary'>More projects</Link>
                        </div>
                    </div>
                </div> 
            </div>


            <div className='align-items-center justify-content-center d-flex'>
                
                <div className='p-3 border border-1 rounded rounded-3 mt-4 w-50 '>
                    <h6><span className='bi bi-bookmark-fill'/> Get in touch with me</h6>
                    <div>
                        <div className='ms-3'>
                            <span className='bi bi-twitter'> @pro_doubts</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-instagram'> @pro_doubts</span>
                        </div>
                        <div className='ms-3'>
                            <span className='bi bi-envelope-at'> umashverma55@gmail.com</span>
                        </div>
                        <div className='mt-3 ms-5'>
                            <Link to="contact" className='btn btn-sm btn-outline-secondary'>Other contacts</Link>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    )
}