
import './profile-footer.css';

export function ProfileFooterComponent(){

    return(
        <div className="footer-bg p-4 text-center">
           <a href='#' className='text-decoration-none text-dark'><span className="bi bi-braces"/> Pro Doubts</a>
           <p>&copy; Copyright all rights reserved 2023.</p>
           <div className='justify-content-around d-flex'>
                <span className='bi bi-instagram'> @pro_doubts</span>
                <span className='bi bi-twitter'> @pro_doubts</span>
                <span className='bi bi-envelope-at'> umashverma55@gmail.com</span>
           </div>
        </div>
        
    )
}