import { FaArrowRightLong } from "react-icons/fa6";
import smiconone from "../media/images/smiconone.png"
import smicontwo from "../media/images/smicontwo.png"
import smiconthree from "../media/images/smiconthree.png"
import smiconfour from "../media/images/smiconfour.png"
import "../styles/components/form.css"

export function Form(props){
    return(
        <>
            <div className="form-container">
                {/* form section */}
                <div className="form-section">
                    <div className="inner-section">
                    <h2>{props.formheader}</h2>
                        <div className="input-box-section">
                            <div className="input">
                                <div className="input-one">
                                    <div className="first-name">
                                        <p>First Name</p>
                                        <input type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="last-name">
                                        <p>Last Name</p>
                                        <input type="text" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="input-two">
                                    <div className="email">
                                        <p>Email</p>
                                        <input type="email" placeholder="Email"/>
                                    </div>
                                    <div className="subject">
                                        <p>Subject</p>
                                        <input type="text" placeholder="subject" />
                                    </div>
                                </div>
                                <div className="text-area">
                                    <p>Message</p>
                                    <input type="texarea" color="4" placeholder="Messages"/>
                                </div>
                            </div>

                            <button><p>{props.btntext}</p> <FaArrowRightLong className="arrow"/></button>
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