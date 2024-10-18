/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CreateUser, DeleteUser, getAllUsers, UpdateUser } from '../../services/adminService/userService';
import Loader from '../../components/Loader'
import MyForm from '../../components/Form';
import { AgGridReact } from 'ag-grid-react';
import { Toaster, toast } from 'sonner'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";


function Users() {
    const [loading, setLoading] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [rowData, setRowData] = useState([]);
    const [editData, setEditData] = useState(null);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null); // To keep track of which user to delete

    const [colDefs, setColDefs] = useState([
        { field: "firstName", headerName: "First Name" },
        { field: "lastName", headerName: "Last Name" },
        { field: "age", headerName: "Age" },
        { field: "email", headerName: "Email" },
        { field: "gender", headerName: "Gender" },
        { field: "height", headerName: "Height (cm)" },
        { field: "weight", headerName: "Weight (kg)" },
        { field: "fitnessGoals", headerName: "Fitness Goals" },
        { field: "profilePicture", headerName: "Profile Picture", cellRenderer: (params) => <img src={params.value} alt="Profile" style={{ width: '50px', borderRadius: '50%' }} /> },
        {
            field: 'action Buttn', headerName: "Actions", cellRenderer: (params) => (
                <div>
                    <button className="bg-blue-400 mx-1 rounded h-9  px-[14px] relative text-center leading-0 " onClick={() => handleEdit(params.data)}>Edit</button>
                    <button className="bg-red-400 mx-1 rounded h-9  px-[14px] relative text-center leading-0 " onClick={() => handleDelete(params.data)}>Delete</button>
                </div>
            )
        }
    ]);

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profilePicture: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        fitnessGoals: '',
        address: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const resetForm = () => {
        setFormData(initialFormData);
        setEditData(null);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const handleEdit = (rowData) => {
        setEditData(rowData);
        setFormData(rowData);
        setOpenForm(true);
    };

    const handleUpdateUser = async (formData) => {
        try {
            setLoading(true);
            const result = await UpdateUser(formData);
            toast.success('User Updated Successfully')
        } catch (error) {
            console.error("Error Updating user:", error);
            toast.error('Unable to Update User')
        } finally {
            resetForm();
            setOpenForm(false);
            setLoading(false);
            fetchAllUsers();
        }
    };

    const handleDelete = async (rowData) => {
        setSelectedUser(rowData._id);
        setDeletePopUp(true);
    };

    const confirmDelete = async () => {
        if (selectedUser) {
            await deleteUser(selectedUser);
            setDeletePopUp(false);
            setSelectedUser(null);
        }
    };

    const cancelDelete = () => {
        setDeletePopUp(false);
        toast.info('User not deleted');
    };

    const deleteUser = async (id) => {
        try {
            setLoading(true);
            await DeleteUser(id);
            fetchAllUsers();
            toast.success('User Deleted Successfully');
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error('Unable to delete user');
        } finally {
            setLoading(false);
        }
    };

    const fetchAllUsers = async () => {
        try {
            setLoading(true);
            const result = await getAllUsers().then(
            );
            setRowData(result)
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const fields = [
        { label: 'First Name', name: 'firstName', type: 'text', required: true },
        { label: 'Last Name', name: 'lastName', type: 'text', required: true },
        { label: 'Email', name: 'email', type: 'email', required: true, unique: true },
        { label: 'Password', name: 'password', type: 'password', required: true },
        { label: 'Profile Picture', name: 'profilePicture', type: 'text', required: false },
        { label: 'Age', name: 'age', type: 'number', required: true },
        {
            label: 'Gender', name: 'gender', type: 'radio', required: true, options: [
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' }
            ]
        },
        { label: 'Height (cm)', name: 'height', type: 'number', required: true },
        { label: 'Weight (kg)', name: 'weight', type: 'number', required: true },
        { label: 'Fitness Goals', name: 'fitnessGoals', type: 'text', required: true },
        { label: 'Address', name: 'address', type: 'text', required: true },
    ];


    const handleSubmit = async (formData) => {
        try {
            setLoading(true);
            const result = await CreateUser(formData);
            console.log('result :  ', result)
            if (result.statusCode === 201) toast.success(result.message);
            if (result.statusCode === 400) toast.error(result.message);
            if (result.statusCode === 404) toast.error(result.message);
            else {
                toast.error("result")
            }
        } catch (error) {
            console.error("Error creating user:", error);
            toast.error('Unable to Create user ')
        } finally {
            resetForm();
            setOpenForm(false);
            setLoading(false);
            fetchAllUsers();
        }
    };

    const toggleOpenForm = () => {
        setOpenForm(!openForm);
        if (openForm) {
            resetForm();
        }
    }


    return (
        <>
            {/* delete pop-up */}
            {deletePopUp && (
                <div className="flex  justify-center z-30 absolute inset-0 h-24 top-6">
                    <div className="bg-white p-3 rounded-lg shadow-2xl">
                        <p>Do you want to delete this user?</p>
                        <div className="mt-2 flex justify-around w-full">
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded mr-2 w-2/5"
                                onClick={confirmDelete}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-gray-300 px-2 py-1 rounded w-2/5"
                                onClick={cancelDelete}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
                <Loader />
            </div>
            <Toaster className="z-40" richColors position="top-right" />



            <div className="flex justify-between h-10 mb-8">
                <h2 className="text-2xl">Application Users List</h2>
                <button type="submit" className={`transition ease-in-out duration-300 bg-black px-4 py-2 rounded-lg border text-white hover:bg-white hover:text-black hover:border hover:border-black ${openForm === true ? 'hidden' : ''}`} onClick={toggleOpenForm}>Add User</button>
            </div>


            <div className={`z-40 transition ease-in-out duration-900 w-6/12 border-2 shadow-lg border-black bg-white p-8 rounded-3xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${openForm ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex justify-between mb-4">
                    <p className="text-xl">  {editData ? 'Edit User' : 'Add New User'}</p>
                    <button type="submit" className='transition ease-in-out duration-300 bg-black px-4 py-2 rounded-lg border text-white hover:bg-white hover:text-black hover:border hover:border-black' onClick={toggleOpenForm}>Close</button>
                </div>
                <MyForm fields={fields} onSubmit={editData ? handleUpdateUser : handleSubmit} initialValues={formData} />
            </div>

            
            
            <div className="ag-theme-quartz h-[80%]"            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </>
    );
}

export default Users;