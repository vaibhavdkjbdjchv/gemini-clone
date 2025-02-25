import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const { onsent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadprompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onsent(prompt);
  };
  return (
    <div className={`sidebar`}>
      <div className="top">
        <img
          onClick={() => setextended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={() => newChat()} className="newchat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent_title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadprompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
