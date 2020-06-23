import React, { Component } from 'react';
import DatePicker from ''

export default class CreateBlogEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      date: new Date(),
      github: ''
    }
  }

  render() {
    return (
      <div>
        create beautifulzaie
      </div>
    )
  }
}
