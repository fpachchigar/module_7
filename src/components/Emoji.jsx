import { useEmojiContext } from "../context/EmojiContext";

function Emoji() {
  const { emoji, handleSwitchEmoji } = useEmojiContext();

  return (
    <div className="Emoji">
      <div>{emoji}</div>
      <button className="switch-button" onClick={handleSwitchEmoji}>
        Switch Emoji
      </button>
    </div>
  );
}

export default Emoji;
