import IMGS from "../../constants/IMGS"
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Login = () => {

  return (
    <section>
        {/* hidden lg:block lg:w-1/2 bg-cover */}
            <div className="flex flex-wrap content-center justify-center w-full min-h-screen py-10" 
                style={{
                    backgroundImage: `url(${IMGS.STUDENTBACK})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>

                <div className="flex shadow-md">

                    <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{width: '24rem', height: '32rem'}}>
                        <img className="hidden lg:block lg:w-full rounded-r-md" src={IMGS.STILOGO} />
                    </div>

                    <div className="flex flex-wrap content-center justify-center bg-white bg-opacity-75 rounded-l-md" style={{width: '24rem', height: '32rem'}}>
                        <div className="w-72">
                            <h1 className="py-10 text-3xl font-bold text-center">WELCOME STIERS</h1>

                                <div className="space-y-5">
                                    <Input label="Student ID Number" color="black" crossOrigin={undefined} />

                                    <Input label="Password" type="password" color="black" crossOrigin={undefined} />

                                    <Button fullWidth>Sign In</Button>                             
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    </section>
  )
}

export default Login