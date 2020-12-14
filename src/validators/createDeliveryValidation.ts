import * as yup from "yup"

const createDeliverySchema = yup.object().shape({
  client_name: yup.string().required(),
  start: yup.string().required(),
  destination: yup.string().required(),
  date: yup.date().required(),
})

export default createDeliverySchema
