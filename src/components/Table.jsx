import React, { useState } from "react";
import { Table } from "./Table";

export const HomePage = () => {
    const [data, setData] = useState([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ]);

    const [formData, setFormData] = useState({ id: "", name: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            setData(
                data.map((item) => (item.id === formData.id ? formData : item))
            );
        } else {
            setData([...data, { ...formData, id: data.length + 1 }]);
        }
        setFormData({ id: "", name: "" });
    };

    const handleEdit = (item) => {
        setFormData(item);
    };

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div className="bg-white min-h-screen text-center mt-10">
            <h1 className="text-5xl font-bold text-gray-800">Demo</h1>
            <div className="mt-10">
                <form onSubmit={handleSubmit} className="mb-5">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                        className="border py-2 px-4 rounded mx-2"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {formData.id ? "Update" : "Add"}
                    </button>
                </form>
                <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};
