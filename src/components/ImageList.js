import ImageShow from "./ImageShow"
import "./ImageList.css"

function ImageList({ data }) {
  const renderedImages = data.map((image, id) => {
    return <ImageShow url={image} key={id} />
  })

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 p-4">
      {renderedImages}
    </div>
  )
}

export default ImageList
