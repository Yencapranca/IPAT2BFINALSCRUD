import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        name_ext: '',
        email: '',
        phone: '',
        employment_status: '',
        date_of_birth: '',
        place_of_birth: '',
        sex: '',
        civil_status: '',
        citizenship: '',
        father_first_name: '',
        father_middle_name: '',
        father_surname: '',
        father_name_ext: '',
        mother_first_name: '',
        mother_middle_name: '',
        mother_surname: '',
        elementary: '',
        secondary: '',
        vocational_tradecourse: '',
        college: '',
    });

    useEffect(() => {
        if (item) {
            setFormData(item);
        } else {
            resetForm();
        }
    }, [item]);

    const resetForm = () => {
        setFormData({
            first_name: '',
            middle_name: '',
            last_name: '',
            name_ext: '',
            email: '',
            phone: '',
            employment_status: '',
            date_of_birth: '',
            place_of_birth: '',
            sex: '',
            civil_status: '',
            citizenship: '',
            father_first_name: '',
            father_middle_name: '',
            father_surname: '',
            father_name_ext: '',
            mother_first_name: '',
            mother_middle_name: '',
            mother_surname: '',
            elementary: '',
            secondary: '',
            vocational_tradecourse: '',
            college: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, formData);
            } else {
                await axios.post('http://localhost:8000/api/items/', formData);
            }
            onSuccess();
            resetForm();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Middle Name</label>
                <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Name Extension</label>
                <input
                    type="text"
                    name="name_ext"
                    value={formData.name_ext}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Employment Status</label>
                <input
                    type="text"
                    name="employment_status"
                    value={formData.employment_status}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Date of Birth</label>
                <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Place of Birth</label>
                <input
                    type="text"
                    name="place_of_birth"
                    value={formData.place_of_birth}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Sex</label>
                <input
                    type="text"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Civil Status</label>
                <input
                    type="text"
                    name="civil_status"
                    value={formData.civil_status}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Citizenship</label>
                <input
                    type="text"
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Father's First Name</label>
                <input
                    type="text"
                    name="father_first_name"
                    value={formData.father_first_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Father's Middle Name</label>
                <input
                    type="text"
                    name="father_middle_name"
                    value={formData.father_middle_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Father's Surname</label>
                <input
                    type="text"
                    name="father_surname"
                    value={formData.father_surname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Father's Name Extension</label>
                <input
                    type="text"
                    name="father_name_ext"
                    value={formData.father_name_ext}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Mother's First Name</label>
                <input
                    type="text"
                    name="mother_first_name"
                    value={formData.mother_first_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Mother's Middle Name</label>
                <input
                    type="text"
                    name="mother_middle_name"
                    value={formData.mother_middle_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Mother's Surname</label>
                <input
                    type="text"
                    name="mother_surname"
                    value={formData.mother_surname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Elementary</label>
                <input
                    type="text"
                    name="elementary"
                    value={formData.elementary}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Secondary</label>
                <input
                    type="text"
                    name="secondary"
                    value={formData.secondary}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Vocational/Trade Course</label>
                <input
                    type="text"
                    name="vocational_tradecourse"
                    value={formData.vocational_tradecourse}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>College</label>
                <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForm;
