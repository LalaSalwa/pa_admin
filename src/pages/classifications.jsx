import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import axios from "axios";

const Classifications = () => {
    const { dataClassifications, baseUrl, navigate, setCurrentId } = useContext(MainContext)

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        axios.delete(`${baseUrl}/class-results/${idData}`).then((res) => {
            window.location.reload()
        })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)

        setCurrentId(idData)

        navigate(`/classifications/${idData}`)
    }

    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="relative overflow-x-auto">
                    <p className="font-bold text-xl ms-3">Classifications Results</p>
                    <table className="w-full text-sm text-left my-3 rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Patient
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Class
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Label
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Doctor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataClassifications !== null && dataClassifications.map((res) => {
                                return (
                                    <>
                                        <tr className="bg-primary border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {res.id}
                                            </th>
                                            <td className="px-6 py-4 text-black">{res.date}</td>
                                            <td className="px-6 py-4 text-black">{res.patientName}</td>
                                            <td className="px-6 py-4 text-black">
                                                <img src={res.ctscan} alt="ct-scan" className="h-auto max-w-24 rounded-lg" />
                                            </td>
                                            <td className="px-6 py-4 text-black">{res.classification}</td>
                                            <td className="px-6 py-4 text-black">{res.label}</td>
                                            <td className="px-6 py-4 text-black">{res.name}</td>
                                            <td className="px-6 py-4 flex items-center mt-5">
                                                <button
                                                    onClick={handleEdit}
                                                    value={res.id}
                                                    className="bg-primary hover:bg-primary-dark rounded-lg p-1 m-1 text-orange-500 font-bold"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={handleDelete} 
                                                    value={res.id}
                                                    className="bg-primary hover:bg-primary-dark rounded-lg p-1 m-1 text-red-700 font-bold"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Classifications