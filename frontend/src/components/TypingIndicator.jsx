function TypingIndicator() {
  return (
    <div className="chat-message assistant">
      <div className="message-bubble typing-bubble" aria-label="AI is typing">
        <span>AI</span>
        <div className="typing-dots">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator
