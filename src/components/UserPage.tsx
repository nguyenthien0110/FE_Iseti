import React from "react";

export const UserPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Music List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="py-3 px-4 text-left text-lg font-medium text-gray-700">
                Song
              </th>
              <th className="py-3 px-4 text-left text-lg font-medium text-gray-700">
                Artist
              </th>
              <th className="py-3 px-4 text-left text-lg font-medium text-gray-700">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-sm text-gray-600">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="py-2 px-4 text-sm text-gray-600">
                Malcolm Lockyer
              </td>
              <td className="py-2 px-4 text-sm text-gray-600">1961</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-sm text-gray-600">Witchy Woman</td>
              <td className="py-2 px-4 text-sm text-gray-600">The Eagles</td>
              <td className="py-2 px-4 text-sm text-gray-600">1972</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-sm text-gray-600">Shining Star</td>
              <td className="py-2 px-4 text-sm text-gray-600">
                Earth, Wind, and Fire
              </td>
              <td className="py-2 px-4 text-sm text-gray-600">1975</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
};
