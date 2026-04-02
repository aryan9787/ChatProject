import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-Client";
import { SIGNUP_ROUTE , LOGIN_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";

const Auth = () => {

  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateLogin = () => {
    if(!email.length)
    {
      toast.error("Email is required");
      return false;
    }

    if(!password.length)
    {
      toast.error("Password is required");
      return false;
    }
    return true;
  }

  const validateSignup = () => {
    if(!email.length)
    {
      toast.error("Email is required");
      return false;
    }

    if(!password.length)
    {
      toast.error("Password is required");
      return false;
    }
    if(password!==confirmPassword)
    {
      toast.error("Password and confirm password should be same");
      return false;
    }
    return true;
  }

  const handleLogin = async () => {
    if(validateLogin())
    {
      const response = await apiClient.post(LOGIN_ROUTE,{email,password}, {withCredentials: true});
      if(response.data.user.id){
        setUserInfo(response.data.user);
        if(response.data.user.profileSetup) navigate("/chat");
        else navigate("/profile");
      }
      console.log({response});
    }
  };

  const handleSignup = async () => {
    if(validateSignup())
    {
      const response = await apiClient.post(SIGNUP_ROUTE,{email,password}, {withCredentials: true});
      
      if(response.status === 201){
        setUserInfo(response.data.user);
        navigate("/profile");
      }

      console.log({response});
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-white border-2 border-white shadow-2xl h-[80vh] w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 overflow-hidden ">
        <div className="flex flex-col gap-10 items-center justify-center p-3">
          <div className="flex flex-col items-center justify-center">

            {/* Header */}

            <div className="flex items-center text-center  justify-center">
              <h1 className="text-5xl font-bold md:text-6xl"> Welcome</h1>
              <img
                src={Victory}
                alt="Victory Emoji"
                className="h-[100px]"
              />
            </div>
            <p className="text-center font-medium">
              Fill in the details to get started with the best chat app!
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4" defaultValue="login">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger
                  value="login"
                  className="
                      w-full p-3 rounded-none
                      border-b-2 border-transparent
                      text-black/90
                      transition-all duration-300
                      hover:text-black
                      hover:border-b-purple-500

                      data-state-inactive:bg-transparent
                      data-state-active:font-semibold
                      data-state-active:text-black
                      data-state-active:border-b-purple-500
                    "
                >
                  Login
                </TabsTrigger>

                <TabsTrigger
                  value="signup"
                  className="
                      w-full p-3 rounded-none
                      border-b-2 border-transparent
                      text-black/90
                      transition-all duration-300
                      hover:text-black
                      hover:border-b-purple-500

                      data-state-inactive:bg-transparent
                      data-state-active:font-semibold
                      data-state-active:text-black
                      data-state-active:border-b-purple-500
                    "
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent
                className="flex flex-col gap-5 mt-10"
                value="login">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <Button
                  className="rounded-full p-6 "
                  onClick={handleLogin}>
                  Login
                </Button>
              </TabsContent>

              <TabsContent
                className="flex flex-col gap-5"
                value="signup">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6 "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button
                  className="rounded-full p-6 "
                  onClick={handleSignup}>
                  Sign Up
                </Button>
              </TabsContent>

            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex  justify-center items-center">
          <img
            src={Background}
            alt="background login"
            className="h-auto object-contain px-3" />
        </div>
      </div>
    </div>
  );
};

export default Auth;