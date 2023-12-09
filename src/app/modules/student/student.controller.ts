import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  /* client theke data nia ashbo jemon body and rakhbo const student er vitor
 then call korbo service function ke ei data send korar jonno
  shei jonno stedent.service.ts name 1ta file create korbo

  const createStudentIntoDB = async (student: Student) =>{
    const result = await StudentModel.create(student)
    return result;
};
export const  StudentServices = {
    createStudentIntoDB,
}
  */
  // will call service function

  try {
    const { student: studentData } = req.body;
    // console.log(student);
    const result = await StudentServices.createStudentIntoDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created succesfully',
    //   data: err,
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrived succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Stingle student data is retrived',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};

/*
Controller handles only request and response,
 amra data nia ashbo client theke onek vabe.
  then send this data to service function, 
*/
