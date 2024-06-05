import React from "react";
import "./emojiStyle.css";

function Emoji(props) {
  const { emoji } = props;
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={emoji.label}>
          {emoji.emoji}
        </span>
      </dt>
    </div>
  );
}

export default Emoji;
