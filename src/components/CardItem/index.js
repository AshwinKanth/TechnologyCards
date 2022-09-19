import './index.css'

const CardItem = props => {
  const {cardItemList} = props
  const {title, description, imgUrl, className} = cardItemList

  return (
    <li className={`${className} card-list`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default CardItem
