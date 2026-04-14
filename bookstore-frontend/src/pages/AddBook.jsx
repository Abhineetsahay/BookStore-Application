import { useState } from "react";
import axios from "axios";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
  });

  const [cover, setCover] = useState(null);
  const [back, setBack] = useState(null);

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("title", form.title);
    data.append("author", form.author);
    data.append("price", form.price);
    data.append("cover", cover);
    data.append("back", back);

    await axios.post("http://localhost:8080/api/books/upload", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    alert("Book Added!");
  };

  return (
    <div className="container">
      <h2>Add Book</h2>

      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <input placeholder="Author" onChange={e => setForm({...form, author: e.target.value})} />
      <input placeholder="Price" onChange={e => setForm({...form, price: e.target.value})} />

      <label>Cover Image</label>
      <input type="file" onChange={e => setCover(e.target.files[0])} />

      <label>Back Image</label>
      <input type="file" onChange={e => setBack(e.target.files[0])} />

      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default AddBook;