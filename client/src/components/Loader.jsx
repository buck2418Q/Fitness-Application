import '../styleSheets/Loader.css'

function Loader() {
    return (
        <>
            <div className="loader-container">
                <div className="spinner-box">
                    <div className="col-sm-2">
                        <div className="sp sp-loadbar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader