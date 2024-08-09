
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./pages/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import OrderManagement from './components/Order';
import CategoryManagement from './components/Category'
import 'tailwindcss/tailwind.css';
import Home from "./pages/Home";
import Customer from "./components/Customer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-gray-900">
          <Header />
          <div className="flex">
          
          <div className=" flex-grow p-4 mx-auto ">
            
            <Routes>
            <Route path="/" element={<Sidebar />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/orderManagement" element={<OrderManagement />} />
              <Route path="/categoryManagement" element={<CategoryManagement />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Details" element={<Customer />} />
             

            </Routes>

          </div>
          </div>
        </div>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
//<Routes>
//<Route path="/" element={<Dashboard />} />
//<Route path="/orderManagement" element={<OrderManagement />} />
//<Route path="/categoryManagement" element={<CategoryManagement />} />
//<Route path="/login" element={<Login />} />
//<Route path="/register" element={<Register />} />

//</Routes> <Routes >
              
                
                //<Route path="/OrderManagement" exact={true} Component={OrderManagement} />
                //<Route path="/CategoryManagement" exact={true} Component={CategoryManagement} />
                //<Route path="/login" exact={true} Component={Login} />
                //<Route path="/Register" exact={true} Component={Register} />
              //</Routes>