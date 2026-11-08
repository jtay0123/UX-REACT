import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import CalendarPage from "./pages/CalendarPage";
import AssignmentList from "./pages/AssignmentList";
import AssignmentDetails from "./pages/AssignmentDetails";
import AddAssignment from "./pages/AddAssignment";

import BottomNav from "./components/BottomNav";

function App() {
  const defaultAssignments = [
    {
      id: 1,
      name: "UX Design Report",
      subject: "User Experience Design",
      dueDate: "2026-10-15",
      dueTime: "23:59",
      priority: "High",
      progress: 70,
      notes: "Complete the usability testing section.",
      completed: false,
    },
    {
      id: 2,
      name: "Data Mining Assignment",
      subject: "Data Mining",
      dueDate: "2026-10-18",
      dueTime: "23:59",
      priority: "Medium",
      progress: 40,
      notes: "Complete data analysis and discussion.",
      completed: false,
    },
    {
      id: 3,
      name: "Digital Forensics Report",
      subject: "Digital Forensics",
      dueDate: "2026-10-10",
      dueTime: "17:00",
      priority: "High",
      progress: 90,
      notes: "Final checking before submission.",
      completed: false,
    },
    {
      id: 4,
      name: "Programming Exercise",
      subject: "High Level Programming",
      dueDate: "2026-09-30",
      dueTime: "23:59",
      priority: "Low",
      progress: 100,
      notes: "Exercise completed.",
      completed: true,
    },
  ];

  const [assignments, setAssignments] = useState(() => {
    const savedAssignments = localStorage.getItem(
      "assignments"
    );

    return savedAssignments
      ? JSON.parse(savedAssignments)
      : defaultAssignments;
  });

  const [currentPage, setCurrentPage] = useState("home");

  const [selectedAssignment, setSelectedAssignment] =
    useState(null);

  const [selectedDate, setSelectedDate] =
    useState("2026-10-15");

  // Save assignments whenever they change
  useEffect(() => {
    localStorage.setItem(
      "assignments",
      JSON.stringify(assignments)
    );
  }, [assignments]);

  // Add assignment
  const addAssignment = (newAssignment) => {
    const assignment = {
      ...newAssignment,
      id: Date.now(),
      progress: Number(newAssignment.progress),
      completed:
        Number(newAssignment.progress) === 100,
    };

    setAssignments((current) => [
      ...current,
      assignment,
    ]);

    setCurrentPage("assignments");
  };

  // Update assignment
  const updateAssignment = (updatedAssignment) => {
    setAssignments((current) =>
      current.map((assignment) =>
        assignment.id === updatedAssignment.id
          ? {
              ...updatedAssignment,
              progress: Number(
                updatedAssignment.progress
              ),
              completed:
                Number(updatedAssignment.progress) ===
                100,
            }
          : assignment
      )
    );

    setSelectedAssignment(updatedAssignment);
  };

  // Delete assignment

  // Delete assignment
  const deleteAssignment = (id) => {
    setAssignments((current) =>
      current.filter(
        (assignment) => assignment.id !== id
      )
    );

    setSelectedAssignment(null);
    setCurrentPage("assignments");

    alert("Assignment deleted successfully!");
  };


  // Open assignment details
  const openAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setCurrentPage("details");
  };

  const showBottomNav =
    currentPage === "home" ||
    currentPage === "calendar" ||
    currentPage === "assignments";

  return (
    <div className="app">

      {currentPage === "home" && (
        <Home
          assignments={assignments}
          openAssignment={openAssignment}
        />
      )}

      {currentPage === "calendar" && (
        <CalendarPage
          assignments={assignments}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          openAssignment={openAssignment}
        />
      )}

      {currentPage === "assignments" && (
        <AssignmentList
          assignments={assignments}
          openAssignment={openAssignment}
          openAddPage={() =>
            setCurrentPage("add")
          }
        />
      )}

      {currentPage === "details" &&
        selectedAssignment && (
          <AssignmentDetails
            assignment={selectedAssignment}
            updateAssignment={updateAssignment}
            deleteAssignment={deleteAssignment}
            goBack={() =>
              setCurrentPage("assignments")
            }
          />
        )}

      {currentPage === "add" && (
        <AddAssignment
          addAssignment={addAssignment}
          goBack={() =>
            setCurrentPage("assignments")
          }
        />
      )}

      {showBottomNav && (
        <BottomNav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;