import React from 'react'
import '../styles/settings.css'
const Settings = () => {
  return (
    <div className="settings">
      <div className="settings_wrapper">
        <h2 className="settings_title">settings</h2>
        <div className="settings_top">
          <button className="setting_btn">My Details</button>
          <button className="setting_btn active_btn">Profile</button>
          <button className="setting_btn">password</button>
          <button className="setting_btn">Email</button>
          <button className="setting_btn">Notifications</button>
        </div>
        <div className="details_form">
          <h2 className="profile_title">profile</h2>
          <p className="profile_desc">Update your photo and personal details</p>
          <form>
            <div className="form_group">
              <div>
                <label>Live in</label>
                <input type='text' placeholder="Addis Ethiopia"/>
              </div>
              <div>
                <label>Street </label>
                <input type='text' placeholder="Hayle-345"/>
              </div>
            </div>

            <div className="form_group">
              <div>
                <label>Email</label>
                <input type='email' placeholder="andargworu8240@gmail.com"/>
              </div>
              <div>
                <label>PhoneNumber </label>
                <input type='number' placeholder="+251943454989"/>
              </div>
            </div>
            <div className="form_group">
              <div>
                <label>Date of Birth</label>
                <input type='date' placeholder="dd/mm/yyyy"/>
              </div>
              <div>
                <label>Gender </label>
                <input type='text' placeholder="maile"/>
              </div>
            </div>
            <div className="form_group">
              <div>
                <label>your photo</label>
                <p className="profile-img_desc">this will displayed in your profile</p>
                <input type='file' placeholder="choose profile"/>
              </div>
              
                 <div className="profile_img-btns">
                  <button className="dlt_btn">Delete</button>
                  <button className="update_btn">update</button>
                 </div>
              
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Settings
