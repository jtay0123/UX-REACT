function BottomNav({
  currentPage,
  setCurrentPage,
}) {
  return (
    <nav className="bottom-nav">

      <button
        className={
          currentPage === "home"
            ? "active"
            : ""
        }
        onClick={() =>
          setCurrentPage("home")
        }
      >
        <span>⌂</span>
        <small>Home</small>
      </button>

      <button
        className={
          currentPage === "calendar"
            ? "active"
            : ""
        }
        onClick={() =>
          setCurrentPage("calendar")
        }
      >
        <span>▣</span>
        <small>Calendar</small>
      </button>

      <button
        className={
          currentPage === "assignments"
            ? "active"
            : ""
        }
        onClick={() =>
          setCurrentPage("assignments")
        }
      >
        <span>☷</span>
        <small>Assignments</small>
      </button>

      <button
        onClick={() =>
          alert("Settings page")
        }
      >
        <span>⚙</span>
        <small>Settings</small>
      </button>

    </nav>
  );
}

export default BottomNav;