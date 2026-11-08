import AssignmentCard from "../components/AssignmentCard";

function Home({
  assignments,
  openAssignment,
}) {
  const dueSoon = assignments.filter(
    (assignment) =>
      !assignment.completed
  );

  return (
    <div className="page">

      <h1>Assignment Tracker</h1>

      <h2>Due Soon</h2>

      {dueSoon.length === 0 ? (
        <div className="empty-state">
          <p>No upcoming assignments.</p>
        </div>
      ) : (
        dueSoon.map((assignment) => (
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

export default Home;