import React from 'react';
import { FormService, Input } from 'containers';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { isEmpty } from 'utils/validation';
//import { addItemfNeeded } from 'actions/items/addItem';

class AddDialog extends FormService {
  constructor(props) {
    super(props);
    this.newItem = '';
    this.itemNotes = ''
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      props: { createItem },
      resetState,
      newItem,
      itemNotes
    } = this;

    if (!isEmpty(newItem)) {
      createItem({ name: newItem, notes: itemNotes });
    }

    resetState();
  }

  render() {
    const {
      state: { shouldReset },
      props: { handleClose, shouldOpen },
      handleInput,
      handleSubmit
    } = this;

    const actions = [
      <RaisedButton
        onClick={handleClose}
        className="form__btn--multi"
        label="Close"
        primary
      />,
      <RaisedButton
        className="form__btn--multi"
        type="submit"
        form="add-item"
        label="Add"
        primary
      />
    ]

    return (
      <Dialog
        open={shouldOpen}
        onRequestClose={handleClose}
        actions={actions}
        contentStyle={{ maxWidth: 500 }}
      >
        <form
          className="form"
          id="add-item"
          onSubmit={handleSubmit}
        >
          <Input
            label="Item"
            reset={shouldReset}
            callback={input => handleInput('newItem', input)}
          />
          <Input
            label="Notes"
            reset={shouldReset}
            callback={input => handleInput('itemNotes', input)}
          />
        </form>
      </Dialog>
    );
  }
}

export default AddDialog;
