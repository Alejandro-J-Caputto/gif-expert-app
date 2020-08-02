import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs')


describe('prueba en el GifGrid', () => {
    const categorie = 'One Punch'
    test('snapshot inicial', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid categorie={categorie} />);

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa',
            title: 'Cualquier Cosa'
        }, {
            id: 'ABCasda',
            url: 'https://localhost/cualquier/cosa',
            title: 'Cualquier Cosa'
        }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });



        const wrapper = shallow(<GifGrid categorie={categorie} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });




})
