import http from 'http'
import io from 'socket.io'
import { IoService } from '@src/socket/io'
import { Namespace } from '@src/socket/namespace'

jest.mock('socket.io')
jest.mock('@src/socket/namespace')

const ioServerMock = (io.Server as unknown) as jest.Mock

describe('IoService', () => {
  describe('init', () => {
    it('should create new io server', () => {
      const httpServer = {} as http.Server
      IoService.init(httpServer)
      expect(ioServerMock).toHaveBeenCalledWith(httpServer)
    })
  })

  describe('initNamespace', () => {
    it('should init namespace if it does not exist', () => {
      ioServerMock.mockReturnValue({
        _nsps: { has: jest.fn().mockReturnValue(false) },
        of: jest.fn().mockReturnValue('namespace'),
      })
      IoService.init({} as http.Server)
      IoService.initNamespace('name')
      expect(Namespace).toHaveBeenCalledWith('namespace')
    })

    it('should not init namespace if it already exists', () => {
      ioServerMock.mockReturnValue({ _nsps: { has: jest.fn().mockReturnValue(true) } })
      IoService.init({} as http.Server)
      IoService.initNamespace('name')
      expect(Namespace).not.toHaveBeenCalled()
    })
  })
})
