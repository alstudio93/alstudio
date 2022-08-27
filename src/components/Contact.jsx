import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            toast.error('All Fields are Required', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
        else {
            const formData = {
                name,
                email,
                message
            }
            fetch('/api/sendgrid', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            toast.success('Message Successful!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <section id="contact" className='py-5 rounded-2xl  max-w-4xl w-full mx-auto'>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                />
                <div className='flex flex-col items-center gap-2 contact-header-container'>
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff] font-quicksand text-section-h2'>Contact</h3>
                </div>

                <form onSubmit={handleSubmit} className='font-nunito py-10 px-5 flex flex-col md:grid md:grid-cols-2  gap-x-20 gap-y-7'>
                    <fieldset className='flex flex-col'>
                        <label htmlFor="name">Full Name</label>
                        <input className='p-2 pl-3 bg-transparent border rounded-lg text-slate-200 font-nunito' type="text" id="name" value={name} placeholder="First and Last Name" onChange={(e) => setName(e.target.value)} />
                    </fieldset>

                    <fieldset className='flex flex-col'>
                        <label htmlFor="email">Email Address</label>
                        <input className='p-2 pl-3 bg-transparent border rounded-lg text-slate-200 font-nunito' type="email" id="email" value={email} placeholder="john@doe.com" onChange={(e) => setEmail(e.target.value)} />
                    </fieldset>

                    <fieldset className='flex flex-col col-span-2'>
                        <label htmlFor='message'>Message</label>
                        <textarea className='font-nunito text-base rounded-lg text-slate-200 p-2 pl-3 bg-transparent border' id="message" value={message} rows={6} placeholder='So that we may best assist you, please write a detailed description of the question you have or issue that you may be experiencing.' onChange={(e) => setMessage(e.target.value)} />
                    </fieldset>

                    <button type="submit" className='font-nunito border col-span-2 p-2 rounded-lg'>Submit</button>
                </form>
            </section>
        </>
    )
}

export default Contact
