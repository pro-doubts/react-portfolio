
import './profile-footer.css';

export function ProfileFooterComponent(){

    return(
        <div className="footer-bg p-4 text-center user-select-none">
           <h5 className='text-decoration-none text-dark'><span className="bi bi-braces"/> Pro Doubts</h5>
           <p>&copy; Copyright all rights reserved 2024.</p>
           <div className='grid-container'>
                <div className='left'>
                    <div className='bi bi-linkedin'><a className='text-decoration-none text-dark' href='https://www.linkedin.com/in/umashankar-verma-268254233/'> @umashankar-verma</a></div>
                    <div className='bi bi-instagram'><a className='text-decoration-none text-dark' href='https://www.instagram.com/pro_doubts?igsh=MTM3MWJjcXV3NTM2dg=='> @pro_doubts</a></div>
                    <div className='bi bi-twitter'> <a className='text-decoration-none text-dark' href='https://x.com/UMASHAN98164826?t=rKyEo12CRJbvyYQR502e-w&s=09'> @pro_doubts</a></div>
                </div>
                <div className='right'>
                    <div className='bi bi-github'><a className='text-decoration-none text-dark' href='https://github.com/pro-doubts'> @pro_doubts</a></div>
                    <div className='bi bi-envelope-at'> <a className='text-decoration-none text-dark' href='mailto:umashverma55@gmail.com'> umashverma55@gmail.com</a></div>
                    <div className='bi bi-whatsapp'><a className='text-decoration-none text-dark' href='https://wa.me/9630126293'> +91 9630126293</a></div>
                </div>
           </div>
        </div>
    )
}