import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function EditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
 
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then((response) => {
        setProduct(response.data)
        setName(response.data.name)
      setDescription(response.data.description)
        setImageURL(response.data.imageURL)
      })
      .catch((error) => {
        console.error('Error fetching product:', error)
      })
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedProduct = {
      name,
      description,
      imageURL,
    }

    axios
      .put(`/api/product/${id}`, updatedProduct)
      .then((response) => {
        console.log('Product updated successfully:', response.data)
        navigate('/Product')
      })
      .catch((error) => {
        console.error('Error updating product:', error)
      })
  }

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      < div className="sm:mx-auto sm:w-full sm:max-w-sm ">
      <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Edit Product</h1>
      </div>
      <div className="p-6 mt-10 rounded-md shadow-2xl bg-slate-100 sm:mx-auto sm:w-full sm:max-w-sm w-96">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-800">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-slate-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-100"          
          />
        </div>
        <div>
          <label htmlFor="email">description:</label>
          <input
            type="email"
            id="email"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-slate-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-100"          
          />
        </div>
       
        
       
        
        
        <div>
          <label htmlFor="imageURL">Image Url:</label>
          <input
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-slate-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-100"          
          />
        </div>

        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">Update</button>
      </form>{' '}
      </div>
    </div>
  )
}

export default EditProduct
