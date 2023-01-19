function Movie({ coverImg, title, summary }) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  )
}

export default Movie;