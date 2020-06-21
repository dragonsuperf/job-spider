import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Pagination = props => {
    return (
      <Fragment>
        <nav className="page_container">
            <ul className="page_list">
                <li className="page_item">
                    <Link>prev</Link>
                </li>
                <li className="page_item">
                    <Link>1</Link>
                </li>
                <li className="page_item">
                    <Link>2</Link>
                </li>
                <li className="page_item">
                    <Link>3</Link>
                </li>
                <li className="page_item">
                    <Link>4</Link>
                </li>
                <li className="page_item">
                    <Link>5</Link>
                </li>
                <li className="page_item">
                    <Link>next</Link>
                </li>
            </ul>
        </nav>
      </Fragment>
    );
  };

  export default Pagination