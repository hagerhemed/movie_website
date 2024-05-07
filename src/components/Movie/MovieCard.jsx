// // MovieCard.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToFavorites, removeFromFavorites } from './favoriteMoviesSlice';

// const MovieCard = ({ movie }) => {
//   const { movies } = useSelector(state => state.favoriteMovies);
//   const dispatch = useDispatch();

//   const isFavorite = movies.some(favoriteMovie => favoriteMovie.id === movie.id);

//   const handleToggleFavorite = () => {
//     if (isFavorite) {
//       dispatch(removeFromFavorites(movie));
//     } else {
//       dispatch(addToFavorites(movie));
//     }
//   };

//   return (
//     <div>
//       <h3>{movie.title}</h3>
//       {isFavorite ? (
//         <button onClick={handleToggleFavorite}>Remove from Favorites</button>
//       ) : (
//         <button onClick={handleToggleFavorite}>Add to Favorites</button>
//       )}
//     </div>
//   );
// };

// export default MovieCard;