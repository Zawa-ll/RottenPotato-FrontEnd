import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input autoFocus
                {...rest}
                //value={value}
                //onChange={onChange}
                //type={type}
                name={name}
                id={name}
                class="form-control"
            />
            {error && <div className='alert alert-danger'>{error}</div>}
            {/* <input autoFocus value={this.state.account.username} onChange={this.handleChange} ref={this.username} id="username" type="text" class="form-control" /> */}
        </div>
    );
}

export default Input;