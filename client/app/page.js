
import Animated from '@/components/Animated'









export default  function Home() {


  

  return (
    <main className='min-h-screen bg-purple-100 flex flex-col items-center'>
      
      <div className='mt-16 p-2 mb-3 '>
        <Animated text = {'Sheet Tracker'} className= '!text-5xl space-x-7 tracking-wider '/>
      </div>
      <div  className='text-4xl p-2 font-Nunito'>
        <Animated text = {'About'} className={'!text-4xl !font-Nunito mt-8 p-2'}/>
      </div>
      <div className='flex justify-center '>
        <Animated text={'Sheet Tracker helps you build your confidence in solving any coding related question and helps you prepare for your placements 👨🏻‍🎓'} className = 'text-3xl p-4 mt-8 w-5/6 '/>
      </div>
    
      <div>
        Later we are planing to add other cool features too
      </div>
       
    </main>


  )
}
