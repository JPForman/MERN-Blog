import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css'

export default class EditBlogEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      date: new Date(),
      github: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogEntries/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description,
          date: new Date(response.data.date),
          github: response.data.github
        })
      })
      .catch(function(error) {
        console.log(error);
      })
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

  onChangeGithub = (e) => {
    this.setState({
      github: e.target.value
    });
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const blogEntry = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      github: this.state.github,
    }

    console.log(blogEntry);
    

    axios.post('http://localhost:5000/blogEntries/update/' + this.props.match.params.id, blogEntry)
      .then(res => console.log(res.data))
    
    window.location = '/';
  }

  render() {
    
    return (
      <div className='container'>
        <h3>Edit Blog Entry</h3>
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
            <textarea type='text'
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
