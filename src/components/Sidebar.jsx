import React from 'react'

function Sidebar() {
  return (
<div className="sidebar">
  <h3>Menu</h3>

  <ul>
    <li><Link to="/dashboard">All Ideas</Link></li>
    <li><Link to="/myideas">My Ideas</Link></li>
    <li><Link to="/addidea">Add New</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li><Link to="/login">Logout</Link></li>
  </ul>
</div>
  )
}

export default Sidebar