import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoryCreate from "../components/Categories/CategoryCreate";
import CategoryList from "../components/Categories/CategoryList";
import Heading from "../components/Heading";
import DynamicModal from "../components/utils/DynamicModal";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };
  const handleShow = () => {
    setModalShow(true);
  };

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  }, []);
  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={handleShow} />
        <CategoryList items={categories} />
      </div>
      <DynamicModal
        show={modalShow}
        handleClose={handleClose}
        title="Create category"
        content={<CategoryCreate />}
      />
    </>
  );
}
