import { describe, expect, test } from 'vitest'
import fetchData from '../../api/fetchData'

describe('ResultPage', () => {

    const testQuery = `query {
        user(login: "MadPug2022") {
          login
          name
          avatarUrl
          url
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories(first: 20) {
            nodes {
                id
              name
              description
              url
            }
          }
        }
      }`


    test('Api fetch testing', () => {
        const element = fetchData(testQuery)
        expect(element).toBeTruthy()
    })

})
