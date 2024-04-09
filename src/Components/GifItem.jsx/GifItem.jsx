import "../../main.css"
export const GifItem = ({title,url}) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <img src={url} alt="" className="image"/>
    </div>
  )
}

