export default function Card({ title, imageSrc, altText }) {
    return (
      <div className="bg-white flex flex-col m-2 overflow-hidden justify-center items-center w-[400px] h-[600px] border-black drop-shadow-lg">
        <img 
      src={imageSrc}
      alt="Sample Image 2" 
      className="w-[80%] h-[70%] object-cover mt-[50px]" 
    />
    <p className="mt-4 text-center text-lg">Image 2 Description</p>
      </div>
    );
  }