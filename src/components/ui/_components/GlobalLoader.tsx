
const GlobalLoader = ({ isLoading }: { isLoading: boolean }) => {
 
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
    </div>
  );
};

export default GlobalLoader;
