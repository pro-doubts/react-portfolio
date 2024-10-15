import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileAboutComponent } from "../profile-about/profile-about";
import { ProfileContactComponent } from "../profile-contact/profile-contact";
import { ProfileFooterComponent } from "../profile-footer/profile-footer";
import { ProfileHomeComponent } from "../profile-home/profile-home";
import { ProfileNavComponent } from "../profile-nav/profile-nav";
import { ProfileProjectComponent } from "../profile-projects/profile-contact";
import './profile-index.css';

export function ProfileIndexComponent(){

    return(
        <div>
            <BrowserRouter>
                <div className="sticky-top">
                    <ProfileNavComponent/>
                </div>

                <Routes>
                    <Route path="/" element={<ProfileHomeComponent/>}></Route>
                    <Route path="about" element={<ProfileAboutComponent/>}></Route>
                    <Route path="contact" element={<ProfileContactComponent/>}></Route>
                    <Route path="project" element={<ProfileProjectComponent/>   }></Route>
                    <Route path="blog" element={<>This is blog</>}></Route>
                    <Route
                    path="*"
                    element={<code>404 : Page Not Found.</code>}
                    ></Route>
                </Routes>
                  
                <ProfileFooterComponent/>
            </BrowserRouter>
            
        </div>
    )
}