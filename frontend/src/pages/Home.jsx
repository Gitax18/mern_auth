import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HandleError, HandleSuccess } from "../utils/toasts";

function Home() {
  const [products, setProducts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("loggedInUser");
    HandleSuccess("Log Out successfully");
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }

  async function fetchProducts() {
    try {
      const url = "/product";
      const response = await fetch(url, {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      });
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      HandleError(error);
    }
  }

  useEffect(() => {
    const name = localStorage.getItem("loggedInUser");
    if (!name) {
      navigate("/");
    }
    setLoggedInUser(name);
    fetchProducts();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome, {loggedInUser}</h1>
      <div>
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <strong>{product.name}: </strong>
                <span>${product.price}</span>
              </div>
            );
          })}
      </div>
      <button onClick={handleLogout}>Log out</button>
      <ToastContainer />
    </div>
  );
}

export default Home;
