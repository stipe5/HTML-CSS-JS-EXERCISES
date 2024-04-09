import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AppContext } from '../context/UserContext';

function CustomForm() {

  const {user, setUser} = useContext(AppContext);

  const [userObject, setUserObject] = useState(user);

  function changeUsernameHandler(e) {
    console.log("new username:", e.target.value);
    setUserObject({...userObject, username: e.target.value});
  }

  function changeEmailHandler(e) {
    console.log("new email:", e.target.value);
    setUserObject({...userObject, email: e.target.value});
  }

  function onSubmit(e) {
    e.preventDefault();
    setUser(userObject);
  }

  return (
    <Form style={{ paddingTop: 100, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={userObject.email} onChange={(e) => changeEmailHandler(e)} />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={userObject.username} onChange={(e)=> changeUsernameHandler(e)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
}

export {CustomForm};
