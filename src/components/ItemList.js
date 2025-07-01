import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {



const dispatch= useDispatch();


const handleAddItem=(item)=>{
    dispatch(addItem(item))

}


  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start gap-4 p-4 border-b border-gray-200 rounded-lg shadow-sm bg-white"
        >
          <div className="w-9/12">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
            </p>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 relative flex flex-col items-center">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-28 h-24 object-cover rounded-md shadow-md mb-2"
              />
            )}
            <button
              className="absolute bottom-[-12px] bg-black text-white text-sm px-4 py-1 rounded-full shadow-lg hover:bg-gray-800 transition cursor-pointer"
              onClick={()=>handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;