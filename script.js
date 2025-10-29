// script.js
document.addEventListener('DOMContentLoaded', function(){
  // pré-preenchimento de max date para data de nascimento (ex: não permitir nascimento futuro)
  var dataNasc = document.getElementById('dataNasc');
  if(dataNasc){
    var hoje = new Date().toISOString().split('T')[0];
    dataNasc.max = hoje;
  }

  // inserir ano no footer de index
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Máscaras básicas (CPF, telefone, CEP)
  function setMask(input, maskFunc){
    input.addEventListener('input', function(e){
      var pos = input.selectionStart;
      var before = input.value;
      input.value = maskFunc(input.value);
      // tenta manter cursor (não perfeito em todos os casos)
      if(pos) input.selectionStart = input.selectionEnd = pos;
    });
  }

  var cpf = document.getElementById('cpf');
  if(cpf){
    setMask(cpf, function(v){
      v = v.replace(/\D/g,'').slice(0,11);
      v = v.replace(/^(\d{3})(\d)/,'$1.$2');
      v = v.replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
      v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4');
      return v;
    });
  }

  var telefone = document.getElementById('telefone');
  if(telefone){
    setMask(telefone, function(v){
      v = v.replace(/\D/g,'').slice(0,11);
      v = v.replace(/^(\d{2})(\d)/,'($1) $2');
      v = v.replace(/(\d{5})(\d)/,'$1-$2');
      return v;
    });
  }

  var cep = document.getElementById('cep');
  if(cep){
    setMask(cep, function(v){
      v = v.replace(/\D/g,'').slice(0,8);
      v = v.replace(/^(\d{5})(\d)/,'$1-$2');
      return v;
    });
  }

  // Validação de formulário: mensagens amigáveis usando Constraint Validation API
  var form = document.getElementById('cadastroForm');
  if(form){
    form.addEventListener('submit', function(e){
      // HTML5 nativo fará validação; podemos melhorar mensagens
      if(!form.checkValidity()){
        e.preventDefault();
        // encontra primeiro campo inválido e foca
        var inv = form.querySelector(':invalid');
        if(inv){
          inv.focus();
          // mensagem resumida (aria-live poderia ser usada)
          alert('Por favor, corrija os campos em destaque antes de enviar.');
        }
        return false;
      }

      // se passou, podemos simular envio (a ação real deve apontar para backend)
      e.preventDefault();
      alert('Cadastro enviado com sucesso (simulação). Em produção enviaria ao servidor.');
      form.reset();
    });
  }

  // Melhorias de acessibilidade: destaca foco persistente
  document.addEventListener('keydown', function(e){
    if(e.key === 'Tab') document.documentElement.classList.add('user-is-tabbing');
  });
});
