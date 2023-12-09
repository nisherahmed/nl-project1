import { StudentModel } from './student.model';
import { Student } from './student.interface';

/* eikhane createStudentIntoDB means holo database e student create korbe shei jonno ei 
name ta use kora hoise and 1ta parameter receive korbe student name 
*/
const createStudentIntoDB = async (student: Student) => {
  console.log(student);
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};

/* ei part ta oblect hishabe create kora hoise
{
    createStudentIntoDB,
}
*/
