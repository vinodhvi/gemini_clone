import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const {onSent, prevPrompt, setRecentPromt} = useContext(Context)

    const loadPrompt = async (prompt) => {
      setRecentPromt(prompt)
     await onSent(prompt) 
    }

    return (
    <div className="sidebar">
      <div className="top-section">
        <img 
        className="menu"
        onClick={()=> setOpenSidebar(prev => !prev)} 
        src={assets.menu_icon} alt="menu" 
        />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="plus"/>
            {openSidebar ? <p>New Chat</p> : null}
       
        </div>
        {openSidebar ? 
        <div className="recent">
            <p className="recent-title">Recent</p>
            {
              prevPrompt.map((item, index)=> {
                  return (
                    <div className="recent-entry" onClick={()=> loadPrompt(item)}>
                    <img src={assets.message_icon} alt="message"/>
                    <p>{item.slice(0,18)}...</p>
                </div>
                  )
              })
            }
          
        </div>
        : null}
      </div>
      <div className="bottom-section">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt=""/>
                {openSidebar ?  <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt=""/>
                {openSidebar ?  <p>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt=""/>
                {openSidebar ?  <p>Settings</p> : null}
            </div>
      </div>
    </div>
  );
};

export default Sidebar;
