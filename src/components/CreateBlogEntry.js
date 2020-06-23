import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

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

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  onChangeGithub = (e) => {
    this.setState({
      github: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault()

    const blogEntry = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      github: this.state.github,
    }
    console.log('blogEntry= ', blogEntry);

    axios.post('http://localhost:5000/blogEntries/add', blogEntry)
    .then(res => console.log('res.data:', res.data));

    window.location= '/';

  }

  render() {
    return (
      <div>
        <h3>Create A New Blog Entry</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Title of Blog Entry: </label>
            <input type='text'
            className='form-control'
            value={this.state.title}
            onChange={this.onChangeTitle}
            />
          </div>
          <div className='form-group'>
            <label>Entry: </label>
            <input type='text'
            className='form-control'
            value={this.state.description}
            onChange={this.onChangeDescription}
            />
          </div>
          <div className='form-group'>
            <label>Github: </label>
            <input type='text'
            className='form-control'
            value={this.state.github}
            onChange={this.onChangeGithub}
            />
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className='form-group'>
            <input type='submit' value='Create Blog Entry' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}
