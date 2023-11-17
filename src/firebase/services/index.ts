import { db } from "../config/config";
import { collection, getDocs, query, where } from "firebase/firestore";
interface checkStudentLoginInterface {
  studentID: number | null;
  password: number | null;
}

export const checkStudentLogin = async ({
  studentID,
  password,
}: checkStudentLoginInterface) => {
  const votersRef = collection(db, "students");
  const querySnapshot = await getDocs(
    query(
      votersRef,
      where("studentID", "==", studentID),
      where("password", "==", password)
    )
  );
  return querySnapshot;
};
