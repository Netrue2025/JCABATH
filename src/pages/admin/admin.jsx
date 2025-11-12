import "../admin/admin.css"

export function Admin(){
    return(
        <>
            <div className="main-container">
                <div className="header-container">
                    <div className="logo-container">JC</div>
                    <div className="header-text">
                        <h1>Admin Dashboard</h1>
                        <p>Publish sermon and Testimonies quickly</p>
                    </div>
                </div>

                {/* Sermon */}
                <div className="sermon-container">
                    <h2>Post Sermon</h2>
                    <form action="">
                        <div className="tittle">
                            <label htmlFor="">Tittle</label>
                            <input type="text" placeholder="Sermon Tittle" />
                        </div>
                        <div className="date">
                            <label htmlFor="">Date</label>
                            <input type="date" placeholder="mm/dd/yyyy"/>
                        </div>
                        <div className="message">
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" placeholder="Type the sermon message or summary"></textarea>

                        </div>
                        <button>Publish Sermon</button>
                    </form>

                </div>

                {/* Testimony */}
                <div className="testimony">
                    <h2>Post a Testimony</h2>
                    <form action="">
                        <div className="name">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Full name" />
                        </div>
                        <div className="testimony">
                            <label htmlFor="testimony">Testimony</label>
                            <textarea name="testimony" placeholder="Share the testimony" id=""></textarea>
                        </div>
                        <button>Publish Testimony</button>
                    </form>
                   
                </div>
            </div>
        </>
    )
}