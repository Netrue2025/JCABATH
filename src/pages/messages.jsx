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
                                    <div className="messages-tittles" key={index}>
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

                        {/* Center contents */}
                        <div className="message-right-cont">
                            <div className="right-cont-head">
                                <div className="tag-cont">
                                    <h3>Monthly </h3>
                                    <h2>Teachings </h2>
                                </div>

                                <div className="tittle-cont">
                                    <h1>{backend.tittle}</h1>
                                    <h4>{backend.date}</h4>
                                </div>
                            </div>

                            <div className="paragraph-cont">
                                <span>{backend.tittle}</span>
                                <p>
                                
                                    Who hath saved us & called us with an holy calling, not according to our works, 
                                    but according to his own purpose & grace which was given us in Christ Jesus before the world began. 2Tim. 1:9

                                    After God has called you to salvation, the next call is to join Him in redeeming
                                    the world. Now, you must note that He doesn’t only call people from the altar 
                                    butfrom all works of life to serve Him in various capacities. For example, He can
                                    
                                    call some to join Him in the technology field bcs He wants to use technology     as
                                    a tool to reach the unsaved. His agenda goes beyond the altar into the everyday lives of people.

                                    God is not a Sunday to Sunday God. He is God every single day & so He is using
                                    people to accomplish His agenda daily.

                                    Pastors don’t reserve the right to be used by God. As far as you are born again
                                    – whether you are in business, arts & entertainment or even in fashion, God can
                                    use you in that field to fulfil His will. He said in Col. 3:17: “& whatsoever
                                    ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to
                                    God & the Father by him. Thus, whatever it is that you do, make sure you are doing 
                                    it in the name of Jesus Christ.When you do something in the name of someone, it means
                                    it is not you but the fellow being represented that’s doing it.

                                    In other words, when God calls you to an industry, you are not to go there to 
                                    do your will but His. His agenda is already set; all He does when He calls you 
                                    is tojoin Him in bringing it to pass. Thus, when you feel Him pulling you to work 
                                    for Him in a certain field of life, then you must ask Him what His agenda is concerning 
                                    that thing you are to do. Everything you do must be in line with His agenda. you should 
                                    also note that you are His representative there & you must not do what He Himself wouldn’t.
                                    As a reward for answering the call to join Him in His redemptive work in the world, God
                                    makes sure that all things work together for your good. & we know that all things work
                                    together for good to them that love God, to them who are the called according to his 
                                    purpose. Rom 8:28 Once you are called according to His purpose & you answer that call, 
                                    all things will begin to work together for your good.
                                    🔰GOD CALLED YOU TO THAT INDUSTRY TO DO HIS WILL; REPRESENT HIM WELL.
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