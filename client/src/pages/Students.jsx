import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Layout, Row, Space } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import API from '../utils/studentAPI';
import './styles.css';

const Students = () => {
  const [studentRoll, setStudentRoll] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const response = await API.getStudents();
    setStudentRoll(response.data);
  };

  const addStudentHandler = async () => {
    console.log('the button works');
  };

  return (
    <>
      <Layout className="pageContainer" id="studentPage">
        <Row>
          <div>Click on a student to create a new log</div>
          <Col>
            <Space direction="vertical">
              {studentRoll.map((student) => (
                <Link to={`/students/log/${student._id}`} key={student._id}>
                  <Button  type="primary" block id="studentBtns">
                    {student.name}
                  </Button>
                </Link>
              ))}
            </Space>
          </Col>
        </Row>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={addStudentHandler}
        ></Button>
      </Layout>
    </>
  );
};

export default Students;
