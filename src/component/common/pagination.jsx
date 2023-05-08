import React, { Component } from 'react';
import _ from 'lodash'

const Pagination = (props) => {
    const { itemsCount, onPageChange, pagesCount, currentPage } = props;

    if (itemsCount === 0) {
        return null;
    }
    else {
        const pages = _.range(1, pagesCount + 1);
        return (
            <nav aria-label="...">
                <ul className='pagination'>
                    {pages.map(page => (
                        <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                            <div className="page-link" onClick={() => onPageChange(page)}>
                                {page}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>

        );
    }
}

export default Pagination;