export const somenteNumeros = (valor: string) => valor.replace(/\D/g, '')

export const validarNome = (nome: string) => {
  const nomeLimpo = nome.trim()
  return nomeLimpo.length >= 6 && nomeLimpo.includes(' ')
}

export const validarTelefone = (telefone: string) => {
  return somenteNumeros(telefone).length === 11
}

export const validarEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const filtrarNome = (valor: string) => valor.replace(/[0-9]/g, '')
