import { useEffect, useRef, useState } from 'react'
import ChatMessage from '../components/ChatMessage.jsx'
import TypingIndicator from '../components/TypingIndicator.jsx'
import { askAI } from '../api.js'

const defaultSystemPrompt =
  'You are a helpful AI assistant. Keep answers clear, useful, and friendly.'

const starterMessages = [
  {
    id: 'welcome',
    role: 'assistant',
    content:
      'Hi! Ask me anything and I will keep the conversation context while I respond.',
    isStarter: true,
  },
]

function Home() {
  const [messages, setMessages] = useState(starterMessages)
  const [input, setInput] = useState('')
  const [provider, setProvider] = useState('groq')
  const [systemPrompt, setSystemPrompt] = useState(defaultSystemPrompt)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const conversationMessages = messages
    .filter((message) => !message.isStarter)
    .map(({ role, content }) => ({ role, content }))

  const handleClear = () => {
    if (isLoading) {
      return
    }

    setMessages(starterMessages)
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const question = input.trim()
    if (!question || isLoading) {
      return
    }

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: question,
    }

    const nextMessages = [...conversationMessages, userMessage]

    setMessages((currentMessages) => [...currentMessages, userMessage])
    setInput('')
    setError('')
    setIsLoading(true)

    try {
      const data = await askAI({
        messages: nextMessages,
        systemPrompt,
        provider,
      })

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content: data.answer,
          provider: data.provider,
          model: data.model,
        },
      ])
    } catch (requestError) {
      setError(
        requestError.response?.data?.error ||
          `AI response failed. Check your backend server and ${provider} API key.`,
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="chat-page">
      <div className="chat-header">
        <div>
          <p className="eyebrow">AI Chat Interface</p>
          <h2>Ask the AI assistant</h2>
        </div>
        <div className="chat-status-row">
          <span>{isLoading ? 'Thinking...' : 'Ready'}</span>
          <button type="button" onClick={handleClear} disabled={isLoading}>
            Clear
          </button>
        </div>
      </div>

      <div className="chat-controls" aria-label="AI settings">
        <label>
          Provider
          <select
            value={provider}
            onChange={(event) => setProvider(event.target.value)}
            disabled={isLoading}
          >
            <option value="groq">Groq</option>
            <option value="gemini">Gemini</option>
            <option value="openai">OpenAI</option>
          </select>
        </label>

        <label>
          System prompt
          <textarea
            rows="2"
            value={systemPrompt}
            onChange={(event) => setSystemPrompt(event.target.value)}
            disabled={isLoading}
          />
        </label>
      </div>

      <div className="chat-window" aria-live="polite">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading ? <TypingIndicator /> : null}
        <div ref={bottomRef}></div>
      </div>

      {error ? <p className="error-message chat-error">{error}</p> : null}

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </section>
  )
}

export default Home
