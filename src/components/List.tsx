/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, Contact, updateContact } from "../store/contactSlice";
import { RootState } from "../store/reducer";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (contactId: number) => {
    const contact = contacts.find((c) => c.id === contactId);
    if (contact) {
      setEditingContact(contact);
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
    }
  };

  const handleSave = () => {
    if (editingContact) {
      dispatch(
        updateContact({
          ...editingContact,
          firstName,
          lastName,
          status,
        })
      );
      setEditingContact(null);
      setFirstName("");
      setLastName("");
      setStatus("active");
    }
  };

  const handleCancel = () => {
    setEditingContact(null);
    setFirstName("");
    setLastName("");
    setStatus("active");
  };

  return (
    // Contact Listing page
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-400">
      {contacts.length === 0 ? (
        <h2 className="block text-gray-900 font-bold mb-5 text-center">
          No contact found please add contact from Create Contact Form Above..!!
        </h2>
      ) : (
        <>
          <h2 className="block text-gray-900 font-bold mb-5 text-center">
            Contact List
          </h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {contacts?.map((contact) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg"
                key={contact.id}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-60 h-40 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="black"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div className="px-6 py-4">
                  <div className="font-bold text-center text-xl mb-2">
                    First Name: {contact.firstName}
                  </div>
                  <div className="font-bold text-center text-xl mb-2">
                    Last Name: {contact.lastName}
                  </div>
                  <p className="text-gray-700 text-base text-center">
                    Status: {contact.status}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button
                    className="bg-transparent hover:bg-orange-500 text-blue-700 mr-2 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleEdit(contact.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 ml-5 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {editingContact && (
        // edit contact form
        <div>
          <h1 className="block text-gray-900 font-bold mb-5 mt-5 text-center">
            Edit Contact
          </h1>
          <form className="grid gap-2 mb-6 md:grid-cols-1 text-center ">
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
                onClick={(e) => setStatus("active")}
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
                onClick={(e) => setStatus("inactive")}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-700 mr-2 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-blue-500 hover:bg-blue-700 ml-5 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactList;
