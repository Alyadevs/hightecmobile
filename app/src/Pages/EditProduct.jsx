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
     
        <h1 style={{ fontFamily: 'bold'}} >Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" >
              Name:
            </label><br/>
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
            <label htmlFor="description" >
              Description:
            </label><br/>
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
            <label htmlFor="imagePath" >
              Image URL:
            </label><br/>
            <input
              type="file"
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
          className='btn'
          >
            Update
          </button>
        </form>
      </div>
  
  );
}

export default EditProduct;
