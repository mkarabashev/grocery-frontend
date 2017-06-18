import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { FormService, Input } from 'containers';
import { isEmpty } from 'utils/validation';
import { addListIfNeeded } from 'actions/lists/addList';

class ListForm extends FormService {
  constructor(props) {
    super(props);
    this.newList = '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { props: { createList }, resetState, newList } = this;

    if (!isEmpty(newList)) createList(newList);
    resetState();
  }

  render() {
    const { state: { shouldReset }, handleInput, handleSubmit } = this;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <FloatingActionButton
          type="submit"
          className="form__btn--singlerow"
          children={[<ContentAdd />]}
          mini
        />
        <Input
          className="form__input--singlerow"
          label="List Name"
          reset={shouldReset}
          callback={input => handleInput('newList', input)}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createList: listName => dispatch(addListIfNeeded(listName))
});

export default connect(
  null,
  mapDispatchToProps
)(ListForm);
