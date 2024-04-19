//import { login } from '../js/api/auth/login.js'

jest.mock('fetch')
jest.mock('../js/storage/index.js', () => ({
  save: jest.fn(),
}))

describe('login', () => {
  beforeEach(() => {
    jest.clearAllMocks() // Clear mocks between tests
  })

  it('stores the token and profile in storage on successful login', async () => {
    const email = 'testmail@dummy.com'
    const password = 'helloworld'

    fetch.mockResolvedValueOnce(
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            accessToken: '123456789',
            // Other profile data
          }),
      })
    )

    //const profile = await login(email, password);

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: headers('application/json'),
    })

    expect(save).toHaveBeenCalledTimes(2)
    expect(save).toHaveBeenCalledWith('token', '123456789')
    expect(save).toHaveBeenCalledWith('profile')
  })
})
