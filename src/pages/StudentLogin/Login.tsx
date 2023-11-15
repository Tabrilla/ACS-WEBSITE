import IMGS from "../../constants/IMGS"
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Login = () => {

  return (
    <section>
        {/* hidden lg:block lg:w-1/2 bg-cover */}
    
        <div className="bg-white">
            <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" 
                        style={{ backgroundImage: `url(${IMGS.STUDENTBACK})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>

                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl font-bold text-white mt-20">Welcome Stier</h2>
                                <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">STI</h2>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <div className="space-y-5">     
                                    <Input label="Student ID Number" color="black" crossOrigin={undefined} />
                                    <Input label="Password" type="password" color="black" crossOrigin={undefined} />                                  
                                    {/* <h1 className="text-sm text-gray-400 focus:text-blue-500 hover:text-red-500 hover:underline">Forgot password?</h1> */}
                                    <Button fullWidth>Sign In</Button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>


    </section>
  )
}

export default Login