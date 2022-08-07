import * as yup from "yup";


const personalSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required()
})

const petSchema = yup.object().shape({
    desc: yup.string().required().min(5).max(128),
    age: yup.number().required(),
    petType: yup.string().required()
})

const generateSchema = (step) => {
    switch (step) {
        case 1:
            return personalSchema;
        case 2:
            return petSchema;
        default:
            return personalSchema;
    }
}

export default generateSchema;