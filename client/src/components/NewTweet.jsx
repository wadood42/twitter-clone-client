import React, { useState } from "react";

const NewTweet = ({ setShowNewTweet }) => {
  const [tweetBody, setTweetBody] = useState("");
  return (
    <div className='new-tweet-container'>
      <div className='new-tweet-form'>
        <div className='close-btn'>
          <span onClick={() => setShowNewTweet(false)}>X</span>
        </div>
        <form>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder="What's happening?"></textarea>
        </form>
      </div>
    </div>
  );
};

export default NewTweet;
