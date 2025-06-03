import { render, screen } from '@testing-library/react';
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem />', () => {
    const title = 'Saitama God Level';
    const url = 'https://i.pinimg.com/originals/51/8c/9c/518c9c767f65fdfc0dd09e4995d8b89e.gif';

    test('debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url }/> );
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url }/> );
        //screen.debug(); // Muestra la prueba realizada en consola
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe mostrar el título en el componente', () => {
        render( <GifItem title={ title } url={ url }/> );
        expect( screen.getByText( title )).toBeTruthy(); // Verifica que el título se muestre correctamente
    });
});