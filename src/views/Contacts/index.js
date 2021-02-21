import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardSection from "components/CardSection";
import ComponentTitle from "components/ComponentTitle";
import Spacer from "components/Spacer";
import { CONFIRMATION } from "constants/modals";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { close_modal, open_modal } from "store/actions/modals";
import { deleteUser } from "store/actions/users";

const Contacts = ({ history }) => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const onDelete = (_id) =>
    dispatch(
      open_modal({
        type: CONFIRMATION,
        children: "This will permanently remove the contact list from your database. Are you sure?",
        action: () => {
          dispatch(deleteUser(_id));
          dispatch(close_modal());
        },
      })
    );
  return (
    <>
      <ComponentTitle title='Contact List' />
      <Spacer />
      <CardSection title='Contacts' noBorder={true}>
        <Table responsive>
          <thead className='text-white bg-primary'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ _id, name, phone, gender }, index) => (
              <tr key={_id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{gender}</td>
                <td className='actionColumn'>
                  <Button outline size='sm' color='primary' onClick={() => history.push(`/${_id}`)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button outline size='sm' color='danger' onClick={() => onDelete(_id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardSection>
    </>
  );
};

export default withRouter(Contacts);
