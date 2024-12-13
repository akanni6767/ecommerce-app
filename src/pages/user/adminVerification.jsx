import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/admin_verification.scss';
import { FaKey, FaLock } from "react-icons/fa";

const AdminVerification = () => {
    const admin_verified = sessionStorage.getItem('adminVerified');
    console.log(admin_verified);
    const verify = () => toast("Verified")
    return (
        <>
            <section className="admin_verify">
                <div className="verification_section">
                    <h3 className="company_logo">MERA Bestie</h3>
                    <div className="verify_control">
                        <header>Admin Verification</header>

                        <div className="input_passcode">
                            <label htmlFor="passcode">Passcode</label>
                            <div className="input_group">
                                <FaLock className="faLock" />
                                <input name="passcode" id="passcode" type="password" />
                                <button onClick={verify}>Verify</button>
                            </div>
                        </div>
                    </div>

                </div>
                <ToastContainer 
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </section>
        </>
    )
}

export default AdminVerification;