import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const main = () => {
  const {
    onsent,
    recentPropmpt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-contenor">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,vaibhav</span>
              </p>
              <p>How can I help mme today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place ro see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept : urban planning </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstrom team bonding activities for our works retreat </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Important the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPropmpt}</p>
            </div>
            <div className="resultdata">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />

                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onsent()} src={assets.send_icon} alt="" />
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info ,inculde abour people ,So
            double-check its respopnses ,Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
