/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { createTrainer, getAllTrainers } from "../../services/adminService/TrainerService";
import { AgGridReact } from "ag-grid-react";
import { toast, Toaster } from "sonner";
import MyForm from '../../components/Form'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";


function Trainers() {

    const [openForm, setOpenForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState([]);
    const [editData, setEditData] = useState(null);
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
        { field: "certifications", headerName: "Certifications", },
        { field: "city", headerName: "City" },
        { field: "location", headerName: "Location" },
        { field: "pricingDetails", headerName: "Pricing Details" },
        { field: "serviceType", headerName: "Service Type" },
        { field: "servicesOffered", headerName: "Services Offered", },
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

    const fields = [
        { label: 'First Name', name: 'firstName', type: 'text', required: true },
        { label: 'Last Name', name: 'lastName', type: 'text', required: true },
        { label: 'Email', name: 'email', type: 'email', required: true },
        { label: 'Password', name: 'password', type: 'password', required: true },
        { label: 'Service Type', name: 'serviceType', type: 'text', required: true },
        { label: 'Location', name: 'location', type: 'text', required: true },
        { label: 'City', name: 'city', type: 'text', required: true },
        { label: 'Contact Number', name: 'contactNumber', type: 'number', required: true },
        { label: 'Bio', name: 'bio', type: 'text', required: true },
        { label: 'Certifications', name: 'certifications', type: 'text', required: true },
        { label: 'Profile Picture', name: 'profilePicture', type: 'text', required: true },
        { label: 'Services Offered', name: 'servicesOffered', type: 'text', required: true },
        { label: 'Total Clients', name: 'totalClients', type: 'text', required: true },
        { label: 'Pricing Details', name: 'pricingDetails', type: 'text', required: true },
    ];


    useEffect(() => {
        GetAllTrainers();
    }, [])

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        serviceType: '',
        location: '',
        city: '',
        contactNumber: '',
        bio: '',
        certifications: '',
        profilePicture: '',
        servicesOffered: '',
        totalClients: '',
        pricingDetails: ''
    };

    const [formData, setFormData] = useState(initialFormData);


    const handleEdit = () => {
        alert('edit')
    }

    const handleDelete = () => {
        alert('delete')
    }

    const GetAllTrainers = async () => {
        try {
            setLoading(true)
            const result = await getAllTrainers();
            setRowData(result)
        } catch (error) {
            console.log('erro ', error)
        } finally {
            setLoading(false)
        }
    }

    const toggleOpenForm = () => {
        setOpenForm(!openForm);
        if (openForm) {
            resetForm();
        }
    }

    const resetForm = () => {
        setFormData(initialFormData);
        setEditData(null);
    };

    const handleSubmit = async (formData) => {
        try {
            setLoading(true);
            const result = await createTrainer(formData);
            console.log("result data :  ", result);
            if (result.data.statusCode === 201) toast.success(result.data.message);
            if (result.data.statusCode === 400) toast.error(result.data.message);
            if (result.data.statusCode === 404) toast.error(result.data.message);
        } catch (error) {
            // console.error("Error creating Trainer:", error);
            toast.error('Unable to Create Trainer')
        } finally {
            resetForm();
            setOpenForm(false);
            setLoading(false);
            GetAllTrainers();
        }
    }

    const handleUpdateTrainer = async (formData) => {

    }
    return (
        <>
            <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
                <Loader />
            </div>

            <Toaster className="z-40" richColors position="top-right" />



            <div className="flex justify-between h-10 mb-8">
                <h2 className="text-2xl">Application Trainers List</h2>
                <button type="submit" className={`transition ease-in-out duration-300 bg-black px-4 py-2 rounded-lg border text-white hover:bg-white hover:text-black hover:border hover:border-black ${openForm === true ? 'hidden' : ''}`} onClick={toggleOpenForm}>Add Trainer</button>
            </div>

            <div className={`z-40 transition ease-in-out duration-900 w-6/12 border-2 shadow-lg border-black bg-white p-8 rounded-3xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${openForm ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex justify-between mb-4">
                    <p className="text-xl">  {editData ? 'Edit Trainer' : 'Add New Trainer'}</p>
                    <button type="submit" className='transition ease-in-out duration-300 bg-black px-4 py-2 rounded-lg border text-white hover:bg-white hover:text-black hover:border hover:border-black' onClick={toggleOpenForm}>Close</button>
                </div>
                <MyForm fields={fields} onSubmit={editData ? handleUpdateTrainer : handleSubmit} initialValues={formData} />
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