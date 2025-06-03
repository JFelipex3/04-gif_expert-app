import { render } from '@testing-library/react';
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem />', () => {
    const title = 'Saitama God Level';
    const url = 'https://i.pinimg.com/originals/51/8c/9c/518c9c767f65fdfc0dd09e4995d8b89e.gif';

    test('debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url }/> );
        expect( container ).toMatchSnapshot();
    });
});