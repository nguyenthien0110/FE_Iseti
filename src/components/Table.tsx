import React from "react";

interface DataItem {
  id: number;
  name: string;
}

interface TableProps {
  data: DataItem[];
  onEdit: (item: DataItem) => void;
  onDelete: (id: number) => void;
}

export const Table: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 border-b">ID</th>
          <th className="py-2 border-b">Name</th>
          <th className="py-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="text-center border-b">
            <td className="py-2">{item.id}</td>
            <td className="py-2">{item.name}</td>
            <td className="py-2">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mx-1"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-1"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
