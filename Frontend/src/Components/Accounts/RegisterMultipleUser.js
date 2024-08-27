import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../Admin/AdminDashboard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { multiple_user_register } from '../../axios/api';
import { toast } from 'react-toastify';

const RegisterMultipleUser = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [errorFile, setErrorFile] = useState(null); // State to hold error file data

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null);  // Reset error when file is changed
        setSuccess(null); // Reset success when file is changed
        setErrorFile(null); // Reset error file when file is changed
    };

    const handleFileUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await multiple_user_register(formData);
                // toast.error(response);
                console.log(response);

                if (response.status === 200) {
                    setSuccess("Users registered successfully!");
                }


                // If the response contains a CSV file (errors)
                if (response.headers['content-type'] === 'text/csv') {
                    const blob = new Blob([response.data], { type: 'text/csv' });
                    const url = window.URL.createObjectURL(blob);
                    setErrorFile(url);  // Set error file URL for download
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'error_report.csv';  // Set the file name for download
                    document.body.appendChild(a);
                    a.click();  // Trigger the download
                    document.body.removeChild(a);  // Clean up
                
                    // Optionally, set error message
                    setError("Some users could not be registered. The error report is being downloaded.");
                    setError("Some users could not be registered. Please download the error report.");
                }


            } catch (err) {
                console.error("Error details:", err.response);
                setError(err.response ? err.response.data : "Failed to register users. Please check the CSV file format.");
            }
        } else {
            setError("Please upload a CSV file.");
        }
    };


    return (
        <div>
            <AdminDashboard />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 justify-content-center p-0">
                        {/* Sidebar or other components can go here */}
                    </div>
                    <div className="col-md-8 mt-1 pt-5">
                        <div className="container mt-3">
                            <div className="text-center fw-bold fs-5 mb-4">
                                Register Users
                            </div>
                            <div className="register">
                                
                                {/* Add "Download CSV Format" link here */}
                                <div className="d-flex justify-content-end mb-2">
                                    {/* Replace `#` with the actual link to download the CSV format */}
                                    <a href="#" className="text-primary">
                                        Download CSV Format
                                    </a>
                                </div>
                                
                                <div className="form-group mb-6">
                                    <label htmlFor="csvFile">Upload CSV File</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="csvFile"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                
                                {/* Disclaimer below the file upload */}
                                <div className="text-muted mb-6">
                                    The file should include the following columns: Name, Emp ID, Email, Phone Number, Campus, Department.
                                </div>
                                
                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <button
                                            className="btn btn-primary btn-sm w-100"
                                            onClick={handleFileUpload}
                                        >
                                            Upload CSV File
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterMultipleUser;
