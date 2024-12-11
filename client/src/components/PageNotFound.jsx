import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigateTo = useNavigate()
    const goToHome = () => {
        navigateTo('/home');
    }
    return (
        <>
            <section className="page_404 py-10 bg-transparent font-serif h-lvh bordered">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-10 mx-auto text-center">
                                <div
                                    className="four_zero_four_bg bg-center h-96 sm:h-72 md:h-96"
                                    style={{
                                        backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
                                        backgroundRepeat: "no-repeat"
                                    }}
                                >
                                    <h1 className="text-6xl sm:text-5xl md:text-8xl">404</h1>
                                </div>

                                <div className="contant_box_404">
                                    <h3 className="text-4xl sm:text-3xl md:text-5xl">
                                        Look like you&apos;re lost
                                    </h3>

                                    <p className="my-4 sm:my-2 text-lg sm:text-base">The page you are looking for is not available!</p>

                                    <button onClick={goToHome} className="link_404 text-white border-[1px] bg-green-600 py-2 px-5 mt-5 inline-block text-lg sm:text-base rounded-lg hover:bg-white hover:text-green-600 hover:border-green-600  transition ease-in-out duration-300">Go to Home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default PageNotFound;
