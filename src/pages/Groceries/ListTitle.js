import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import { FormService, Input } from 'containers';
import { isEmpty } from 'utils/validation';
import { addListIfNeeded } from 'actions/lists/addList';

class ListTitle extends FormService {
  constructor(props) {
    super(props);
    this.title = this.props.listName;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { props: { changeTitle, listId }, title } = this;

    if (!isEmpty(title)) changeTitle(title);
  }

  render() {
    const {
      props: { listName },
      handleInput,
      handleSubmit,
      title
    } = this;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <FloatingActionButton
          type="submit"
          className="form__btn--singlerow"
          children={[<ModeEdit />]}
          mini
        />
        <Input
          className="form__input--singlerow"
          label="List Title"
          initialInput={listName || ''}
          callback={input => handleInput('title', input)}
          dynamic
        />
      </form>
    );
  }
}

export default ListTitle;
