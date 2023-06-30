import axios from "axios"

const searchImages = async (searchQ) => {
  const headers = {
    Authorization: "Client-ID liGfq3J-c4r9kOxIAl1XYpmqg-kCAS6qRflQaKMIRFI",
  }
  const params = {
    query: searchQ,
  }
  const baseUrl = "https://api.unsplash.com/search/photos"
  const response = await axios.get(baseUrl, { headers, params })

  const imageData = response.data.results

  const urls = imageData.map((image) => image.urls.small)

  return urls
}

export default searchImages
