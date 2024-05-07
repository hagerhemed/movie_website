// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromFavorites } from '../../store/cartAction';

// export default function Favorites() {
//     const favoriteMovies = useSelector((state) => state.addToCart.totalMovie);
//     const dispatch = useDispatch();
//     console.log(favoriteMovies)
     
//   if (!favoriteMovies || favoriteMovies.length === 0) {
//     return <p>No favorite movies yet!</p>;
//   }
//   const handleRemove=(movie)=>{
    

//       dispatch(removeFromFavorites(movie))
    
//   }
//   return (
//     <div>
//         <div className="container">
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//       {favoriteMovies.map(movie => (
        
//                         <div className='movie' key={movie.id}>
//                             <div className="">
//                                 <img
//                                     className="poster"
//                                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                                     alt={movie.title}
                                   
//                                 />
//                                 <div className="card-body movie-details">
//                                     <h5 className="card-title">{movie.title}</h5>
//                                    {/* <div>
//                                      <p className="card-text">{movie.overview}</p>
                                     
//                                    </div> */}
    
//                                    <button className="btn btn-dark text-light w-100 my-3" onClick={()=>{handleRemove(movie)}}>Remove from Cart</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//       </div>
//     </div>
//     </div>


//   )
// }




// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromFavorites } from '../../store/cartAction';

// export default function Favorites() {
//   const favoriteMovies = useSelector((state) => state.addToCart.totalMovie);
//   const dispatch = useDispatch();

//   if (!favoriteMovies || favoriteMovies.length === 0) {
//     return <p>No favorite movies yet!</p>;
//   }

//   const handleRemove = (movie) => {
//     dispatch(removeFromFavorites(movie));
//   };

//   return (
//     <div className="container">
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         {favoriteMovies.map((movie) => (
//           <div className="col mb-4" key={movie.id}>
//             <div className="card h-100">
//               <img
//                 className="card-img-top"
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{movie.title}</h5>
//                 {/* <div>
//                   <p className="card-text">{movie.overview}</p>
//                 </div> */}
//                 <button
//                   className="btn btn-dark text-light w-100 mt-3"
//                   onClick={() => {
//                     handleRemove(movie);
//                   }}
//                 >
//                   Remove from Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../../store/cartAction';

export default function Favorites() {
  const favoriteMovies = useSelector((state) => state.addToCart.totalMovie);
  const dispatch = useDispatch();

  if (!favoriteMovies || favoriteMovies.length === 0) {
    return <p className='text-center mt-5'>No favorite movies yet!</p>;
  }

  const handleRemove = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
        {favoriteMovies.map((movie) => (
          <div className="col mb-4" key={movie.id}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate text-center">{movie.title}</h5>
                {/* <div>
                  <p className="card-text">{movie.overview}</p>
                </div> */}
                <button
                  className="btn btn-success text-light w-100 mt-3"
                  onClick={() => {
                    handleRemove(movie);
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
