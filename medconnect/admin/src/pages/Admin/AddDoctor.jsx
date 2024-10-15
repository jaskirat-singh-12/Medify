import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl } = useContext(AppContext)
    const { aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!docImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData();
            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            // console log formdata            
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }

    return (
        <form onSubmit={onSubmitHandler} className='p-6 lg:p-10 bg-gray-100 min-h-screen'>

            <p className='text-3xl font-semibold text-blue-800 mb-6 text-center'>Add Doctor</p>

            <div className='bg-white border border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-4xl mx-auto'>
                <div className='flex flex-col items-center mb-8'>
                    <label htmlFor="doc-img" className='cursor-pointer'>
                        <img className='w-24 h-24 bg-gray-200 rounded-full' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Upload" />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" name="" id="doc-img" hidden />
                    <p className='text-gray-600 mt-2'>Upload doctor picture</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-600'>Your Name</label>
                            <input onChange={e => setName(e.target.value)} value={name} className='border border-gray-300 rounded-lg px-4 py-2' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-600'>Doctor Email</label>
                            <input onChange={e => setEmail(e.target.value)} value={email} className='border border-gray-300 rounded-lg px-4 py-2' type="email" placeholder='Email' required />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-600'>Set Password</label>
                            <input onChange={e => setPassword(e.target.value)} value={password} className='border border-gray-300 rounded-lg px-4 py-2' type="password" placeholder='Password' required />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-600'>Experience</label>
                            <select onChange={e => setExperience(e.target.value)} value={experience} className='border border-gray-300 rounded-lg px-4 py-2'>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Year">2 Years</option>
                                <option value="3 Year">3 Years</option>
                                <option value="4 Year">4 Years</option>
                                <option value="5 Year">5 Years</option>
                                <option value="6 Year">6 Years</option>
                                <option value="8 Year">8 Years</option>
                                <option value="9 Year">9 Years</option>
                                <option value="10 Year">10 Years</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-600'>Fees</label>
                            <input onChange={e => setFees(e.target.value)} value={fees} className='border border-gray-300 rounded-lg px-4 py-2' type="number" placeholder='Doctor fees' required />
                        </div>

                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-600'>Degree</label>
                            <input onChange={e => setDegree(e.target.value)} value={degree} className='border border-gray-300 rounded-lg px-4 py-2' type="text" placeholder='Degree' required />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-600'>Address</label>
                            <input onChange={e => setAddress1(e.target.value)} value={address1} className='border border-gray-300 rounded-lg px-4 py-2' type="text" placeholder='Address 1' required />
                            <input onChange={e => setAddress2(e.target.value)} value={address2} className='border border-gray-300 rounded-lg px-4 py-2' type="text" placeholder='Address 2' />
                        </div>

                    </div>

                </div>

                <div className='mb-6'>
                    <label className='block text-gray-600 mb-2'>About Doctor</label>
                    <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full px-4 py-2 border border-gray-300 rounded-lg' rows={5} placeholder='Write about doctor'></textarea>
                </div>

                <button type='submit' className='bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300'>Add Doctor</button>
                
            </div>

        </form>
    )
}

export default AddDoctor
