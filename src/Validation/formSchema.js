import * as yup from 'yup';

export default yup.object().shape({
    size: yup.string().required("A size is required."),
    name: yup.string().required("your name is required.").min(2, "name must be at least 2 characters")
})