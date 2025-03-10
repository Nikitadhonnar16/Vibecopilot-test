import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  editProduct,
  deleteProduct,
} from "../app/Features/shoppingSlice";
import { Trash2, Edit3 } from "lucide-react";

const ShoppingCard = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.shopping);

  const [editingId, setEditingId] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({ title: "", price: 0 });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleEdit = (id, product) => {
    setEditingId(id);
    setUpdatedProduct({
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  const handleSave = () => {
    dispatch(editProduct({ ...updatedProduct, id: editingId }));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="max-w-xs rounded-xl shadow-lg p-4 relative"
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl w-full h-60 object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              onClick={() => handleDelete(item.id)}
            >
              <Trash2 className="text-red-500" />
            </button>
          </div>
          <div className="mt-4">
            {editingId === item.id ? (
              <div>
                <input
                  type="text"
                  value={updatedProduct.title}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      title: e.target.value,
                    })
                  }
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: parseFloat(e.target.value),
                    })
                  }
                  className="border rounded p-2 w-full"
                />
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h2>
                <div className="flex items-center mt-2">
                  <span className="text-xl font-bold text-gray-800">
                    Rs. {item.price}
                  </span>
                </div>
              </>
            )}
          </div>
          {editingId !== item.id && (
            <button
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              onClick={() => handleEdit(item.id, item)}
            >
              <Edit3 className="text-blue-500" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCard;
