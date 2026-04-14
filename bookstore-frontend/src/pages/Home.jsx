import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/books", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(res => setBooks(res.data));
  }, []);

  return (
    <div className="grid">
      {books.map(b => (
        <div className="card" key={b.id}>
          <img src={b.coverImage} alt="" />
          <h3>{b.title}</h3>
          <p>{b.author}</p>
          <p>₹{b.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;