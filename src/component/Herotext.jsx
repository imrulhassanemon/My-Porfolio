import { FlipWords } from "./FlipWords"

function Herotext() {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* mobail view  */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className="text-4xl font-medium">Hi || I am Imrul Hassan Emon</h1>
            <div className="flex flex-col items-start">
                <p className="text-neutral-300 text-5xl font-medium">A Developer <br /> Dedicate to Crafting</p>
                <div>
                    <FlipWords words={["Secure", "Modern","Sclable"]} className='text-white text-8xl font-black' ></FlipWords>
                </div>
                <p className="text-4xl font-medium text-neutral-300">Web soutions</p>
            </div>
        </div>
        
        {/* desktop view  */}

        <div>
            <p className="text-4xl font-medium"> HI I am Imrul</p>
        </div>

    </div>
  )
}

export default Herotext