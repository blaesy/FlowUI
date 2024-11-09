import React from 'react';
import Button from '../Button';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe("Button", () => {
    it("Contains correct class name depending on variant", () => {
        const { container } = render(<Button variant='primary' />)
        const { container: containerSecondary } = render(<Button variant='secondary'/>)

        expect(container.firstChild).toHaveClass('primary');
        expect(containerSecondary.firstChild).toHaveClass('secondary');

    })

})