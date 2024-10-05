import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { getAllTrainers } from "../../services/adminService/TrainerService";
import { AgGridReact } from "ag-grid-react";
import { toast, Toaster } from "sonner";

function Trainers() {

    const [openForm, setOpenForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([
        { field: "firstName", headerName: "First Name" },
        { field: "lastName", headerName: "Last Name" },
        { field: "contactNumber", headerName: "Phone Number" },
        { field: "email", headerName: "Email" },
        {
            field: "bio", headerName: "Bio",
            cellRenderer: (params) => (
                <select className="absolute left-0 top-0 h-full p-1 bg-transparent">
                    <option value={params.value} className="p-4">
                        {params.value}
                    </option>
                </select>
            )
        },
        //     top: 0;
        // left: 0;
        // position: absolute;
        // height: 100 %;
        // padding: 4px;
        {
            field: "certifications",
            headerName: "Certifications",
            cellRenderer: (params) => (
                <select className="bg-transparent">
                    {params.value.map((cert, index) => (
                        <option key={index} value={cert}>
                            {cert}
                        </option>
                    ))}
                </select>
            )
        },
        { field: "city", headerName: "City" },
        { field: "location", headerName: "Location" },
        { field: "pricingDetails", headerName: "Pricing Details" },
        { field: "serviceType", headerName: "Service Type" },
        // { field: "servicesOffered", headerName: "Services Offered", valueGetter: (params) => params.data.servicesOffered.join(", ") },
        {
            field: "servicesOffered",
            headerName: "Services Offered",
            cellRenderer: (params) => (
                <select className="bg-transparent">
                    {params.value.map((servicesOffered, index) => (
                        <option key={index} value={servicesOffered}>
                            {servicesOffered}
                        </option>
                    ))}
                </select>
            )
        },
        { field: "totalClients", headerName: "Total Clients" },
        {
            field: "profilePicture",
            headerName: "Profile Picture",
            cellRenderer: (params) => (
                <img
                    src={params.value}
                    alt="Profile"
                    style={{ width: '50px', borderRadius: '50%' }}
                />
            ),
        },
        {
            field: "actionButtons",
            headerName: "Actions",
            cellRenderer: (params) => (
                <div>
                    <button className="bg-blue-400 mx-1 rounded h-9 px-[14px] text-center" onClick={() => handleEdit(params.data)}>
                        Edit
                    </button>
                    <button className="bg-red-400 mx-1 rounded h-9 px-[14px] text-center" onClick={() => handleDelete(params.data)}>
                        Delete
                    </button>
                </div>
            ),
        },
    ]);

    const handleEdit = () => {
        alert('edit')
    }

    const handleDelete = () => {
        alert('delete')
    }

    useEffect(() => {
        GetAllTrainers();
    }, [])

    const GetAllTrainers = async () => {
        try {
            setLoading(true)
            const result = await getAllTrainers();
            console.log("result", result)
            setRowData(result)
        } catch (error) {
            console.log('erro ', error)
        } finally {
            setLoading(false)
        }
    }


    const toggleOpenForm = () => {

    }

    return (
        <>
            <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
                <Loader />
            </div>

            <Toaster className="z-40" richColors position="top-center" />



            <div className="flex justify-between h-10 mb-8">
                <h2 className="text-2xl">Application Trainers List</h2>
                <button type="submit" className={`transition ease-in-out duration-300 bg-black px-4 py-2 rounded-lg border text-white hover:bg-white hover:text-black hover:border hover:border-black ${openForm === true ? 'hidden' : ''}`} onClick={toggleOpenForm}>Add Trainer</button>
            </div>


            <div className="ag-theme-quartz h-[80%]"            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </>
    )
}

export default Trainers