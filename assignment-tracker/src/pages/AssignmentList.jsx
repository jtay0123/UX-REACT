import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";

function AssignmentList({
  assignments,
  openAssignment,
  openAddPage,
}) {
  const [searchText, setSearchText] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const filteredAssignments =
    assignments.filter((assignment) => {

      const matchesSearch =
        assignment.name
          .toLowerCase()
          .includes(
            searchText.toLowerCase()
          ) ||
        assignment.subject
          .toLowerCase()
          .includes(
            searchText.toLowerCase()
          );

      let matchesFilter = true;

      if (filter === "Due Soon") {
        matchesFilter =
          !assignment.completed;
      }

      if (filter === "Completed") {
        matchesFilter =
          assignment.completed;
      }

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (
    <div className="page">

      <h1>Assignments</h1>

      <div className="search-container">

        <input
          type="text"
          className="search-input"
          placeholder="Search assignments..."
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
        />

      </div>

      <div className="filter-buttons">

        {[
          "All",
          "Due Soon",
          "Completed",
        ].map((item) => (
          <button
            key={item}
            className={
              filter === item
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() =>
              setFilter(item)
            }
          >
            {item}
          </button>
        ))}

      </div>

      {filteredAssignments.length === 0 ? (
        <div className="empty-message">
          <p>No assignments found.</p>
        </div>
      ) : (
        filteredAssignments.map(
          (assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              openAssignment={
                openAssignment
              }
            />
          )
        )
      )}

      <button
        className="add-button"
        onClick={openAddPage}
      >
        +
      </button>

    </div>
  );
}

export default AssignmentList;