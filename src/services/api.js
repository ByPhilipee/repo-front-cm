const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitContactForm(payload) {
  await wait(1200);

  if (!payload?.name || !payload?.email || !payload?.message) {
    throw new Error('Preencha nome, e-mail e mensagem para continuar.');
  }

  return {
    ok: true,
    message: 'Mensagem enviada com sucesso. Retornaremos em até 24 horas úteis.',
  };
}

