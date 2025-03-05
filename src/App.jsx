import Navbar from './Pages/landing_page/components/Navbar'
import './App.css'
import SplitText from './Pages/landing_page/components/Text'
// import ScrollReveal from './Pages/landing_page/components/BlurText';
import TextPressure from './Pages/landing_page/components/TextPressure';


function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
    <Navbar/>
    <div className='flex justify-center h-full w-full items-center'>
    {/* import TextPressure from './TextPressure'; */}

{/* // Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used */}

<div style={{position: 'relative', height: '300px'}} className='hidden lg:block'>
  <TextPressure
    text="InvenHub"
    flex={true}
    alpha={true}
    stroke={true}
    width={false}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ffffff"
    minFontSize={200}
  />
</div>
    <SplitText
      text="InvenHub"
      className="md:text-8xl text-5xl font-semibold text-center  text-white mt-30 lg:hidden"
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
      className="text-xl flex justify-center text-white mt-1 pb-60"
      delay={30}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
    />

    </div>
    <div className='m-20 h-180 text-center'>

{/* <ScrollReveal
  baseOpacity={0.1}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  textClassName='text-white'
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal> */}
    </div>
    </>
  )
}

export default App
