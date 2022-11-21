import { describe, expect, it } from 'vitest'

// suite teste para verificação do funcionamento da lib
// será removido em breve, com adição dos primeiros testes da aplicação.

const sum = (a: number, b: number) => a + b

describe('teste de exemplo', () => {
  describe('dado o método "sum"', () => {
    it('deve somar números inteiros', () => {
      expect(sum(1, 2)).toEqual(3)
    })
    it('deve somar números fracionados', () => {
      expect(sum(6 / 2, 2.2)).toEqual(5.2)
    })
    it('deve somar números fracionados 2 ', () => {
      expect(sum(0.1, 0.2)).toEqual(0.3)
    })
  })
})
