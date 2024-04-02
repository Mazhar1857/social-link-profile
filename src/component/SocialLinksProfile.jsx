import React from 'react'
import './socialLinksProfile.css'
function SocialLinksProfile(props) {
    return (
        <div>
            <div className='social-links-profile-container'>
                <img className='profile-picture' src={props.profilePicture} alt="" />
                <section className='profile-container secondary-container'>
                    <div className='profile-name'>{props.profileName}</div>
                    <div className='current-location'>{props.current}</div>
                </section>
                <section className='job-description-container secondary-container'>
                    <div className='job-description'>{props.jobDescription}</div>
                </section>
                <section className='social-links-container secondary-container'>
                    <div className='social-links'>
                        <div>GitHub</div>
                        <div>Frontend Mentor</div>
                        <div>Linkedln</div>
                        <div>Twitter</div>
                        <div>Instagram</div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default SocialLinksProfile
