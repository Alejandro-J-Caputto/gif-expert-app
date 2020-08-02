import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';


const setcategorias = jest.fn();
let wrapper = shallow(<AddCategory setcategorias={setcategorias} />);

beforeEach(() => {
    jest.clearAllMocks(wrapper = shallow(<AddCategory setcategorias={setcategorias} />));
})
describe('Pruebas en AddCategory', () => {
    //FUNCION FAKE PARA SIMULAR
    ///
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de cambiar la caja de texto ', () => {
        const testImput = wrapper.find('input');
        const value = 'Hola Mundo'

        testImput.simulate('change', {
            target: {
                value
            }
        });

    })

    test('No debe de postear la informacion obSubtmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });


        expect(setcategorias).not.toHaveBeenCalled()

    })

    test('Debe de llamar el SetCategories y limpiar la caja de texto', () => {
        const testImput = wrapper.find('input');
        const value = 'Hola Mundo'
        testImput.simulate('change', {

            target: { value }
        });
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setcategorias).toHaveBeenCalled()
        expect(setcategorias).toBeCalledTimes(1);
        expect(setcategorias).toHaveBeenCalledWith(expect.any(Function));


        expect(wrapper.find('input').prop('value')).toBe("")
    })


})
