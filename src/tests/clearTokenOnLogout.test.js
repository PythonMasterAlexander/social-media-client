import * as storage from '../js/storage/index.js'
import { logout } from '../js/api/auth/logout.js'

jest.mock('../js/storage/index.js', () => ({
  remove: jest.fn(),
}))

describe('logout', () => {
  it('removes the token from storage and calls API', async () => {
    logout()

    expect(storage.remove).toHaveBeenCalledTimes(2)
    expect(storage.remove).toHaveBeenCalledWith('token')
  })
})
