import * as yup from "yup";

export const bookSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  publisher: yup
    .string()
    .required("Publisher is required")
    .min(1, "Publisher must be at least 1 character"),
  year: yup
    .number()
    .required("Year is required"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
  page: yup
    .number()
    .required("Page is required")
    .min(1, "Page must be at least 1 page"),
  price: yup
    .number()
    .required("Price is required")
    .min(1, "Price must be at least Rp. 0"),
  language: yup
    .string()
    .required("Language is required")
    .min(3, "Language must be at least 3 characters"),
  stock: yup
    .number()
    .required("Stock is required")
    .min(1, "Stock must be at least 0"),
});
