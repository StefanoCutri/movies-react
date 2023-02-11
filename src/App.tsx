import { Navigate, Route, Routes } from "react-router-dom";
import { SingleMovieCard } from "./components/SingleMovieCard";
import { useGenresLocalStorage } from "./hooks/useGenresLocalStorage";
import { MoviesScreen } from "./screens/MoviesScreen";

const App = () => {
  useGenresLocalStorage();
  return (
    <Routes>
      <Route path="/" element={<MoviesScreen />} />
      <Route path="/movie/:id" element={<SingleMovieCard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
