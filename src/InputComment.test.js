import React from 'react';
import {render} from '@testing-library/react';
import InputComment from "./components/InputComment";

test('Tests InputComment', () => {
    const {getByText, getByLabelText} = render(<InputComment/>);

    const email = getByLabelText("E-mail");
    expect(email).toBeInTheDocument();
});
