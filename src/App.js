import { useState } from "react"
import SearchBar from "./components/SearchBar"
import searchImages from "./api"
import ImageList from "./components/ImageList"

function App() {
  const [urls, setUrls] = useState([])

  const handleSubmit = async (query) => {
    const imageUrls = await searchImages(query)
    setUrls(imageUrls)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList data={urls} />
    </>
  )
}

export default App
