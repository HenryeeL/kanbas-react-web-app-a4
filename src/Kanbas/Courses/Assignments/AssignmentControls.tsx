import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoEllipsisVertical } from 'react-icons/io5'

const AssignmentControls = ({ isFaculty }: { isFaculty: boolean }) => {
  return (
    <div className="float-end">
      <span
        className="badge text-dark px-3 py-2 rounded-pill fs-6"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          borderRadius: "50px",
        }}
      >
        40% of Total
      </span>

      {isFaculty && (
        <>
          <FaPlus className="fs-5" style={{ marginLeft: '12px', marginRight: '10px' }} />
          <IoEllipsisVertical className="fs-4" />
        </>
      )}

    </div>
  )
}

export default AssignmentControls
