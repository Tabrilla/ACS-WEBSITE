import IMGS from "../../constants/IMGS"
import { Button } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom";

const StudentMain = () => {

  const navigate = useNavigate();

  const handleNavigateLogout = () => {
    navigate("/");
  };

  return (
    <section className="flex justify-center h-screen"  style={{
      backgroundImage: `url(${IMGS.STUDENTBACK})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      
      <div>
        <Button onClick={handleNavigateLogout} className='mx-auto'>LOGOUT</Button>
      </div>

    </section>
    
  )
}

export default StudentMain