function ListItem({text, handleClickRemove}) {
    return ( 
        <div className="flex items-center justify-between bg-gray-100 rounded-md px-2 py-2 pl-5">
            <p className="font-poppins font-bold">{text}</p>
            <button className="bg-red-500 text-white rounded-md px-3 py-2 font-poppins" onClick={handleClickRemove}>Remove</button>
        </div>
     );
}

export default ListItem;