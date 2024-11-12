import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "../context";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initState: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>(initState);
    const { name, email, subject, message } = formData;
    const onChange = (e: any) =>
        setFormData((x) => ({ ...x, [e.target.name]: e.target.value }));
    const onSubmit = async (e: any) => {
        e.preventDefault();

        const res = await sendEmail(formData);

        if (res?.err) {
            toast.error(res.err, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (res?.msg) {
            setFormData(initState);
            toast.success(res.msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <form id="myForm" className="contactform" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input
                                value={name}
                                onChange={onChange}
                                type="text"
                                name="name"
                                placeholder="YOUR NAME"
                                required
                            />
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={onChange}
                                name="email"
                                placeholder="YOUR EMAIL"
                                required
                            />
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                value={subject}
                                onChange={onChange}
                                name="subject"
                                placeholder="YOUR SUBJECT"
                                required
                            />
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={message}
                                onChange={onChange}
                                placeholder="YOUR MESSAGE"
                                required
                            ></textarea>
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                        <button type="submit" className="button">
                            <span className="button-text">Send Message</span>
                            <span className="button-icon fa fa-send"></span>
                        </button>
                    </div>
                    {/* End .col */}
                </div>
            </form>
        </>
    );
};
