import Modals from "components/Modals";
import Wrapper from "hoc/Wrapper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { close_modal } from "store/actions/modals";
import { fetchUsers } from "store/actions/users";
import Contacts from "views/Contacts";
import EditContact from "views/EditContact";
const App = () => {
  const dispatch = useDispatch();
  const { isOpen, type, title, children, action } = useSelector(({ modals }) => modals);
  useEffect(() => dispatch(fetchUsers()), [dispatch]);

  return (
    <>
      <Modals isOpen={isOpen} type={type} title={title} children={children} toggle={() => dispatch(close_modal())} action={action} />
      <Wrapper>
        <Switch>
          <Route path='/:id' render={() => <EditContact />} />
          <Route path='/' render={() => <Contacts />} />
        </Switch>
      </Wrapper>
    </>
  );
};

export default App;
