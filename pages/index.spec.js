import { mount } from '@vue/test-utils'
import indexPage from './index.vue'

describe('Index Page', () => {
  let component
  beforeEach(() => {
    component = mount(indexPage, {
      stubs: ['nuxt-link'],
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    })
  })
  test('Index Page title', () => {
    expect(component.find('h1').text()).toBe('Movie Finder')
  })

  test('submit button should initially be disabled', () => {
    const submitBtn = component.find('button')
    expect(submitBtn.attributes().disabled).toBe('disabled')
    submitBtn.trigger('click')
    expect(component.vm.$router.push).not.toHaveBeenCalled()
  })

  test('submit button should be enabled if input is populated', async () => {
    const movieTitle = 'Lord of the Rigns'
    const submitBtn = component.find('button')
    const searchInput = component.find('input[type=search]')

    searchInput.setValue(movieTitle)
    await component.vm.$nextTick()

    expect(submitBtn.attributes().disabled).not.toBe('disabled')
    submitBtn.trigger('click')
    expect(component.vm.$router.push).toHaveBeenCalledWith({
      path: '/results/',
      query: { searchTerm: movieTitle },
    })
  })
})
