import { Spinner, } from "@nextui-org/react";

function Loader() {
    return (
        <>
            <div className='bg-transparent flex items-center justify-center w-full h-svh'>
                <Spinner label="Loading..." color="success" />

            </div>
        </>
    )
}

export default Loader