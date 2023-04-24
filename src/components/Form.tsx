import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contactSlice";

const AddContact: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), firstName, lastName, status }));
    setFirstName("");
    setLastName("");
    setStatus("active");
  };

  return (
    <div className="h-100 w-200 text-center">
      <h2 className="block text-gray-700 font-bold mb-2">Create New Contact</h2>
      {/* contact from for creating new contact  */}
      <form onSubmit={handleSubmit} className="grid gap-2 mb-6 md:grid-cols-1 ">
        <span>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="First Name"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </span>
        <span>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Last Name"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </span>
        <div>
          <label
            htmlFor="status"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            active:
          </label>
          <input
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            id="status"
            value={status}
            type="checkbox"
            onChange={(e) => setStatus("active")}
          />
          <label
            htmlFor="status"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            inactive:
          </label>
          <input
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            id="status"
            value={status}
            type="checkbox"
            onChange={(e) => setStatus("inactive")}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
