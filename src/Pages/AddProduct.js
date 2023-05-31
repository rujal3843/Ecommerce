import React, { useState } from 'react'
import { useAddProductMutation } from '../app/Project_Api';

export const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const [addProduct, { isLoading, isError }] = useAddProductMutation();


  const handleAddProduct = () => {
    const productData = {
      title,
      price,
      // Add more fields here based on your product data structure
    };

    addProduct(productData)
      .unwrap()
      // .then(() => {
      //   // Handle success, perform any additional actions
      //   console.log('Product added successfully!');
      // })
      // .catch((error) => {
      //   // Handle error, display an error message or take appropriate action
      //   console.error('Error adding product:', error);
      // });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white border border-gray-300 rounded shadow">
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Product Title"
      className="w-full mb-2 p-2 border border-gray-300 rounded"
    />
    <input
      type="number"
      value={price}
      onChange={(e) => setPrice(parseFloat(e.target.value))}
      placeholder="Product Price"
      className="w-full mb-2 p-2 border border-gray-300 rounded"
    />
    <button
      onClick={handleAddProduct}
      disabled={isLoading}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
    >
      {isLoading ? 'Adding...' : 'Add Product'}
    </button>
    {isError && <p className="text-red-500 mt-2">Error adding product.</p>}
  </div>
);
};  
  