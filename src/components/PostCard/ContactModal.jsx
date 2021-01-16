import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import styled from "styled-components";

const ButtonContainer = styled.div`
    padding-bottom: 10px;
    .ui.button {
      border-radius: 81px
    }
`
const ContactModal = (props) => {
  return (
    <Modal
      trigger={        <ButtonContainer>
        <Button basic color={props.PostTypeId === '1' ? "green" : "red"} >Contact Me!</Button>
      </ButtonContainer>}
      header='The Author of this Post has provided the following contact information:'
      content={'Email Address: ' + (props.email === '' ? 'none': props.email) + ' Phone Number: ' + (props.phoneNumber === '' ? 'none': props.phoneNumber)}
      actions={[{ key: 'done', content: 'Done', positive: true }]}
    />
  )
}

export default ContactModal