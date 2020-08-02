import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../components/GifExpertApp'

describe('Pruebas en componente principal gifExpertApp', () => {
    const wrapper = shallow(<GifExpertApp />)
    test('Probar snapShot de GifexpertApp', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid')).toMatchSnapshot(categories.length);

    })


})
