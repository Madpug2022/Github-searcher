import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Repositories from '../Repositories'

interface Repository {
    id: string
    name: string;
    description: string | null;
    url: string;
}


describe('Repositories', () => {
    const testFilter: string = 'MovieHub'
    const testRepositories: Repository[] = [
        {
            id: 'Testing',
            name: 'MovieHub',
            description: 'None',
            url: 'TestingUrl'
        },
        {
            id: 'Testing2',
            name: 'RickAndMorty',
            description: 'None',
            url: 'TestingUrl'
        }
    ]

    beforeEach(() => {
        render(
            <Repositories filter={testFilter} repositories={testRepositories} />
        )
    })

    test('Render components with filter', () => {
        const element = screen.getByTestId('repository-card');
        expect(element).toBeDefined();
    })

    test('Filter correctly displays matching repositories', () => {
        expect(screen.getAllByTestId('MovieHub')).toBeDefined();
        expect(screen.queryByTestId('RickAndMorty')).toBeNull();
    })

})
