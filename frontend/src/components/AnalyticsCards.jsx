function AnalyticsCards({ posts }) {
  const publishedCount = posts.filter((post) => post.published).length
  const draftCount = posts.length - publishedCount
  const authors = new Set(posts.map((post) => post.authorId)).size

  const cards = [
    {
      label: 'Total Posts',
      value: posts.length,
      note: 'All posts from Prisma',
    },
    {
      label: 'Published',
      value: publishedCount,
      note: 'Visible content',
    },
    {
      label: 'Drafts',
      value: draftCount,
      note: 'Still being edited',
    },
    {
      label: 'Authors',
      value: authors,
      note: 'Unique author IDs',
    },
  ]

  return (
    <section className="analytics-grid" aria-label="Post analytics">
      {cards.map((card) => (
        <article className="analytics-card" key={card.label}>
          <span>{card.label}</span>
          <strong>{card.value}</strong>
          <p>{card.note}</p>
        </article>
      ))}
    </section>
  )
}

export default AnalyticsCards
