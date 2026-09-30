import { NavLink, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'

const sections = ['Activities', 'Teams', 'Workouts', 'Leaderboard']

function Dashboard() {
  return (
    <main className="container py-5">
      <p className="text-uppercase text-secondary small fw-semibold mb-2">OctoFit Tracker</p>
      <h1 className="display-6 fw-semibold">Dashboard</h1>
      <p className="lead text-secondary">Your training, teams, and progress in one place.</p>
      <div className="row g-3 mt-4">
        {sections.map((section) => (
          <div className="col-sm-6 col-lg-3" key={section}>
            <NavLink className="btn btn-outline-secondary w-100 text-start py-3" to={`/${section.toLowerCase()}`}>
              {section}
            </NavLink>
          </div>
        ))}
      </div>
    </main>
  )
}

function SectionPage({ title }) {
  return (
    <main className="container py-5">
      <p className="text-uppercase text-secondary small fw-semibold mb-2">OctoFit Tracker</p>
      <h1 className="display-6 fw-semibold">{title}</h1>
    </main>
  )
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="" width="32" height="32" />
            OctoFit Tracker
          </NavLink>
          <div className="navbar-nav ms-auto flex-row flex-wrap gap-1">
            <NavLink className="nav-link" to="/" end>Dashboard</NavLink>
            {sections.map((section) => (
              <NavLink className="nav-link" key={section} to={`/${section.toLowerCase()}`}>
                {section}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {sections.map((section) => (
          <Route
            key={section}
            path={`/${section.toLowerCase()}`}
            element={<SectionPage title={section} />}
          />
        ))}
        <Route path="*" element={<SectionPage title="Page not found" />} />
      </Routes>
    </>
  )
}

export default App
