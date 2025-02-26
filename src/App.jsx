import Navbar from './Pages/landing_page/components/Navbar'
import './App.css'
import SplitText from './Pages/landing_page/components/Text'
import BlurText from './Pages/landing_page/components/BlurText';


function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
    <Navbar/>
    <div className='flex justify-center h-full w-full items-center'>
    <SplitText
      text="InvenHub"
      className="md:text-8xl text-5xl font-semibold text-center  text-white mt-30"
      delay={150}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
    />
    </div>
    <div  className='flex justify-center' >
    <SplitText
      text="AI Based Comprehensive Inventory Management System"
      className="text-xl flex justify-center text-white mt-5"
      delay={30}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
    />
{/* <BlurText
  text="AI Based Comprehensive Inventory Management System"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8 text-white mt-10 flex justify-center"
/> */}
    </div>
    </>
  )
}

export default App
