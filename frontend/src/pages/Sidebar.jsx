import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "react-query";
//import { getRestaurants } from "../helper/restaurant";
import { getUser } from "../helper/user";
//mport Restaurant from "../components/restaurant/Restaurant";
import OrderManagement from "../components/Order";
//import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import {
    AiOutlineMenuUnfold as MenuUnfoldOutlined,
    AiOutlineMenuFold as MenuFoldOutlined,
    AiOutlineUser as UserOutlined,
    AiOutlineLogout as LogoutOutlined,
    AiOutlineHome as HomeOutlined,
    AiOutlineCopy as CopyOutlined,
    AiOutlineUnorderedList as UnorderedListOutlined,
  } from "react-icons/ai";

  
//import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
//import Card from "../components/Card";
function Sidebar() {
  const navigate = useNavigate();
  //const {theme, toggleTheme} = useContext()
  //const { cartItems, loading } = useSelector((state) => state.rootReducer);
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  }

  const user = getUser();
  const [showForm, setShowForm] = useState("");

  

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  

  const displayForm = () => {
    if (showForm) {
      setShowForm(0);
    } else {
      setShowForm(1);
    }
  };

  return (

    <div className="w-64 h-screen bg-gray-700 text-white flex flex-col  shadow-lg ">
        
        <h1 className=' flex flex-col text-2xl font-bold hidden md:block mt-6 text-center italic'>Welcome {user && user.name}</h1>
        <hr className="border-gray-600" />
        <hr className="border-gray-400 space-y-12" />
		  <ul className=' flex flex-col p-4 space-y-2 text-2xl'>
        <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          
          <Link to="/Home" className="flex items-center">
            <HomeOutlined className="text-xl"/>
            <span className="hidden md:inline ml-3">Dashboard</span>
          </Link>
        </li>
        <hr className="border-gray-600" />  
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
          hover:text-white hover:bg-blue-600">
          <Link to="/CategoryManagement" className="flex items-center">
            <MenuFoldOutlined className="text-xl" />
            <span className="hidden md:inline ml-3">Category</span>
          </Link>
                  
        </li>
        <hr className="border-gray-600" />
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
          hover:text-white hover:bg-blue-600">
          <Link to="/OrderManagement" exact={true} Component={OrderManagement} className="flex items-center">
            <CopyOutlined className="text-xl"/>
              <span className="hidden md:inline ml-3 ">Orders</span>
            </Link>
        </li>
        <hr className="border-gray-600" />
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
          hover:text-white hover:bg-blue-600" >
            <Link to="/details" className="flex items-center">
              <UserOutlined className="text-xl" />
              <span className="hidden md:inline ml-3">Customers</span>
            </Link>
        </li>
        <hr className="border-gray-600" />
        
        <hr className=" space-y-12 border-gray-600" />
        
			
		</ul>
    
	</div>
  );
}

export default Sidebar;
