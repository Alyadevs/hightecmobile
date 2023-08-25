import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import '../Styles/AddProduct.css'
const AddProduct = () => {
  const [name, setName] = useState('')
 const[description,setDescription]=useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const newProduct = {
      name,
      description,
      image,
    }

    axios
      .post('/api/product', newProduct)
      .then((response) => {
        console.log('Product added:', response.data)
        navigate('/Product')
      })
      .catch((error) => {
        // console.error('Error adding product:', error)
      })

    setName('')
  setDescription('')
  setImage('')
  }

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
      <h2  className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Add Product</h2>
      </div>
      <div className="p-6 mt-10 rounded-md shadow-2xl bg-slate-100 sm:mx-auto sm:w-full sm:max-w-sm w-96">
      <form onSubmit={handleSubmit} className="space-y-6" >
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-800">Name:</label>
          <div className="mt-2">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="input"/>
          </div>
        </div>
        <div>
          <label htmlFor="email"className="block text-sm font-medium leading-6 text-gray-800">Description:</label>
          <div className="mt-2">
          <input
            type="text"
            id="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
            className="input"
          />
          </div>
        </div>
        <div>
          <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-800">Image:</label>
          <div className="mt-2">
          <input
            type="file"
            id="department"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
            className="input"
          />
          </div>
        </div>
       
        <button type="submit"  className=" btn flex w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">Add</button>
      </form>
    </div>
    </div>
  )
}

export default AddProduct
