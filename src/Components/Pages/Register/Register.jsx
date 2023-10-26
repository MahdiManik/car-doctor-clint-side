import img from "../../../assets/images/login/login.svg";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
    form.reset();
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl font-bold py-5 text-black text-center">
              Register
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Name
                </span>
              </label>
              <input
                name="name"
                type="name"
                placeholder="Your name"
                className="input bg-white text-black border-[#ff3811] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  photoURL
                </span>
              </label>
              <input
                name="photo"
                type="photo"
                placeholder="Your photo"
                className="input bg-white text-black border-[#ff3811] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="input bg-white text-black border-[#ff3811] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Confirm Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="input bg-white text-black border-[#ff3811] input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded-lg"
                type="submit"
                value="Register"
              />
            </div>
            <div className="">
              <p className="text-center text-black py-5">Or Sign In with</p>
              <div
                className="flex justify-center items-center gap-5 text-xl 
				  font-bold"
              >
                <span className="text-blue-700  rounded-full p-2 bg-[#f5f5f8]">
                  <BiLogoFacebook />
                </span>
                <span className="text-blue-700 rounded-full p-2 bg-[#f5f5f8]">
                  <BiLogoLinkedin />
                </span>
                <span className=" rounded-full p-2 bg-[#f5f5f8]">
                  <FcGoogle />
                </span>
              </div>
              <p className="text-center text-black py-5">
                Already Have an account?{" "}
                <Link className="text-[#ff3811]" to={"/login"}>
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
