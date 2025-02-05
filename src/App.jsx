import './App.css'
import { useForm } from "react-hook-form";

function App() {
  // from react hook form
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  };
  // icons array
  const icons = [
    "fa-facebook-f", "fa-twitter", "fa-instagram"
  ]

  return (
    <div>
      <div className='m-10 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-lg'>
        <div className="coverPhoto rounded-lg bg-[#7e22ce] text-white p-5 min-h-full">
          <h3 className='capitalize text-3xl md:text-4xl font-medium my-2'>personal details</h3>
          <h6 className='mb-8 font-medium'>Update your information and find out how it's used.</h6>
          <p className='w-full text-right capitalize'>upload cover photo</p>
        </div>
        <div className="form flex justify-center items-start h-auto rounded-lg flex-col md:flex-row">
          {/* buttons Section */}
          <div className='w-full md:w-[25%] h-auto flex flex-col justify-start items-center self-start '>

            <div className='bg-white rounded-full relative bottom-12 p-3'>
              <img src="./user.png" alt="user Icon" className='w-20 h-20 ' />
            </div>
            <p className='font-meduim mt-[-40px]'>Upload Photo</p>
            {
              icons.map((icon, index) => (
                <button key={index} className='block w-[90%] p-4 border-[3px] text-left text-xl border my-2 rounded-lg hover:bg-[#7e22ce] hover:text-white transition-all duration-400'>
                  <i className={`fa-brands ${icon}`}></i>
                </button>
              ))
            }
          </div>

          {/* Form Section */}
          <form className='w-full md:w-[75%] h-auto p-4 font-medium' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex w-full space-y-4 md:space-y-0 md:space-x-4 my-2 flex-col md:flex-row'>
              <div className='w-full md:w-1/2'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" className='w-full p-2 rounded-md border-2 my-1' {...register("firstName", { required: true })} />
                {errors.firstName && (
                  <span className="text-red-600">First Name is required</span>
                )}
              </div>
              <div className='w-full md:w-1/2'>
                <label htmlFor="lasttName">Last Name</label>
                <input type="text" name="lasttName" id="lasttName" {...register("lasttName")}  className='w-full p-2 rounded-md border-2 my-1' />
              </div>
            </div>
            <label htmlFor="bio">Bio Description</label>
            <textarea name="bio" id="bio" {...register("bio")} className='w-full p-2 rounded-md border-2 my-1'></textarea>
            <div className='flex w-full w-full space-y-4 md:space-y-0 md:space-x-4 my-2 flex-col md:flex-row'>
              <div className='w-full md:w-1/2'>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" {...register("email", { required: "Email is required" ,pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Enter a valid email"}})} className='w-full p-2 rounded-md border-2 my-1' />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
                <p className='text-gray-500'>Will use this email id to send you confiramation</p>
              </div>
              <div className='w-full md:w-1/2'>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone" {...register("phone", { required: "Contact number is required",pattern:{value:/^[0-9]{10}$/, message:"Contact number must be exactly 10 digits"} })} className='w-full p-2 rounded-md border-2 my-1' />
                {errors.phone && (
                  <span className="text-red-600">{errors.phone.message}</span>
                )}
                <p className='text-gray-500'>Will use this number if they need to contact you</p>
              </div>
            </div>
            <div className='flex w-full w-full space-y-4 md:space-y-0 md:space-x-4 my-2 flex-col md:flex-row'>
              <div className='w-full md:w-1/2'>
                <label htmlFor="address1">Address 1</label>
                <input type="text" name="address1" id="address1" {...register("address1", { required: true })} className='w-full p-2 rounded-md border-2 my-1' />
                {errors.address1 && (
                  <span className="text-red-600">Please provide your address</span>
                )}
              </div>
              <div className='w-full md:w-1/2'>
                <label htmlFor="address2">Address 2</label>
                <input type="text" name="address2" id="address2" {...register("address2")} className='w-full p-2 rounded-md border-2 my-1' />
              </div>
            </div>
            <div className='flex w-full w-full space-y-4 md:space-y-0 md:space-x-4 my-2 flex-col md:flex-row'>
              <div className='w-full md:w-1/2 flex space-x-4'>
                <div className='w-full md:w-1/2'>
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" id="city" {...register("city", { required: true })} className='w-full p-2 rounded-md border-2 my-1' />
                  {errors.city && (
                    <span className="text-red-600">Please provide your city</span>
                  )}
                </div>
                <div className='w-full md:w-1/2'>
                  <label htmlFor="state">State</label>
                  <input type="text" name="state" id="state" {...register("state", { required: true })} className='w-full p-2 rounded-md border-2 my-1' />
                  {errors.state && (
                    <span className="text-red-600">Please provide your state</span>
                  )}
                </div>
              </div>
              <div className='w-full md:w-1/2 flex space-x-4'>
                <div className='w-full md:w-1/2'>
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country" id="country" {...register("country", { required: true })} className='w-full p-2 rounded-md border-2 my-1' />
                  {errors.country && (
                    <span className="text-red-600">Please provide your country</span>
                  )}
                </div>
                <div className='w-full md:w-1/2'>
                  <label htmlFor="zipcode">Zipcode</label>
                  <input type="text" name="zipcode" id="zipcode" {...register("zipcode", { required: true })} className='w-full p-2 rounded-md border-2 my-1' />
                  {errors.zipcode && (
                    <span className="text-red-600">Please provide your zipcode</span>
                  )}
                </div>
              </div>
            </div>
            <div className='flex space-x-4 justify-end my-4'>
              <button className='border-[#7e22ce] border-2 text-[#7e22ce] p-2 rounded-3xl px-4 font-medium hover:bg-[#7e22ce] hover:text-white hover:border-0 transition-all duration-200'>Clear</button>
              <button className='bg-[#7e22ce] p-2 rounded-3xl px-4 font-medium text-white border-0 hover:bg-white hover:text-[#7e22ce] hover:border-2 hover:border-[#7e22ce] transition-all duration-200'>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
