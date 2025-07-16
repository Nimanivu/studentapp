import React, { useEffect, useState } from 'react'
import Studentnav from './Studentnav'
import axios from 'axios'

const Viewallstudent = () => {
  const [studentData, changeStudentData] = useState(
    { "status": "success", "data": [] }

  )
  const fetchdata = () => {
    axios.get("http://18.144.111.41/view_all_students.php").then(
      (response) => {
        changeStudentData(response.data)
      }
    ).catch()

  }
  useEffect(()=>{fetchdata()},[])
  return (
    <div>
      <Studentnav />
      <div className="container">

        <table class="table">
          <thead>
            <th>View student</th>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Roll-number</th>
              <th scope="col">Admn_no</th>
              <th scope="col">college</th>

            </tr>
          </thead>
          <tbody>
            {studentData.data.map(
              (value, index) => {
                return (
                  <tr>
                    <th scope="row">{value.id}</th>
                    <td>{value.name}</td>
                    <td>{value.roll_number}</td>
                    <td>{value.admission_number}</td>
                    <td>{value.college}</td>

                  </tr>

                )

              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Viewallstudent