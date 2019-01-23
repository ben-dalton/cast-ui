import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Modal from './Modal.component';
import { wInfo } from '../storybook-utils';

storiesOf('Modal', module).add(
  'Modal',
  wInfo(`

  ### Notes

  This is a Modal, based on the react-modal component.
  To open or close the modal, change the 'isOpen' prop.

  ### Usage
  ~~~js
  <Modal
    id="myModal"
    buttonType='OkCancel'
    modalTitle='Hello Modal'
    onCancelOrNo={action('Clicked Cancel/No!')}
    onOkOrYes={action('Clicked OK/Yes!')}
  />~~~`)(() => (
    <Modal
      isOpen={boolean('isOpen', false)}
      id="myModal"
      buttonType={select('buttonType', ['OkOnly', 'OkCancel', 'YesNo'], 'OkCancel')}
      modalTitle={text('modalTitle', 'Hello Modal')}
      onCancelOrNo={action('Clicked Cancel/No!')}
      onOkOrYes={action('Clicked OK/Yes!')}
      >
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Modal>
  )),
);