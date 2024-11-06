import React from 'react'

const Flex = () => {
  return (
    <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
            <div className="wd-bg-color-yellow">Column 1</div>
            <div className="wd-bg-color-blue">Column 2</div>
            <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
        </div>
    </div>

  )
}

export default Flex