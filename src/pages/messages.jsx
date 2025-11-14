import { Topnavbar } from "../components/topnavbar"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import yellowicon from "../media/images/yellow-icon.png"
import "../styles/pages/messages.css"
import search from "../media/images/search.png"
import { useState } from "react"
import { useEffect } from "react"

export function Messages(){
    const [backend, setBackend] = useState("");
    const [load, setLoad] = useState(true);
    const [error, setError] = useState("");
    const [paragraph, setParagraph] = useState("");
   

    useEffect(()=>{
            fetch("https://netrue.io/admin/fetchdata.php")
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Server lost. check your server connection")
                }
                return response.json();
            })
            .then((data)=>{
                setBackend(data)
                setLoad(false)
                
            })
            .catch((error)=>{
                setError(error.Messages)
                setLoad(false)
            })
        
        }, [])
  
 
       const alldata = Array.from(backend)
        
        


    return(
        <>
            {/* Top navigation section */}
            <Topnavbar />

            {/* Header section */}
            <Header tag={yellowicon} tagname="MEDIA" tittle="Teachings"/>
            
         

           
                {/* Main body section */}

                <section className="teaching-main-cont">
                    <div className="messages-container">
                        <div className="message-left-cont">
                            <div className="search-box">
                                <img src={search} alt="" />
                                <input type="search" placeholder="Search for messages" />
                            </div>

                            <div className="message-tittle-container">
                                {alldata.map((message, index)=>(
                                
                                    <div className="messages-tittles" key={index} onClick={()=>{
                                        setParagraph(message.messages)
                                    }}>
                                        <h3>{message.tittle}</h3>
                                        <p>{message.date}</p>
                                    </div>
                                ))}
                              
                                {/* <div className="messages-tittles">
                                <h3></h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>When God calls you 1</h3>
                                <p>20th, June 2025</p>
                                </div>
                                <div className="messages-tittles">
                                <h3>FROM DARKNESS TO LIGHT III</h3>
                                <p>20th,  September, 2025</p>
                                </div> */}
                            </div> 

                            {/* <div className="left-prev-next">
                                <h5>Prev</h5>
                                <div className="round">
                                    <p>1</p>
                                </div>
                                <div className="round">
                                    <p>2</p>
                                </div>
                                
                                <h5>...</h5>
                                <h5>Next</h5>
                            </div> */}
                        </div>

                        {/* Center contents */}
                        <div className="message-right-cont">
                            <div className="right-cont-head">
                                <div className="tag-cont">
                                    <h3>Monthly </h3>
                                    <h2>Teachings </h2>
                                </div>
                                
                                {/* {alldata.map((message, index)=>(
                                    <div className="tittle-cont" key={index}>
                                        <h1>{message.tittle}</h1>
                                        <h4>{message.date}</h4>
                                    </div>
                                ))} */}
                            
                            </div>

                            <div className="paragraph-cont">
                                <span>{alldata.tittle}</span>
                                <p>
                                    {paragraph}
                                </p>
                            </div>

                            
                            <div className="left-prev-next">
                                <h5>Prev</h5>
                                <div className="round">
                                    <p>1</p>
                                </div>
                                <div className="round">
                                    <p>2</p>
                                </div>
                                
                                <h5>...</h5>
                                <h5>Next</h5>
                            </div>
                        </div>
                    </div> 
                </section>
              

            {/* footer section  */}
            <Footer />
        </>
    )
}