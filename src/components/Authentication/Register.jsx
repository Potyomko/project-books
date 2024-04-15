import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operation";

export const Register = () => {
   const dispatch = useDispatch();
   const [formData, setFormData] = useState({
      title: "",
      author: "",
      pages: ""
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(register(formData))
         .then(() => {
            console.log("Data submitted successfully!");
            // Опціонально: виконати будь-які додаткові дії після успішної відправки даних
         })
         .catch((error) => {
            console.error("Error submitting data:", error);
            // Опціонально: обробити помилку
         });
      // Очищення форми
      setFormData({
         title: "",
         author: "",
         pages: ""
      });
   };

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Title:
            <input
               type="text"
               name="title"
               value={formData.title}
               onChange={handleChange}
            />
         </label>
         <label>
            Author:
            <input
               type="text"
               name="author"
               value={formData.author}
               onChange={handleChange}
            />
         </label>
         <label>
            Pages:
            <input
               type="text"
               name="pages"
               value={formData.pages}
               onChange={handleChange}
            />
         </label>
         <button type="submit">Submit</button>
      </form>
   );
};