import './profile-about.css';
import devImg from './coding.png';
import resume from './resume.png';
import reactImg from './react.png';
import javaScript from './js.png';
import html from './html5.png';
import css from './css3.png';
import bootstrap from './bootstrap.png';
import express from './express.png';
import node from './node.png';
import mongodb from './mongodb.png';
import mysql from './mysql.png';
import asp from './asp.png';

export function ProfileAboutComponent(){

    return(
        <div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div>
                    <div className='text-center'><img src={devImg} className='devImage' alt='devlogo'/> <h6 className='text-center'>@pro_doubts</h6></div>
                    <h4 className="text-center mt-4"><span className="bi bi-person-hearts"/><h6>Hey! visitor @pro_doubts welcomes you!</h6></h4><span></span>
                    
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="w-75">
                    <p>
                        <span className='bi bi-balloon-heart-fill'/> I'm @pro_doubts a professional full-stack-web developer. I have been learning and exploring in IT field science last 6 year's with various IT related academic courses and other resources. I learned alot from the academics and by exploring myself about the IT technologies. I love to work as web developer and it is one of my hobbies. I always like to create something new and innovative which can solve any real time problem's in technology.
                    </p>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="w-75">
                    <h6 className='text-center'><span className='bi bi-link'/> My key skills on technologies...</h6>
                    <div className='w-100 text-center mt-5'>
                        <span className='me-4'>
                            <img src={reactImg} alt='reactimg' className='techImg'/>
                        </span>
                        <span className='me-4'>
                            <img src={javaScript} alt='reactimg' className='techImg'/>
                        </span>
                        <span className='me-4'>
                            <img src={bootstrap} alt='reactimg' className='techImg'/>
                        </span>
                        <span className='me-4'>
                            <img src={html} alt='reactimg' className='techImg'/>
                        </span>
                        <span className='me-4'>
                            <img src={css} alt='reactimg' className='techImg'/>
                        </span>
                    </div>
                    <div className='w-100 mt-4 text-center  '>
                        <span className='me-4'>
                            <img src={node} alt='reactimg' className='techImg'/>
                        </span>
                        <span className='me-4'>
                            <img src={express} alt='reactimg' className='techImg'/>
                        </span>
                        <span className='me-4'>
                            <img src={mongodb} alt='reactimg' className='techImg'/>
                        </span>
                    </div>
                    <div className='w-100 mt-4 text-center  '>
                        <span className='me-4'>
                            <img src={asp} alt='reactimg' className='techImg'/>
                        </span>
                        <span className='me-4'>
                            <img src={mysql} alt='reactimg' className='techImg'/>
                        </span>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <div>
                    <h6 className='text-center'><span className='bi bi-link'/> You can find more about me here...</h6>
                    <div className='border border-1 rounded mt-4 p-3 text-center'><img src={resume} alt='resume' style={{width:'80%'}}/></div>
                    <div className='text-center mt-4 mb-4'>
                        <a href='https://pro-doubts.github.io/Resume/Resume.pdf' className='btn btn-sm btn-outline-secondary'>Download Resume/CV <span className='bi bi-download'/></a>
                    </div>
                </div>
            </div>
        </div>  
    )
}