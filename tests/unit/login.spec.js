import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'
import sinon from 'sinon'
import { Auth } from '@/services/Auth'

describe('Login.vue', () => {
  it('Muestra error si login falla', async () => {
    const login = { 
      message: 'wrong user or password',
      status: 401
    }
    sinon.stub(Auth, 'login').rejects(login)
    const wrapper = shallowMount(Login)
    wrapper.setData({
      credential: {
        email: 'user@mystore.com',
        password: 'password'
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).to.include('Usuario o Contraseña incorrectos, Intente nuevamente.')
  }) 
})
