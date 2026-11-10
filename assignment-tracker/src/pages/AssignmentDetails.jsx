import { useState } from "react";

function AssignmentDetails({
  assignment,
  updateAssignment,
  deleteAssignment,
  goBack,
}) {
  const [form, setForm] =
    useState(assignment);

  const [showDeleteConfirm, setShowDeleteConfirm] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


const handleUpdate = (e) => {
  e.preventDefault();

  updateAssignment({
    ...form,
    progress: Number(form.progress),
  });

  alert("Assignment updated successfully.");

  goBack();
};


  return (
    <div className="page">



      <h1>Assignment Details</h1>

<form
  className="details-card"
  onSubmit={handleUpdate}
>
  <button
    type="button"
    className="details-back-button"
    onClick={goBack}
  >
    ← Back
  </button>

  <label>
    Assignment Name
  </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>
          Subject
        </label>

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <label>
          Due Date
        </label>

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          required
        />

        <label>
          Due Time
        </label>

        <input
          type="time"
          name="dueTime"
          value={form.dueTime}
          onChange={handleChange}
          required
        />

        <label>
          Priority
        </label>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="Low">
            Low
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="High">
            High
          </option>
        </select>

        <label>
          Progress
        </label>

        <input
          type="range"
          name="progress"
          min="0"
          max="100"
          value={form.progress}
          onChange={handleChange}
        />

        <div className="range-value">
          {form.progress}%
        </div>

        <label>
          Notes
        </label>

        <textarea
          name="notes"
          rows="5"
          value={form.notes}
          onChange={handleChange}
        ></textarea>

        <button
          className="save-button"
          type="submit"
        >
          Save Changes
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() =>
            setShowDeleteConfirm(true)
          }
        >
          Delete Assignment
        </button>

      </form>

      {showDeleteConfirm && (
        <div className="delete-confirm">

          <div className="delete-box">

            <h3>
              Delete Assignment?
            </h3>

            <p>
              Are you sure you want to
              delete this assignment?
            </p>

            <div className="delete-actions">

              <button
                onClick={() =>
                  setShowDeleteConfirm(false)
                }
              >
                Cancel
              </button>

              <button
                className="confirm-delete"
                onClick={() =>
                  deleteAssignment(
                    assignment.id
                  )
                }
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default AssignmentDetails;