

import React, { Component } from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con GetGif fetch', () => {
    test('debe de traer 10 elementos ', async () => {

        const gifResponse = await getGifs('Jiraiya');

        expect(gifResponse.length).toBe(10)
    })

    test('debe de traer 0 elementos ', async () => {

        const gifResponse = await getGifs('');


        expect(gifResponse.length).toBe(0)
    })


})

