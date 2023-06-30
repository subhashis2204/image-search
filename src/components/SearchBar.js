import { useState } from "react"

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(query)
  }

  return (
    <>
      <div className="font-poppins bg-gray-200 w-full flex items-center justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col p-2 w-full md:w-1/2 md:items-center md:justify-center"
        >
          <label htmlFor="searchbar" className="pl-2 text-lg">
            Enter your search term
          </label>
          <input
            id="searchbar"
            type="text"
            className="p-2 rounded-md border-4 border-gray-300 outline-none text-lg w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </>
  )
}

export default SearchBar
