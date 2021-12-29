import { useState } from "react";
import {connect} from 'react-redux'
import shortid from 'shortid';
import PhonebookActions from "../../redux/Phonebook/Phonebook-actions";
import s from '../ContactsForm/ContactsForm.module.css'

export function ContactsForm(props) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate()

  const  handleChangeInput = event => {
     setName(event.currentTarget.value)
  }
  const handleChangeNumber = event => {
      setNumber(event.currentTarget.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
  //   const obj = {
  //     id: shortid.generate(),
  //     name: name,
  //     number: number
  //   }

  //     onFormSubmit(obj)
  //   resetState()
  // }
  // const resetState = () => {
  //   setNumber('')
  //   setName('')
  }
  return <section className={s.section}>
    <form
      onSubmit={handleSubmit}
    >
            
    <label htmlFor={nameInputId}> Name
      <input
      id={nameInputId}
      type="text"
      name="name"
      value={name}
      onChange={handleChangeInput}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required/>
      </label>
          <br />
          
      <label htmlFor={numberInputId}>Number
      <input
        id={numberInputId}
        value={number}
        type="tel"
        name="number"
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        /></label>
      <br />
      <button type='submit'> Add Contact</button>
        </form>
        </section>
    
}

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (obj) => dispatch (PhonebookActions.addNewContact(obj))
})

export default connect(null,mapDispatchToProps)(ContactsForm)