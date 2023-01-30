const Shimmer =() => {
    return (
        <div className="restaurant-list">
          {Array(15).fill("").map(e=> 
             <div className="shimmer-card" key ={"777"}></div>
             )} 
        </div>
    );
};

export default Shimmer;