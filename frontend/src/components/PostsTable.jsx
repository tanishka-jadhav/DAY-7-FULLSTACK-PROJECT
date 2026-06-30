function PostsTable({ error, isDeleting, isLoading, onDelete, posts }) {
  if (isLoading) {
    return (
      <section className="table-panel">
        <p>Loading posts...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="table-panel">
        <p className="error-message">Could not load posts from the API.</p>
      </section>
    )
  }

  return (
    <section className="table-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Posts Table</p>
          <h2>Recent Posts</h2>
        </div>
        <span>{posts.length} records</span>
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Author</th>
              <th>Comments</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="6">No posts yet.</td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <strong>{post.title}</strong>
                    <span>{post.content || 'No content'}</span>
                  </td>
                  <td>
                    <mark>{post.published ? 'Published' : 'Draft'}</mark>
                  </td>
                  <td>{post.author?.name || `Author #${post.authorId}`}</td>
                  <td>{post.comments?.length || 0}</td>
                  <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => onDelete(post.id)}
                      disabled={isDeleting}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PostsTable
