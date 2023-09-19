import { BooksList } from "./BOOKS/BooksList";
import {BookCreate} from "./BOOKS/BookCreate.js";

export function App() {
  return (
    <div className="App">
        <BookCreate />
        <BooksList  />
    </div>
  );
}

export default App;