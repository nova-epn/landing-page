import Image from 'next/image'
import Link from "next/link"


export default function Card({ information }: any) {
  return (
    <div className=" mx-auto bg-white shadow-lg p-6 my-10">

      <div className="mb-4 flex items-center justify-between">
        <div >
          <h2 className="text-xl font-bold">{information.title}</h2>
          <p className="text-xl font-semibold">{information.place}</p>
          <h3 className="my-4 text-lg font-bold">{information.company}</h3>
        </div>
        <img src={information.logo} alt={information.company} className='w-24 mr-10' />
      </div>



      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#489cb4]">Descripción del trabajo</h3>
        <p>{information.jobDescription.substring(0, 480)}...</p>
      </div>


      <div className='w-32'>
        <Link href={`/pasantias/${information.id}`}  >
          <p className='text-center rounded-md bg-[#489cb4] text-white text-lg py-1 px-5 hover:bg-[#296474]'>Ver más</p>
        </Link>
      </div>


    </div>
  )

}