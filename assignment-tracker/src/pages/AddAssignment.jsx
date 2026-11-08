import { useState } from "react";

function AddAssignment({
  addAssignment,
  goBack,
}) {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    dueDate: "",
    dueTime: "",
    priority: "Medium",
    progress: 0,
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addAssignment(form);
  };

  return (
    <div className="page">

      <button
        className="back-button"
        onClick={goBack}
      >
        ← Back
      </button>

      <h1>Add Assignment</h1>

      <form
        className="assignment-form"
        onSubmit={handleSubmit}
      >

        <label>
          Assignment Name
        </label>

        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
        />

        <label>
          Subject
        </label>

        <input
          type="text"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
        />

        <label>
          Due Date
        </label>

        <input
          type="date"
          name="dueDate"
          required
          value={form.dueDate}
          onChange={handleChange}
        />

        <label>
          Due Time
        </label>

        <input
          type="time"
          name="dueTime"
          required
          value={form.dueTime}
          onChange={handleChange}
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
          rows="4"
          value={form.notes}
          onChange={handleChange}
        ></textarea>

        <button
          className="save-button"
          type="submit"
        >
          Add Assignment
        </button>

      </form>

    </div>
  );
}

export default AddAssignment;