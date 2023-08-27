import React from 'react'

const Home = () => {
  return (
    <>
<table class="grades-table">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Passing Grade</th>
        <th>Student's Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Math</td>
        <td>60</td>
        <td>75</td>
      </tr>
      <tr>
        <td>Science</td>
        <td>50</td>
        <td>65</td>
      </tr>
    </tbody>
  </table>
  </>
  )
}

export default Home
