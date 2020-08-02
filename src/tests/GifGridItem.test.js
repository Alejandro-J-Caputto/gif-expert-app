import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

const testTitle = 'Un titulo';
const testUrl = 'https://localhost/algo.jpg';
const wrapper = shallow(<GifGridItem title={testTitle} url={testUrl} />);



describe('Prueba del componente GifGridItem', () => {


    test('should display the gifGridComponent', () => {
        expect(wrapper).toMatchSnapshot()

    })

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(testTitle);
    })

    test('debe tener una img con el src y el alt', () => {
        const img = wrapper.find('img');

        // console.log(img.props())

        expect(img.prop('src')).toBe(testUrl);
        expect(img.prop('alt')).toBe(testTitle);

    })

    test('should contain the class animate_fadeIn', () => {
        const theClass = 'animate__fadeIn'
        const miDiv = wrapper.find('div');
        const className = miDiv.prop('className');
        expect(className.includes(theClass)).toBe(true)
    })








})
