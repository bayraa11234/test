import { SlPencil, SlTrash } from "react-icons/sl";
import { toast } from "react-toastify";

const ListItem = ({ item, index }) => {
  const deleteItem = () => {
    let statusCode;
    fetch("https://demo-api-one.vercel.app/api/categories", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ id: item.id }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        if (toast.success === 200) {
          toast.success("amjilttai ustlaa");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  };
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button className="btn btn-sm btn-outline-primary me-2">
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};
export default function CategoryList({ items }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItem item={item} index={index + 1} key={`list-item-${index}`} />
        ))}
      </tbody>
    </table>
  );
}
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
// import { SlPencil, SlTrash } from "react-icons/sl";
// import { toast } from "react-toastify";

// const ListItem = ({ item, index }) => {
//   const deleteItem = () => {
//     let statusCode;
//     fetch("https://demo-api-one.vercel.app/api/signin/categories", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: localStorage.getItem("token"),
//       },
//       body: JSON.stringify({ id: item.id }),
//     })
//       .then((res) => {
//         statusCode = res.status;
//         return res.json();
//       })
//       .then((data) => {
//         if (toast.success === 200) {
//           toast.success("amjilttai ustgagdlaa");
//         } else {
//           toast.error(data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("aldaa garlaa");
//       });
//   };
//   return (
//     <tr>
//       <th scope="row">{index}</th>
//       <td>{item.name}</td>
//       <td>{item.description}</td>
//       <td style={{ whiteSpace: "nowrap" }}>
//         <button className="btn btn-sm btn-outline-primary me-2">
//           <SlPencil />
//         </button>
//         <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
//           <SlTrash />
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default function CategoryList({ items }) {
//   return (
//     <table className="table table-bordered table-hover">
//       <thead>
//         <tr>
//           <th width="1">#</th>
//           <th>Name</th>
//           <th>Description</th>
//           <th width="1">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items?.map((item, index) => (
//           <ListItem item={item} index={index + 1} key={`list-item-${index}`} />
//         ))}
//       </tbody>
//     </table>
//   );
// }
