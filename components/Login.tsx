import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section className='flex flex-col justify-center bg-gray-300 h-[100%]'>
     <div className="flex flex-col justify-center items-center">
     <div className="">
      <div className="border border-gray-400 border-solid rounded-lg h-[500] w-[300] bg-white flex justify-center">
        <div className="flex w-[90%] justify-center">
            <form 
            className="max-w-2xl flex flex-col gap-3 items-center justify-center mt-20"
            action="#">
             <input type="text"
             placeholder="Email/Username"
             required
             className="form_input border border-solid"
             />

            <input type="text"
             placeholder="Password"
             required
             className="form_input border border-solid"
             />
             <Link href={'/'}>
                <p 
                className="text-sm text-blue-400 hidden">
                  Forgot password?
                  </p>
              </Link>
             <button className="form_button bg-blue-400 text-semibold">
              Login
             </button>
            <span>
            <p className="form_text">Dont have an account</p>
            </span>
             <button className="form_button bg-green-500 text-semibold">
              Sign up
             </button>

             <input type="text" />

             <p className="form_text mt-10">
             By continuing, youre confirming that youve read our 
             <span className="form_span">Terms & Conditions</span> and <span className="form_span">Cookie Policy</span>
             </p>
            </form>
        </div>
      </div>
     </div>
     </div>
    </section>
  )
}

export default Login