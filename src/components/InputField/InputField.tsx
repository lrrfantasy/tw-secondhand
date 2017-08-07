import * as React from 'react';

interface InputFieldProps {
    placeholder: string;
    isPasswordField?: boolean;
    onChange?: (e) => void;
}

const type = (props: InputFieldProps) => {
    return props.isPasswordField
        ? 'password'
        : 'text';
};

export default(props: InputFieldProps) => (
    <p>
        <input
            className="w3-input"
            type={type(props)}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </p>
);
