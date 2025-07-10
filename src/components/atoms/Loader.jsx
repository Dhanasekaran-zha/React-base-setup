const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/30'>
      <div className='h-12 w-12 animate-spin rounded-full border-[3px] border-gray-300 border-t-blue-500 border-l-blue-500'></div>
    </div>
  );
};

export default Loader;
