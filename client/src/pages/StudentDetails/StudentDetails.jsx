import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentDetailsTable from '../../components/StudentDetailsTable/StudentDetailsTable'
import StudentAPI from '../../utils/studentAPI';
import Authenticated from '../layout/Authenticated/Authenticated';
import './studentDetails.css';
import { Container, Image } from 'react-bootstrap';
import Footer from '../layout/Footer/Footer';

const StudentDetails = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  let { student_id } = useParams();

  const fetchStudents = async () => {
    const response = await StudentAPI.getStudentByID(student_id);
    setStudentData(response.data);
  };
  return (
    <Authenticated>
      <Container className="studentContainer">
        <h1 id="bannerText">weSkool</h1>
        
        <StudentDetailsTable studentData={studentData}/>
      </Container>
      <Footer />
    </Authenticated>
  );
};

export default StudentDetails;
