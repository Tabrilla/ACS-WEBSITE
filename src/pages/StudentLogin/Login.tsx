import IMGS from "../../constants/IMGS";
import { Input, Button, Spinner } from "@material-tailwind/react";
import { useAppDispatch } from "../../utils/redux/hooks";
import { setStudentInfo } from "../../utils/redux/modules/studentSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { checkStudentLogin } from "../../firebase/services";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [studentID, setStudentID] = useState<number>();
  const [password, setPassword] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Use the name attribute of the input to dynamically set the corresponding state
    const { name, value } = e.target;
    if (name === "studentID") {
      setStudentID(Number(value));
    } else if (name === "password") {
      setPassword(Number(value));
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform login logic using studentID and password
    try {
      setIsLoading(true);
      const checkStudent = await checkStudentLogin({
        studentID: studentID || null,
        password: password || null,
      });

      if (!checkStudent.empty) {
        const studentData = checkStudent.docs[0].data();
        const firstName = studentData.firstName;
        const lastName = studentData.lastName;
        const studentID = studentData.studentID;
        dispatch(
          setStudentInfo({
            firstName: firstName,
            lastName: lastName,
            studentID: studentID,
          })
        );
        localStorage.setItem("studentData", JSON.stringify(studentData));
        navigate("/home");
        setIsLoading(false);
      } else setIsLoading(false);
      toast.error("Invalid Student ID or Password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("Error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <section>
      {/* hidden lg:block lg:w-1/2 bg-cover */}
      <div className="bg-white">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(${IMGS.STUDENTBACK})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="mt-20 text-4xl font-bold text-white">
                  Welcome Stier
                </h2>
                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 ">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center">
                  <img
                    src="https://www.sti.edu/images/STI_logo_40th(2).png"
                    className="w-16 h-12 "
                  />
                </div>
                {/* <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  STI
                </h2> */}
                <p className="mt-3 text-black ">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form className="space-y-5" onSubmit={handleLogin}>
                  <Input
                    label="Student ID"
                    color="black"
                    crossOrigin={undefined}
                    required
                    name="studentID" // Add name attribute
                    value={studentID} // Add value attribute
                    onChange={handleChange} // Add onChange handler
                  />
                  <Input
                    label="Password"
                    required
                    type="password"
                    color="black"
                    crossOrigin={undefined}
                    name="password" // Add name attribute
                    value={password} // Add value attribute
                    onChange={handleChange} // Add onChange handler
                  />
                  <div className="flex items-center justify-center mt-6">
                    {isLoading ? (
                      <Spinner color="blue" className="w-10 h-10" />
                    ) : (
                      <Button type="submit" fullWidth color="blue">
                        Sign in
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
