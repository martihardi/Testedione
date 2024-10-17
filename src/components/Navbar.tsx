import { useNavigate } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="bg-violet-900 h-52 flex justify-center items-center text-white shadow-xl">
            <div className='w-[80%] flex flex-row justify-between'>
                <div>
                    <p className='text-4xl font-bold'>The Blog</p>
                </div>

                <div>
                    <button
                        onClick={() => navigate('/home')}
                        className="p-4 font-semibold">
                        home
                    </button>
                    <button
                        onClick={() => navigate('/about')}
                        className="p-4 font-semibold">
                        about
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="p-4 font-semibold">
                        contact
                    </button>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="p-4 font-semibold">
                        dashboard
                    </button>
                </div>
                <div className='flex items-center  '>
                    <input type="text" placeholder='pesquisar' className=' p-2 rounded text-white' />
                   <div className=' bg-purple400 h-10 rounded flex justify-center items-center cursor-pointer'> 
                    <LuSearch />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar