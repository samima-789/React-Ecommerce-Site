import React from 'react'
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard"
import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"
import Img5 from "../../assets/product/p-5.jpg"
import Img7 from "../../assets/product/p-7.jpg"
import Img9 from "../../assets/product/p-9.jpg"
import Img10 from "../../assets/product/p-3.jpg"


const ProductsData = [
    {
        id: 1,
        img: Img1,
        price: "120",
        title:"Boat Headphone",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        price: "140",
        title:"Smart Watch",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        price: "160",
        title:"Boat Headphone",
        aosDelay: "300",
    },
    {
        id: 4,
        img: Img4,
        price: "180",
        title:"Boat Headphone",
        aosDelay: "400",
    },
    {
        id: 5,
        img: Img5,
        price: "120",
        title:"Boat Headphone",
        aosDelay: "0",
    },
        {
        id: 6,
        img: Img7,
        price: "120",
        title:"Boat Headphone",
        aosDelay: "0",
    },
        {
        id: 7,
        img: Img9,
        price: "120",
        title:"Boat Headphone",
        aosDelay: "0",
    },
            {
        id: 8,
        img: Img10,
        price: "120",
        title:"Boat Headphone",
        aosDelay: "0",
    },
]

const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header Section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
            {/* Body Section */}
            <ProductCard data={ProductsData}/>
        </div>
    </div>
  )
}

export default Products