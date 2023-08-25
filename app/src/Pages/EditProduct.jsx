import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/EditProduct.css'
function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setImagePath(response.data.imagePath);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = {
      name,
      description,
      imagePath,
    };

    axios
      .put(`/api/product/${id}`,  {headers: {
        "x-user-id": user._id,
      },}
      ,updatedProduct)
      .then((response) => {
        console.log('Product updated successfully:', response.data);
        navigate('/Cart');
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="edit">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg sm:max-w-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-900">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="input"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-800">
              Description:
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              className="input"
            />
          </div>
          <div>
            <label htmlFor="imagePath" className="block text-sm font-medium text-gray-800">
              Image URL:
            </label>
            <input
              type="text"
              id="imagePath"
              value={imagePath}
              accept="image/png, image/jpg, image/gif, image/jpeg,image/avif"
              onChange={(event) => setImagePath("img/"+event.target.files[0].name)}
              required
              className="input"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-900 btn hover:bg-indigo-800"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
