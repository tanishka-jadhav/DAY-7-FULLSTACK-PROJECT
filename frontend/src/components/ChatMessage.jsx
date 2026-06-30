function ChatMessage({ message }) {
  const label = message.role === 'user' ? 'You' : 'AI'
  const modelLabel =
    message.role === 'assistant' && message.model
      ? `${label} - ${message.provider} / ${message.model}`
      : label

  return (
    <article className={`chat-message ${message.role}`}>
      <div className="message-bubble">
        <span>{modelLabel}</span>
        <p>{message.content}</p>
      </div>
    </article>
  )
}

export default ChatMessage
