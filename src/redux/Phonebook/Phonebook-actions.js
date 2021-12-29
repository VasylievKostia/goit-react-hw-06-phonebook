import PhonebookTypes from "./Phonebook-types"
import { createAction } from "@reduxjs/toolkit"
import shortid from "shortid"


const addNewContact = createAction(PhonebookTypes.PHONEBOOK_ADD, (obj) => ({
  payload: {
      id: shortid.generate(),
      name: obj.name,
      number: obj.number
    }
}))
// const addNewContact = (obj) => ({
//     type: PhonebookTypes.PHONEBOOK_ADD,
//     payload: {
//       id: shortid.generate(),
//       name: obj.name,
//       number: obj.number
//     },
// })


 export default {addNewContact}