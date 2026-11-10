
import AssignmentCard from "../components/AssignmentCard";

function CalendarPage({
  assignments,
  selectedDate,
  setSelectedDate,
  openAssignment,
}) {
  const calendarAssignments =
    assignments.filter(
      (assignment) =>
        assignment.dueDate === selectedDate &&
        !assignment.completed
    );

  const daysInOctober = 31;

  // October 1, 2026 is Thursday
  const firstDay = 4;

  return (
    <div className="page">
      <h1>Calendar</h1>

      <div className="calendar">
        <div className="calendar-header">
          <h2>October 2026</h2>
        </div>

        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-grid">
          {/* Empty boxes before October 1 */}
          {Array.from(
            { length: firstDay },
            (_, index) => (
              <div
                key={`empty-${index}`}
                className="calendar-empty"
              ></div>
            )
          )}

          {/* October dates */}
          {Array.from(
            { length: daysInOctober },
            (_, index) => {
              const day = index + 1;

              const date =
                `2026-10-${String(day).padStart(2, "0")}`;

              const dayAssignments = assignments.filter(
                (assignment) =>
                  assignment.dueDate === date &&
                  !assignment.completed
              );

              return (
                <button
                  key={day}
                  className={[
                    "calendar-day",
                    selectedDate === date ? "selected" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setSelectedDate(date)}
                >
                  {day}

                  {dayAssignments.length > 0 && (
                    <span className="calendar-dots">
                      {dayAssignments.map((assignment) => (
                        <span
                          key={assignment.id}
                          className={`calendar-dot priority-${assignment.priority.toLowerCase()}`}
                        ></span>
                      ))}
                    </span>
                  )}
                </button>
              );
            }
          )}
        </div>
      </div>

      <h2>
        Assignments on{" "}
        {new Date(
          `${selectedDate}T12:00:00`
        ).toLocaleDateString("en-GB")}
      </h2>

      {calendarAssignments.length === 0 ? (
        <div className="empty-state">
          <p>No assignments due on this date.</p>
        </div>
      ) : (
        calendarAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            openAssignment={openAssignment}
          />
        ))
      )}
    </div>
  );
}

export default CalendarPage;
