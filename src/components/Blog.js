import React, { Component } from 'react';
// import BlogEntry from './BlogEntry';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogEntry = props => (
  <tr>
    <td>{props.blogEntry.title}</td>
    <td>{props.blogEntry.date.slice(0,10)}</td>
    <td>{props.blogEntry.description}</td>
    <td>{props.blogEntry.github}</td>
    <td>
      <Link to={'/edit/'+props.blogEntry._id}>edit</Link> | <a href='#' onClick={() => { props.deleteEntry(props.blogEntry._id) }}>delete</a>
    </td>
  </tr>
)

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {blogEntries: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogEntries/')
      .then(response => {
        this.setState({ blogEntries: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteEntry = (id) => {
    axios.delete('http://localhost:5000/blogEntries/'+id)
    .then(response => { console.log(response.data)});

    this.setState({
      blogEntries: this.state.blogEntries.filter(el => el._id !== id)
    })
  }

  blogList() {
    return this.state.blogEntries.map(entry => {
      return <BlogEntry blogEntry={entry} deleteEntry={this.deleteEntry} key={entry._id}/>;
    })
  }

  render() {
    return (
      <div>
        { this.blogList() }
      </div>
    )
  }
}
