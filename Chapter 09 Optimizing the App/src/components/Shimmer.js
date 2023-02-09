const Shimmer = () => {
    return(
        <div className="restaurant-list">
      {Array(12).fill("").map((e) => (
         <div key={777} className="shimmer-card"></div>
      ))}  
        </div>
        
    );
};

export default Shimmer;