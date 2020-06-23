import React from 'react';

export default function BlogEntry(props) {
  return (
    <tr>
      <td>{props.blogEntry.title}</td>
    </tr>
  )
}
