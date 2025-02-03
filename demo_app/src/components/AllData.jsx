
/* All images */
import img1 from "../assets/images/rdp1.jpg";
import img2 from "../assets/images/rdp1.jpg";
import img3 from "../assets/images/rdp1.jpg";
import img4 from "../assets/images/rdp1.jpg";
import img5 from "../assets/images/rdp1.jpg";
import img6 from "../assets/images/rdp1.jpg";
import img7 from "../assets/images/rdp1.jpg";
import img8 from "../assets/images/rdp1.jpg";
import img9 from "../assets/images/rdp1.jpg";
import img10 from "../assets/images/rdp1.jpg";
import img11 from "../assets/images/rdp1.jpg";
import img12 from "../assets/images/rdp1.jpg";



/* Owners Images */
import owner1 from "../assets/images/pers1.jpg"
import Browse from "./Browse";

// Properties data
const properties = {
  buy: [
    {
      id: 1,
      title: "Modern Villa",
      location: "Dunusa",
      price: "R2,500,000",
      type: "villas",
      bedrooms: 4,
      bathrooms: 3,
      garages: 2,
      size: "350m²",
      image: img1,
      owner: "Sphokazi Dube",
      email: "dubespho12@gmail.com",
      contact: "+27 71 234 5678",
      ownerPic: owner1,
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Makuleni",
      price: "R1,800,000",
      type: "apartments",
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      size: "120m²",
      image: img2,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 3,
      title: "Family Home",
      location: "Loliwe",
      price: "R2,000,000",
      type: "houses",
      bedrooms: 4,
      bathrooms: 3,
      garages: 2,
      size: "250m²",
      image: img3,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 4,
      title: "Villa",
      location: "Emagesini",
      price: "R3,500,000",
      type: "villas",
      bedrooms: 2,
      bathrooms: 2,
      garages: 1,
      size: "200m²",
      image: img4,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 5,
      title: "Estate",
      location: "Makuleni",
      price: "R4,500,000",
      type: "estates",
      bedrooms: 5,
      bathrooms: 4,
      garages: 1,
      size: "500m²",
      image: img5,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 6,
      title: "Estate",
      location: "Makuleni",
      price: "R4,500,000",
      type: "estates",
      bedrooms: 5,
      bathrooms: 4,
      garages: 1,
      size: "500m²",
      image: img6,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
  ],

  rent: [
    {
      id: 7,
      title: "Cozy House",
      location: "Loliwe",
      price: "R15,000/month",
      type: "houses",
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      size: "200m²",
      image: img7,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 8,
      title: "Studio Apartment",
      location: "Emagesini",
      price: "R8,000/month",
      type: "apartments",
      bedrooms: 1,
      bathrooms: 1,
      garages: 1,
      size: "45m²",
      image: img8,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 9,
      title: "PentHouse",
      location: "Loliwe",
      price: "R25,000/month",
      type: "penthouses",
      bedrooms: 3,
      bathrooms: 3,
      garages: 2,
      size: "180m²",
      image: img9,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 10,
      title: "Apartment",
      location: "Emagesini",
      price: "R13,000/month",
      type: "apartments",
      bedrooms: 2,
      bathrooms: 2,
      garages: 1,
      size: "120m²",
      image: img10,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 11,
      title: "Estate",
      location: "Makuleni",
      price: "R10,500/month",
      type: "estates",
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      size: "140m²",
      image: img11,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
    {
      id: 12,
      title: "Condo",
      location: "Emagesini",
      price: "R30,500/month",
      type: "estates",
      bedrooms: 4,
      bathrooms: 2,
      garages: 2,
      size: "400m²",
      image: img12,
      owner: "John Smith",
      email: "john.smith@email.com",
      contact: "+27 71 234 5678",
      ownerPic: "/api/placeholder/64/64",
      address: "123 Villa Street, Dunusa"
    },
  ],
};


const AllData = () => {
 
  return (
    <>
      <Browse properties={properties} />
    </>
  );
}

export default AllData;







