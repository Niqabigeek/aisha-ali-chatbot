import React, { useState, useEffect } from "react";
import Robot from "../../assets/robot.png";
import Footer from "../Footer/footer";
import ChatQuery from "../ChatQuery/chatQuery";
import DuaPopUp from "../PopUpModal/duaPopUp";
import "./homeScreen.css";
import Navbar from "../NavBar/navBar";

function HomeScreen() {
  const [showPopup, setShowPopup] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className={`botChat pt-40 pb-9 ${showPopup ? "blurred" : ""}`}>
        <div className="chat-wrapper">
          <div>
            <img src={Robot} style={{ width: "130px" }} alt="Chat Robot" />
          </div>
          <div className="text-[#641429] chat-text">
            <p className="pb-2 heading">
              As-salamu alaykum! Welcome to Ask Aisha & Ali, your fun and safe space to learn about Islam! 🩷📖 What would you like to learn today?😊
            </p>
            <p className="text-[16px] subHeading">
              No harmful or inappropriate content is ever shared. No explicit material, images, videos, or links are provided. All conversations are safe, and bad words are automatically blocked. We never ask for personal information, and chats are not stored with any identifying details.
            </p>
            <button className="rounded-full chatbtn">📿 Learn about Salah</button>
            <button className="rounded-full chatbtn">🧕🏾 Islamic Adab</button>
            <button className="rounded-full chatbtn">🤲🏾 Adkaar & Duas</button>
            <button className="rounded-full chatbtn">🕌 Fun Quizzes & Challenges</button>
          </div>
        </div>
      </div>

      <ChatQuery />
      <Footer />

     
     
      {showPopup && <DuaPopUp onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default HomeScreen;
