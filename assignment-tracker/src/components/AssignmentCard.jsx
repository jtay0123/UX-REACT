function AssignmentCard({
  assignment,
  openAssignment,
}) {
  return (
    <div
      className="assignment-card"
      onClick={() =>
        openAssignment(assignment)
      }
    >
      <div className="card-top">

        <div className="card-title">
          <h3>{assignment.name}</h3>

          <p className="subject">
            {assignment.subject}
          </p>
        </div>

        <span
          className={`priority ${assignment.priority.toLowerCase()}`}
        >
          {assignment.priority}
        </span>

      </div>

      <div className="assignment-detail">
        <span>Due Date</span>

        <span>
          {assignment.dueDate} ·{" "}
          {assignment.dueTime}
        </span>
      </div>

      <div className="progress-row">
        <span>Progress</span>

        <span>
          {assignment.progress}%
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${assignment.progress}%`,
          }}
        ></div>
      </div>

      {assignment.completed && (
        <div className="completed-label">
          ✓ Completed
        </div>
      )}
    </div>
  );
}

export default AssignmentCard;