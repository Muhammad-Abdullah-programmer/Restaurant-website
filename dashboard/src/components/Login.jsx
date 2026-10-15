
import { useState} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

  const [email ,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e)=>{
    e.preventDefault()
    setError("")
    setLoading(true)

    try{
      const response = await axios.post("http://localhost:400/api/loginUser", {email,password})

      console.log(response.data);

      navigate("/home")
      
      
    }
   catch(err){
setError(
      err.response?.data?.message ||
      err.response?.data?.error ||
      err.message ||
      "Login failed"
)
   }finally{
    setLoading(false)
   }
  }
  return (


    <div className="flex min-h-screen bg-red-400">
      {/* Left panel (hidden on small screens) */}
      <div className="hidden flex-1 flex-col justify-between bg-[#2B1B2E] p-12 text-purple-100 lg:flex">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-xl">🍲</span>
          <span className="font-serif text-xl font-semibold text-white">Recipe Admin</span>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white">
            Manage every recipe
            <br />
            in one place.
          </h2>
          <p className="mt-4 max-w-sm text-purple-200">
            Add new dishes, organise categories, and see which recipes your visitors love most.
          </p>
        </div>

        <p className="text-sm text-purple-300">Admin access only</p>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center bg-slate-100 p-6">
        <form className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200" onSubmit={handleLogin}>
          <h1 className="font-serif text-2xl font-semibold text-slate-900">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-500">Log in to open your dashboard.</p>

          <div className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="admin@test.com"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </label>
          </div>

          {error &&(

            <p>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-amber-500 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
          >

            {loading ? "loggin...in" : "login"}
            
          </button>
        </form>
      </div>
    </div>
  );
}