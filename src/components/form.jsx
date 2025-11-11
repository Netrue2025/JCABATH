import { FaArrowRightLong } from "react-icons/fa6";
import smiconone from "../media/images/smiconone.png"
import smicontwo from "../media/images/smicontwo.png"
import smiconthree from "../media/images/smiconthree.png"
import smiconfour from "../media/images/smiconfour.png"
import "../styles/components/form.css"
import { useState } from "react";
import Swal from 'sweetalert2'

export function Form(props){
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");n
        const formData = new FormData(event.target);
        formData.append("access_key", "9827dd45-4565-4004-8428-a63fab8a508c");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        if (data.success) {
            Swal.fire({
                title: "Form Submited!",
                text: "Thank your for shareing your testimony with us!",
                icon: "success"
            });
            } else {
            setResult("Error");
        }
    }
    return(
        <>
            <div className="form-container">
                {/* form section */}
                <div className="form-section">
                    <div className="inner-section">
                        <h2>{props.formheader}</h2>
                        <div className="input-box-section">
                            <form onSubmit={onSubmit}> 
                                <div className="input">
                                
                                    <div className="input-one">
                                        <div className="first-name">
                                            <p>First Name</p>
                                            <input type="text" placeholder="First Name" name="First-name" required/>
                                        </div>
                                        <div className="last-name">
                                            <p>Last Name</p>
                                            <input type="text" placeholder="Last Name" name="Last-name" required/>
                                        </div>
                                    </div>
                                    <div className="input-two">
                                        <div className="email">
                                            <p>Email</p>
                                            <input type="email" placeholder="Email" name="Email" required/>
                                        </div>
                                        <div className="subject">
                                            <p>Subject</p>
                                            <input type="text" placeholder="subject" name="subject" required/>
                                        </div>
                                    </div>
                                    <div className="text-area">
                                        <p>Message</p>
                                            <textarea name="" id="" rows="4" cols="50">
                                                
                                            </textarea>
                                    </div>
                                

                                </div>
                                <button type="submit"><p>{props.btntext}</p> <FaArrowRightLong className="arrow"/></button>
                            </form>

                            <h1>{result}</h1>

                        </div>
                    </div>
                </div>

                {/* Small info containers */}
                <div className="sm-container">
                    <div className="sm-one">
                        <img src={smiconone} alt="icon for first container" />
                        <h4>{props.h4one}</h4>
                        <p>{props.pone}
                        </p>

                    </div>
                    <div className="sm-two">
                        <img src={smicontwo} alt="icon for first container" />
                        <h4>{props.h4two}</h4>
                        <p>{props.ptwo}
                        </p>

                    </div>
                    <div className="sm-three">
                        <img src={smiconthree} alt="icon for third container" />
                        <h4>{props.h4three}</h4>
                        <p>{props.pthree}
                        </p>

                    </div>
                    <div className="sm-fourth">
                        <img src={smiconfour} alt="icon for fourth container" />
                        <h4>{props.h4four}</h4>
                        <p>{props.pfour}
                        </p>

                    </div>  
                </div>
            </div>
        </>
    )

}